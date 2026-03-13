/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Croissant, 
  Coffee, 
  Cake, 
  ShoppingBag, 
  Menu as MenuIcon, 
  X, 
  Instagram, 
  Facebook, 
  Twitter, 
  Clock, 
  MapPin, 
  User,
  ChevronRight,
  Utensils,
  Cookie
} from 'lucide-react';

// Types
interface MenuItem {
  name: string;
  price: string;
  icon: React.ReactNode;
  category: 'Pastries & Desserts' | 'Bread & Snacks' | 'Drinks';
}

const MENU_ITEMS: MenuItem[] = [
  // Pastries & Desserts
  { name: 'Croissant', price: '$2.50', icon: <Croissant className="w-5 h-5" />, category: 'Pastries & Desserts' },
  { name: 'Tiramisu', price: '$4.50', icon: <Utensils className="w-5 h-5" />, category: 'Pastries & Desserts' },
  { name: 'Baklava', price: '$3.00', icon: <Utensils className="w-5 h-5" />, category: 'Pastries & Desserts' },
  { name: 'Mochi', price: '$3.50', icon: <Utensils className="w-5 h-5" />, category: 'Pastries & Desserts' },
  { name: 'Churro', price: '$2.50', icon: <Utensils className="w-5 h-5" />, category: 'Pastries & Desserts' },
  { name: 'Chocolate Cake', price: '$4.00', icon: <Cake className="w-5 h-5" />, category: 'Pastries & Desserts' },
  { name: 'Cupcake', price: '$2.00', icon: <Cake className="w-5 h-5" />, category: 'Pastries & Desserts' },
  // Bread & Snacks
  { name: 'Fresh Bread', price: '$2.00', icon: <ShoppingBag className="w-5 h-5" />, category: 'Bread & Snacks' },
  { name: 'Sandwich', price: '$3.50', icon: <ShoppingBag className="w-5 h-5" />, category: 'Bread & Snacks' },
  { name: 'Cookie', price: '$1.50', icon: <Cookie className="w-5 h-5" />, category: 'Bread & Snacks' },
  // Drinks
  { name: 'Coffee', price: '$2.50', icon: <Coffee className="w-5 h-5" />, category: 'Drinks' },
  { name: 'Tea', price: '$2.00', icon: <Coffee className="w-5 h-5" />, category: 'Drinks' },
  { name: 'Iced Tea', price: '$2.50', icon: <Coffee className="w-5 h-5" />, category: 'Drinks' },
];

