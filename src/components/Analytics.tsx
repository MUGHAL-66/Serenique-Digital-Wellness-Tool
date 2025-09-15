import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  AreaChart,
  Area,
  Tooltip,
  Legend
} from 'recharts';
import { 
  TrendingUp, 
  Calendar, 
  Clock, 
  Target, 
  Award,
  Filter,
  Download,
  Lightbulb,
  Heart,
  Monitor,
  Focus,
  ChevronDown
} from 'lucide-react';

export function Analytics() {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'quarter'>('week');
  const [selectedMetric, setSelectedMetric] = useState<'screen-time' | 'mood' | 'focus'>('screen-time');

  // Mock data for different time ranges
  const mockData = {
    week: {
      screenTime: [
        { day: 'Mon', hours: 4.2, goal: 3.5 },
        { day: 'Tue', hours: 5.1, goal: 3.5 },
        { day: 'Wed', hours: 3.8, goal: 3.5 },
        { day: 'Thu', hours: 4.5, goal: 3.5 },
        { day: 'Fri', hours: 3.2, goal: 3.5 },
        { day: 'Sat', hours: 2.1, goal: 3.5 },
        { day: 'Sun', hours: 1.8, goal: 3.5 }
      ],
      mood: [
        { day: 'Mon', mood: 7, energy: 6 },
        { day: 'Tue', mood: 8, energy: 7 },
        { day: 'Wed', mood: 6, energy: 5 },
        { day: 'Thu', mood: 9, energy: 8 },
        { day: 'Fri', mood: 8, energy: 7 },
        { day: 'Sat', mood: 9, energy: 9 },
        { day: 'Sun', mood: 8, energy: 8 }
      ],
      focus: [
        { day: 'Mon', sessions: 3, duration: 105 },
        { day: 'Tue', sessions: 2, duration: 80 },
        { day: 'Wed', sessions: 4, duration: 140 },
        { day: 'Thu', sessions: 3, duration: 95 },
        { day: 'Fri', sessions: 5, duration: 165 },
        { day: 'Sat', sessions: 2, duration: 70 },
        { day: 'Sun', sessions: 1, duration: 45 }
      ]
    },
    month: {
      screenTime: [
        { day: 'Week 1', hours: 28.5, goal: 24.5 },
        { day: 'Week 2', hours: 31.2, goal: 24.5 },
        { day: 'Week 3', hours: 26.8, goal: 24.5 },
        { day: 'Week 4', hours: 23.1, goal: 24.5 }
      ],
      mood: [
        { day: 'Week 1', mood: 7.2, energy: 6.8 },
        { day: 'Week 2', mood: 8.1, energy: 7.5 },
        { day: 'Week 3', mood: 7.8, energy: 7.2 },
        { day: 'Week 4', mood: 8.5, energy: 8.0 }
      ],
      focus: [
        { day: 'Week 1', sessions: 18, duration: 630 },
        { day: 'Week 2', sessions: 22, duration: 770 },
        { day: 'Week 3', sessions: 25, duration: 875 },
        { day: 'Week 4', sessions: 20, duration: 700 }
      ]
    }
  };

  const appUsageData = [
    { name: 'Social Media', hours: 12.5, color: '#B76E79' },
    { name: 'Work Apps', hours: 8.2, color: '#D4AF37' },
    { name: 'Entertainment', hours: 6.8, color: '#2C7A7B' },
    { name: 'Communication', hours: 4.3, color: '#A3B18A' },
    { name: 'Other', hours: 3.2, color: '#E6E6FA' }
  ];

  const wellnessInsights = [
    {
      icon: TrendingUp,
      title: "Screen Time Reduction",
      value: "32%",
      trend: "down",
      description: "You've reduced your daily screen time by 32% this month. Excellent progress!"
    },
    {
      icon: Heart,
      title: "Mood Stability",
      value: "8.2/10",
      trend: "up",
      description: "Your mood has been consistently positive with an average of 8.2 out of 10."
    },
    {
      icon: Focus,
      title: "Focus Sessions",
      value: "85%",
      trend: "up",
      description: "You completed 85% of your planned focus sessions this week."
    },
    {
      icon: Target,
      title: "Daily Goals",
      value: "6/7",
      trend: "up",
      description: "You've met your wellness goals 6 out of 7 days this week."
    }
  ];

  const recommendations = [
    {
      category: "Screen Time",
      title: "Optimize Your Evening Routine",
      description: "Your screen time peaks between 8-10 PM. Try implementing a digital sunset routine 1 hour before bed to improve sleep quality.",
      action: "Set Evening Reminder"
    },
    {
      category: "Focus",
      title: "Extend Your Focus Sessions",
      description: "You consistently complete 25-minute sessions. Consider gradually increasing to 30-35 minutes to build deeper concentration.",
      action: "Adjust Timer Settings"
    },
    {
      category: "Mood",
      title: "Morning Meditation",
      description: "Your mood scores are highest on days when you log entries before 9 AM. Consider adding a morning mindfulness practice.",
      action: "Schedule Morning Check-in"
    },
    {
      category: "Balance",
      title: "Weekend Digital Detox",
      description: "Your weekend screen time is 40% lower than weekdays. This healthy pattern is contributing to your overall wellness.",
      action: "Maintain Current Pattern"
    }
  ];

  const getCurrentData = () => {
    const data = mockData[timeRange] || mockData.week;
    switch (selectedMetric) {
      case 'mood':
        return data.mood;
      case 'focus':
        return data.focus;
      default:
        return data.screenTime;
    }
  };

  const getChartTitle = () => {
    const timeLabel = timeRange === 'week' ? 'Weekly' : timeRange === 'month' ? 'Monthly' : 'Quarterly';
    const metricLabel = selectedMetric === 'screen-time' ? 'Screen Time' : 
                       selectedMetric === 'mood' ? 'Mood Trends' : 'Focus Sessions';
    return `${timeLabel} ${metricLabel}`;
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div>
              <h1 className="text-4xl font-serif mb-2">
                <span className="text-gradient">Analytics & Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Deep insights into your digital wellness journey
              </p>
            </div>
            
            {/* Filters */}
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <div className="relative">
                <select 
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value as any)}
                  className="appearance-none bg-white/80 backdrop-blur-sm border border-primary/30 rounded-xl px-4 py-2 pr-8 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary/50"
                >
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="quarter">This Quarter</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
              </div>
              
              <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {wellnessInsights.map((insight, index) => {
            const Icon = insight.icon;
            return (
              <Card key={index} className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 gradient-gold rounded-xl flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className={`text-sm font-medium ${insight.trend === 'up' ? 'text-secondary' : 'text-accent'}`}>
                      {insight.trend === 'up' ? '↗' : '↘'} {insight.value}
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{insight.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{insight.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Charts */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Primary Chart */}
          <Card className="lg:col-span-2 bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  <span>{getChartTitle()}</span>
                </CardTitle>
                <div className="flex space-x-2">
                  {(['screen-time', 'mood', 'focus'] as const).map((metric) => (
                    <Button
                      key={metric}
                      variant={selectedMetric === metric ? "default" : "ghost"}
                      size="sm"
                      onClick={() => setSelectedMetric(metric)}
                      className={selectedMetric === metric ? "gradient-gold text-white" : ""}
                    >
                      {metric === 'screen-time' && <Monitor className="w-4 h-4 mr-1" />}
                      {metric === 'mood' && <Heart className="w-4 h-4 mr-1" />}
                      {metric === 'focus' && <Focus className="w-4 h-4 mr-1" />}
                      {metric.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </Button>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                {selectedMetric === 'screen-time' ? (
                  <AreaChart data={getCurrentData()}>
                    <defs>
                      <linearGradient id="screenTimeGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(212, 175, 55, 0.2)" />
                    <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="hours" 
                      stroke="#D4AF37" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#screenTimeGradient)" 
                    />
                    <Line 
                      type="monotone" 
                      dataKey="goal" 
                      stroke="#B76E79" 
                      strokeDasharray="5 5"
                      strokeWidth={2}
                    />
                  </AreaChart>
                ) : selectedMetric === 'mood' ? (
                  <LineChart data={getCurrentData()}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(183, 110, 121, 0.2)" />
                    <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                    <YAxis domain={[0, 10]} tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Line 
                      type="monotone" 
                      dataKey="mood" 
                      stroke="#B76E79" 
                      strokeWidth={3}
                      dot={{ fill: '#B76E79', strokeWidth: 2, r: 4 }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="energy" 
                      stroke="#2C7A7B" 
                      strokeWidth={2}
                      dot={{ fill: '#2C7A7B', strokeWidth: 2, r: 3 }}
                    />
                  </LineChart>
                ) : (
                  <BarChart data={getCurrentData()}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(44, 122, 123, 0.2)" />
                    <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip />
                    <Bar dataKey="sessions" fill="#2C7A7B" radius={4} />
                  </BarChart>
                )}
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* App Usage Breakdown */}
          <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-accent" />
                <span>App Usage</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={appUsageData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={2}
                    dataKey="hours"
                  >
                    {appUsageData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              
              <div className="space-y-2 mt-4">
                {appUsageData.map((item, index) => (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <div 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-foreground">{item.name}</span>
                    </div>
                    <span className="text-muted-foreground">{item.hours}h</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recommendations */}
        <Card className="bg-white/60 backdrop-blur-sm border-primary/20 shadow-xl">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="w-5 h-5 text-primary" />
              <span>Personalized Recommendations</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {recommendations.map((rec, index) => (
                <div key={index} className="bg-white/80 rounded-xl p-6 border border-primary/20 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-xs font-medium px-2 py-1 gradient-gold text-white rounded-full">
                          {rec.category}
                        </span>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">{rec.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{rec.description}</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="border-primary/30 hover:bg-primary/10 mt-4"
                  >
                    {rec.action}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}