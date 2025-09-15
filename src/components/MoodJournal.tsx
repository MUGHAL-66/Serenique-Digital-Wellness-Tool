import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Calendar } from './ui/calendar';
import { 
  Heart, 
  Calendar as CalendarIcon, 
  TrendingUp, 
  Edit3, 
  Trash2, 
  Camera,
  Smile,
  Meh,
  Frown,
  Save,
  Plus
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

interface MoodEntry {
  id: string;
  date: string;
  mood: number;
  note: string;
  emoji: string;
}

export function MoodJournal() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentMood, setCurrentMood] = useState(5);
  const [moodNote, setMoodNote] = useState('');
  const [isEditing, setIsEditing] = useState<string | null>(null);

  // Mock mood entries
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([
    { id: '1', date: '2024-01-10', mood: 8, note: 'Had a great meditation session this morning. Feeling centered and focused.', emoji: '😊' },
    { id: '2', date: '2024-01-09', mood: 6, note: 'Work was stressful but managed to take regular breaks.', emoji: '😐' },
    { id: '3', date: '2024-01-08', mood: 9, note: 'Perfect digital detox day! Spent time in nature and felt incredibly peaceful.', emoji: '😍' },
    { id: '4', date: '2024-01-07', mood: 7, note: 'Good day overall. Practiced mindfulness during lunch break.', emoji: '🙂' },
    { id: '5', date: '2024-01-06', mood: 5, note: 'Feeling neutral today. Need to focus more on self-care.', emoji: '😑' },
  ]);

  // Mock trend data
  const moodTrendData = [
    { date: 'Jan 1', mood: 7 },
    { date: 'Jan 2', mood: 8 },
    { date: 'Jan 3', mood: 6 },
    { date: 'Jan 4', mood: 9 },
    { date: 'Jan 5', mood: 8 },
    { date: 'Jan 6', mood: 5 },
    { date: 'Jan 7', mood: 7 },
    { date: 'Jan 8', mood: 9 },
    { date: 'Jan 9', mood: 6 },
    { date: 'Jan 10', mood: 8 },
  ];

  const moodEmojis = [
    { value: 1, emoji: '😢', label: 'Very Sad' },
    { value: 2, emoji: '😟', label: 'Sad' },
    { value: 3, emoji: '😐', label: 'Okay' },
    { value: 4, emoji: '🙂', label: 'Good' },
    { value: 5, emoji: '😊', label: 'Happy' },
    { value: 6, emoji: '😄', label: 'Very Happy' },
    { value: 7, emoji: '🤗', label: 'Excited' },
    { value: 8, emoji: '😍', label: 'Loved' },
    { value: 9, emoji: '🤩', label: 'Amazing' },
    { value: 10, emoji: '🥳', label: 'Euphoric' },
  ];

  const getMoodEmoji = (mood: number) => {
    return moodEmojis.find(m => m.value === mood)?.emoji || '😐';
  };

  const getMoodLabel = (mood: number) => {
    return moodEmojis.find(m => m.value === mood)?.label || 'Neutral';
  };

  const handleSaveMood = () => {
    const newEntry: MoodEntry = {
      id: Date.now().toString(),
      date: selectedDate.toISOString().split('T')[0],
      mood: currentMood,
      note: moodNote,
      emoji: getMoodEmoji(currentMood)
    };

    setMoodEntries([newEntry, ...moodEntries]);
    setMoodNote('');
    setCurrentMood(5);
  };

  const handleDeleteEntry = (id: string) => {
    setMoodEntries(moodEntries.filter(entry => entry.id !== id));
  };

  const handleEditEntry = (entry: MoodEntry) => {
    setIsEditing(entry.id);
    setCurrentMood(entry.mood);
    setMoodNote(entry.note);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif mb-2">
            <span className="text-gradient">Mood Journal</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Track your emotional wellness journey with mindful reflection
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Mood Entry Form */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <div className="w-8 h-8 gradient-rose-gold rounded-lg flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                  <span>How are you feeling?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Mood Selector */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Select your mood (1-10)
                  </label>
                  <div className="grid grid-cols-5 gap-2 mb-4">
                    {moodEmojis.map((mood) => (
                      <button
                        key={mood.value}
                        onClick={() => setCurrentMood(mood.value)}
                        className={`
                          p-3 rounded-xl text-2xl transition-all duration-300 hover:scale-110
                          ${currentMood === mood.value 
                            ? 'gradient-rose-gold shadow-lg scale-110' 
                            : 'bg-white/60 hover:bg-white/80 shadow-md'
                          }
                        `}
                        title={mood.label}
                      >
                        {mood.emoji}
                      </button>
                    ))}
                  </div>
                  <div className="text-center">
                    <span className="text-2xl font-serif text-gradient">
                      {getMoodLabel(currentMood)}
                    </span>
                  </div>
                </div>

                {/* Mood Slider */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mood Level: {currentMood}/10
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={currentMood}
                    onChange={(e) => setCurrentMood(parseInt(e.target.value))}
                    className="w-full h-2 gradient-rose-gold rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                {/* Note Input */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What's on your mind? (optional)
                  </label>
                  <Textarea
                    placeholder="Reflect on your day, thoughts, or feelings..."
                    value={moodNote}
                    onChange={(e) => setMoodNote(e.target.value)}
                    className="min-h-[120px] bg-white/60 border-primary/30 focus:border-primary/50 rounded-xl"
                  />
                </div>

                {/* Image Upload (placeholder) */}
                <div>
                  <Button 
                    variant="outline" 
                    className="w-full border-primary/30 hover:bg-primary/10"
                  >
                    <Camera className="w-4 h-4 mr-2" />
                    Add Photo (Optional)
                  </Button>
                </div>

                {/* Save Button */}
                <Button 
                  onClick={handleSaveMood}
                  className="w-full gradient-rose-gold text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Mood Entry
                </Button>
              </CardContent>
            </Card>

            {/* Calendar */}
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CalendarIcon className="w-5 h-5 text-primary" />
                  <span>Calendar View</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={(date) => date && setSelectedDate(date)}
                  className="rounded-md border-0"
                />
              </CardContent>
            </Card>
          </div>

          {/* Mood Timeline and Trends */}
          <div className="lg:col-span-2 space-y-6">
            {/* Mood Trend Chart */}
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5 text-accent" />
                  <span>Mood Trends</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={moodTrendData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(183, 110, 121, 0.2)" />
                    <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                    <YAxis domain={[0, 10]} tick={{ fontSize: 12 }} />
                    <Line 
                      type="monotone" 
                      dataKey="mood" 
                      stroke="#B76E79" 
                      strokeWidth={3}
                      dot={{ fill: '#B76E79', strokeWidth: 2, r: 5 }}
                      activeDot={{ r: 7, fill: '#D4AF37' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-sm text-muted-foreground">Average</p>
                    <p className="text-xl font-serif text-gradient">7.3</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Best Day</p>
                    <p className="text-xl font-serif text-gradient">9.0</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Streak</p>
                    <p className="text-xl font-serif text-gradient">7 days</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Mood Timeline */}
            <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-accent" />
                  <span>Recent Entries</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {moodEntries.map((entry) => (
                    <div key={entry.id} className="bg-white/60 rounded-xl p-4 border border-primary/20 hover:shadow-lg transition-all duration-300">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="text-2xl">{entry.emoji}</div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-foreground">
                                {getMoodLabel(entry.mood)}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                {entry.mood}/10
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {formatDate(entry.date)}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleEditEntry(entry)}
                            className="text-primary hover:bg-primary/10"
                          >
                            <Edit3 className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => handleDeleteEntry(entry.id)}
                            className="text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      {entry.note && (
                        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                          {entry.note}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}