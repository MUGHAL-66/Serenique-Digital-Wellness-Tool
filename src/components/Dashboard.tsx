import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { 
  Monitor, 
  Heart, 
  Focus, 
  TrendingUp, 
  Clock, 
  Target,
  Sparkles,
  Play,
  ArrowUp,
  ArrowDown,
  Brain,
  Lightbulb
} from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

interface DashboardProps {
  onNavigate?: (page: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  // Mock data for charts
  const screenTimeData = [
    { day: 'Mon', hours: 4.2 },
    { day: 'Tue', hours: 5.1 },
    { day: 'Wed', hours: 3.8 },
    { day: 'Thu', hours: 4.5 },
    { day: 'Fri', hours: 3.2 },
    { day: 'Sat', hours: 2.1 },
    { day: 'Sun', hours: 1.8 }
  ];

  const moodData = [
    { day: 'Mon', mood: 7 },
    { day: 'Tue', mood: 8 },
    { day: 'Wed', mood: 6 },
    { day: 'Thu', mood: 9 },
    { day: 'Fri', mood: 8 },
    { day: 'Sat', mood: 9 },
    { day: 'Sun', mood: 8 }
  ];

  const focusData = [
    { name: 'Deep Work', value: 45, color: '#D4AF37' },
    { name: 'Light Focus', value: 30, color: '#B76E79' },
    { name: 'Breaks', value: 25, color: '#2C7A7B' }
  ];

  const tips = [
    "Take a 5-minute breathing break to reset your focus",
    "Try the 20-20-20 rule: every 20 minutes, look at something 20 feet away for 20 seconds",
    "Your best focus time appears to be between 9-11 AM based on your patterns",
    "Consider setting your phone to Do Not Disturb during focus sessions"
  ];

  const currentTip = tips[Math.floor(Math.random() * tips.length)];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-serif mb-2">
                <span className="text-gradient">Good morning, Sarah!</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Here's your wellness overview for today
              </p>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/30 shadow-lg">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-gradient">7-day streak!</span>
            </div>
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {/* Today's Screen Time */}
          <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-3">
                <div className="w-10 h-10 gradient-gold rounded-xl flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Today's Screen Time</p>
                  <p className="text-2xl font-serif">2h 15m</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Daily Goal: 3h</span>
                <div className="flex items-center space-x-1 text-secondary">
                  <ArrowDown className="w-4 h-4" />
                  <span className="text-sm font-medium">-45m</span>
                </div>
              </div>
              <Progress value={75} className="h-2 bg-muted" />
              <p className="text-xs text-muted-foreground mt-2">25% below your goal - great job!</p>
            </CardContent>
          </Card>

          {/* Mood Streak */}
          <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-3">
                <div className="w-10 h-10 gradient-rose-gold rounded-xl flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Mood Streak</p>
                  <p className="text-2xl font-serif">7 days</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Average: 8.1/10</span>
                <div className="flex items-center space-x-1 text-accent">
                  <ArrowUp className="w-4 h-4" />
                  <span className="text-sm font-medium">+0.5</span>
                </div>
              </div>
              <div className="flex space-x-1 mb-2">
                {[...Array(7)].map((_, i) => (
                  <div key={i} className="flex-1 h-2 gradient-rose-gold rounded-full opacity-80"></div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Your mood has been consistently positive!</p>
            </CardContent>
          </Card>

          {/* Focus Mode Stats */}
          <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center">
                  <Focus className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Focus Sessions</p>
                  <p className="text-2xl font-serif">3 today</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Total: 1h 45m</span>
                <div className="flex items-center space-x-1 text-primary">
                  <Target className="w-4 h-4" />
                  <span className="text-sm font-medium">35m avg</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1 mb-2">
                <div className="h-6 gradient-gold rounded opacity-90"></div>
                <div className="h-4 gradient-gold rounded opacity-70"></div>
                <div className="h-8 gradient-gold rounded"></div>
              </div>
              <p className="text-xs text-muted-foreground">Your longest session was 50 minutes!</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts and Focus Quick Start */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Screen Time Chart */}
          <Card className="lg:col-span-1 bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                <span>Screen Time Trends</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={screenTimeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(212, 175, 55, 0.2)" />
                  <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Bar dataKey="hours" fill="url(#goldGradient)" radius={4} />
                  <defs>
                    <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.9}/>
                      <stop offset="95%" stopColor="#B8860B" stopOpacity={0.6}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Mood Chart */}
          <Card className="lg:col-span-1 bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Heart className="w-5 h-5 text-accent" />
                <span>Mood Patterns</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={moodData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(183, 110, 121, 0.2)" />
                  <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                  <YAxis domain={[0, 10]} tick={{ fontSize: 12 }} />
                  <Line 
                    type="monotone" 
                    dataKey="mood" 
                    stroke="#B76E79" 
                    strokeWidth={3}
                    dot={{ fill: '#B76E79', strokeWidth: 2, r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Focus Mode Quick Start */}
          <Card className="lg:col-span-1 bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Brain className="w-5 h-5 text-secondary" />
                <span>Quick Focus</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <p className="text-sm text-muted-foreground mb-4">Ready for a focus session?</p>
                <Button 
                  className="w-full gradient-gold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => onNavigate?.('focus')}
                >
                  <Play className="w-4 h-4 mr-2" />
                  Start 25 min session
                </Button>
              </div>
              
              {/* Focus Distribution */}
              <div className="mt-6">
                <p className="text-xs text-muted-foreground mb-2">Today's Focus Distribution</p>
                <ResponsiveContainer width="100%" height={100}>
                  <PieChart>
                    <Pie
                      data={focusData}
                      cx="50%"
                      cy="50%"
                      innerRadius={25}
                      outerRadius={40}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {focusData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Tips Section */}
        <Card className="bg-white/60 backdrop-blur-sm border-primary/20 shadow-xl">
          <CardContent className="p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 gradient-rose-gold rounded-xl flex items-center justify-center flex-shrink-0">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-serif mb-2 text-gradient">Today's Wellness Tip</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{currentTip}</p>
                <div className="flex flex-wrap gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary/30 hover:bg-primary/10"
                    onClick={() => onNavigate?.('mood')}
                  >
                    <Heart className="w-4 h-4 mr-1" />
                    Log Mood
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary/30 hover:bg-primary/10"
                    onClick={() => onNavigate?.('analytics')}
                  >
                    <TrendingUp className="w-4 h-4 mr-1" />
                    View Insights
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}