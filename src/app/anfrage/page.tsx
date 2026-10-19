'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  Bath,
  Building,
  Check,
  CheckCircle2,
  Clock,
  HelpCircle,
  Home,
  Layers,
  Mail,
  MapPin,
  Phone,
  Shield,
} from 'lucide-react';

const steps = [
  { id: 1, title: 'Projekt', hint: 'Leistung wählen' },
  { id: 2, title: 'Objekt', hint: 'Gebäude klären' },
  { id: 3, title: 'Zeit', hint: 'Startfenster' },
  { id: 4, title: 'Budget', hint: 'Rahmen' },
  { id: 5, title: 'Kontakt', hint: 'Rückrufdaten' },
  { id: 6, title: 'Übersicht', hint: 'Absenden' },
];

const projectTypes = [
  { id: 'barrierefreies-bad', label: 'Barrierefreies Bad', icon: Bath },
  { id: 'badewanne-zur-dusche', label: 'Badewanne zur Dusche', icon: Bath },
  { id: 'badsanierung', label: 'Badsanierung', icon: Bath },
  { id: 'barrierefreier-umbau', label: 'Türen & Schwellen', icon: Home },
  { id: 'trockenbau', label: 'Trockenbau', icon: Building },
  { id: 'holz-bautenschutz', label: 'Holz & Bautenschutz', icon: Home },
  { id: 'bauwerksabdichtung', label: 'Bauwerksabdichtung', icon: Shield },
  { id: 'bodenbelagsarbeiten', label: 'Bodenbelagsarbeiten', icon: Layers },
  { id: 'andere', label: 'Andere Leistung', icon: HelpCircle },
];

const budgetRanges = [
  { id: 'bis-5000', label: 'bis 5.000 €' },
  { id: '5000-10000', label: '5.000 - 10.000 €' },
  { id: '10000-20000', label: '10.000 - 20.000 €' },
  { id: '20000-50000', label: '20.000 - 50.000 €' },
  { id: 'ueber-50000', label: 'über 50.000 €' },
  { id: 'noch-unsicher', label: 'Noch unsicher' },
];

const timeframes = [
  { id: '1-3-monate', label: '1-3 Monate' },
  { id: '3-6-monate', label: '3-6 Monate' },
  { id: '6-12-monate', label: '6-12 Monate' },
  { id: 'flexibel', label: 'Flexibel' },
];

const propertyTypes = [
  { id: 'eigentumswohnung', label: 'Eigentumswohnung' },
  { id: 'mietwohnung', label: 'Mietwohnung' },
  { id: 'einfamilienhaus', label: 'Einfamilienhaus' },
  { id: 'mehrfamilienhaus', label: 'Mehrfamilienhaus' },
  { id: 'gewerbe', label: 'Gewerbeobjekt' },
];

const fieldClass =
  'w-full rounded-2xl border border-ink/12 bg-white px-4 py-4 text-ink placeholder:text-ink/60 transition focus:border-brand focus:ring-4 focus:ring-brand/12';

