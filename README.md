# Bharat Yatra 🇮🇳

**Bharat Yatra** is an immersive, interactive web application designed to take players on a journey through India's rich history. Built by team **Alpha Minds** for the **Smart India Hackathon 2026**.

## 🚀 Tech Stack

### Frontend
- **Framework:** React + Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Routing:** React Router DOM

### Backend & AI (Planned)
- **Database & Auth:** Firebase (Firestore, Authentication)
- **Cloud Functions:** Firebase Functions
- **AI Integration:** OpenAI API (for interactive game assistant & retrieval-based hints)

### Visuals
- Interactive SVG India Map
- Web Speech API for voiceovers

## 🛠️ Local Setup & Development

Follow these instructions to run the project locally on your machine.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your system.

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <your-repo-url>
   cd bharat-yatra
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Navigate to `http://localhost:5173/` in your web browser to view the application.

## 📂 Project Structure

```text
bharat-yatra/
├── functions/              # Firebase Cloud Functions (Backend)
├── src/
│   ├── assets/             # Static assets (SVG maps, images, etc.)
│   ├── components/         # Reusable UI components
│   ├── hooks/              # Custom React Hooks
│   ├── pages/              # Main application views/routes
│   ├── services/           # External API integrations (Firebase, OpenAI)
│   ├── types/              # TypeScript type definitions
│   ├── utils/              # Helper functions and constants
│   ├── App.tsx             # Root component
│   └── index.css           # Global Tailwind CSS configuration
├── package.json            # Project metadata and scripts
└── vite.config.ts          # Vite configuration
```

## 📸 Screenshots

<div align="center">
  <img src="public/character-selection.jpg" alt="Character Selection Screen" width="800"/>
  <br>
  <em>Character Selection Screen</em>
  <br><br>
  <img src="public/gameplay.jpg" alt="Gameplay Screen" width="800"/>
  <br>
  <em>Gameplay Screen (Bhagat Singh in Punjab)</em>
</div>

## 🎯 Features Roadmap
- [x] Initial Project Setup (Vite + React + TS + Tailwind)
- [x] Basic Landing Page UI
- [ ] Interactive SVG Map Integration
- [ ] Firebase Authentication Setup
- [ ] OpenAI Assistant Integration
- [ ] Dynamic Game Levels & Challenges

---
*Developed with ❤️ by Alpha Minds.*
