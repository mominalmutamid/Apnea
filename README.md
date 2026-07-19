# 🌊 Apnea Command Center

A Progressive Web App (PWA) for freediving and breath-hold training. Track your personal records, generate CO2 training tables, follow guided breathing exercises, and complete dryland challenges — all with an immersive underwater aesthetic.

![Theme](https://img.shields.io/badge/theme-deep%20ocean-001d3d)
![PWA](https://img.shields.io/badge/PWA-ready-00f5ff)
![License](https://img.shields.io/badge/license-MIT-green)

## ✨ Features

- **🕐 Precision Timer** — Centisecond-accurate breath-hold timer with depth-zone warnings
- **📊 Progress Tracking** — Chart.js visualization of your last 10 dives
- **🫁 Breathing Guide** — Animated visual breathing coach (4-2-4 rhythm)
- **📋 CO2 Tables** — Auto-generated training tables based on your PR
- **🎮 Arcade Mode** — Randomized dryland challenges
- **💾 Persistent Storage** — All data saved via localStorage
- **📱 PWA Support** — Installable on iOS, Android, and Desktop
- **🌊 Underwater UI** — Caustic light effects, floating bubbles, and deep-ocean gradients

## 🚀 Quick Start

### Option 1: GitHub Pages (Free)

1. **Fork or create a new repository** on GitHub
2. **Upload all files** from this folder to the repository root
3. Go to **Settings → Pages**
4. Under "Source", select **Deploy from a branch**
5. Select the **main** branch and **/(root)** folder
6. Click **Save**
7. Your app will be live at `https://yourusername.github.io/apnea-command-center/`

### Option 2: Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com) and sign in
2. Drag the entire project folder onto the Netlify dashboard
3. Your site is instantly live with a custom URL

### Option 3: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### Option 4: Local Development

Simply open `index.html` in any modern browser. No build step required.

```bash
# Optional: serve with a local server for full PWA features
npx serve .
# or
python3 -m http.server 8080
```

## 📁 File Structure

```
apnea-command-center/
├── index.html          # Main app (single file, all logic inline)
├── manifest.json       # PWA manifest
├── sw.js               # Service Worker for offline support
├── README.md           # This file
├── LICENSE             # MIT License
└── icons/
    ├── icon-32x32.png
    ├── icon-72x72.png
    ├── icon-96x96.png
    ├── icon-128x128.png
    ├── icon-144x144.png
    ├── icon-152x152.png
    ├── icon-192x192.png
    ├── icon-384x384.png
    └── icon-512x512.png
```

## 📱 Installing as an App

### iOS (Safari)
1. Open the deployed URL in Safari
2. Tap the **Share** button
3. Scroll down and tap **"Add to Home Screen"**
4. The app will appear on your home screen with the custom icon

### Android (Chrome)
1. Open the deployed URL in Chrome
2. Tap the **menu (⋮)** → **"Add to Home Screen"** or **"Install App"**
3. The app will install as a standalone application

### Desktop (Chrome/Edge)
1. Open the deployed URL
2. Click the **install icon** in the address bar (or menu → Install)
3. The app opens in its own window, offline-capable

## 🎨 Customization

### Colors
Edit the CSS custom properties in `index.html`:

```css
:root {
    --abyss: #000814;        /* Deepest background */
    --deep-ocean: #001d3d;   /* Card backgrounds */
    --surface: #00b4d8;      /* Primary accent */
    --neon-cyan: #00f5ff;    /* Glow effects */
    --neon-pink: #ff007f;    /* Arcade accent */
}
```

### Challenges
Edit the `challenges` array in the JavaScript section of `index.html` to add your own dryland exercises.

### Breathing Rhythm
Modify the timing values in the `toggleBreathing()` function (default is 4s inhale, 2s hold, 4s exhale).

## 🔧 Tech Stack

- **Pure HTML/CSS/JS** — No frameworks, no build step
- **Chart.js** — Progress visualization (loaded from CDN)
- **Service Worker** — Offline caching
- **Web App Manifest** — Installable PWA
- **localStorage** — Data persistence

## 📄 License

MIT License — feel free to use, modify, and distribute.
