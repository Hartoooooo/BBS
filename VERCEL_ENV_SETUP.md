# Vercel Environment Variables Setup

## 📋 Übersicht

Diese Anleitung zeigt Ihnen, wie Sie die Environment Variables (Umgebungsvariablen) für Analytics auf Vercel einrichten.

## 🔐 Environment Variables

Die folgenden Variablen müssen auf Vercel konfiguriert werden:

- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `NEXT_PUBLIC_CLARITY_ID` - Microsoft Clarity ID

## 📝 Schritt-für-Schritt Anleitung

### Option 1: Über das Vercel Dashboard (Empfohlen)

1. **Melden Sie sich bei Vercel an**
   - Gehen Sie zu [vercel.com](https://vercel.com)
   - Loggen Sie sich mit Ihrem Account ein

2. **Wählen Sie Ihr Projekt aus**
   - Klicken Sie auf Ihr Projekt "BBS Webseite" oder ähnlich
   - Falls das Projekt noch nicht existiert, erstellen Sie es zuerst

3. **Gehen Sie zu Settings**
   - Klicken Sie auf den Tab **"Settings"** in der oberen Navigation
   - Scrollen Sie nach unten zu **"Environment Variables"**

4. **Fügen Sie die Variablen hinzu**

   **Variable 1: Google Analytics**
   - Klicken Sie auf **"Add New"**
   - **Key**: `NEXT_PUBLIC_GA_ID`
   - **Value**: `G-S0CHERQPCK`
   - **Environment**: Wählen Sie alle aus (Production, Preview, Development)
   - Klicken Sie auf **"Save"**

   **Variable 2: Microsoft Clarity**
   - Klicken Sie erneut auf **"Add New"**
   - **Key**: `NEXT_PUBLIC_CLARITY_ID`
   - **Value**: `udoice912q`
   - **Environment**: Wählen Sie alle aus (Production, Preview, Development)
   - Klicken Sie auf **"Save"**

5. **Redeployen Sie die Anwendung**
   - Gehen Sie zum Tab **"Deployments"**
   - Klicken Sie auf die drei Punkte (⋯) bei dem neuesten Deployment
   - Wählen Sie **"Redeploy"**
   - Oder pushen Sie einen neuen Commit zu GitHub

### Option 2: Über die Vercel CLI

```bash
# Installieren Sie die Vercel CLI (falls noch nicht installiert)
npm i -g vercel

# Melden Sie sich an
vercel login

# Fügen Sie die Environment Variables hinzu
vercel env add NEXT_PUBLIC_GA_ID
# Geben Sie ein: G-S0CHERQPCK
# Wählen Sie: Production, Preview, Development

vercel env add NEXT_PUBLIC_CLARITY_ID
# Geben Sie ein: udoice912q
# Wählen Sie: Production, Preview, Development

# Redeployen Sie die Anwendung
vercel --prod
```

## ✅ Überprüfung

Nach dem Deployment können Sie überprüfen, ob die Variablen korrekt gesetzt sind:

1. Gehen Sie zu **Settings** → **Environment Variables**
2. Stellen Sie sicher, dass beide Variablen vorhanden sind
3. Öffnen Sie die Website und prüfen Sie in den Browser DevTools (F12):
   - **Network Tab**: Sie sollten Requests zu `googletagmanager.com` und `clarity.ms` sehen (nach Cookie-Consent)
   - **Console**: Keine Fehler bezüglich fehlender Analytics-IDs

## 🔒 Sicherheitshinweise

- ✅ Die Analytics-IDs sind öffentlich sichtbar (das ist normal für Client-Side Analytics)
- ✅ `.env.local` ist bereits in `.gitignore` und wird nicht ins Repository gepusht
- ✅ Alle Environment Variables werden verschlüsselt auf Vercel gespeichert
- ✅ Verwenden Sie `NEXT_PUBLIC_` Präfix nur für öffentliche Variablen (Client-Side)

## 📞 Support

Bei Problemen:
1. Prüfen Sie die Vercel-Logs unter **Deployments** → **View Function Logs**
2. Stellen Sie sicher, dass die Variablen für alle Environments (Production, Preview, Development) gesetzt sind
3. Nach dem Hinzufügen von Environment Variables ist ein Redeploy erforderlich

