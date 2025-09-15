import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  Play, 
  Pause, 
  Square, 
  Settings, 
  Shield, 
  Brain,
  Sparkles,
  Clock,
  Focus,
  Wind,
  Volume2,
  VolumeX,
  Plus,
  X,
  RotateCcw
} from 'lucide-react';

interface FocusSession {
  duration: number;
  breakDuration: number;
  currentTime: number;
  isActive: boolean;
  isPaused: boolean;
  isBreak: boolean;
  sessionCount: number;
}

export function FocusMode() {
  const [session, setSession] = useState<FocusSession>({
    duration: 25 * 60, // 25 minutes in seconds
    breakDuration: 5 * 60, // 5 minutes in seconds
    currentTime: 25 * 60,
    isActive: false,
    isPaused: false,
    isBreak: false,
    sessionCount: 0
  });

  const [blockedSites, setBlockedSites] = useState([
    'facebook.com',
    'twitter.com',
    'instagram.com',
    'youtube.com',
    'tiktok.com',
    'reddit.com'
  ]);

  const [newSite, setNewSite] = useState('');
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [currentBreathingPhase, setCurrentBreathingPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');

  const breathingExercises = [
    {
      name: "4-7-8 Breathing",
      description: "Inhale for 4, hold for 7, exhale for 8",
      pattern: { inhale: 4, hold: 7, exhale: 8 }
    },
    {
      name: "Box Breathing",
      description: "Equal timing for each phase",
      pattern: { inhale: 4, hold: 4, exhale: 4 }
    },
    {
      name: "Calm Breathing",
      description: "Simple and relaxing",
      pattern: { inhale: 3, hold: 2, exhale: 4 }
    }
  ];

  const motivationalPrompts = [
    "You're building incredible focus. Stay present.",
    "Each moment of concentration is strengthening your mind.",
    "Breathe deeply. You've got this.",
    "Your dedication to mindfulness is inspiring.",
    "Focus is a superpower. You're developing it right now.",
    "This quiet moment is a gift to your future self.",
    "You're creating space for creativity and clarity.",
    "Your mind is becoming calmer and more centered."
  ];

  const [currentPrompt] = useState(motivationalPrompts[Math.floor(Math.random() * motivationalPrompts.length)]);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (session.isActive && !session.isPaused && session.currentTime > 0) {
      interval = setInterval(() => {
        setSession(prev => ({
          ...prev,
          currentTime: prev.currentTime - 1
        }));
      }, 1000);
    } else if (session.currentTime === 0) {
      // Session completed
      if (session.isBreak) {
        // Break finished, start new work session
        setSession(prev => ({
          ...prev,
          currentTime: prev.duration,
          isBreak: false,
          isActive: false,
          sessionCount: prev.sessionCount + 1
        }));
      } else {
        // Work session finished, start break
        setSession(prev => ({
          ...prev,
          currentTime: prev.breakDuration,
          isBreak: true,
          isActive: false
        }));
      }
    }

    return () => clearInterval(interval);
  }, [session.isActive, session.isPaused, session.currentTime]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startSession = () => {
    setSession(prev => ({ ...prev, isActive: true, isPaused: false }));
  };

  const pauseSession = () => {
    setSession(prev => ({ ...prev, isPaused: !prev.isPaused }));
  };

  const stopSession = () => {
    setSession(prev => ({
      ...prev,
      isActive: false,
      isPaused: false,
      currentTime: prev.isBreak ? prev.breakDuration : prev.duration
    }));
  };

  const resetSession = () => {
    setSession(prev => ({
      ...prev,
      currentTime: prev.duration,
      isActive: false,
      isPaused: false,
      isBreak: false
    }));
  };

  const addBlockedSite = () => {
    if (newSite.trim() && !blockedSites.includes(newSite.trim())) {
      setBlockedSites([...blockedSites, newSite.trim()]);
      setNewSite('');
    }
  };

  const removeBlockedSite = (site: string) => {
    setBlockedSites(blockedSites.filter(s => s !== site));
  };

  const getProgress = () => {
    const totalTime = session.isBreak ? session.breakDuration : session.duration;
    return ((totalTime - session.currentTime) / totalTime) * 100;
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-serif mb-2">
            <span className="text-gradient">Focus Mode</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Enter deep focus with mindful concentration
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timer and Controls */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Timer */}
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  {/* Session Status */}
                  <div className="flex items-center justify-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${session.isActive ? 'gradient-gold' : 'bg-muted'} animate-pulse`}></div>
                    <span className="text-sm font-medium text-muted-foreground">
                      {session.isBreak ? 'Break Time' : 'Focus Session'} 
                      {session.sessionCount > 0 && ` • Session ${session.sessionCount + 1}`}
                    </span>
                  </div>

                  {/* Timer Display */}
                  <div className="relative">
                    <div className="w-48 h-48 mx-auto relative">
                      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          stroke="rgba(212, 175, 55, 0.2)"
                          strokeWidth="6"
                          fill="transparent"
                        />
                        <circle
                          cx="50"
                          cy="50"
                          r="45"
                          stroke="url(#timerGradient)"
                          strokeWidth="6"
                          fill="transparent"
                          strokeDasharray={`${2 * Math.PI * 45}`}
                          strokeDashoffset={`${2 * Math.PI * 45 * (1 - getProgress() / 100)}`}
                          className="transition-all duration-1000 ease-linear"
                        />
                        <defs>
                          <linearGradient id="timerGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#D4AF37" />
                            <stop offset="100%" stopColor="#B76E79" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-4xl font-serif text-gradient mb-2">
                            {formatTime(session.currentTime)}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {session.isBreak ? 'Break' : 'Focus'}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <Progress value={getProgress()} className="h-2" />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>0:00</span>
                      <span>{formatTime(session.isBreak ? session.breakDuration : session.duration)}</span>
                    </div>
                  </div>

                  {/* Control Buttons */}
                  <div className="flex items-center justify-center space-x-4">
                    {!session.isActive ? (
                      <Button
                        onClick={startSession}
                        className="gradient-gold text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                        size="lg"
                      >
                        <Play className="w-5 h-5 mr-2" />
                        Start
                      </Button>
                    ) : (
                      <Button
                        onClick={pauseSession}
                        className="gradient-rose-gold text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300"
                        size="lg"
                      >
                        {session.isPaused ? <Play className="w-5 h-5 mr-2" /> : <Pause className="w-5 h-5 mr-2" />}
                        {session.isPaused ? 'Resume' : 'Pause'}
                      </Button>
                    )}
                    
                    <Button
                      onClick={stopSession}
                      variant="outline"
                      className="border-primary/30 hover:bg-primary/10 px-6 py-3"
                      size="lg"
                    >
                      <Square className="w-5 h-5 mr-2" />
                      Stop
                    </Button>

                    <Button
                      onClick={resetSession}
                      variant="outline"
                      className="border-primary/30 hover:bg-primary/10 px-6 py-3"
                      size="lg"
                    >
                      <RotateCcw className="w-5 h-5 mr-2" />
                      Reset
                    </Button>
                  </div>

                  {/* Session Stats */}
                  <div className="grid grid-cols-3 gap-4 text-center pt-6 border-t border-primary/20">
                    <div>
                      <p className="text-sm text-muted-foreground">Sessions Today</p>
                      <p className="text-xl font-serif text-gradient">{session.sessionCount}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Total Time</p>
                      <p className="text-xl font-serif text-gradient">{Math.floor(session.sessionCount * session.duration / 3600)}h {Math.floor((session.sessionCount * session.duration % 3600) / 60)}m</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Streak</p>
                      <p className="text-xl font-serif text-gradient">7 days</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Motivational Prompt */}
            <Card className="bg-white/60 backdrop-blur-sm border-primary/20 shadow-xl">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 gradient-rose-gold rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-serif text-gradient mb-2">Mindful Moment</h3>
                    <p className="text-muted-foreground leading-relaxed">{currentPrompt}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Breathing Exercise */}
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Wind className="w-5 h-5 text-secondary" />
                  <span>Breathing Exercise</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    4-7-8 Breathing Pattern
                  </p>
                  <div className="text-lg font-medium text-gradient mb-2">
                    {currentBreathingPhase === 'inhale' && 'Inhale (4s)'}
                    {currentBreathingPhase === 'hold' && 'Hold (7s)'}
                    {currentBreathingPhase === 'exhale' && 'Exhale (8s)'}
                  </div>
                  <Button 
                    variant="outline"
                    className="w-full border-secondary/30 hover:bg-secondary/10"
                  >
                    Start Breathing Guide
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Blocked Sites */}
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-accent" />
                  <span>Blocked Sites</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    placeholder="Add website to block"
                    value={newSite}
                    onChange={(e) => setNewSite(e.target.value)}
                    className="flex-1 px-3 py-2 bg-white/60 border border-primary/30 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
                    onKeyPress={(e) => e.key === 'Enter' && addBlockedSite()}
                  />
                  <Button
                    onClick={addBlockedSite}
                    size="sm"
                    className="gradient-gold text-white"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="space-y-2 max-h-64 overflow-y-auto">
                  {blockedSites.map((site, index) => (
                    <div key={index} className="flex items-center justify-between bg-white/60 rounded-lg p-3 border border-primary/20">
                      <span className="text-sm text-foreground truncate">{site}</span>
                      <Button
                        onClick={() => removeBlockedSite(site)}
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:bg-destructive/10"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                {blockedSites.length === 0 && (
                  <div className="text-center py-8 text-muted-foreground">
                    <Shield className="w-8 h-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">No sites blocked yet</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Focus Settings */}
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Settings className="w-5 h-5 text-primary" />
                  <span>Settings</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Session Duration</span>
                  <select className="px-3 py-1 bg-white/60 border border-primary/30 rounded-lg text-sm">
                    <option>25 minutes</option>
                    <option>30 minutes</option>
                    <option>45 minutes</option>
                    <option>60 minutes</option>
                  </select>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Break Duration</span>
                  <select className="px-3 py-1 bg-white/60 border border-primary/30 rounded-lg text-sm">
                    <option>5 minutes</option>
                    <option>10 minutes</option>
                    <option>15 minutes</option>
                  </select>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Sound Notifications</span>
                  <Button
                    onClick={() => setSoundEnabled(!soundEnabled)}
                    variant="ghost"
                    size="sm"
                    className={soundEnabled ? 'text-primary' : 'text-muted-foreground'}
                  >
                    {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}