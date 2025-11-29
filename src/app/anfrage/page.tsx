'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Bath, Home, Building, Shield, Wrench, HelpCircle, Layers, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const AnfragePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isStepVisible, setIsStepVisible] = useState(true);
  const [formData, setFormData] = useState({
    projectType: '',
    specificService: '',
    budget: '',
    timeframe: '',
    propertyType: [] as string[],
    buildingType: 'neubau' as 'altbau' | 'neubau',
    location: '',
    contactInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      message: ''
    }
  });

  const steps = [
    { id: 1, title: 'Projekttyp', shortTitle: 'Projekt' },
    { id: 2, title: 'Objekttyp', shortTitle: 'Objekt' },
    { id: 3, title: 'Zeitrahmen', shortTitle: 'Zeit' },
    { id: 4, title: 'Budget', shortTitle: 'Budget' },
    { id: 5, title: 'Kontakt', shortTitle: 'Kontakt' },
    { id: 6, title: 'Übersicht', shortTitle: 'Fertig' }
  ];

  const projectTypes = [
    { id: 'barrierefreies-bad', label: 'Barrierefreies Bad', icon: <Bath className="w-6 h-6" /> },
    { id: 'trockenbau', label: 'Trockenbau', icon: <Building className="w-6 h-6" /> },
    { id: 'holz-bautenschutz', label: 'Holz & Bautenschutz', icon: <Home className="w-6 h-6" /> },
    { id: 'bauwerksabdichtung', label: 'Bauwerksabdichtung', icon: <Shield className="w-6 h-6" /> },
    { id: 'bodenbelagsarbeiten', label: 'Bodenbelagsarbeiten', icon: <Layers className="w-6 h-6" /> },
    { id: 'wasserschadensanierung', label: 'Wasserschadensanierung', icon: <Wrench className="w-6 h-6" /> },
    { id: 'andere', label: 'Andere Leistung', icon: <HelpCircle className="w-6 h-6" /> }
  ];

  const budgetRanges = [
    { id: 'bis-5000', label: 'bis 5.000 €' },
    { id: '5000-10000', label: '5.000 - 10.000 €' },
    { id: '10000-20000', label: '10.000 - 20.000 €' },
    { id: '20000-50000', label: '20.000 - 50.000 €' },
    { id: 'ueber-50000', label: 'über 50.000 €' },
    { id: 'noch-unsicher', label: 'Noch unsicher' }
  ];

  const timeframes = [
    { id: '1-3-monate', label: '1-3 Monate' },
    { id: '3-6-monate', label: '3-6 Monate' },
    { id: '6-12-monate', label: '6-12 Monate' },
    { id: 'flexibel', label: 'Flexibel' }
  ];

  const propertyTypes = [
    { id: 'eigentumswohnung', label: 'Eigentumswohnung' },
    { id: 'mietwohnung', label: 'Mietwohnung' },
    { id: 'einfamilienhaus', label: 'Einfamilienhaus' },
    { id: 'mehrfamilienhaus', label: 'Mehrfamilienhaus' },
    { id: 'gewerbe', label: 'Gewerbeobjekt' }
  ];

  const handleInputChange = (field: string, value: string) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof typeof prev] as object),
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handlePropertyTypeChange = (propertyId: string, isChecked: boolean) => {
    setFormData(prev => ({
      ...prev,
      propertyType: isChecked 
        ? [...prev.propertyType, propertyId]
        : prev.propertyType.filter(id => id !== propertyId)
    }));
  };

  const nextStep = () => {
    if (currentStep < 6) {
      setIsStepVisible(false);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsStepVisible(true);
      }, 300);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setIsStepVisible(false);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsStepVisible(true);
      }, 300);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // FormData für FormSubmit erstellen
    const formDataToSend = new FormData();
    formDataToSend.append('_captcha', 'false');
    formDataToSend.append('_next', '/');
    formDataToSend.append('_subject', 'Neue Projektanfrage von ' + formData.contactInfo.name);
    
    // Formulardaten hinzufügen
    formDataToSend.append('Projekttyp', projectTypes.find(t => t.id === formData.projectType)?.label || '');
    formDataToSend.append('Objekttyp', formData.propertyType.map(id => propertyTypes.find(p => p.id === id)?.label).join(', ') || '');
    formDataToSend.append('Gebäudeart', formData.buildingType === 'altbau' ? 'Altbau' : 'Neubau');
    formDataToSend.append('Zeitrahmen', timeframes.find(t => t.id === formData.timeframe)?.label || '');
    formDataToSend.append('Budget', budgetRanges.find(b => b.id === formData.budget)?.label || '');
    formDataToSend.append('Name', formData.contactInfo.name);
    formDataToSend.append('E-Mail', formData.contactInfo.email);
    formDataToSend.append('Telefon', formData.contactInfo.phone || '');
    formDataToSend.append('Adresse', formData.contactInfo.address);
    formDataToSend.append('Nachricht', formData.contactInfo.message || '');
    
    // An FormSubmit senden
    try {
      const response = await fetch('https://formsubmit.co/hartmanntimon@gmail.com', {
        method: 'POST',
        body: formDataToSend
      });
      
      if (response.ok) {
        alert('Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.');
        // Optional: Formular zurücksetzen oder zur Startseite weiterleiten
      } else {
        alert('Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.');
      }
    } catch (error) {
      console.error('Fehler beim Senden:', error);
      alert('Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.');
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return !!formData.projectType;
      case 2: return formData.propertyType.length > 0;
      case 3: return !!formData.timeframe;
      case 4: return !!formData.budget;
      case 5: return !!(formData.contactInfo.name && formData.contactInfo.email && formData.contactInfo.address);
      default: return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welche Art von Projekt planen Sie?</h2>
              <p className="text-gray-600">Wählen Sie die passende Dienstleistung aus</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectTypes.map((type) => (
                <label 
                  key={type.id} 
                  className={`group relative flex flex-col items-center justify-center p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                    formData.projectType === type.id 
                      ? 'bg-red-50 border-red-500 shadow-lg scale-105' 
                      : 'bg-white border-gray-200 hover:border-red-300 hover:shadow-md'
                  }`}
                >
                  <input
                    type="radio"
                    name="projectType"
                    value={type.id}
                    checked={formData.projectType === type.id}
                    onChange={(e) => handleInputChange('projectType', e.target.value)}
                    className="sr-only"
                  />
                  <div className={`mb-3 transition-colors duration-300 ${
                    formData.projectType === type.id ? 'text-red-500' : 'text-gray-400 group-hover:text-red-400'
                  }`}>
                    {type.icon}
                  </div>
                  <div className={`font-semibold text-center transition-colors duration-300 ${
                    formData.projectType === type.id ? 'text-gray-900' : 'text-gray-700'
                  }`}>
                    {type.label}
                  </div>
                  {formData.projectType === type.id && (
                    <div className="absolute top-2 right-2">
                      <CheckCircle2 className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </label>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Um welche Art von Objekt handelt es sich?</h2>
              <p className="text-gray-600">Geben Sie Details zu Ihrem Objekt an</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-center">
                <div className="relative inline-flex border-2 border-gray-200 rounded-xl p-1 bg-gray-50 w-full max-w-md">
                  <div
                    className={`absolute top-1 bottom-1 bg-red-500 rounded-lg transition-all duration-300 ease-in-out ${
                      formData.buildingType === 'neubau' ? 'left-1/2 right-1' : 'left-1 right-1/2'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => handleInputChange('buildingType', 'altbau')}
                    className={`relative z-10 flex-1 py-3 px-4 text-base font-semibold rounded-lg transition-colors duration-300 ${
                      formData.buildingType === 'altbau' ? 'text-white' : 'text-gray-700'
                    }`}
                  >
                    Altbau
                  </button>
                  <button
                    type="button"
                    onClick={() => handleInputChange('buildingType', 'neubau')}
                    className={`relative z-10 flex-1 py-3 px-4 text-base font-semibold rounded-lg transition-colors duration-300 ${
                      formData.buildingType === 'neubau' ? 'text-white' : 'text-gray-700'
                    }`}
                  >
                    Neubau
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {propertyTypes.map((property) => (
                  <label 
                    key={property.id} 
                    className={`group relative flex items-center justify-between p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                      formData.propertyType.includes(property.id) 
                        ? 'bg-red-50 border-red-500 shadow-md' 
                        : 'bg-white border-gray-200 hover:border-red-300'
                    }`}
                  >
                    <input
                      type="checkbox"
                      name="propertyType"
                      value={property.id}
                      checked={formData.propertyType.includes(property.id)}
                      onChange={(e) => handlePropertyTypeChange(property.id, e.target.checked)}
                      className="sr-only"
                    />
                    <span className={`font-medium transition-colors duration-300 ${
                      formData.propertyType.includes(property.id) ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {property.label}
                    </span>
                    {formData.propertyType.includes(property.id) && (
                      <CheckCircle2 className="w-5 h-5 text-red-500" />
                    )}
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Wann soll das Projekt starten?</h2>
              <p className="text-gray-600">Wählen Sie Ihren bevorzugten Zeitrahmen</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {timeframes.map((timeframe) => (
                <label 
                  key={timeframe.id} 
                  className={`group relative flex items-center justify-center p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                    formData.timeframe === timeframe.id 
                      ? 'bg-red-50 border-red-500 shadow-lg scale-105' 
                      : 'bg-white border-gray-200 hover:border-red-300 hover:shadow-md'
                  }`}
                >
                  <input
                    type="radio"
                    name="timeframe"
                    value={timeframe.id}
                    checked={formData.timeframe === timeframe.id}
                    onChange={(e) => handleInputChange('timeframe', e.target.value)}
                    className="sr-only"
                  />
                  <span className={`font-semibold transition-colors duration-300 ${
                    formData.timeframe === timeframe.id ? 'text-gray-900' : 'text-gray-700'
                  }`}>
                    {timeframe.label}
                  </span>
                  {formData.timeframe === timeframe.id && (
                    <div className="absolute top-2 right-2">
                      <CheckCircle2 className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </label>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Welches Budget haben Sie eingeplant?</h2>
              <p className="text-gray-600">Helfen Sie uns, das passende Angebot zu erstellen</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {budgetRanges.map((budget) => (
                <label 
                  key={budget.id} 
                  className={`group relative flex items-center justify-center p-6 border-2 rounded-xl cursor-pointer transition-all duration-300 ${
                    formData.budget === budget.id 
                      ? 'bg-red-50 border-red-500 shadow-lg scale-105' 
                      : 'bg-white border-gray-200 hover:border-red-300 hover:shadow-md'
                  }`}
                >
                  <input
                    type="radio"
                    name="budget"
                    value={budget.id}
                    checked={formData.budget === budget.id}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                    className="sr-only"
                  />
                  <span className={`font-semibold transition-colors duration-300 ${
                    formData.budget === budget.id ? 'text-gray-900' : 'text-gray-700'
                  }`}>
                    {budget.label}
                  </span>
                  {formData.budget === budget.id && (
                    <div className="absolute top-2 right-2">
                      <CheckCircle2 className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                </label>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Ihre Kontaktdaten</h2>
              <p className="text-gray-600">Wie können wir Sie erreichen?</p>
            </div>
            <div className="max-w-2xl mx-auto space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  value={formData.contactInfo.name}
                  onChange={(e) => handleInputChange('contactInfo.name', e.target.value)}
                  placeholder="z.B. Max Mustermann"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 transition-all duration-300 placeholder-gray-400"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">E-Mail *</label>
                  <input
                    type="email"
                    value={formData.contactInfo.email}
                    onChange={(e) => handleInputChange('contactInfo.email', e.target.value)}
                    placeholder="z.B. max.mustermann@beispiel.de"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 transition-all duration-300 placeholder-gray-400"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Telefon</label>
                  <input
                    type="tel"
                    value={formData.contactInfo.phone}
                    onChange={(e) => handleInputChange('contactInfo.phone', e.target.value)}
                    placeholder="z.B. +49 30 12345678"
                    className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 transition-all duration-300 placeholder-gray-400"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Adresse des Objekts *</label>
                <input
                  type="text"
                  value={formData.contactInfo.address}
                  onChange={(e) => handleInputChange('contactInfo.address', e.target.value)}
                  placeholder="z.B. Musterstraße 123, 12345 Berlin"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 transition-all duration-300 placeholder-gray-400"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Zusätzliche Informationen</label>
                <textarea
                  value={formData.contactInfo.message}
                  onChange={(e) => handleInputChange('contactInfo.message', e.target.value)}
                  rows={5}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 text-gray-900 transition-all duration-300 resize-none placeholder-gray-400"
                  placeholder="Beschreiben Sie Ihr Projekt genauer..."
                />
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Zusammenfassung Ihrer Anfrage</h2>
              <p className="text-gray-600">Bitte überprüfen Sie Ihre Angaben</p>
            </div>
            <div className="max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border-2 border-gray-200 shadow-lg space-y-4">
              <div className="flex justify-between items-start py-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">Projekttyp:</span>
                <span className="text-gray-900 text-right font-medium">
                  {projectTypes.find(t => t.id === formData.projectType)?.label || '-'}
                </span>
              </div>
              <div className="flex justify-between items-start py-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">Objekttyp:</span>
                <span className="text-gray-900 text-right font-medium">
                  {formData.propertyType.map(id => propertyTypes.find(p => p.id === id)?.label).join(', ') || '-'}
                </span>
              </div>
              <div className="flex justify-between items-start py-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">Gebäudeart:</span>
                <span className="text-gray-900 text-right font-medium">
                  {formData.buildingType === 'altbau' ? 'Altbau' : 'Neubau'}
                </span>
              </div>
              <div className="flex justify-between items-start py-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">Zeitrahmen:</span>
                <span className="text-gray-900 text-right font-medium">
                  {timeframes.find(t => t.id === formData.timeframe)?.label || '-'}
                </span>
              </div>
              <div className="flex justify-between items-start py-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">Budget:</span>
                <span className="text-gray-900 text-right font-medium">
                  {budgetRanges.find(b => b.id === formData.budget)?.label || '-'}
                </span>
              </div>
              <div className="flex justify-between items-start py-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">Name:</span>
                <span className="text-gray-900 text-right font-medium">{formData.contactInfo.name}</span>
              </div>
              <div className="flex justify-between items-start py-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">E-Mail:</span>
                <span className="text-gray-900 text-right font-medium">{formData.contactInfo.email}</span>
              </div>
              {formData.contactInfo.phone && (
                <div className="flex justify-between items-start py-3 border-b border-gray-200">
                  <span className="font-semibold text-gray-700">Telefon:</span>
                  <span className="text-gray-900 text-right font-medium">{formData.contactInfo.phone}</span>
                </div>
              )}
              <div className="flex justify-between items-start py-3 border-b border-gray-200">
                <span className="font-semibold text-gray-700">Adresse:</span>
                <span className="text-gray-900 text-right font-medium">{formData.contactInfo.address}</span>
              </div>
              {formData.contactInfo.message && (
                <div className="pt-3">
                  <span className="font-semibold text-gray-700 block mb-2">Nachricht:</span>
                  <p className="text-gray-900 bg-white p-4 rounded-lg border border-gray-200">{formData.contactInfo.message}</p>
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Anfragebild.webp"
          alt="Barrierefreies Bauen Hintergrund"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/60"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <form onSubmit={handleSubmit}>
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
            {/* Modern Stepper Header */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-6 py-8">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-white">Projektanfrage</h1>
                <div className="text-white/80 text-sm font-medium">
                  Schritt {currentStep} von {steps.length}
                </div>
              </div>
              
              {/* Step Indicators */}
              <div className="flex items-center justify-between">
                {steps.map((step, index) => {
                  const isCompleted = currentStep > step.id;
                  const isActive = currentStep === step.id;
                  
                  return (
                    <div key={step.id} className="flex items-center flex-1">
                      <div className="flex flex-col items-center flex-1 relative">
                        <div className="flex items-center w-full relative">
                          {/* Step Circle */}
                          <div className={`relative flex items-center justify-center w-6 h-6 md:w-10 md:h-10 rounded-full border-2 transition-all duration-300 z-10 ${
                            isCompleted 
                              ? 'bg-red-500 border-red-500' 
                              : isActive 
                                ? 'bg-red-500 border-red-500 ring-2 md:ring-4 ring-red-500/20' 
                                : 'bg-gray-700 border-gray-600'
                          }`}>
                            {isCompleted ? (
                              <Check className="w-3 h-3 md:w-5 md:h-5 text-white" />
                            ) : (
                              <span className={`text-xs md:text-sm font-bold ${
                                isActive ? 'text-white' : 'text-gray-400'
                              }`}>
                                {step.id}
                              </span>
                            )}
                          </div>
                          
                          {/* Connector Line with Title */}
                          {index < steps.length - 1 && (
                            <div className="flex-1 relative mx-1 md:mx-2">
                              <div className={`h-0.5 transition-all duration-300 ${
                                isCompleted ? 'bg-red-500' : 'bg-gray-600'
                              }`} />
                              {/* Title on Line - shows current step's title (only on desktop) */}
                              <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 px-2">
                                <div className={`text-xs font-medium transition-colors duration-300 whitespace-nowrap ${
                                  isCompleted ? 'text-red-400' : isActive ? 'text-white' : 'text-gray-500'
                                }`}>
                                  {step.title}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step Content */}
            <div className="p-8 md:p-12">
              <div 
                className={`transition-all duration-300 ease-out ${
                  isStepVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
              >
                {renderStep()}
              </div>
              
              {/* Navigation Buttons */}
              <div 
                className={`flex justify-between items-center gap-4 mt-10 pt-8 border-t border-gray-200 transition-all duration-300 delay-100 ${
                  isStepVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4'
                }`}
              >
                {currentStep === 1 ? (
                  <Link 
                    href="/"
                    className="flex items-center px-6 py-3 rounded-xl font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all duration-300 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    <span className="md:hidden">Startseite</span>
                    <span className="hidden md:inline">Zur Startseite</span>
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center px-6 py-3 rounded-xl font-semibold bg-gray-200 text-gray-700 hover:bg-gray-300 transition-all duration-300 cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Zurück
                  </button>
                )}

                {currentStep < 6 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className="flex items-center px-8 py-3 rounded-xl font-semibold bg-red-500 text-white hover:bg-red-600 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:hover:scale-100 cursor-pointer"
                  >
                    Weiter
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="flex items-center px-8 py-3 rounded-xl font-semibold bg-green-600 text-white hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
                  >
                    Anfrage absenden
                    <Check className="w-4 h-4 ml-2" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AnfragePage;
