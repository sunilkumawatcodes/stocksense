import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ToastContainer } from './components/ToastContainer';
import { LandingPage } from './pages/LandingPage';
import { Dashboard } from './pages/Dashboard';
import { LearnRoadmap } from './pages/LearnRoadmap';
import { LessonPage } from './pages/LessonPage';
import { QuizSystem } from './pages/QuizSystem';
import { AiMentor } from './pages/AiMentor';
import { PaperTrading } from './pages/PaperTrading';
import { PortfolioPage } from './pages/PortfolioPage';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { ProfilePage } from './pages/ProfilePage';

const AppContent: React.FC = () => {
  const { currentPage } = useApp();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <main className="flex-1">
        {currentPage === 'landing' && <LandingPage />}
        {currentPage === 'dashboard' && <Dashboard />}
        {currentPage === 'learn' && <LearnRoadmap />}
        {currentPage === 'lesson' && <LessonPage />}
        {currentPage === 'quizzes' && <QuizSystem />}
        {currentPage === 'ai-mentor' && <AiMentor />}
        {currentPage === 'paper-trading' && <PaperTrading />}
        {currentPage === 'portfolio' && <PortfolioPage />}
        {currentPage === 'leaderboard' && <LeaderboardPage />}
        {currentPage === 'profile' && <ProfilePage />}
      </main>

      <Footer />
      <ToastContainer />
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
