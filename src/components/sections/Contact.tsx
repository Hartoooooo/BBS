'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle, Clock, Mail, MapPin, Phone, Send } from 'lucide-react';
import { useScrollAnimation } from '@/lib/useScrollAnimation';

const inputClass =
  'w-full rounded-2xl border border-[#172024]/12 bg-white px-4 py-4 text-[#172024] placeholder:text-[#172024]/36 transition focus:border-[#d63d32] focus:ring-4 focus:ring-[#d63d32]/12';

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    budget: '',
    message: '',
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('_captcha', 'false');
      formDataToSend.append('_next', window.location.origin + '/');
      formDataToSend.append('_subject', `Neue Kontaktanfrage von ${formData.firstName} ${formData.lastName}`);
      Object.entries(formData).forEach(([key, value]) => formDataToSend.append(key, value));

      const response = await fetch('https://formsubmit.co/hartmanntimon@gmail.com', {
        method: 'POST',
        body: formDataToSend,
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) throw new Error('Form submit failed');

      setSubmitStatus('success');
      setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', budget: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Fehler beim Senden:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="bg-white py-20 sm:py-28">
      <div
        ref={ref}
        className={`section-shell transition-all duration-700 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="mb-10 max-w-3xl">
          <p className="eyebrow">Kontakt</p>
          <h2 className="section-title mt-4">Projekt kurz schildern. Rückruf bekommen.</h2>
          <p className="body-copy mt-6">
            Schreiben Sie uns Ihr Anliegen. Für dringende Fragen erreichen Sie BBS direkt telefonisch.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="grid gap-4 lg:self-start">
            {[
              { icon: Phone, label: 'Telefon', value: '+49 (0) 30 923 712 77', href: 'tel:+493092371277' },
              { icon: Mail, label: 'E-Mail', value: 'service@b-b-s.berlin', href: 'mailto:service@b-b-s.berlin' },
              { icon: MapPin, label: 'Standort', value: 'Schöneiche bei Berlin' },
              { icon: Clock, label: 'Erreichbarkeit', value: 'Montag - Freitag, 7.00-16.00 Uhr' },
            ].map((item) => {
              const Icon = item.icon;
              const content = (
                <>
                  <Icon className="h-6 w-6 text-[#d63d32]" />
                  <span>
                    <span className="block text-sm font-black uppercase tracking-[0.13em] text-[#6f8f9a]">{item.label}</span>
                    <span className="mt-1 block text-lg font-black text-[#172024]">{item.value}</span>
                  </span>
                </>
              );

              return item.href ? (
                <a key={item.label} href={item.href} className="surface flex min-h-24 items-center gap-4 rounded-3xl p-5 transition hover:-translate-y-1">
                  {content}
                </a>
              ) : (
                <div key={item.label} className="surface flex min-h-24 items-center gap-4 rounded-3xl p-5">
                  {content}
                </div>
              );
            })}
          </aside>

          <form onSubmit={handleSubmit} className="surface threshold-line rounded-[2rem] p-5 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-2 block text-sm font-black text-[#172024]">Vorname *</label>
                <input id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} required className={inputClass} placeholder="Ihr Vorname" />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-2 block text-sm font-black text-[#172024]">Nachname *</label>
                <input id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} required className={inputClass} placeholder="Ihr Nachname" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-black text-[#172024]">E-Mail *</label>
                <input id="email" name="email" type="email" value={formData.email} onChange={handleInputChange} required className={inputClass} placeholder="name@beispiel.de" />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-black text-[#172024]">Telefon</label>
                <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInputChange} className={inputClass} placeholder="Ihre Telefonnummer" />
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-black text-[#172024]">Betreff *</label>
                <select id="subject" name="subject" value={formData.subject} onChange={handleInputChange} required className={inputClass}>
                  <option value="" disabled>Bitte wählen</option>
                  <option value="barrierefreies-bad">Barrierefreies Bad</option>
                  <option value="trockenbau">Trockenbau</option>
                  <option value="holz-bautenschutz">Holz & Bautenschutz</option>
                  <option value="bauwerksabdichtung">Bauwerksabdichtung</option>
                  <option value="bodenbelagsarbeiten">Bodenbelagsarbeiten</option>
                  <option value="wasserschadensanierung">Wasserschadensanierung</option>
                  <option value="beratung">Beratung</option>
                  <option value="sonstiges">Sonstiges</option>
                </select>
              </div>
              <div>
                <label htmlFor="budget" className="mb-2 block text-sm font-black text-[#172024]">Budget</label>
                <input id="budget" name="budget" value={formData.budget} onChange={handleInputChange} className={inputClass} placeholder="z.B. 3000 EUR" />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-black text-[#172024]">Nachricht *</label>
                <textarea id="message" name="message" rows={6} value={formData.message} onChange={handleInputChange} required className={`${inputClass} resize-y`} placeholder="Was soll umgebaut, saniert oder geprüft werden?" />
              </div>
            </div>

            {submitStatus === 'success' && (
              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-green-200 bg-green-50 p-4 text-green-900">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-none" />
                <p><strong>Nachricht gesendet.</strong> Wir melden uns schnellstmöglich bei Ihnen.</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="mt-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-900">
                <AlertCircle className="mt-0.5 h-5 w-5 flex-none" />
                <p><strong>Senden fehlgeschlagen.</strong> Bitte erneut versuchen oder direkt anrufen.</p>
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#172024] px-7 py-4 font-black text-white transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:bg-[#6f8f9a]"
            >
              {isSubmitting ? (
                <>
                  <span className="h-5 w-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                  Wird gesendet
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Nachricht senden
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
