# Environment Variables Setup

## 📋 Lokale Entwicklung (.env.local)

Erstellen Sie eine `.env.local` Datei im Root-Verzeichnis des Projekts mit folgendem Inhalt:

```env
# Google Analytics ID
NEXT_PUBLIC_GA_ID=G-S0CHERQPCK

# Microsoft Clarity ID
NEXT_PUBLIC_CLARITY_ID=udoice912q
```

### Erstellung der Datei:

1. Öffnen Sie das Root-Verzeichnis des Projekts
2. Erstellen Sie eine neue Datei namens `.env.local`
3. Kopieren Sie den obigen Inhalt hinein
4. Speichern Sie die Datei

**Wichtig**: Die `.env.local` Datei ist bereits in `.gitignore` und wird nicht ins Repository gepusht.

## 🔒 Sicherheitsprüfung

### ✅ Sicherheitsstatus:

1. **Environment Variables**: 
   - ✅ Werden über `process.env` geladen
   - ✅ Haben Fallback-Werte (nur für Entwicklung)
   - ✅ `.env*` Dateien sind in `.gitignore`

2. **Analytics IDs**:
   - ✅ Sind öffentliche Client-Side IDs (normal für Analytics)
   - ✅ Werden nur nach Cookie-Consent geladen
   - ✅ Keine sensiblen API-Keys

3. **FormSubmit**:
   - ✅ E-Mail-Adresse ist öffentlich (normal für FormSubmit)
   - ✅ Keine API-Keys erforderlich

4. **Keine gefundenen Sicherheitsprobleme**:
   - ✅ Keine hardcodierten Passwörter
   - ✅ Keine API-Secrets im Code
   - ✅ Keine Datenbank-Credentials
   - ✅ Alle sensiblen Daten über Environment Variables

## 📝 Vercel Setup

Siehe `VERCEL_ENV_SETUP.md` für detaillierte Anleitung zur Einrichtung auf Vercel.

