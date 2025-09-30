'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Bath, ChefHat, Home, Building, Users, ArrowUp, DoorOpen, Shield, Wrench } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const AnfragePage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    projectType: '',
    specificService: '',
    budget: '',
    timeframe: '',
    propertyType: '',
    contactInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      message: ''
    }
  });

  const projectTypes = [
    { id: 'fliesenarbeiten-bad', label: 'Fliesenarbeiten im Bad', description: 'Komplette Fliesenverlegung in Badezimmern', icon: <Bath className="w-6 h-6 text-blue-600" /> },
    { id: 'fliesenarbeiten-kueche', label: 'Fliesenarbeiten in der Küche', description: 'Fliesenverlegung für Küchenrückwand und Boden', icon: <ChefHat className="w-6 h-6 text-blue-600" /> },
    { id: 'fliesenarbeiten-wohnraum', label: 'Fliesenarbeiten im Wohnraum', description: 'Fliesenverlegung in Wohn- und Schlafzimmern', icon: <Home className="w-6 h-6 text-blue-600" /> },
    { id: 'fliesenarbeiten-keller', label: 'Fliesenarbeiten im Keller', description: 'Fliesenverlegung in Kellerräumen und Hobbyräumen', icon: <Building className="w-6 h-6 text-blue-600" /> },
    { id: 'barrierefreie-badumbauten', label: 'Barrierefreie Badumbauten', description: 'Komplette Badumbauten für mehr Sicherheit und Komfort', icon: <Users className="w-6 h-6 text-blue-600" /> },
    { id: 'treppenlifte-rampen', label: 'Treppenlifte & Rampen', description: 'Installation für barrierefreien Zugang', icon: <ArrowUp className="w-6 h-6 text-blue-600" /> },
    { id: 'tuerverbreiterungen', label: 'Türverbreiterungen', description: 'Verbreiterung von Türöffnungen', icon: <DoorOpen className="w-6 h-6 text-blue-600" /> },
    { id: 'sicherheitstechnik', label: 'Sicherheitstechnik', description: 'Haltegriffe, Handläufe und Sicherheitssysteme', icon: <Shield className="w-6 h-6 text-blue-600" /> },
    { id: 'andere', label: 'Andere Leistung', description: 'Sonstige barrierefreie Baumaßnahmen', icon: <Wrench className="w-6 h-6 text-blue-600" /> }
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
    { id: 'sofort', label: 'Sofort' },
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

  const nextStep = () => {
    if (currentStep < 6) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
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
                <label key={type.id} className="flex items-start space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="projectType"
                    value={type.id}
                    checked={formData.projectType === type.id}
                    onChange={(e) => handleInputChange('projectType', e.target.value)}
                    className="mt-1"
                  />
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="mt-1">
                      {type.icon}
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{type.label}</div>
                      <div className="text-sm text-gray-600">{type.description}</div>
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
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Welches Budget haben Sie eingeplant?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {budgetRanges.map((budget) => (
                <label key={budget.id} className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="budget"
                    value={budget.id}
                    checked={formData.budget === budget.id}
                    onChange={(e) => handleInputChange('budget', e.target.value)}
                  />
                  <span className="font-medium text-gray-900">{budget.label}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Wann soll das Projekt starten?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {timeframes.map((timeframe) => (
                <label key={timeframe.id} className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="timeframe"
                    value={timeframe.id}
                    checked={formData.timeframe === timeframe.id}
                    onChange={(e) => handleInputChange('timeframe', e.target.value)}
                  />
                  <span className="font-medium text-gray-900">{timeframe.label}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Um welche Art von Objekt handelt es sich?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {propertyTypes.map((property) => (
                <label key={property.id} className="flex items-center space-x-3 p-4 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="propertyType"
                    value={property.id}
                    checked={formData.propertyType === property.id}
                    onChange={(e) => handleInputChange('propertyType', e.target.value)}
                  />
                  <span className="font-medium text-gray-900">{property.label}</span>
                </label>
              ))}
            </div>
          </div>
        );

      case 5:
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
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">E-Mail *</label>
                <input
                  type="email"
                  value={formData.contactInfo.email}
                  onChange={(e) => handleInputChange('contactInfo.email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                <input
                  type="tel"
                  value={formData.contactInfo.phone}
                  onChange={(e) => handleInputChange('contactInfo.phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Adresse des Objekts *</label>
                <input
                  type="text"
                  value={formData.contactInfo.address}
                  onChange={(e) => handleInputChange('contactInfo.address', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Zusätzliche Informationen</label>
                <textarea
                  value={formData.contactInfo.message}
                  onChange={(e) => handleInputChange('contactInfo.message', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Beschreiben Sie Ihr Projekt genauer..."
                />
              </div>
            </div>
          </div>
        );

      case 6:
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
                <span className="font-medium text-gray-700">Budget:</span>
                <span className="ml-2 text-gray-900">
                  {budgetRanges.find(b => b.id === formData.budget)?.label}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Zeitrahmen:</span>
                <span className="ml-2 text-gray-900">
                  {timeframes.find(t => t.id === formData.timeframe)?.label}
                </span>
              </div>
              <div>
                <span className="font-medium text-gray-700">Objekttyp:</span>
                <span className="ml-2 text-gray-900">
                  {propertyTypes.find(p => p.id === formData.propertyType)?.label}
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
                  {Math.round((currentStep / 6) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-blue-600 h-3 rounded-full transition-all duration-300 ease-in-out"
                  style={{ width: `${(currentStep / 6) * 100}%` }}
                ></div>
              </div>
            </div>
            {renderStep()}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
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
              {currentStep === 1 ? 'Zur Startseite' : 'Zurück'}
            </Link>

            {currentStep < 6 ? (
              <button
                type="button"
                onClick={nextStep}
                disabled={
                  (currentStep === 1 && !formData.projectType) ||
                  (currentStep === 2 && !formData.budget) ||
                  (currentStep === 3 && !formData.timeframe) ||
                  (currentStep === 4 && !formData.propertyType) ||
                  (currentStep === 5 && (!formData.contactInfo.name || !formData.contactInfo.email || !formData.contactInfo.address))
                }
                className="flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 hover:cursor-pointer disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
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
        </form>
      </div>
    </div>
  );
};

export default AnfragePage;
