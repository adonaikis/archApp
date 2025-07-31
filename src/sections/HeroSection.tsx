'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, Download, Users, BookOpen, Play, Star, TrendingUp } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import gsap from 'gsap';

const statsData = [
  { label: 'Documents', value: '110 +', icon: BookOpen, color: 'text-gray-900' },
  { label: 'Téléchargements', value: '3 000 +', icon: Download, color: 'text-green-600' },
  { label: 'Utilisateurs', value: '204 +', icon: Users, color: 'text-purple-600' },
];

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo('.hero-badge', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      );

      gsap.fromTo('.hero-title', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.2, ease: 'power3.out' }
      );

      gsap.fromTo('.hero-subtitle', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: 'power3.out' }
      );

      gsap.fromTo('.hero-cta', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
      );

      // Stats animation
      gsap.fromTo('.stat-item', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.1, 
          delay: 0.8, 
          ease: 'back.out(1.7)' 
        }
      );

      // Image and card animations
      gsap.fromTo('.hero-image', 
        { opacity: 0, scale: 0.8, rotation: -5 },
        { 
          opacity: 1, 
          scale: 1, 
          rotation: 0,
          duration: 1.2, 
          delay: 0.3, 
          ease: 'back.out(1.7)' 
        }
      );

      gsap.fromTo('.floating-card', 
        { opacity: 0, y: 50, x: -30 },
        { 
          opacity: 1, 
          y: 0, 
          x: 0,
          duration: 1, 
          delay: 0.8, 
          ease: 'back.out(1.7)' 
        }
      );

      gsap.fromTo('.blue-circle', 
        { opacity: 0, scale: 0 },
        { 
          opacity: 1, 
          scale: 1,
          duration: 0.8, 
          delay: 1, 
          ease: 'back.out(1.7)' 
        }
      );

      // Floating animations
      gsap.to('.floating-star', {
        y: -10,
        rotation: 360,
        duration: 3,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });

      gsap.to('.floating-card', {
        y: -8,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        delay: 1.5
      });

      gsap.to('.blue-circle', {
        rotation: 360,
        duration: 20,
        ease: 'none',
        repeat: -1,
        delay: 1.2
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToLibrary = () => {
    const element = document.querySelector('#bibliotheque');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleScrollToAbout = () => {
    const element = document.querySelector('#apropos');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <section id="accueil" ref={heroRef} className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden pt-20 lg:pt-5">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/20 to-purple-100/20 rounded-full blur-3xl"></div>
        
        {/* Floating stars */}
        <div className="floating-star absolute top-32 right-1/4 w-6 h-6 text-yellow-400">
          <Star className="w-full h-full fill-current" />
        </div>
        <div className="floating-star absolute top-1/2 right-20 w-4 h-4 text-purple-400">
          <Star className="w-full h-full fill-current" />
        </div>
        <div className="floating-star absolute bottom-1/3 left-1/4 w-5 h-5 text-blue-400">
          <Star className="w-full h-full fill-current" />
        </div>
      </div>

      <div className="container relative max-w-7xl z-10 px-4 sm:px-6 mx-auto lg:px-8 lg:pt-20 pt-10 pb-5">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Badge */}
            <div className="hero-badge inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-gray-200/50 px-4 py-2 rounded-full mb-8 shadow-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-gray-700">Nouvelle version disponible</span>
            </div>

            {/* Main heading */}
            <h1 className="hero-title text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bienvenue{' '}
              <span className="text-blue-600">dans la</span>
              <br />
              <span className="text-blue-600">bibliothèque en</span>
              <br />
              ligne
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-lg sm:text-xl text-gray-600 mb-12 leading-relaxed max-w-lg">
              Découvrez des milliers de documents éducatifs de qualité. 
              ArchAdo vous donne accès à une bibliothèque numérique 
              complète pour enrichir vos connaissances et réussir vos études.
            </p>

            {/* CTA Buttons */}
            <div className="hero-cta flex flex-col sm:flex-row gap-4 mb-16">
              <Button 
                onClick={handleScrollToLibrary}
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-xl text-md transition-all duration-300 group flex items-center justify-center shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <BookOpen className="mr-2 w-5 h-5" />
                Consulter la bibliothèque
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                onClick={handleScrollToAbout}
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:border-gray-400 font-semibold px-8 py-4 rounded-xl text-md flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Play className="mr-2 w-5 h-5" />
                Voir nos parcours
              </Button>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8">
              {statsData.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="stat-item">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start mb-2">
                      <Icon className={`w-5 h-5 mr-0 sm:mr-2 mb-1 sm:mb-0 ${stat.color}`} />
                      <div className={`text-xl sm:text-2xl font-bold ${stat.color} text-center sm:text-left`}>
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-gray-600 text-xs sm:text-sm font-medium text-center sm:text-left">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Content - Modern Visual Design */}
          <div className="relative flex items-center justify-center" ref={imageRef}>
            {/* Main Image Container */}
            <div className="hero-image relative">
              <div className="w-80 h-96 sm:w-96 sm:h-[450px] bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-3xl shadow-2xl overflow-hidden relative">
                {/* Professional woman image placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                <img 
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
                  alt="Professional woman"
                  className="w-full h-full object-cover object-center"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"></div>
                
                {/* Content overlay */}
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 text-sm">Document Récent</h3>
                          <p className="text-xs text-gray-500">Mathématiques Avancées</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-lg font-bold text-gray-900">85%</div>
                        <div className="text-xs text-gray-500">Progression</div>
                      </div>
                    </div>
                    
                    {/* Progress bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div className="bg-blue-600 h-2 rounded-full transition-all duration-1000" style={{ width: '85%' }}></div>
                    </div>
                    
                    {/* Stats */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium text-gray-700">4.8</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Download className="w-4 h-4 text-gray-400" />
                          <span className="text-sm font-medium text-gray-700">1.2k</span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-xs">
                        Continuer
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="floating-card absolute -left-8 top-16 sm:-left-12 sm:top-20">
              <div className="bg-white rounded-2xl shadow-xl p-4 border border-gray-100 backdrop-blur-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">Livre</div>
                    <div className="text-xs text-gray-500">Mathematique</div>
                  </div>
                </div>
                <div className="text-xs text-green-600 font-medium mb-2">+12% ce mois</div>
                <div className="space-y-1">
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-blue-500 h-1 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-1">
                    <div className="bg-purple-500 h-1 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Blue Circle with Arrow */}
            <div className="blue-circle absolute -right-4 top-8 sm:-right-8 sm:top-12">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-500 rounded-full flex items-center justify-center shadow-xl">
                <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}