const TEAM = [
  { name: 'Elena Rossi', role: 'Head Baker', bio: 'Master of sourdough with 15 years of artisan experience.', icon: <User className="w-6 h-6" /> },
  { name: 'Julian Chen', role: 'Pastry Chef', bio: 'Creating delicate French pastries that melt in your mouth.', icon: <User className="w-6 h-6" /> },
  { name: 'Sarah Miller', role: 'Barista', bio: 'Crafting the perfect brew to complement your morning treat.', icon: <User className="w-6 h-6" /> },
  { name: 'Marcus Thorne', role: 'Store Manager', bio: 'Ensuring every visit to our bakery feels like coming home.', icon: <User className="w-6 h-6" /> },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen selection:bg-peach selection:text-warm-brown">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-sand">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div 
            className="text-2xl font-serif font-bold tracking-tight cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Sweet<span className="text-warm-brown/60">Globe</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10 text-sm font-medium uppercase tracking-widest">
            {['Menu', 'About', 'Team'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="hover:text-warm-brown/60 transition-colors"
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('menu')}
              className="bg-warm-brown text-cream px-6 py-2 rounded-full hover:bg-warm-brown/90 transition-all shadow-sm"
            >
              Order Now
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-cream pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col space-y-8 text-2xl font-serif text-center">
              {['Menu', 'About', 'Team'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="hover:italic"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=2000" 
              alt="Freshly baked bread"
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-cream/50 via-cream/80 to-cream" />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-6xl md:text-8xl font-serif leading-[0.9] mb-8">
                Freshly Baked <br />
                <span className="italic">Happiness</span> Every Day
              </h1>
              <p className="text-lg md:text-xl text-warm-brown/70 mb-10 max-w-lg leading-relaxed">
                Artisan pastries, fresh bread, and warm drinks made with love in our small community kitchen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('menu')}
                  className="bg-warm-brown text-cream px-10 py-4 rounded-full text-lg font-medium hover:bg-warm-brown/90 transition-all shadow-lg flex items-center justify-center gap-2 group"
                >
                  View Menu
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute bottom-10 right-10 hidden lg:block">
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 border border-warm-brown/10 rounded-full flex items-center justify-center"
            >
              <div className="w-24 h-24 border border-warm-brown/20 rounded-full flex items-center justify-center italic text-xs uppercase tracking-widest text-warm-brown/40">
                Est. 2024
              </div>
            </motion.div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menu" className="py-32 bg-sand">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-serif mb-4">Our Daily Menu</h2>
              <div className="w-24 h-px bg-warm-brown/20 mx-auto mb-6" />
              <p className="text-warm-brown/60 uppercase tracking-widest text-sm">Handcrafted with organic ingredients</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
              {(['Pastries & Desserts', 'Bread & Snacks', 'Drinks'] as const).map((category) => (
                <div key={category}>
                  <h3 className="text-2xl font-serif mb-10 pb-4 border-b border-warm-brown/10 flex items-center gap-3">
                    {category === 'Pastries & Desserts' && <Cake className="w-6 h-6 opacity-50" />}
                    {category === 'Bread & Snacks' && <ShoppingBag className="w-6 h-6 opacity-50" />}
                    {category === 'Drinks' && <Coffee className="w-6 h-6 opacity-50" />}
                    {category}
                  </h3>
                  <div className="space-y-8">
                    {MENU_ITEMS.filter(item => item.category === category).map((item, idx) => (
                      <motion.div 
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center justify-between group cursor-default"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-peach flex items-center justify-center text-warm-brown/60 group-hover:bg-warm-brown group-hover:text-cream transition-colors">
                            {item.icon}
                          </div>
                          <span className="font-medium tracking-tight">{item.name}</span>
                        </div>
                        <div className="flex-grow mx-4 border-b border-dotted border-warm-brown/20" />
                        <span className="font-serif italic text-lg">{item.price}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 bg-cream">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1000" 
                  alt="Bakery interior"
                  className="rounded-2xl shadow-2xl z-10 relative"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-peach rounded-full -z-0 opacity-50" />
                <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-sand rounded-full -z-0 opacity-50" />
              </div>
              <div>
                <h2 className="text-5xl font-serif mb-8 leading-tight">
                  Small Bakery, <br />
                  <span className="italic">Big Heart.</span>
                </h2>
                <p className="text-lg text-warm-brown/70 leading-relaxed mb-8">
                  We are a small artisan bakery focused on fresh ingredients, handcrafted pastries, and warm community moments. Every loaf of bread and every delicate pastry is a labor of love, baked fresh in the early hours of the morning.
                </p>
                <p className="text-lg text-warm-brown/70 leading-relaxed mb-10">
                  Our journey started with a simple passion for the perfect crust and a desire to bring neighbors together over the smell of fresh coffee and warm dough.
                </p>
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-serif mb-1">100%</div>
                    <div className="text-xs uppercase tracking-widest text-warm-brown/50">Organic</div>
                  </div>
                  <div className="w-px h-10 bg-warm-brown/10" />
                  <div className="text-center">
                    <div className="text-3xl font-serif mb-1">Daily</div>
                    <div className="text-xs uppercase tracking-widest text-warm-brown/50">Fresh</div>
                  </div>
                  <div className="w-px h-10 bg-warm-brown/10" />
                  <div className="text-center">
                    <div className="text-3xl font-serif mb-1">Local</div>
                    <div className="text-xs uppercase tracking-widest text-warm-brown/50">Sourced</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-32 bg-sand">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-serif mb-4">The Hands Behind the Dough</h2>
              <div className="w-24 h-px bg-warm-brown/20 mx-auto" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {TEAM.map((member, idx) => (
                <motion.div 
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-cream p-8 rounded-3xl text-center hover-lift shadow-sm"
                >
                  <div className="w-20 h-20 bg-peach rounded-full mx-auto mb-6 flex items-center justify-center text-warm-brown/40">
                    {member.icon}
                  </div>
                  <h4 className="text-xl font-serif mb-1">{member.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-warm-brown/50 mb-4">{member.role}</p>
                  <p className="text-sm text-warm-brown/70 leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-warm-brown text-cream py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="text-3xl font-serif font-bold mb-6">SweetGlobe</div>
              <p className="text-cream/60 max-w-sm leading-relaxed">
                Bringing the timeless tradition of artisan baking to your neighborhood. Fresh, honest, and always made with love.
              </p>
            </div>
            
            <div>
              <h5 className="text-sm uppercase tracking-widest font-bold mb-6 text-cream/40">Visit Us</h5>
              <div className="space-y-4 text-sm">
                <p className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 mt-0.5 opacity-50" />
                  123 Baker Street, <br /> Flour District, NY 10001
                </p>
                <p className="flex items-start gap-3">
                  <Clock className="w-4 h-4 mt-0.5 opacity-50" />
                  Mon - Fri: 7am - 6pm <br />
                  Sat - Sun: 8am - 4pm
                </p>
              </div>
            </div>

            <div>
              <h5 className="text-sm uppercase tracking-widest font-bold mb-6 text-cream/40">Connect</h5>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-warm-brown transition-all">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-warm-brown transition-all">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-cream/20 flex items-center justify-center hover:bg-cream hover:text-warm-brown transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-cream/10 flex flex-col md:row justify-between items-center gap-6 text-xs uppercase tracking-widest text-cream/40">
            <p>© 2024 Sweet globe bakery. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
