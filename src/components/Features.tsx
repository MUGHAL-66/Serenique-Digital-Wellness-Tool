import React from 'react';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { 
  Monitor, 
  Focus, 
  BookOpen, 
  BarChart3, 
  Moon, 
  Shield, 
  Sparkles, 
  Heart,
  Timer,
  Eye,
  Brain,
  Zap
} from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: Monitor,
      title: "Screen Time Tracker",
      description: "Monitor and analyze your digital consumption patterns with elegant, insightful charts and personalized recommendations.",
      image: "https://images.unsplash.com/photo-1726494556466-957a65147d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGV0b3glMjBuYXR1cmV8ZW58MXx8fHwxNzU3NjI2MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "gradient-gold"
    },
    {
      icon: Focus,
      title: "Focus Mode",
      description: "Enter a state of deep concentration with our premium focus sessions, complete with breathing exercises and ambient sounds.",
      image: "https://images.unsplash.com/photo-1644191468715-919925ed26e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMHplbiUyMGdhcmRlbnxlbnwxfHx8fDE3NTc2MjYyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "gradient-rose-gold"
    },
    {
      icon: BookOpen,
      title: "Mood Journal",
      description: "Capture your emotional journey with our beautifully designed mood tracking system and discover patterns in your wellbeing.",
      image: "https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjBtaW5kZnVsbmVzc3xlbnwxfHx8fDE3NTc2MjYyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "bg-secondary"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Gain deep insights into your wellness journey with comprehensive analytics and personalized growth recommendations.",
      image: "https://images.unsplash.com/photo-1667235195726-a7c440bca9bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBzcGElMjB3ZWxsbmVzc3xlbnwxfHx8fDE3NTc1ODA3NzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
      gradient: "bg-accent"
    }
  ];

  const benefits = [
    {
      icon: Timer,
      title: "Mindful Time Management",
      description: "Transform your relationship with technology through conscious time awareness."
    },
    {
      icon: Eye,
      title: "Digital Eye Care",
      description: "Protect your vision with smart break reminders and blue light awareness."
    },
    {
      icon: Brain,
      title: "Mental Clarity",
      description: "Enhance focus and cognitive performance through structured digital detox."
    },
    {
      icon: Zap,
      title: "Energy Restoration",
      description: "Reclaim your natural energy by reducing digital overwhelm and stress."
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 gradient-gold rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 gradient-rose-gold rounded-full opacity-10 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/30 shadow-lg mb-6">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-gradient">Premium Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            <span className="text-gradient">Wellness Tools</span> for Modern Life
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience a comprehensive suite of mindfulness and digital wellness tools designed 
            to help you create a balanced, intentional relationship with technology.
          </p>
        </div>

        {/* Main Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="group overflow-hidden bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <CardContent className="p-0">
                  <div className="aspect-video relative overflow-hidden">
                    <ImageWithFallback
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className={`absolute top-4 left-4 w-12 h-12 ${feature.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-serif mb-4 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary/20 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif mb-4">
              <span className="text-gradient">Wellness Benefits</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Discover the transformative impact of mindful technology use
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold mb-3 text-foreground">{benefit.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}