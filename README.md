# 🌍 Travel-to-Invigorate — Modern Bangladesh Travel & Cultural Portal

[![Live Demo](https://img.shields.io/badge/Live_Demo-GitHub_Pages-0d9488?style=for-the-badge&logo=github)](https://mdanwarulkarim.github.io/Travelwebiste/)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](#)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](#)

> *"If you travel, you will not only learn about foreign cultures, but about your own as well. You will notice the cultural differences, and will find out what makes your culture unique. After returning from a long journey, you will see your country with new eyes."*

---
<img width="1024" height="1536" alt="Modern Bangladesh Travel Portal" src="https://github.com/user-attachments/assets/059aa0a1-b58b-4828-8996-13e7cd9fc46c" />

## ✨ About the Site

**Travel-to-Invigorate** is a responsive, multi-page travel guide to Bangladesh, covering destinations, culture, food, transport, packing, and useful Bangla phrases. It is built with static HTML, CSS, and vanilla JavaScript; no build step or package installation is required.

### Key Highlights
- **Responsive design (`style.css`)**: Shared styles, mobile navigation, responsive layouts, and light/dark theme support.
- **Interactive Features (`script.js`)**:
  - **Live Category Filtering & Search Bar** across Outdoor Destinations, Indoor Cultural Venues, and Traditional Cuisine.
  - **Interactive Pre-Departure Packing Checklist** with a real-time completion progress bar saved to `localStorage`.
  - **Interactive Bangla Language Tutor** with 4 switchable lesson modules and one-click **Web Speech API audio pronunciation**.
  - **Home-page trip finder**: Choose a travel mood or get a surprise destination suggestion.
  - **Scroll interactions**: Reveal animations, reading progress, and a back-to-top button, with reduced-motion support.
  - **Consistent navigation**: The food guide is `food.html`; `indoor2.html` remains an outdoor-guide alias for older links.
- **Bangladesh photography**: Destination, museum, transport, and food photos include links to their source pages and visible credits. Packing illustrations are illustrative.

---

## 📂 Project Structure

```text
Travelwebiste/
├── index.html               # Home page, featured destinations, and interactive trip finder
├── outdoor.html             # Outdoor destinations and activities
├── indoor2.html             # Legacy alias for the outdoor guide
├── indoor.html              # Museums, galleries, and indoor activities
├── interestingplaces.html   # Places to visit and regional transport
├── PackingTips.html         # Packing advice and interactive checklist
├── food.html                # Traditional Bangladeshi food guide
├── language_tips.html       # Bangla phrases and pronunciation
├── contact.html             # Contact and trip inquiry form
├── style.css                # Shared responsive styles and animations
├── script.js                # Shared JavaScript interactions
└── README.md                # Project Documentation
```

---

## 🚀 GitHub Pages

The live site is [mdanwarulkarim.github.io/Travelwebiste](https://mdanwarulkarim.github.io/Travelwebiste/). To publish updates:

1. In the repository’s **Settings → Pages**, choose **Deploy from a branch**, then select `main` and `/(root)` as the publishing source.
2. Commit and push changes to `main`:
   ```bash
   git add .
   git commit -m "Update travel website"
   git push origin main
   ```
3. GitHub Pages deploys the site from the root of `main`. Check the **Actions** tab for deployment status.

---

## 👤 Author

**Md. Anwarul Karim**
- **Email**: [karim247live@gmail.com](mailto:karim247live@gmail.com)
- **GitHub**: [@mdanwarulkarim](https://github.com/mdanwarulkarim)
- **Location**: Dhaka, Bangladesh
