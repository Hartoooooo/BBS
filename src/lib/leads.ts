// Legt jede Website-Anfrage zusätzlich im Firmendashboard ab (Supabase-Funktion bbs-lead).
// Läuft parallel zu formsubmit und blockiert das Formular nie: Fehler werden nur geloggt.

const LEAD_ENDPOINT = 'https://csshjhxwjgcdkemznrcq.supabase.co/functions/v1/bbs-lead';

export type LeadPayload = {
  source: 'kontakt' | 'anfrage';
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  objectType?: string;
  budget?: string;
  timeframe?: string;
  location?: string;
  message?: string;
  /** Honigtopf-Feld, bleibt bei echten Nutzern leer */
  website?: string;
};

export async function saveLead(payload: LeadPayload): Promise<void> {
  try {
    await fetch(LEAD_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
      signal: AbortSignal.timeout(6000),
    });
  } catch (error) {
    console.warn('Anfrage konnte nicht im Dashboard gespeichert werden:', error);
  }

  // GA4-Ereignis (nur aktiv, wenn der Nutzer Analyse-Cookies erlaubt hat)
  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;
  gtag?.('event', 'generate_lead', { lead_source: payload.source, project_type: payload.projectType ?? '' });
}
