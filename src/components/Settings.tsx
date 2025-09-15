import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Switch } from './ui/switch';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { 
  User, 
  Bell, 
  Shield, 
  Smartphone, 
  Moon, 
  Sun, 
  Camera,
  Mail,
  Lock,
  Trash2,
  LogOut,
  Save,
  Plus,
  X,
  Eye,
  EyeOff,
  Download,
  Upload
} from 'lucide-react';

export function Settings() {
  // Profile state
  const [profile, setProfile] = useState({
    name: 'Sarah Chen',
    email: 'sarah.chen@example.com',
    avatar: null as string | null
  });

  // Notification settings
  const [notifications, setNotifications] = useState({
    moodReminders: true,
    focusBreaks: true,
    screenTimeAlerts: true,
    weeklyReports: true,
    motivationalTips: false,
    emailNotifications: true,
    pushNotifications: true,
    reminderFrequency: 'daily',
    focusBreakInterval: '20'
  });

  // Blocked apps/sites
  const [blockedItems, setBlockedItems] = useState([
    { id: '1', name: 'Facebook', type: 'website', url: 'facebook.com' },
    { id: '2', name: 'Instagram', type: 'app', url: 'instagram.com' },
    { id: '3', name: 'Twitter', type: 'website', url: 'twitter.com' },
    { id: '4', name: 'TikTok', type: 'app', url: 'tiktok.com' },
    { id: '5', name: 'YouTube', type: 'website', url: 'youtube.com' }
  ]);

  // Theme and security
  const [theme, setTheme] = useState<'light' | 'dark' | 'auto'>('light');
  const [showPassword, setShowPassword] = useState(false);
  const [newItem, setNewItem] = useState({ name: '', url: '', type: 'website' });

  // Password change
  const [passwordData, setPasswordData] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const handleProfileUpdate = () => {
    // Handle profile update logic
    console.log('Profile updated:', profile);
  };

  const handleNotificationUpdate = (key: string, value: any) => {
    setNotifications(prev => ({ ...prev, [key]: value }));
  };

  const addBlockedItem = () => {
    if (newItem.name && newItem.url) {
      const item = {
        id: Date.now().toString(),
        name: newItem.name,
        type: newItem.type,
        url: newItem.url
      };
      setBlockedItems([...blockedItems, item]);
      setNewItem({ name: '', url: '', type: 'website' });
    }
  };

  const removeBlockedItem = (id: string) => {
    setBlockedItems(blockedItems.filter(item => item.id !== id));
  };

  const handlePasswordChange = () => {
    if (passwordData.new !== passwordData.confirm) {
      alert('New passwords do not match');
      return;
    }
    // Handle password change logic
    console.log('Password changed');
    setPasswordData({ current: '', new: '', confirm: '' });
  };

  const exportData = () => {
    // Handle data export
    console.log('Exporting user data...');
  };

  const deleteAccount = () => {
    if (confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      // Handle account deletion
      console.log('Account deletion requested');
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-serif mb-2">
            <span className="text-gradient">Settings</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Customize your Serenique experience
          </p>
        </div>

        <div className="space-y-8">
          {/* Profile Settings */}
          <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <User className="w-5 h-5 text-primary" />
                <span>Profile Settings</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Avatar Section */}
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <Avatar className="w-20 h-20">
                    <AvatarImage src={profile.avatar || undefined} />
                    <AvatarFallback className="gradient-gold text-white text-xl font-semibold">
                      {profile.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full gradient-rose-gold text-white p-0"
                  >
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">Profile Photo</h3>
                  <p className="text-sm text-muted-foreground">
                    Upload a profile picture to personalize your account
                  </p>
                  <div className="flex space-x-2 mt-2">
                    <Button variant="outline" size="sm" className="border-primary/30">
                      <Upload className="w-4 h-4 mr-2" />
                      Upload
                    </Button>
                    <Button variant="outline" size="sm" className="border-destructive/30 text-destructive">
                      Remove
                    </Button>
                  </div>
                </div>
              </div>

              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    value={profile.name}
                    onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                    className="bg-white/60 border-primary/30"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    className="bg-white/60 border-primary/30"
                  />
                </div>
              </div>

              <Button 
                onClick={handleProfileUpdate}
                className="gradient-gold text-white"
              >
                <Save className="w-4 h-4 mr-2" />
                Save Profile
              </Button>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Bell className="w-5 h-5 text-accent" />
                <span>Notifications & Reminders</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Notification Toggles */}
              <div className="space-y-4">
                {[
                  { key: 'moodReminders', label: 'Mood Check-in Reminders', desc: 'Daily reminders to log your mood' },
                  { key: 'focusBreaks', label: 'Focus Break Notifications', desc: 'Alerts during extended screen time' },
                  { key: 'screenTimeAlerts', label: 'Screen Time Alerts', desc: 'Notifications when approaching daily limits' },
                  { key: 'weeklyReports', label: 'Weekly Progress Reports', desc: 'Summary of your wellness journey' },
                  { key: 'motivationalTips', label: 'Daily Wellness Tips', desc: 'Mindfulness and wellness suggestions' },
                  { key: 'emailNotifications', label: 'Email Notifications', desc: 'Receive updates via email' },
                  { key: 'pushNotifications', label: 'Push Notifications', desc: 'Real-time app notifications' }
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between p-4 bg-white/60 rounded-xl border border-primary/20">
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground">{item.label}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                    <Switch
                      checked={notifications[item.key as keyof typeof notifications] as boolean}
                      onCheckedChange={(checked) => handleNotificationUpdate(item.key, checked)}
                    />
                  </div>
                ))}
              </div>

              {/* Frequency Settings */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Reminder Frequency
                  </label>
                  <select 
                    value={notifications.reminderFrequency}
                    onChange={(e) => handleNotificationUpdate('reminderFrequency', e.target.value)}
                    className="w-full px-3 py-2 bg-white/60 border border-primary/30 rounded-lg"
                  >
                    <option value="never">Never</option>
                    <option value="daily">Daily</option>
                    <option value="twice-daily">Twice Daily</option>
                    <option value="weekly">Weekly</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Focus Break Interval (minutes)
                  </label>
                  <select 
                    value={notifications.focusBreakInterval}
                    onChange={(e) => handleNotificationUpdate('focusBreakInterval', e.target.value)}
                    className="w-full px-3 py-2 bg-white/60 border border-primary/30 rounded-lg"
                  >
                    <option value="15">15 minutes</option>
                    <option value="20">20 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="60">60 minutes</option>
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Blocked Apps & Sites */}
          <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Smartphone className="w-5 h-5 text-secondary" />
                <span>Blocked Apps & Websites</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Add New Item */}
              <div className="grid md:grid-cols-4 gap-4">
                <Input
                  placeholder="App/Site name"
                  value={newItem.name}
                  onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                  className="bg-white/60 border-primary/30"
                />
                <Input
                  placeholder="URL or package name"
                  value={newItem.url}
                  onChange={(e) => setNewItem({ ...newItem, url: e.target.value })}
                  className="bg-white/60 border-primary/30"
                />
                <select 
                  value={newItem.type}
                  onChange={(e) => setNewItem({ ...newItem, type: e.target.value })}
                  className="px-3 py-2 bg-white/60 border border-primary/30 rounded-lg"
                >
                  <option value="website">Website</option>
                  <option value="app">Mobile App</option>
                </select>
                <Button 
                  onClick={addBlockedItem}
                  className="gradient-gold text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add
                </Button>
              </div>

              {/* Blocked Items List */}
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {blockedItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 bg-white/60 rounded-xl border border-primary/20">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        item.type === 'app' ? 'bg-secondary' : 'gradient-rose-gold'
                      }`}>
                        <Smartphone className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{item.name}</p>
                        <p className="text-sm text-muted-foreground">{item.url} • {item.type}</p>
                      </div>
                    </div>
                    <Button
                      onClick={() => removeBlockedItem(item.id)}
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:bg-destructive/10"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Theme Preferences */}
          <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sun className="w-5 h-5 text-primary" />
                <span>Theme Preferences</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {[
                  { value: 'light', icon: Sun, label: 'Light Mode' },
                  { value: 'dark', icon: Moon, label: 'Dark Mode' },
                  { value: 'auto', icon: Smartphone, label: 'Auto' }
                ].map((option) => {
                  const Icon = option.icon;
                  return (
                    <button
                      key={option.value}
                      onClick={() => setTheme(option.value as any)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                        theme === option.value
                          ? 'border-primary bg-primary/10'
                          : 'border-primary/20 bg-white/60 hover:bg-white/80'
                      }`}
                    >
                      <Icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                      <p className="text-sm font-medium text-foreground">{option.label}</p>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          {/* Security & Account */}
          <Card className="bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-destructive" />
                <span>Security & Account</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Password Change */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Change Password</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Current password"
                      value={passwordData.current}
                      onChange={(e) => setPasswordData({ ...passwordData, current: e.target.value })}
                      className="bg-white/60 border-primary/30 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </Button>
                  </div>
                  <Input
                    type="password"
                    placeholder="New password"
                    value={passwordData.new}
                    onChange={(e) => setPasswordData({ ...passwordData, new: e.target.value })}
                    className="bg-white/60 border-primary/30"
                  />
                  <Input
                    type="password"
                    placeholder="Confirm new password"
                    value={passwordData.confirm}
                    onChange={(e) => setPasswordData({ ...passwordData, confirm: e.target.value })}
                    className="bg-white/60 border-primary/30"
                  />
                </div>
                <Button 
                  onClick={handlePasswordChange}
                  className="gradient-rose-gold text-white"
                >
                  <Lock className="w-4 h-4 mr-2" />
                  Update Password
                </Button>
              </div>

              {/* Data Management */}
              <div className="space-y-4 pt-6 border-t border-primary/20">
                <h4 className="font-semibold text-foreground">Data Management</h4>
                <div className="flex flex-wrap gap-4">
                  <Button 
                    onClick={exportData}
                    variant="outline" 
                    className="border-primary/30 hover:bg-primary/10"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Export Data
                  </Button>
                  <Button variant="outline" className="border-primary/30 hover:bg-primary/10">
                    <LogOut className="w-4 h-4 mr-2" />
                    Sign Out
                  </Button>
                  <Button 
                    onClick={deleteAccount}
                    variant="outline" 
                    className="border-destructive/30 text-destructive hover:bg-destructive/10"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete Account
                  </Button>
                </div>
              </div>

              {/* Privacy Notice */}
              <div className="bg-muted/50 rounded-xl p-4 border border-primary/20">
                <h5 className="font-medium text-foreground mb-2">Privacy & Data Protection</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your wellness data is encrypted and stored securely. We never share your personal information 
                  with third parties. You can export or delete your data at any time.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}