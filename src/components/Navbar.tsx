import React, { useState } from 'react';
import { Button } from './ui/button';
import { 
  LayoutDashboard, 
  BookOpen, 
  Focus, 
  BarChart3, 
  Settings, 
  LogOut, 
  Menu, 
  X,
  Sparkles
} from 'lucide-react';

interface NavbarProps {
  currentPage?: string;
  onNavigate?: (page: string) => void;
}

export function Navbar({ currentPage = 'home', onNavigate }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'mood', label: 'Mood Journal', icon: BookOpen },
    { id: 'focus', label: 'Focus Mode', icon: Focus },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const handleNavigation = (page: string) => {
    onNavigate?.(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-primary/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => handleNavigation('home')}>
            <div className="relative">
              <div className="w-10 h-10 gradient-gold rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full opacity-80"></div>
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-gradient">Serenique</h1>
              <p className="text-xs text-muted-foreground -mt-1">Your Mind, Your Balance</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <Button
                  key={item.id}
                  variant={isActive ? "default" : "ghost"}
                  className={`
                    relative px-4 py-2 rounded-lg transition-all duration-300 group
                    ${isActive 
                      ? 'gradient-gold text-white shadow-lg' 
                      : 'text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10'
                    }
                  `}
                  onClick={() => handleNavigation(item.id)}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  <span className="font-medium">{item.label}</span>
                  {!isActive && (
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div>
                  )}
                </Button>
              );
            })}
            
            <div className="w-px h-6 bg-border mx-2"></div>
            
            <Button
              variant="outline"
              className="gradient-rose-gold text-white border-none hover:shadow-lg transition-all duration-300"
              onClick={() => handleNavigation('logout')}
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-primary/20 shadow-xl">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <Button
                  key={item.id}
                  variant="ghost"
                  className={`
                    w-full justify-start px-4 py-3 rounded-lg transition-all duration-300
                    ${isActive 
                      ? 'gradient-gold text-white shadow-lg' 
                      : 'text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10'
                    }
                  `}
                  onClick={() => handleNavigation(item.id)}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  <span className="font-medium">{item.label}</span>
                </Button>
              );
            })}
            
            <div className="h-px bg-border my-2"></div>
            
            <Button
              variant="ghost"
              className="w-full justify-start px-4 py-3 gradient-rose-gold text-white rounded-lg"
              onClick={() => handleNavigation('logout')}
            >
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}