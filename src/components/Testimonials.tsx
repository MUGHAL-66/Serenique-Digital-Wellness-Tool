import React from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Quote, Heart, Sparkles } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Creative Director",
      avatar: "SC",
      rating: 5,
      text: "Serenique transformed my relationship with technology. The elegant interface and mindful approach helped me regain control over my digital habits. I feel more balanced and present in my daily life.",
      image: "https://images.unsplash.com/photo-1635545999375-057ee4013deb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjBtaW5kZnVsbmVzc3xlbnwxfHx8fDE3NTc2MjYyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Marcus Rodriguez",
      role: "Tech Entrepreneur",
      avatar: "MR",
      rating: 5,
      text: "As someone deeply immersed in technology, I needed a premium solution for digital wellness. Serenique's sophisticated approach and beautiful design make mindful living accessible and enjoyable.",
      image: "https://images.unsplash.com/photo-1644191468715-919925ed26e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMHplbiUyMGdhcmRlbnxlbnwxfHx8fDE3NTc2MjYyNTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    },
    {
      name: "Dr. Emma Thompson",
      role: "Wellness Coach",
      avatar: "ET",
      rating: 5,
      text: "I recommend Serenique to all my clients. The focus mode and mood tracking features are exceptional, and the premium experience truly supports long-term wellness goals. It's therapy for the digital age.",
      image: "https://images.unsplash.com/photo-1726494556466-957a65147d95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwZGV0b3glMjBuYXR1cmV8ZW58MXx8fHwxNzU3NjI2MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080"
    }
  ];

  const motivationalQuotes = [
    {
      quote: "The mind is everything. What you think you become.",
      author: "Buddha",
      icon: Heart
    },
    {
      quote: "Peace comes from within. Do not seek it without.",
      author: "Buddha",
      icon: Sparkles
    },
    {
      quote: "Mindfulness is about being fully awake in our lives.",
      author: "Jon Kabat-Zinn",
      icon: Star
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-blue-50/30 to-pink-50/50"></div>
      <div className="absolute top-20 right-10 w-64 h-64 gradient-rose-gold rounded-full opacity-10 blur-2xl"></div>
      <div className="absolute bottom-20 left-10 w-80 h-80 gradient-gold rounded-full opacity-10 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/30 shadow-lg mb-6">
            <Heart className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-gradient">Community Love</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif mb-6">
            What Our <span className="text-gradient">Community</span> Says
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join thousands of individuals who have transformed their digital wellness journey with Serenique's premium experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group bg-white/80 backdrop-blur-sm border-primary/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden">
              <CardContent className="p-0">
                {/* Background Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt="Wellness background"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Quote Icon */}
                  <div className="absolute top-6 left-6 w-12 h-12 gradient-gold rounded-full flex items-center justify-center shadow-lg">
                    <Quote className="w-6 h-6 text-white" />
                  </div>

                  {/* Stars */}
                  <div className="absolute top-6 right-6 flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <blockquote className="text-foreground leading-relaxed mb-6 italic">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12 ring-2 ring-primary/30">
                      <AvatarFallback className="gradient-rose-gold text-white font-semibold">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Motivational Quotes Section */}
        <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-primary/20 shadow-xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif mb-4">
              <span className="text-gradient">Words of Wisdom</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Inspiration for your mindfulness journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {motivationalQuotes.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 gradient-rose-gold rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <blockquote className="text-lg font-serif italic text-foreground mb-4 leading-relaxed">
                    "{item.quote}"
                  </blockquote>
                  <cite className="text-sm font-medium text-muted-foreground not-italic">
                    — {item.author}
                  </cite>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}