# Mihit Nanda — Portfolio

Personal portfolio site for **Mihit Nanda** — CS undergraduate at IILM University researching trustworthy AI, federated learning, and human-centered machine learning, alongside full-stack engineering work.

🔗 **Live:** [mihitportfolio.netlify.app](https://mihitportfolio.netlify.app/)

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![Status](https://img.shields.io/badge/status-active-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## ✨ Features

- **Cinematic welcome screen** on first load
- **About** — bio, education, and animated stat counters
- **Skills** — grouped by category (Languages, AI/ML, Frontend, Blockchain, Tools) with interactive hover pills
- **Experience** — timeline layout across research and industry roles
- **Research & Publications** — filterable cards (Published / Under Review / Submitted / In Progress)
- **Projects** — animated cards with tech-stack badges and live/code links
- **Certifications & Activities**
- **Contact** — direct email and socials
- Scroll-reveal animations, hover-lift cards, a scroll-progress bar, and a back-to-top button
- Fully responsive, dark neon-glass theme

## 🛠️ Tech Stack

- [React 19](https://react.dev/) (Create React App)
- Plain CSS (custom properties / CSS variables), no UI framework
- IntersectionObserver-based scroll animations (no external animation library)

## 📁 Project Structure

```
src/
├── components/
│   ├── WelcomeScreen.js/css   # Intro overlay animation
│   ├── NavBars.js/css         # Sticky nav with active-section tracking
│   ├── Hero.js/css            # Landing section
│   ├── About.js/css           # Bio, education, animated stats
│   ├── Skills.js/css          # Grouped skill categories
│   ├── Experience.js/css      # Timeline of roles
│   ├── Research.js/css        # Filterable publication cards
│   ├── Projects.js            # Project showcase
│   ├── Certifications.js/css  # Certifications & activities
│   ├── Contact.js/css         # Contact section
│   ├── Footer.js               # Footer
│   ├── Reveal.js/css          # Reusable scroll-reveal wrapper
│   └── ScrollExtras.js        # Scroll-progress bar + back-to-top button
├── data.js                    # All content (single source of truth)
├── App.js                     # Section composition
├── styles.css                 # Global theme (colors, layout, shared components)
└── index.js
```

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) ≥ 18
- npm ≥ 9

### Installation

```bash
git clone https://github.com/mihiit/mihit-portfolio.git
cd mihit-portfolio
npm install
```

### Development

```bash
npm start
```

Runs the app at [http://localhost:3000](http://localhost:3000) with hot reload.

### Production Build

```bash
npm run build
```

Outputs an optimized build to the `build/` folder, ready to deploy.

## ✏️ Editing Content

All personal content — bio, skills, experience, research, projects, certifications — lives in a single file: **`src/data.js`**. Update the relevant array/object there; no need to touch component code for routine content changes.

To change the resume file, replace `public/_mihit_nanda.pdf` and update `socials.resume` in `data.js` if the filename changes.

## 🌐 Deployment

This is a standard Create React App build, deployable to any static host:

- **Netlify:** connect the repo, build command `npm run build`, publish directory `build`
- **Vercel:** import the repo, framework preset "Create React App"
- **GitHub Pages:** add a `homepage` field to `package.json` and use [`gh-pages`](https://www.npmjs.com/package/gh-pages)

## 📄 License

This project is open-sourced for personal/portfolio reference. Feel free to fork for inspiration, but please don't reuse the personal content as your own.

## 📬 Contact

**Mihit Nanda**
📧 mihitnanda2005@gmail.com
🔗 [LinkedIn](https://www.linkedin.com/in/mihit-nanda) · [GitHub](https://github.com/mihiit)
