'use client';

import { useState } from 'react';
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
  'w-full rounded-2xl border border-[#172024]/12 bg-white px-4 py-4 text-[#172024] placeholder:text-[#172024]/36 transition focus:border-[#d63d32] focus:ring-4 focus:ring-[#d63d32]/12';

const AnfragePage = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [isStepVisible, setIsStepVisible] = useState(true);
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
      alert('Vielen Dank für Ihre Anfrage! Wir melden uns schnellstmöglich bei Ihnen.');
      setTimeout(() => router.push('/'), 500);
    } catch (error) {
      console.error('Fehler beim Senden:', error);
      alert('Es gab einen Fehler beim Senden Ihrer Anfrage. Bitte versuchen Sie es erneut.');
    }
  };

  const optionClass = (active: boolean) =>
    `group relative flex min-h-24 cursor-pointer items-center gap-4 rounded-3xl border p-5 text-left transition lg:min-h-16 lg:gap-3 lg:rounded-2xl lg:p-4 ${
      active
        ? 'border-[#d63d32] bg-[#d63d32] text-white shadow-[0_18px_44px_rgba(214,61,50,0.22)]'
        : 'border-[#172024]/10 bg-white/76 text-[#172024] hover:-translate-y-1 hover:border-[#d63d32]/45 hover:bg-white'
    }`;

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <StepHeader title="Was soll BBS für Sie bauen?" copy="Wählen Sie die Leistung. Eine grobe Auswahl reicht für den Start." />
            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
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
                    <span className={`rounded-2xl p-3 lg:p-2.5 ${active ? 'bg-white/16' : 'bg-[#d8ebe6]'}`}>
                      <Icon className="h-6 w-6 lg:h-5 lg:w-5" />
                    </span>
                    <span className="min-w-0 flex-1 break-words text-lg font-black leading-tight hyphens-auto pr-5 lg:text-[15px]">{type.label}</span>
                    {active && <CheckCircle2 className="absolute right-4 top-4 h-5 w-5 lg:h-4 lg:w-4" />}
                  </label>
                );
              })}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <StepHeader title="Wo findet der Umbau statt?" copy="Objektart und Gebäudezustand helfen bei Beratung und Materialplanung." />
            <div className="mb-6 grid grid-cols-2 gap-2 rounded-3xl bg-[#172024] p-2">
              {(['altbau', 'neubau'] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleInputChange('buildingType', type)}
                  className={`min-h-14 rounded-2xl px-4 font-black transition ${
                    formData.buildingType === type ? 'bg-white text-[#172024]' : 'text-white/62 hover:text-white'
                  }`}
                >
                  {type === 'altbau' ? 'Altbau' : 'Neubau'}
                </button>
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
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
                    <span className={`flex h-11 w-11 items-center justify-center rounded-2xl border lg:h-9 lg:w-9 ${active ? 'border-white/35' : 'border-[#172024]/14'}`}>
                      {active && <Check className="h-5 w-5 lg:h-4 lg:w-4" />}
                    </span>
                    <span className="min-w-0 flex-1 break-words text-lg font-black leading-tight hyphens-auto lg:text-[15px]">{property.label}</span>
                  </label>
                );
              })}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <StepHeader title="Wann soll es losgehen?" copy="Ungefähres Startfenster genügt. Flexible Projekte sind willkommen." />
            <div className="grid gap-3 sm:grid-cols-2">
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
                    <Clock className="h-6 w-6 lg:h-5 lg:w-5" />
                    <span className="min-w-0 flex-1 break-words text-xl font-black leading-tight hyphens-auto pr-5 lg:text-[15px]">{timeframe.label}</span>
                    {active && <CheckCircle2 className="absolute right-4 top-4 h-5 w-5 lg:h-4 lg:w-4" />}
                  </label>
                );
              })}
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <StepHeader title="Welcher Budgetrahmen passt?" copy="Der Rahmen hilft, realistische Varianten vorzuschlagen." />
            <div className="grid gap-3 sm:grid-cols-2">
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
                    <span className="min-w-0 flex-1 break-words text-xl font-black leading-tight hyphens-auto pr-5 lg:text-[15px]">{budget.label}</span>
                    {active && <CheckCircle2 className="absolute right-4 top-4 h-5 w-5 lg:h-4 lg:w-4" />}
                  </label>
                );
              })}
            </div>
          </div>
        );

      case 5:
        return (
          <div>
            <StepHeader title="Wie erreichen wir Sie?" copy="Name, E-Mail und Objektadresse reichen für Rückmeldung und erste Einschätzung." />
            <div className="grid gap-4">
              <div>
                <label className="mb-2 block text-sm font-black text-[#172024]">Name *</label>
                <input
                  type="text"
                  value={formData.contactInfo.name}
                  onChange={(event) => handleInputChange('contactInfo.name', event.target.value)}
                  placeholder="Max Mustermann"
                  className={fieldClass}
                  required
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-black text-[#172024]">E-Mail *</label>
                  <input
                    type="email"
                    value={formData.contactInfo.email}
                    onChange={(event) => handleInputChange('contactInfo.email', event.target.value)}
                    placeholder="name@beispiel.de"
                    className={fieldClass}
                    required
                  />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-black text-[#172024]">Telefon</label>
                  <input
                    type="tel"
                    value={formData.contactInfo.phone}
                    onChange={(event) => handleInputChange('contactInfo.phone', event.target.value)}
                    placeholder="+49 30 12345678"
                    className={fieldClass}
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-black text-[#172024]">Adresse des Objekts *</label>
                <input
                  type="text"
                  value={formData.contactInfo.address}
                  onChange={(event) => handleInputChange('contactInfo.address', event.target.value)}
                  placeholder="Straße, PLZ, Ort"
                  className={fieldClass}
                  required
                />
              </div>
              <div>
                <label className="mb-2 block text-sm font-black text-[#172024]">Zusatzinfos</label>
                <textarea
                  value={formData.contactInfo.message}
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
            <StepHeader title="Passt alles?" copy="Prüfen Sie Ihre Angaben. Danach geht die Anfrage direkt an BBS." />
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
                <div className="rounded-3xl border border-[#172024]/10 bg-white/76 p-5">
                  <p className="text-sm font-black uppercase tracking-[0.13em] text-[#6f8f9a]">Nachricht</p>
                  <p className="mt-2 leading-7 text-[#172024]">{formData.contactInfo.message}</p>
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
    <main className="min-h-screen">
      <section className="relative overflow-hidden pb-10 pt-5 lg:pb-16">
        <div className="absolute inset-0 z-0">
          <Image src="/Anfragebild.webp" alt="Barrierefreier Umbau Anfrage" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,248,246,0.88),rgba(247,248,246,0.58),rgba(247,248,246,0.18))]" />
        </div>

        <div className="section-shell relative z-10">
          <div className="relative flex items-center justify-between py-4">
            <Link href="/" className="relative z-10 inline-flex items-center gap-2 rounded-full bg-white/78 px-4 py-3 text-sm font-black text-[#172024] backdrop-blur transition hover:bg-white">
              <ArrowLeft className="h-4 w-4" />
              Startseite
            </Link>
            <h1 className="absolute left-1/2 top-1/2 w-[min(58vw,720px)] -translate-x-1/2 -translate-y-1/2 text-center text-[clamp(1.35rem,4.2vw,3.3rem)] font-black leading-[0.95] tracking-normal text-[#172024]">
              Projektanfrage
            </h1>
            <div className="relative z-10 hidden gap-4 text-sm font-black text-[#172024] sm:flex">
              <a href="tel:+493092371277" className="inline-flex items-center gap-2 rounded-full bg-white/78 px-4 py-3 backdrop-blur">
                <Phone className="h-4 w-4 text-[#d63d32]" />
                Anrufen
              </a>
              <a href="mailto:service@b-b-s.berlin" className="inline-flex items-center gap-2 rounded-full bg-white/78 px-4 py-3 backdrop-blur">
                <Mail className="h-4 w-4 text-[#d63d32]" />
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
                    <span className="text-sm font-black uppercase tracking-[0.14em] text-[#6f8f9a]">Fortschritt</span>
                    <span className="text-sm font-black text-[#172024]">Schritt {currentStep}/{steps.length}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-[#172024]/10">
                    <div className="h-full rounded-full bg-[#d63d32] transition-all duration-500" style={{ width: `${progress}%` }} />
                  </div>
                </div>
                <div className="grid gap-2 lg:mt-5 lg:gap-1.5">
                  {steps.map((step) => (
                    <button
                      key={step.id}
                      type="button"
                      onClick={() => step.id < currentStep && moveToStep(step.id)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 text-left transition lg:rounded-xl lg:px-3 lg:py-2.5 ${
                        currentStep === step.id
                          ? 'bg-[#172024] text-white'
                          : step.id < currentStep
                            ? 'bg-white text-[#172024] hover:bg-[#d8ebe6]'
                            : 'text-[#172024]/45'
                      }`}
                    >
                      <span>
                        <span className="block font-black lg:text-sm">{step.title}</span>
                        <span className="block text-xs font-bold opacity-70 lg:text-[11px]">{step.hint}</span>
                      </span>
                      {step.id < currentStep && <Check className="h-4 w-4" />}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-4 grid gap-3 rounded-[2rem] bg-[#172024] p-5 text-white">
                <div className="flex gap-3">
                  <MapPin className="h-5 w-5 flex-none text-[#d8ebe6]" />
                  <span className="font-bold">Berlin & Brandenburg</span>
                </div>
                <div className="flex gap-3">
                  <Phone className="h-5 w-5 flex-none text-[#d8ebe6]" />
                  <span className="font-bold">Direkter Rückruf möglich</span>
                </div>
              </div>
            </aside>

            <form onSubmit={handleSubmit} className="surface threshold-line order-1 rounded-[2rem] p-4 sm:p-7 lg:order-2 lg:p-9">
              <div className="mb-6 lg:hidden">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-[0.14em] text-[#6f8f9a]">Fortschritt</span>
                  <span className="text-sm font-black text-[#172024]">Schritt {currentStep}/{steps.length}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-[#172024]/10">
                  <div className="h-full rounded-full bg-[#d63d32] transition-all duration-500" style={{ width: `${progress}%` }} />
                </div>
              </div>

              <div
                className={`min-h-[470px] transition-all duration-300 ${
                  isStepVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                {renderStep()}
              </div>

              <div
                className={`mt-8 flex items-center justify-between gap-3 border-t border-[#172024]/10 pt-6 transition-all duration-300 ${
                  isStepVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                {currentStep === 1 ? (
                  <Link
                    href="/"
                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#172024]/12 bg-white px-5 font-black text-[#172024] transition hover:bg-[#d8ebe6]"
                  >
                    <ArrowLeft className="h-5 w-5" />
                    Zurück
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-[#172024]/12 bg-white px-5 font-black text-[#172024] transition hover:bg-[#d8ebe6]"
                  >
                    <ArrowLeft className="h-5 w-5" />
                    Zurück
                  </button>
                )}

                {currentStep < steps.length ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#d63d32] px-7 font-black text-white shadow-[0_18px_44px_rgba(214,61,50,0.25)] transition hover:-translate-y-1 hover:bg-[#b93028] disabled:cursor-not-allowed disabled:bg-[#6f8f9a] disabled:shadow-none disabled:hover:translate-y-0"
                  >
                    Weiter
                    <ArrowRight className="h-5 w-5" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full bg-[#172024] px-7 font-black text-white transition hover:-translate-y-1"
                  >
                    Anfrage absenden
                    <Check className="h-5 w-5" />
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

const StepHeader = ({ title, copy }: { title: string; copy: string }) => (
  <div className="mb-7">
    <p className="text-sm font-black uppercase tracking-[0.14em] text-[#d63d32]">Anfrage</p>
    <h2 className="mt-2 text-3xl font-black leading-tight text-[#172024] sm:text-5xl">{title}</h2>
    <p className="mt-3 max-w-2xl text-base leading-7 text-[#172024]/68">{copy}</p>
  </div>
);

const SummaryRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-2 rounded-3xl border border-[#172024]/10 bg-white/76 p-5 sm:flex-row sm:items-start sm:justify-between">
    <span className="text-sm font-black uppercase tracking-[0.13em] text-[#6f8f9a]">{label}</span>
    <span className="max-w-lg text-left font-black text-[#172024] sm:text-right">{value}</span>
  </div>
);

export default AnfragePage;
