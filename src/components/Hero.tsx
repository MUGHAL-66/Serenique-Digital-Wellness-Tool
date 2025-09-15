import React from 'react';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play, Shield, Sparkles, Heart } from 'lucide-react';

interface HeroProps {
  onNavigate?: (page: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-blue-50/80 to-purple-50/90"></div>
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 gradient-gold rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 gradient-rose-gold rounded-full opacity-15 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-secondary/20 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-40 right-1/3 w-24 h-24 bg-accent/20 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Logo and Badge */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 mb-6">
              <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center shadow-xl">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div className="px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary/30 shadow-lg">
                <span className="text-sm font-medium text-gradient">Premium Wellness Experience</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-tight">
                <span className="text-gradient">Your Mind,</span>
                <br />
                <span className="text-foreground">Your Balance</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
                Discover inner peace with Serenique's premium digital detox experience. 
                Track your wellness journey, manage screen time, and find your perfect balance.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                className="gradient-gold text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => onNavigate?.('signup')}
              >
                <Play className="w-5 h-5 mr-2" />
                Start Your Journey
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-4 text-lg font-semibold border-2 border-primary/30 hover:bg-primary/10 backdrop-blur-sm bg-white/50 transition-all duration-300"
                onClick={() => onNavigate?.('login')}
              >
                Sign In
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-8">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Privacy First</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">Wellness Focused</span>
              </div>
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-secondary" />
                <span className="text-sm text-muted-foreground">Premium Experience</span>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <div className="aspect-square max-w-lg mx-auto relative">
                {/* Main hero image with enhanced styling */}
                <div className="absolute inset-0 gradient-gold rounded-3xl opacity-20 blur-xl"></div>
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-primary/20">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjBtaW5kZnVsbmVzc3xlbnwxfHx8fDE3NTc2MjYyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Meditation and wellness"
                    className="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                  
                  {/* Floating wellness cards */}
                  <div className="absolute -top-4 -left-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-primary/20">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 gradient-rose-gold rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-foreground">Mood Tracker</p>
                        <p className="text-xs text-muted-foreground">7 day streak</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg border border-primary/20">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-medium text-foreground">Screen Time</p>
                        <p className="text-xs text-muted-foreground">2h 15m today</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}