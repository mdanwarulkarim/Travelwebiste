# 🌍 Travel-to-Invigorate — Modern Bangladesh Travel & Cultural Portal

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-0d9488?style=for-the-badge&logo=github)](https://mdanwarulkarim.github.io/Travelwebiste/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)

> *"If you travel, you will not only learn about foreign cultures, but about your own as well. You will notice the cultural differences, and will find out what makes your culture unique. After returning from a long journey, you will see your country with new eyes."*

---

## ✨ What's New in the Complete Redesign

This repository contains the complete, modern UI/UX overhaul of **Travel-to-Invigorate**, a multi-page cultural, culinary, and heritage travel guide to Bangladesh. Every original page and URL path has been preserved while upgrading the architecture to a clean, responsive, zero-dependency design system.

### Key Highlights
- **Unified Design System (`style.css`)**: Replaces 10+ fragmented CSS files with a single CSS Custom Properties stylesheet featuring **Light & Dark Mode** (`localStorage` persisted), glassmorphism sticky navigation, fluid typography (`Playfair Display` + `Plus Jakarta Sans`), and responsive CSS Grid layouts.
- **Interactive Features (`script.js`)**:
  - **Live Category Filtering & Search Bar** across Outdoor Destinations, Indoor Cultural Venues, and Traditional Cuisine.
  - **Interactive Pre-Departure Packing Checklist** with a real-time completion progress bar saved to `localStorage`.
  - **Interactive Bangla Language Tutor** with 4 switchable lesson modules and one-click **Web Speech API audio pronunciation**.
  - **Fixed Broken Links & Typos**: Resolved the broken `imgages/Make a list.jpeg` image path on `PackingTips.html`, replaced placeholder Lorem Ipsum text on `interestingplaces.html` with authentic regional transport guides (*Chander Gari*, *Sadarghat Launches*, *Rickshaws*), and unified `outdoor.html` and `indoor2.html` so no navigation link ever hits a 404.
- **Bangladesh Photo Credits**: Destination, museum, transport, and food photos link to their Wikimedia Commons source pages with visible author/license credits. Instructional packing images remain illustrative.

---

## 📂 Project Structure

```text
Travelwebiste/
├── index.html               # Home Page — Hero banner, 4 core pillars & featured highlights
├── outdoor.html             # Outdoor Activities — 9 filterable UNESCO, hill & nature destinations
├── indoor2.html             # Legacy Outdoor alias (synced with outdoor.html to prevent broken links)
├── indoor.html              # Indoor Activities — 5 Dhaka & Dhamrai museums, galleries & planetarium
├── interestingplaces.html   # Interesting Places Hub & Regional Transportation Guide
├── PackingTips.html         # 6 Smart Packing Rules + Interactive Persistent Checklist
├── food.html                # Traditional Food — Bangaliketa, Fish & Rice, Mughlai Biryani & Sweets
├── language_tips.html       # Basic Bangla for Tourists — Interactive lessons + Audio Pronunciation
├── contact.html             # Contact & Trip Inquiry Form + Direct Channels
├── style.css                # Master Responsive Stylesheet (Light/Dark theme variables)
├── script.js                # Master Interactive JavaScript Controller
└── README.md                # Project Documentation
```

---

## 🚀 Quick Deployment to GitHub Pages

1. Download and extract **`Travelwebsite_Complete_Redesign.zip`**.
2. Copy all files into your local `Travelwebiste` repository folder (replacing the old HTML/CSS files).
3. Commit and push to your `main` or `master` branch:
   ```bash
   git add .
   git commit -m "Redesign all pages with unified responsive UI, dark mode, and interactive JS"
   git push origin main
   ```
4. Your live site at `https://mdanwarulkarim.github.io/Travelwebiste/` will automatically update within 1–2 minutes.

---

## 👤 Author

**Md. Anwarul Karim**
- **Email**: [karim247live@gmail.com](mailto:karim247live@gmail.com)
- **GitHub**: [@mdanwarulkarim](https://github.com/mdanwarulkarim)
- **Location**: Dhaka, Bangladesh
