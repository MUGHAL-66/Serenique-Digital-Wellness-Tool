import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Dashboard } from './components/Dashboard';
import { MoodJournal } from './components/MoodJournal';
import { FocusMode } from './components/FocusMode';
import { Analytics } from './components/Analytics';
import { Settings } from './components/Settings';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    // Scroll to top when navigating
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard onNavigate={handleNavigation} />;
      
      case 'mood':
        return <MoodJournal />;
      
      case 'focus':
        return <FocusMode />;
      
      case 'analytics':
        return <Analytics />;
      
      case 'settings':
        return <Settings />;
      
      case 'signup':
        return (
          <div className="min-h-screen pt-24 pb-16">
            <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-primary/20 shadow-xl">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h2 className="text-3xl font-serif mb-2">
                    <span className="text-gradient">Join Serenique</span>
                  </h2>
                  <p className="text-muted-foreground">Begin your wellness journey today</p>
                </div>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/60 border border-primary/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/60 border border-primary/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 bg-white/60 border border-primary/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Create a strong password"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full gradient-gold text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Create Account
                  </button>
                </form>
                
                <p className="text-center text-sm text-muted-foreground mt-6">
                  Already have an account?{' '}
                  <button
                    onClick={() => handleNavigation('login')}
                    className="text-primary hover:text-accent transition-colors"
                  >
                    Sign in
                  </button>
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'login':
        return (
          <div className="min-h-screen pt-24 pb-16">
            <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-primary/20 shadow-xl">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 gradient-rose-gold rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <h2 className="text-3xl font-serif mb-2">
                    <span className="text-gradient">Welcome Back</span>
                  </h2>
                  <p className="text-muted-foreground">Continue your wellness journey</p>
                </div>
                
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/60 border border-primary/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                    <input
                      type="password"
                      className="w-full px-4 py-3 bg-white/60 border border-primary/30 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Enter your password"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="flex items-center">
                      <input type="checkbox" className="w-4 h-4 text-primary border-primary/30 rounded" />
                      <span className="ml-2 text-sm text-muted-foreground">Remember me</span>
                    </label>
                    <button type="button" className="text-sm text-primary hover:text-accent transition-colors">
                      Forgot password?
                    </button>
                  </div>
                  <button
                    type="submit"
                    className="w-full gradient-rose-gold text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Sign In
                  </button>
                </form>
                
                <p className="text-center text-sm text-muted-foreground mt-6">
                  Don't have an account?{' '}
                  <button
                    onClick={() => handleNavigation('signup')}
                    className="text-primary hover:text-accent transition-colors"
                  >
                    Sign up
                  </button>
                </p>
              </div>
            </div>
          </div>
        );
      
      default:
        return (
          <>
            <Hero onNavigate={handleNavigation} />
            <Features />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
      <main className="relative">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}