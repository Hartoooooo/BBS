# 🚀 Vercel Environment Variables - Schritt-für-Schritt Anleitung

## 📋 Übersicht

Diese Anleitung zeigt Ihnen genau, wie Sie die Analytics-Keys auf Vercel einrichten.

## 🔐 Benötigte Environment Variables

1. **NEXT_PUBLIC_GA_ID** = `G-S0CHERQPCK`
2. **NEXT_PUBLIC_CLARITY_ID** = `udoice912q`

---

## 📝 Schritt-für-Schritt: Vercel Dashboard

### Schritt 1: Anmeldung
1. Öffnen Sie [vercel.com](https://vercel.com)
2. Melden Sie sich mit Ihrem Account an

### Schritt 2: Projekt auswählen
1. Klicken Sie auf Ihr Projekt **"BBS Webseite"** (oder den entsprechenden Namen)
2. Falls das Projekt noch nicht existiert:
   - Klicken Sie auf **"Add New"** → **"Project"**
   - Verbinden Sie Ihr GitHub Repository
   - Wählen Sie das Repository aus

### Schritt 3: Zu Settings navigieren
1. Klicken Sie auf den Tab **"Settings"** in der oberen Navigation
2. Scrollen Sie nach unten zum Abschnitt **"Environment Variables"**

### Schritt 4: Google Analytics Variable hinzufügen
1. Klicken Sie auf den Button **"Add New"**
2. Füllen Sie das Formular aus:
   - **Key**: `NEXT_PUBLIC_GA_ID`
   - **Value**: `G-S0CHERQPCK`
   - **Environment**: Aktivieren Sie alle drei Optionen:
     - ☑️ Production
     - ☑️ Preview  
     - ☑️ Development
3. Klicken Sie auf **"Save"**

### Schritt 5: Microsoft Clarity Variable hinzufügen
1. Klicken Sie erneut auf **"Add New"**
2. Füllen Sie das Formular aus:
   - **Key**: `NEXT_PUBLIC_CLARITY_ID`
   - **Value**: `udoice912q`
   - **Environment**: Aktivieren Sie alle drei Optionen:
     - ☑️ Production
     - ☑️ Preview
     - ☑️ Development
3. Klicken Sie auf **"Save"**

### Schritt 6: Überprüfung
Nach dem Hinzufügen sollten Sie beide Variablen in der Liste sehen:

```
✅ NEXT_PUBLIC_GA_ID = G-S0CHERQPCK
✅ NEXT_PUBLIC_CLARITY_ID = udoice912q
```

### Schritt 7: Redeploy
**WICHTIG**: Nach dem Hinzufügen von Environment Variables muss die Anwendung neu deployed werden!

**Option A: Über das Dashboard**
1. Gehen Sie zum Tab **"Deployments"**
2. Klicken Sie auf die drei Punkte (⋯) bei dem neuesten Deployment
3. Wählen Sie **"Redeploy"**
4. Bestätigen Sie die Aktion

**Option B: Über Git Push**
1. Machen Sie eine kleine Änderung (z.B. Kommentar im Code)
2. Committen und pushen Sie zu GitHub
3. Vercel deployt automatisch

---

## 🖥️ Alternative: Vercel CLI

Falls Sie die Vercel CLI bevorzugen:

```bash
# 1. Vercel CLI installieren (falls noch nicht vorhanden)
npm i -g vercel

# 2. Anmelden
vercel login

# 3. Zum Projekt-Verzeichnis navigieren
cd "/Users/timonhartmann/Desktop/Web Projekte/BBS Webseite"

# 4. Google Analytics Variable hinzufügen
vercel env add NEXT_PUBLIC_GA_ID
# Wenn gefragt, geben Sie ein: G-S0CHERQPCK
# Wählen Sie: Production, Preview, Development (alle drei)

# 5. Microsoft Clarity Variable hinzufügen
vercel env add NEXT_PUBLIC_CLARITY_ID
# Wenn gefragt, geben Sie ein: udoice912q
# Wählen Sie: Production, Preview, Development (alle drei)

# 6. Deployment
vercel --prod
```

---

## ✅ Überprüfung nach Deployment

### 1. Vercel Dashboard prüfen
- Gehen Sie zu **Settings** → **Environment Variables**
- Beide Variablen sollten sichtbar sein

### 2. Website prüfen
1. Öffnen Sie Ihre Website
2. Öffnen Sie die Browser DevTools (F12)
3. Gehen Sie zum Tab **"Network"**
4. Akzeptieren Sie die Cookies (Analytics-Cookies)
5. Sie sollten Requests sehen zu:
   - `googletagmanager.com` (Google Analytics)
   - `clarity.ms` (Microsoft Clarity)

### 3. Console prüfen
- Im **Console** Tab sollten keine Fehler bezüglich fehlender Analytics-IDs erscheinen

---

## 🔒 Sicherheitshinweise

✅ **Sicher:**
- Die Analytics-IDs sind öffentlich sichtbar (normal für Client-Side Analytics)
- `.env.local` ist in `.gitignore` und wird nicht committed
- Environment Variables werden verschlüsselt auf Vercel gespeichert

⚠️ **Wichtig:**
- Verwenden Sie `NEXT_PUBLIC_` Präfix nur für öffentliche Variablen
- Nach dem Hinzufügen von Environment Variables ist ein Redeploy erforderlich
- Setzen Sie die Variablen für alle Environments (Production, Preview, Development)

---

## 📞 Hilfe bei Problemen

**Problem: Analytics funktioniert nicht**
1. Prüfen Sie, ob die Variablen korrekt gesetzt sind
2. Prüfen Sie, ob ein Redeploy durchgeführt wurde
3. Prüfen Sie die Vercel-Logs: **Deployments** → **View Function Logs**

**Problem: Variablen werden nicht erkannt**
1. Stellen Sie sicher, dass die Variablen für alle Environments gesetzt sind
2. Prüfen Sie die Schreibweise (Groß-/Kleinschreibung beachten)
3. Führen Sie einen neuen Deployment durch

---

## 📸 Screenshot-Beschreibung

**Wo finde ich Environment Variables auf Vercel?**

1. **Dashboard** → Ihr Projekt
2. **Settings** Tab (oben in der Navigation)
3. Scrollen Sie nach unten zu **"Environment Variables"**
4. Dort sehen Sie eine Liste aller gesetzten Variablen
5. Button **"Add New"** zum Hinzufügen neuer Variablen

