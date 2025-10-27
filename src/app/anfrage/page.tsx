'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Bath, Home, Building, Users, Shield, Wrench, HelpCircle, Layers } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import StickyAnfrageButton from '@/components/ui/StickyAnfrageButton';

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

  const projectTypes = [
    { id: 'fliesenarbeiten-bad', label: 'Fliesenarbeiten im Bad', icon: <Bath className="w-6 h-6 text-red-500" /> },
    { id: 'fliesenarbeiten-wohnraum', label: 'Fliesenarbeiten Wohnraum', icon: <Home className="w-6 h-6 text-red-500" /> },
    { id: 'barrierefreies-bad', label: 'Barrierefreies Bad', icon: <Bath className="w-6 h-6 text-red-500" /> },
    { id: 'trockenbau', label: 'Trockenbau', icon: <Building className="w-6 h-6 text-red-500" /> },
    { id: 'holz-bautenschutz', label: 'Holz & Bautenschutz', icon: <Home className="w-6 h-6 text-red-500" /> },
    { id: 'bauwerksabdichtung', label: 'Bauwerksabdichtung', icon: <Shield className="w-6 h-6 text-red-500" /> },
    { id: 'bodenbelagsarbeiten', label: 'Bodenbelagsarbeiten', icon: <Layers className="w-6 h-6 text-red-500" /> },
    { id: 'wasserschaden', label: 'Wasserschaden', icon: <Wrench className="w-6 h-6 text-red-500" /> },
    { id: 'andere', label: 'Andere Leistung', icon: <HelpCircle className="w-6 h-6 text-red-500" /> }
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
    if (currentStep < 7) {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Hier würde die Formularübermittlung erfolgen
    console.log('Formular abgesendet:', formData);
    alert('Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Welche Art von Projekt planen Sie?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projectTypes.map((type) => (
                <label 
                  key={type.id} 
                  className={`flex items-start space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-300 ease-out ${
                    formData.projectType === type.id ? 'bg-red-50 border-red-300 -translate-y-1 shadow-md' : ''
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
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="mt-1">
                      {type.icon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{type.label}</div>
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Um welche Art von Objekt handelt es sich?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Toggle Switch Altbau/Neubau */}
              <div className="md:col-span-2 flex justify-center mb-4">
                <div className="relative inline-flex border border-gray-300 rounded-lg p-1 w-full max-w-md">
                  {/* Animierter roter Container */}
                  <div
                    className={`absolute top-1 bottom-1 bg-red-100 border border-red-300 rounded-lg transition-all duration-300 ease-in-out ${
                      formData.buildingType === 'neubau' ? 'left-1/2 right-1' : 'left-1 right-1/2'
                    }`}
                  />
                  
                  {/* Altbau Button */}
                  <button
                    type="button"
                    onClick={() => handleInputChange('buildingType', 'altbau')}
                    className={`relative z-10 flex-1 py-3 text-base font-medium rounded-lg transition-colors duration-300 ${
                      formData.buildingType === 'altbau' ? 'text-gray-900' : 'text-gray-700'
                    }`}
                  >
                    Altbau
                  </button>
                  
                  {/* Neubau Button */}
                  <button
                    type="button"
                    onClick={() => handleInputChange('buildingType', 'neubau')}
                    className={`relative z-10 flex-1 py-3 text-base font-medium rounded-lg transition-colors duration-300 ${
                      formData.buildingType === 'neubau' ? 'text-gray-900' : 'text-gray-700'
                    }`}
                  >
                    Neubau
                  </button>
                </div>
              </div>
              {propertyTypes.map((property) => (
                <label 
                  key={property.id} 
                  className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-300 ease-out ${
                    formData.propertyType.includes(property.id) ? 'bg-red-50 border-red-300 -translate-y-1 shadow-md' : ''
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
                  <span className="font-medium text-gray-900">{property.label}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Wo befindet sich das Objekt?</h2>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Standort *</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                placeholder="z.B. Berlin, Schöneiche, Neuenhagen..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-gray-900"
                required
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Wann soll das Projekt starten?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {timeframes.map((timeframe) => (
                <label 
                  key={timeframe.id} 
                  className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-300 ease-out ${
                    formData.timeframe === timeframe.id ? 'bg-red-50 border-red-300 -translate-y-1 shadow-md' : ''
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
                  <span className="font-medium text-gray-900">{timeframe.label}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Welches Budget haben Sie eingeplant?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {budgetRanges.map((budget) => (
                <label 
                  key={budget.id} 
                  className={`flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-all duration-300 ease-out ${
                    formData.budget === budget.id ? 'bg-red-50 border-red-300 -translate-y-1 shadow-md' : ''
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
                  <span className="font-medium text-gray-900">{budget.label}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 6:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ihre Kontaktdaten</h2>
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                <input
                  type="text"
                  value={formData.contactInfo.name}
                  onChange={(e) => handleInputChange('contactInfo.name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail *</label>
                  <input
                    type="email"
                    value={formData.contactInfo.email}
                    onChange={(e) => handleInputChange('contactInfo.email', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                  <input
                    type="tel"
                    value={formData.contactInfo.phone}
                    onChange={(e) => handleInputChange('contactInfo.phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Adresse des Objekts *</label>
                <input
                  type="text"
                  value={formData.contactInfo.address}
                  onChange={(e) => handleInputChange('contactInfo.address', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Zusätzliche Informationen</label>
                <textarea
                  value={formData.contactInfo.message}
                  onChange={(e) => handleInputChange('contactInfo.message', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Beschreiben Sie Ihr Projekt genauer..."
                />
              </div>
            </div>
          </div>
        );

      case 7:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Zusammenfassung Ihrer Anfrage</h2>
            <div className="bg-gray-50 p-6 rounded-lg space-y-4">
              <div>
                <span className="font-medium text-gray-700">Projekttyp:</span>
                <span className="ml-2 text-gray-900">
                  {projectTypes.find(t => t.id === formData.projectType)?.label}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Objekttyp:</span>
                <span className="ml-2 text-gray-900">
                  {formData.propertyType.map(id => propertyTypes.find(p => p.id === id)?.label).join(', ')}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Gebäudeart:</span>
                <span className="ml-2 text-gray-900">
                  {formData.buildingType === 'altbau' ? 'Altbau' : 'Neubau'}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Standort:</span>
                <span className="ml-2 text-gray-900">
                  {formData.location}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Zeitrahmen:</span>
                <span className="ml-2 text-gray-900">
                  {timeframes.find(t => t.id === formData.timeframe)?.label}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Budget:</span>
                <span className="ml-2 text-gray-900">
                  {budgetRanges.find(b => b.id === formData.budget)?.label}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Name:</span>
                <span className="ml-2 text-gray-900">{formData.contactInfo.name}</span>
              </div>
              <div>
                <span className="font-medium text-gray-700">E-Mail:</span>
                <span className="ml-2 text-gray-900">{formData.contactInfo.email}</span>
              </div>
              {formData.contactInfo.phone && (
                <div>
                  <span className="font-medium text-gray-700">Telefon:</span>
                  <span className="ml-2 text-gray-900">{formData.contactInfo.phone}</span>
                </div>
              )}
              <div>
                <span className="font-medium text-gray-700">Adresse:</span>
                <span className="ml-2 text-gray-900">{formData.contactInfo.address}</span>
              </div>
              {formData.contactInfo.message && (
                <div>
                  <span className="font-medium text-gray-700">Nachricht:</span>
                  <p className="ml-2 text-gray-900 mt-1">{formData.contactInfo.message}</p>
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
    <div className="min-h-screen bg-gray-50 relative">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/Anfragebild.webp"
          alt="Barrierefreies Bauen Hintergrund"
          fill
          className="object-cover opacity-95"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <form onSubmit={handleSubmit}>
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-sm p-8">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <span className="text-lg font-semibold text-gray-900">
                  {Math.round((currentStep / 7) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-red-500 h-3 rounded-full transition-all duration-300 ease-in-out"
                  style={{ width: `${(currentStep / 7) * 100}%` }}
                ></div>
              </div>
            </div>
            <div 
              className={`transition-all duration-500 ease-out ${
                isStepVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              {renderStep()}
            </div>
            
            {/* Navigation Buttons */}
            <div 
              className={`flex justify-center items-center gap-4 mt-8 transition-all duration-500 ease-out delay-100 ${
                isStepVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-4'
              }`}
            >
              <Link 
                href="/"
                className={`flex items-center px-6 py-3 rounded-lg font-medium ${
                  currentStep === 1
                    ? 'bg-gray-600 text-white hover:bg-gray-700'
                    : 'bg-gray-600 text-white hover:bg-gray-700'
                }`}
                onClick={currentStep === 1 ? undefined : (e) => {
                  e.preventDefault();
                  prevStep();
                }}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                {currentStep === 1 ? (
                  <>
                    <span className="md:hidden">Startseite</span>
                    <span className="hidden md:inline">Zur Startseite</span>
                  </>
                ) : (
                  'Zurück'
                )}
              </Link>

              {currentStep < 7 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={
                    (currentStep === 1 && !formData.projectType) ||
                    (currentStep === 2 && formData.propertyType.length === 0) ||
                    (currentStep === 3 && !formData.location) ||
                    (currentStep === 4 && !formData.timeframe) ||
                    (currentStep === 5 && !formData.budget) ||
                    (currentStep === 6 && (!formData.contactInfo.name || !formData.contactInfo.email || !formData.contactInfo.address))
                  }
                  className="flex items-center px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 hover:cursor-pointer disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
                >
                  Weiter
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 hover:cursor-pointer"
                >
                  Anfrage absenden
                  <Check className="w-4 h-4 ml-2" />
                </button>
              )}
            </div>
          </div>
        </form>
      </div>
      <StickyAnfrageButton />
    </div>
  );
};

export default AnfragePage;