const AnfragePage = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isStepVisible, setIsStepVisible] = useState(true);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'sending' | 'error'>('idle');
  const stepHeadingRef = useRef<HTMLHeadingElement>(null);
  const hasNavigated = useRef(false);

  // Nach jedem Schrittwechsel den Fokus auf die neue Überschrift setzen
  useEffect(() => {
    if (!hasNavigated.current) return;
    stepHeadingRef.current?.focus();
  }, [currentStep]);
  const [formData, setFormData] = useState({
    projectType: '',
    budget: '',
    timeframe: '',
    propertyType: [] as string[],
    buildingType: 'neubau' as 'altbau' | 'neubau',
    contactInfo: {
      name: '',
      email: '',
      phone: '',
      address: '',
      message: '',
    },
  });

  const selectedProject = projectTypes.find((type) => type.id === formData.projectType);
  const selectedTime = timeframes.find((timeframe) => timeframe.id === formData.timeframe);
  const selectedBudget = budgetRanges.find((budget) => budget.id === formData.budget);
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  const handleInputChange = (field: string, value: string) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...(prev[parent as keyof typeof prev] as object),
          [child]: value,
        },
      }));
      return;
    }

    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handlePropertyTypeChange = (propertyId: string, isChecked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      propertyType: isChecked
        ? [...prev.propertyType, propertyId]
        : prev.propertyType.filter((id) => id !== propertyId),
    }));
  };

  const moveToStep = (step: number) => {
    hasNavigated.current = true;
    setIsStepVisible(false);
    setTimeout(() => {
      setCurrentStep(step);
      setIsStepVisible(true);
    }, 220);
  };

  const nextStep = () => {
    if (currentStep < steps.length) moveToStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) moveToStep(currentStep - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return !!formData.projectType;
      case 2:
        return formData.propertyType.length > 0;
      case 3:
        return !!formData.timeframe;
      case 4:
        return !!formData.budget;
      case 5:
        return !!(formData.contactInfo.name && formData.contactInfo.email && formData.contactInfo.address);
      default:
        return true;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setSubmitStatus('sending');

    const formDataToSend = new FormData();
    formDataToSend.append('_captcha', 'false');
    formDataToSend.append('_next', '/');
    formDataToSend.append('_subject', `Neue Projektanfrage von ${formData.contactInfo.name}`);
    formDataToSend.append('Projekttyp', selectedProject?.label || '');
    formDataToSend.append(
      'Objekttyp',
      formData.propertyType.map((id) => propertyTypes.find((property) => property.id === id)?.label).join(', ') || '',
    );
    formDataToSend.append('Gebäudeart', formData.buildingType === 'altbau' ? 'Altbau' : 'Neubau');
    formDataToSend.append('Zeitrahmen', selectedTime?.label || '');
    formDataToSend.append('Budget', selectedBudget?.label || '');
    formDataToSend.append('Name', formData.contactInfo.name);
    formDataToSend.append('E-Mail', formData.contactInfo.email);
    formDataToSend.append('Telefon', formData.contactInfo.phone || '');
    formDataToSend.append('Adresse', formData.contactInfo.address);
    formDataToSend.append('Nachricht', formData.contactInfo.message || '');

    try {
      const response = await fetch('https://formsubmit.co/hartmanntimon@gmail.com', {
        method: 'POST',
        body: formDataToSend,
      });

      if (!response.ok) throw new Error('Form submit failed');
      router.push('/anfrage/danke');
    } catch (error) {
      console.error('Fehler beim Senden:', error);
      setSubmitStatus('error');
    }
  };

  const optionClass = (active: boolean) =>
    `group relative flex has-[:focus-visible]:outline has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-brand min-h-20 cursor-pointer items-center gap-3 rounded-2xl border p-3 text-left transition sm:min-h-24 sm:gap-4 sm:rounded-3xl sm:p-5 lg:min-h-16 lg:gap-3 lg:rounded-2xl lg:p-4 ${
      active
        ? 'border-brand bg-brand text-white shadow-[0_18px_44px_rgba(214,61,50,0.22)]'
        : 'border-ink/10 bg-white/76 text-ink hover:-translate-y-1 hover:border-brand/45 hover:bg-white'
    }`;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <StepHeader headingRef={stepHeadingRef} title="Was soll BBS für Sie bauen?" copy="Wählen Sie die Leistung. Eine grobe Auswahl reicht für den Start." />
            <div role="radiogroup" aria-labelledby="step-title" className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {projectTypes.map((type) => {
                const Icon = type.icon;
                const active = formData.projectType === type.id;
                return (
                  <label key={type.id} className={optionClass(active)}>
                    <input
                      type="radio"
                      name="projectType"
                      value={type.id}
                      checked={active}
                      onChange={(event) => handleInputChange('projectType', event.target.value)}
                      className="sr-only"
                    />
                    <span className={`rounded-2xl p-2.5 sm:p-3 lg:p-2.5 ${active ? 'bg-white/16' : 'bg-mint'}`}>
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6 lg:h-5 lg:w-5" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1 break-words pr-5 text-sm font-black leading-tight hyphens-auto sm:text-lg lg:text-[0.95rem]">{type.label}</span>
                    {active && <CheckCircle2 className="absolute right-4 top-4 h-5 w-5 lg:h-4 lg:w-4" aria-hidden="true" />}
                  </label>
                );
              })}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <StepHeader headingRef={stepHeadingRef} title="Wo findet der Umbau statt?" copy="Objektart und Gebäudezustand helfen bei Beratung und Materialplanung." />
            <p id="building-label" className="mb-2 text-sm font-black text-ink">Gebäudeart</p>
            <div role="group" aria-labelledby="building-label" className="mb-6 grid grid-cols-2 gap-2 rounded-3xl bg-ink p-2">
              {(['altbau', 'neubau'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  aria-pressed={formData.buildingType === type}
                  onClick={() => handleInputChange('buildingType', type)}
                  className={`min-h-12 rounded-2xl px-3 text-sm font-black transition sm:min-h-14 sm:px-4 sm:text-base ${
                    formData.buildingType === type ? 'bg-white text-ink' : 'text-white/85 hover:text-white'
                  }`}
                >
                  {type === 'altbau' ? 'Altbau' : 'Neubau'}
                </button>
              ))}
            </div>
            <p id="property-label" className="mb-2 text-sm font-black text-ink">Objektart (mehrere möglich)</p>
            <div role="group" aria-labelledby="property-label" className="grid gap-3 sm:grid-cols-2">
              {propertyTypes.map((property) => {
                const active = formData.propertyType.includes(property.id);
                return (
                  <label key={property.id} className={optionClass(active)}>
                    <input
                      type="checkbox"
                      name="propertyType"
                      value={property.id}
                      checked={active}
                      onChange={(event) => handlePropertyTypeChange(property.id, event.target.checked)}
                      className="sr-only"
                    />
                    <span className={`flex h-9 w-9 items-center justify-center rounded-2xl border sm:h-11 sm:w-11 lg:h-9 lg:w-9 ${active ? 'border-white/35' : 'border-ink/14'}`}>
                      {active && <Check className="h-4 w-4 sm:h-5 sm:w-5 lg:h-4 lg:w-4" aria-hidden="true" />}
                    </span>
                    <span className="min-w-0 flex-1 break-words text-sm font-black leading-tight hyphens-auto sm:text-lg lg:text-[0.95rem]">{property.label}</span>
                  </label>
                );
              })}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <StepHeader headingRef={stepHeadingRef} title="Wann soll es losgehen?" copy="Ungefähres Startfenster genügt. Flexible Projekte sind willkommen." />
            <div role="radiogroup" aria-labelledby="step-title" className="grid gap-3 sm:grid-cols-2">
              {timeframes.map((timeframe) => {
                const active = formData.timeframe === timeframe.id;
                return (
                  <label key={timeframe.id} className={optionClass(active)}>
                    <input
                      type="radio"
                      name="timeframe"
                      value={timeframe.id}
                      checked={active}
                      onChange={(event) => handleInputChange('timeframe', event.target.value)}
                      className="sr-only"
                    />
                    <Clock className="h-5 w-5 sm:h-6 sm:w-6 lg:h-5 lg:w-5" aria-hidden="true" />
                    <span className="min-w-0 flex-1 break-words pr-5 text-base font-black leading-tight hyphens-auto sm:text-xl lg:text-[0.95rem]">{timeframe.label}</span>
                    {active && <CheckCircle2 className="absolute right-4 top-4 h-5 w-5 lg:h-4 lg:w-4" aria-hidden="true" />}
                  </label>
                );
              })}
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <StepHeader headingRef={stepHeadingRef} title="Welcher Budgetrahmen passt?" copy="Der Rahmen hilft, realistische Varianten vorzuschlagen." />
            <div role="radiogroup" aria-labelledby="step-title" className="grid gap-3 sm:grid-cols-2">
              {budgetRanges.map((budget) => {
                const active = formData.budget === budget.id;
                return (
                  <label key={budget.id} className={optionClass(active)}>
                    <input
                      type="radio"
                      name="budget"
                      value={budget.id}
                      checked={active}
                      onChange={(event) => handleInputChange('budget', event.target.value)}
                      className="sr-only"
                    />
                    <span className="min-w-0 flex-1 break-words pr-5 text-base font-black leading-tight hyphens-auto sm:text-xl lg:text-[0.95rem]">{budget.label}</span>
                    {active && <CheckCircle2 className="absolute right-4 top-4 h-5 w-5 lg:h-4 lg:w-4" aria-hidden="true" />}
                  </label>
                );
              })}
            </div>
          </div>
        );

      case 5:
        return (
          <div>
            <StepHeader headingRef={stepHeadingRef} title="Wie erreichen wir Sie?" copy="Name, E-Mail und Objektadresse reichen für Rückmeldung und erste Einschätzung. Mit * markierte Felder sind Pflichtfelder." />
            <div className="grid gap-4">
              <div>
                <label htmlFor="anfrage-name" className="mb-2 block text-sm font-black text-ink">Name *</label>
                <input
                  type="text"
                  value={formData.contactInfo.name}
                  id="anfrage-name"
                  autoComplete="name"
                  onChange={(event) => handleInputChange('contactInfo.name', event.target.value)}
                  placeholder="Max Mustermann"
                  className={fieldClass}
                  required
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="anfrage-email" className="mb-2 block text-sm font-black text-ink">E-Mail *</label>
                  <input
                    type="email"
                    value={formData.contactInfo.email}
                    id="anfrage-email"
                  autoComplete="email"
                  onChange={(event) => handleInputChange('contactInfo.email', event.target.value)}
                    placeholder="name@beispiel.de"
                    className={fieldClass}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="anfrage-phone" className="mb-2 block text-sm font-black text-ink">Telefon</label>
                  <input
                    type="tel"
                    value={formData.contactInfo.phone}
                    id="anfrage-phone"
                  autoComplete="tel"
                  onChange={(event) => handleInputChange('contactInfo.phone', event.target.value)}
                    placeholder="+49 30 12345678"
                    className={fieldClass}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="anfrage-address" className="mb-2 block text-sm font-black text-ink">Adresse des Objekts *</label>
                <input
                  type="text"
                  value={formData.contactInfo.address}
                  id="anfrage-address"
                  autoComplete="street-address"
                  onChange={(event) => handleInputChange('contactInfo.address', event.target.value)}
                  placeholder="Straße, PLZ, Ort"
                  className={fieldClass}
                  required
                />
              </div>
              <div>
                <label htmlFor="anfrage-message" className="mb-2 block text-sm font-black text-ink">Zusatzinfos</label>
                <textarea
                  value={formData.contactInfo.message}
                  id="anfrage-message"
                  onChange={(event) => handleInputChange('contactInfo.message', event.target.value)}
                  rows={5}
                  className={`${fieldClass} resize-y`}
                  placeholder="Was soll verändert, saniert oder geprüft werden?"
                />
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div>
            <StepHeader headingRef={stepHeadingRef} title="Passt alles?" copy="Prüfen Sie Ihre Angaben. Danach geht die Anfrage direkt an BBS." />
            <div className="grid gap-3">
              <SummaryRow label="Projekt" value={selectedProject?.label || '-'} />
              <SummaryRow
                label="Objekt"
                value={formData.propertyType.map((id) => propertyTypes.find((property) => property.id === id)?.label).join(', ') || '-'}
              />
              <SummaryRow label="Gebäudeart" value={formData.buildingType === 'altbau' ? 'Altbau' : 'Neubau'} />
              <SummaryRow label="Zeitrahmen" value={selectedTime?.label || '-'} />
              <SummaryRow label="Budget" value={selectedBudget?.label || '-'} />
              <SummaryRow label="Name" value={formData.contactInfo.name || '-'} />
              <SummaryRow label="E-Mail" value={formData.contactInfo.email || '-'} />
              {formData.contactInfo.phone && <SummaryRow label="Telefon" value={formData.contactInfo.phone} />}
              <SummaryRow label="Adresse" value={formData.contactInfo.address || '-'} />
              {formData.contactInfo.message && (
                <div className="rounded-3xl border border-ink/10 bg-white/76 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.13em] text-muted">Nachricht</p>
                  <p className="mt-2 leading-7 text-ink">{formData.contactInfo.message}</p>
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
    <main id="main" tabIndex={-1} className="min-h-screen">
      <section className="relative overflow-hidden pb-10 pt-5 lg:pb-16">
        <div className="absolute inset-0 z-0">
          <Image src="/Anfragebild.webp" alt="" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,248,246,0.88),rgba(247,248,246,0.58),rgba(247,248,246,0.18))]" />
        </div>

        <div className="section-shell relative z-10">
          <div className="relative flex items-center justify-between py-4">
            <Link href="/" className="relative z-10 inline-flex items-center gap-2 rounded-full bg-white/78 px-4 py-3 text-sm font-black text-ink backdrop-blur transition hover:bg-white">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Startseite
            </Link>
            <h1 className="relative z-10 ml-auto inline-flex items-center rounded-full bg-white/78 px-4 py-3 text-right text-sm font-black leading-none text-ink backdrop-blur sm:absolute sm:left-1/2 sm:top-1/2 sm:ml-0 sm:w-[min(58vw,720px)] sm:-translate-x-1/2 sm:-translate-y-1/2 sm:justify-center sm:bg-transparent sm:px-0 sm:py-0 sm:text-center sm:text-[clamp(1.35rem,4.2vw,3.3rem)] sm:leading-[0.95] sm:backdrop-blur-none">
              Projektanfrage
            </h1>
            <div className="relative z-10 hidden gap-4 text-sm font-black text-ink sm:flex">
              <a href="tel:+493092371277" className="inline-flex items-center gap-2 rounded-full bg-white/78 px-4 py-3 backdrop-blur">
                <Phone className="h-4 w-4 text-brand" aria-hidden="true" />
                Anrufen
              </a>
              <a href="mailto:service@b-b-s.berlin" className="inline-flex items-center gap-2 rounded-full bg-white/78 px-4 py-3 backdrop-blur">
                <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                E-Mail
              </a>
            </div>
          </div>

          <div className="py-6 lg:py-10" />

          <div className="grid gap-8 pb-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start lg:pb-16">
            <aside className="order-2 lg:sticky lg:top-8 lg:order-1">
              <div className="surface threshold-line rounded-[2rem] p-5">
                <div className="hidden lg:block">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-sm font-black uppercase tracking-[0.14em] text-muted">Fortschritt</span>
                    <span className="text-sm font-black text-ink">Schritt {currentStep}/{steps.length}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-ink/10">
                    <div className="h-full rounded-full bg-brand transition-all duration-500" style={{ width: `${progress}%` }} />
                  </div>
                </div>
                <div className="grid gap-2 lg:mt-5 lg:gap-1.5">
                  {steps.map((step) => (
                    <button
                      key={step.id}
                      type="button"
                      aria-current={currentStep === step.id ? 'step' : undefined}
                      aria-disabled={step.id > currentStep || undefined}
                      onClick={() => step.id < currentStep && moveToStep(step.id)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left transition lg:rounded-xl lg:px-3 lg:py-2.5 ${
                        currentStep === step.id
                          ? 'bg-ink text-white'
                          : step.id < currentStep
                            ? 'bg-white text-ink hover:bg-mint'
                            : 'text-ink/70'
                      }`}
                    >
                      <span>
                        <span className="block font-black lg:text-sm">{step.title}</span>
                        <span className="block text-xs font-bold opacity-85">{step.hint}</span>
                      </span>
                      {step.id < currentStep && <Check className="h-4 w-4" aria-hidden="true" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid gap-3 rounded-[2rem] bg-ink p-5 text-white">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 flex-none text-mint" aria-hidden="true" />
                  <span className="font-bold">Berlin & Brandenburg</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 flex-none text-mint" aria-hidden="true" />
                  <span className="font-bold">Direkter Rückruf möglich</span>
                </div>
              </div>
            </aside>

            <form onSubmit={handleSubmit} className="surface threshold-line order-1 rounded-[2rem] p-4 sm:p-7 lg:order-2 lg:p-9">
              <div className="mb-6 lg:hidden">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-[0.14em] text-muted">Fortschritt</span>
                  <span className="text-sm font-black text-ink">Schritt {currentStep}/{steps.length}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-ink/10">
                  <div className="h-full rounded-full bg-brand transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>
              </div>

              <div
                className={`min-h-[470px] transition-all duration-300 ${
                  isStepVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                {renderStep()}
              </div>

              {submitStatus === 'error' && (
                <p role="alert" className="mt-6 rounded-2xl border border-red-200 bg-red-50 p-4 font-bold text-red-900">
                  Ihre Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder rufen Sie uns an: +49 30 923 712 77.
                </p>
              )}

              <div
                className={`mt-8 flex items-center justify-between gap-3 border-t border-ink/10 pt-6 transition-all duration-300 ${
                  isStepVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                {currentStep === 1 ? (
                  <Link
                    href="/"
                    className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-full border border-ink/12 bg-white px-4 text-sm font-black text-ink transition hover:bg-mint sm:min-h-14 sm:gap-2 sm:px-5 sm:text-base"
                  >
                    <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                    Zurück
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-full border border-ink/12 bg-white px-4 text-sm font-black text-ink transition hover:bg-mint sm:min-h-14 sm:gap-2 sm:px-5 sm:text-base"
                  >
                    <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                    Zurück
                  </button>
                )}

                {currentStep < steps.length ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-full bg-brand px-5 text-sm font-black text-white shadow-[0_18px_44px_rgba(214,61,50,0.25)] transition hover:-translate-y-1 hover:bg-brand-strong disabled:cursor-not-allowed disabled:bg-muted disabled:shadow-none disabled:hover:translate-y-0 sm:min-h-14 sm:gap-2 sm:px-7 sm:text-base"
                  >
                    Weiter
                    <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={submitStatus === 'sending'}
                    className="inline-flex min-h-12 items-center justify-center gap-1.5 rounded-full bg-ink px-5 text-sm font-black text-white transition hover:-translate-y-1 sm:min-h-14 sm:gap-2 sm:px-7 sm:text-base"
                  >
                    {submitStatus === 'sending' ? 'Wird gesendet …' : 'Anfrage absenden'}
                    <Check className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

const StepHeader = ({ title, copy, headingRef }: { title: string; copy: string; headingRef: React.RefObject<HTMLHeadingElement | null> }) => (
  <div className="mb-7">
    <p className="text-sm font-black uppercase tracking-[0.14em] text-brand-strong">Anfrage</p>
    <h2 id="step-title" ref={headingRef} tabIndex={-1} className="mt-2 text-3xl font-black leading-tight text-ink focus:outline-none sm:text-5xl">{title}</h2>
    <p className="mt-3 max-w-2xl text-base leading-7 text-ink/80">{copy}</p>
  </div>
);

const SummaryRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-2 rounded-3xl border border-ink/10 bg-white/76 p-5 sm:flex-row sm:items-start sm:justify-between">
    <span className="text-sm font-black uppercase tracking-[0.13em] text-muted">{label}</span>
    <span className="max-w-lg text-left font-black text-ink sm:text-right">{value}</span>
  </div>
);

export default AnfragePage;
