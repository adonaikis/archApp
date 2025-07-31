'use client';

import { useEffect, useRef } from 'react';
import { Target, Heart, Clock, Shield } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const valuesData = [
  {
    icon: Target,
    title: 'Mission Éducative',
    description: 'Démocratiser l\'accès à la connaissance pour tous les apprenants, partout dans le monde.'
  },
  {
    icon: Heart,
    title: 'Engagement Social',
    description: 'Contribuer à l\'éducation inclusive et soutenir les communautés défavorisées.'
  },
  {
    icon: Clock,
    title: 'Innovation Continue',
    description: 'Évoluer constamment pour offrir les meilleures solutions d\'apprentissage.'
  },
  {
    icon: Shield,
    title: 'Qualité Garantie',
    description: 'Assurer la fiabilité et la pertinence de chaque document partagé.'
  }
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo('.about-title', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-title',
            start: 'top 80%',
          }
        }
      );

      // Content animation
      gsap.fromTo('.about-content', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          delay: 0.3, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
          }
        }
      );

      // Values cards animation
      gsap.fromTo('.value-card', 
        { opacity: 0, y: 50, scale: 0.9 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.values-grid',
            start: 'top 80%',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="apropos" ref={sectionRef} className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="about-title text-white text-4xl md:text-6xl font-bold mb-8">
            À propos d&apos;
            <span className="gradient-text">ArchAdo</span>
          </h2>
          <p className="about-content text-xl text-gray-300 leading-relaxed">
            ArchAdo est né de la conviction que l&apos;éducation de qualité doit être accessible à tous. 
            Notre plateforme révolutionne l&apos;accès aux ressources éducatives en créant un écosystème 
            numérique inclusif et innovant.
          </p>
        </div>

        {/* Story section */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="about-content">
              <h3 className="text-3xl font-bold mb-6 gradient-text">Notre Histoire</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Fondée par une équipe passionnée d&apos;éducateurs et de technologues, ArchAdo 
                s&apos;inspire des défis rencontrés dans l&apos;accès équitable aux ressources éducatives.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Nous avons développé une solution complète qui combine technologie de pointe 
                et approche pédagogique centrée sur l&apos;utilisateur pour créer une expérience 
                d&apos;apprentissage exceptionnelle.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                <span className="text-sm text-gray-400 font-medium">Depuis 2020</span>
              </div>
            </div>
            
            <div className="about-content relative">
              <div className="glass-effect p-8 rounded-3xl">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                    <Target className="w-10 h-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">Notre Vision</h4>
                  <p className="text-gray-300">
                    Créer un monde où chaque personne a accès aux outils nécessaires 
                    pour développer son potentiel et contribuer positivement à la société.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values grid */}
        <div className="values-grid">
          <h3 className="text-3xl font-bold text-center mb-16 gradient-text">
            Nos Valeurs & Engagements
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {valuesData.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="value-card glass-effect p-8 rounded-2xl text-center card-hover group"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}