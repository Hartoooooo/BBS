# 🔐 Vercel Environment Variables - Schnellübersicht

## 📋 Diese Variablen müssen Sie bei Vercel einfügen:

### 1. Google Analytics ID
```
Key:   NEXT_PUBLIC_GA_ID
Value: G-S0CHERQPCK
```

### 2. Microsoft Clarity ID
```
Key:   NEXT_PUBLIC_CLARITY_ID
Value: udoice912q
```

---

## 🚀 Schnelleinstieg: Vercel Dashboard

### Schritt 1: Navigation
1. Öffnen Sie [vercel.com](https://vercel.com) und melden Sie sich an
2. Wählen Sie Ihr Projekt **"BBS Webseite"** aus
3. Klicken Sie auf den Tab **"Settings"**
4. Scrollen Sie zu **"Environment Variables"**

### Schritt 2: Variablen hinzufügen

**Variable 1:**
- Klicken Sie auf **"Add New"**
- **Key**: `NEXT_PUBLIC_GA_ID`
- **Value**: `G-S0CHERQPCK`
- **Environment**: ☑️ Production ☑️ Preview ☑️ Development
- Klicken Sie auf **"Save"**

**Variable 2:**
- Klicken Sie erneut auf **"Add New"**
- **Key**: `NEXT_PUBLIC_CLARITY_ID`
- **Value**: `udoice912q`
- **Environment**: ☑️ Production ☑️ Preview ☑️ Development
- Klicken Sie auf **"Save"**

### Schritt 3: Redeploy
- Gehen Sie zu **"Deployments"**
- Klicken Sie auf die drei Punkte (⋯) beim neuesten Deployment
- Wählen Sie **"Redeploy"**

---

## ✅ Checkliste

- [ ] `NEXT_PUBLIC_GA_ID` = `G-S0CHERQPCK` hinzugefügt
- [ ] `NEXT_PUBLIC_CLARITY_ID` = `udoice912q` hinzugefügt
- [ ] Beide Variablen für alle Environments gesetzt (Production, Preview, Development)
- [ ] Redeploy durchgeführt
- [ ] Website funktioniert korrekt
- [ ] Analytics werden nach Cookie-Consent geladen

---

## 📝 Vollständige Anleitung

Für detaillierte Schritt-für-Schritt-Anleitung siehe:
- `VERCEL_SETUP_ANLEITUNG.md` - Ausführliche Anleitung mit Screenshots
- `VERCEL_ENV_SETUP.md` - Alternative Methoden (CLI, etc.)

---

## 🔒 Wichtig

- ✅ Diese IDs sind öffentlich sichtbar (normal für Client-Side Analytics)
- ✅ Analytics werden nur nach Cookie-Consent geladen (DSGVO-konform)
- ⚠️ Nach dem Hinzufügen von Environment Variables ist ein Redeploy erforderlich!


