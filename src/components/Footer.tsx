import React from 'react';
import { Sparkles, Heart, Mail, MapPin, Phone, Instagram, Twitter, Facebook, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const footerLinks = {
    Product: [
      { label: 'Features', href: '#features' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Premium', href: '#premium' },
      { label: 'Downloads', href: '#downloads' }
    ],
    Company: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#careers' },
      { label: 'Press', href: '#press' },
      { label: 'Blog', href: '#blog' }
    ],
    Resources: [
      { label: 'Help Center', href: '#help' },
      { label: 'Wellness Guide', href: '#guide' },
      { label: 'Community', href: '#community' },
      { label: 'API Docs', href: '#api' }
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#privacy' },
      { label: 'Terms of Service', href: '#terms' },
      { label: 'Cookie Policy', href: '#cookies' },
      { label: 'GDPR', href: '#gdpr' }
    ]
  };

  const socialLinks = [
    { icon: Instagram, href: '#instagram', label: 'Instagram' },
    { icon: Twitter, href: '#twitter', label: 'Twitter' },
    { icon: Facebook, href: '#facebook', label: 'Facebook' },
    { icon: Linkedin, href: '#linkedin', label: 'LinkedIn' }
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-white/95 via-blue-50/80 to-purple-50/90 border-t border-primary/20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-48 h-48 gradient-gold rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 gradient-rose-gold rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-16 border-b border-primary/20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 border border-primary/30 shadow-lg mb-6">
              <Heart className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium text-gradient">Stay Connected</span>
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-4">
              Join Our <span className="text-gradient">Wellness Community</span>
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Get exclusive wellness tips, mindfulness exercises, and early access to new features.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-white/80 backdrop-blur-sm border border-primary/30 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 font-medium"
              />
              <Button className="gradient-gold text-white px-8 py-4 font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-serif font-bold text-gradient">Serenique</h4>
                  <p className="text-sm text-muted-foreground">Your Mind, Your Balance</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Premium digital wellness platform designed to help you create a balanced, 
                mindful relationship with technology through elegant design and powerful features.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>hello@serenique.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h5 className="font-semibold text-foreground mb-4">{category}</h5>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="py-8 border-t border-primary/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © 2024 Serenique. All rights reserved. Made with{' '}
                <Heart className="w-4 h-4 inline text-accent" />{' '}
                for your wellness journey.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground font-medium">Follow us:</span>
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-10 h-10 bg-white/80 backdrop-blur-sm border border-primary/30 rounded-xl flex items-center justify-center shadow-lg hover:gradient-gold hover:text-white transition-all duration-300 group"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}