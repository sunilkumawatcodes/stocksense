# StockSense 📈

> **Learn. Practice. Invest Smarter.**  
> An educational stock market learning, gamified curriculum, and simulated paper-trading platform.

---

## 🌟 Overview

**StockSense** is an all-in-one educational web application built to demystify financial markets for retail and beginner investors. It bridges the gap between theoretical knowledge and practical market execution by combining an interactive learning roadmap, gamified quizzes, a conversational **AI Mentor (Sensei 🤖)**, and a **100% Risk-Free Paper Trading Simulator** with ₹1,00,000 in virtual funds.

---

## 🚀 Key Features

### 1. 🤖 Sensei AI Market Mentor
- **Conversational Tutor**: Powered by **Google Gemini** (`gemini-3.8-flash`) using the `@google/genai` TypeScript SDK on the backend.
- **Beginner-Friendly Analogies**: Explains complex financial jargon (P/E ratio, market cap, candlesticks, diversification) using relatable everyday examples.
- **Financial Safety Guardrails**: Strictly educational. Never provides personalized investment advice, stock tips, or return guarantees.
- **Quick-Prompt Chips**: Clickable prompts for instant learning topics and interactive quizzes.
- **Session Persistence**: Preserves conversations seamlessly across page navigation.
- **Resilient Fallback**: Gracefully handles API timeouts and network hiccups with curated educational responses and inline retry capabilities.

### 2. 💼 Paper Trading Simulator (100% Virtual Money)
- **Starting Capital**: ₹1,00,000 in virtual cash for hands-on, risk-free simulation.
- **Simulated Market Feed**: Real-time simulated price drift on benchmark Indian equities:
  - `RELIANCE` (Reliance Industries Ltd.)
  - `TCS` (Tata Consultancy Services)
  - `INFY` (Infosys Limited)
  - `HDFCBANK` (HDFC Bank Ltd.)
  - `ICICIBANK` (ICICI Bank Ltd.)
- **Interactive Trend Charts**: SVG charts supporting 1D, 1W, 1M, and 1Y timeframes with hoverable price inspection.
- **Order Execution Terminal**:
  - Instant BUY and SELL actions with quantity steppers and quick percentage shortcuts (25%, 50%, 75%, Max).
  - Strict client-side validation ensuring users have sufficient virtual cash to buy and own enough shares to sell.
  - Automatic updates to virtual cash balance and portfolio holdings.
- **Live Holdings & P&L**: Shows average purchase price, current market price, holding value, and unrealized profit/loss.
- **Audit Trail (Transaction History)**: Records every executed buy/sell order with timestamp, quantity, price, and total value.

### 3. 📊 Simulated Portfolio Tracker
- **Total Portfolio Value**: Dynamic calculation combining available virtual cash and current market value of holdings.
- **Unrealized Gain / Loss**: Real-time calculation of monetary and percentage returns based on cost basis.
- **Sector Diversification**: Visual breakdown across Energy, IT, Financials, and other sectors.
- **Account Reset**: One-click reset option to restore a clean ₹1,00,000 balance and clear trading history.

### 4. 📚 Gamified Learning Roadmap & Quizzes
- **Structured Curriculum**: Progressive learning tracks from beginner market fundamentals to advanced valuation and risk management.
- **Interactive Quizzes**: Multiple-choice assessments with immediate explanations and +100 XP rewards.
- **Gamification Mechanics**: XP progression, streak tracking, and unlockable achievement badges (e.g., *First Trade*, *Diversifier*, *Quiz Master*).

---

## 🛡️ Financial Safety & Disclaimers

> **Educational Simulation Notice:**  
> StockSense is strictly an educational learning platform and paper-trading simulator. It does not provide personalized investment advice, stock buy/sell recommendations, or price guarantees, nor does it connect to real brokerage accounts or execute real monetary transactions.
>
> - *"Sensei provides educational information, not personalized financial advice."*
> - *"Paper trading is a simulation for educational purposes and does not involve real money or real trade execution."*

---

## 🛠️ Technology Stack

- **Frontend**:
  - [React 19](https://react.dev/) — Component-based UI architecture
  - [TypeScript](https://www.typescriptlang.org/) — Type safety and clean code contracts
  - [Tailwind CSS v4](https://tailwindcss.com/) — Modern dark-mode fintech interface
  - [Lucide React](https://lucide.dev/) — Consistent iconography
  - [Vite 8](https://vite.dev/) — Fast HMR and bundle compilation
- **Backend**:
  - [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/) — API routing and dev server middleware
  - [@google/genai](https://www.npmjs.com/package/@google/genai) — Official Google Gen AI SDK
  - [Google Gemini 3.8 Flash](https://ai.google.dev/) — Natural language educational mentoring
- **Storage & State**:
  - React Context (`AppContext`) with safe storage wrapper (in-memory + local storage) for iframe and sandbox resilience.

---

## 📁 Project Structure

```text
├── server.ts                 # Express full-stack server & Gemini API endpoint (/api/sensei)
├── index.html                # HTML entry point with metadata and fonts
├── package.json              # Project dependencies and npm scripts
├── vite.config.ts            # Vite build configuration and path aliases
├── metadata.json             # Applet metadata and server capabilities
└── src/
    ├── main.tsx              # React DOM root entry point
    ├── App.tsx               # Main layout and top-level page router
    ├── types/
    │   └── index.ts          # Core TypeScript interfaces (Stock, Holding, Transaction, ChatMessage)
    ├── data/
    │   └── mockData.ts       # Initial demo stocks, lessons, quizzes, and badges
    ├── context/
    │   └── AppContext.tsx    # Global state management (trading, portfolio, user, toasts)
    ├── components/
    │   ├── Navbar.tsx        # Top navigation with live market ticker and user stats
    │   ├── Footer.tsx        # Footer with learning links and educational disclaimers
    │   └── ToastContainer.tsx# Real-time toast notifications
    └── pages/
        ├── LandingPage.tsx   # Product landing page and value proposition
        ├── Dashboard.tsx     # Student hub with daily challenges and quick actions
        ├── LearnRoadmap.tsx  # Step-by-step modular learning tracks
        ├── LessonPage.tsx    # Interactive lesson reader with "Ask Sensei" integration
        ├── QuizSystem.tsx    # Gamified quiz engine
        ├── AiMentor.tsx      # Sensei AI Mentor chat interface
        ├── PaperTrading.tsx  # Paper trading terminal with live demo stocks and order slip
        ├── PortfolioPage.tsx # Virtual portfolio tracker and sector allocation
        ├── LeaderboardPage.tsx# Student XP rankings and streaks
        └── ProfilePage.tsx   # User profile, badges, and learning achievements
```

---

## ⚡ Getting Started

### Prerequisites

- Node.js (v20 or v22 recommended)
- npm or yarn

### Installation

1. Clone or open the repository:
   ```bash
   cd applet
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. (Optional) Configure Gemini API Key:
   Create a `.env` file or provide the environment variable:
   ```env
   GEMINI_API_KEY=your_gemini_api_key_here
   ```
   *(If not provided, Sensei automatically operates in high-fidelity educational fallback mode).*

### Available Scripts

- **Start Development Server**:
  ```bash
  npm run dev
  ```
  Runs the full-stack server on [http://localhost:3000](http://localhost:3000).

- **Build Production Bundle**:
  ```bash
  npm run build
  ```

- **Type Check & Lint**:
  ```bash
  npm run lint
  ```

---

## 📜 License

Created for educational and college hackathon demonstration purposes.
