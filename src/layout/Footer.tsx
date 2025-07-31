'use client';

import { BookOpen, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import { Button } from '@/src/components/ui/button';
import { Input } from '../components/ui/input';
import { useState } from 'react';

const footerLinks = {
  'Ressources': [
    { name: 'Bibliothèque', href: '#bibliotheque' },
    { name: 'Guides d\'étude', href: '/' },
    { name: 'Vidéos éducatives', href: '/' },
    { name: 'Exercices pratiques', href: '/' }
  ],
  'Communauté': [
    { name: 'Forum d\'aide', href: '/' },
    { name: 'Contributeurs', href: '/' },
    { name: 'Témoignages', href: '/' },
    { name: 'Partenaires', href: '/' }
  ],
  'Support': [
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
    { name: 'Signaler un problème', href: '/' },
  ],
  'À propos': [
    { name: 'Notre mission', href: '/' },
    { name: 'L\'équipe', href: '/' },
  ]
};

export default function Footer() {

  const [email, setEmail] = useState("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        {/* Main footer content */}
        <div className="grid lg:grid-cols-6 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold gradient-text">ArchAdo</span>
                <span className="text-sm text-gray-400">Bibliothèque Numérique</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Votre passerelle vers la connaissance. Découvrez des milliers de ressources 
              éducatives de qualité, accessibles gratuitement pour tous les apprenants.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">contact@archado.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+243 993935866</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Kinshasa, RDC</span>
              </div>
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter section */}
        <div className="glass-effect p-8 rounded-2xl mb-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 gradient-text">
              Restez informé des nouveautés
            </h3>
            <p className="text-gray-300 mb-6">
              Recevez nos dernières ressources éducatives et actualités directement dans votre boîte mail.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                value={email}
                placeholder="Adresse email"
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white border border-gray-200 text-sm h-10 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-sm">
                S&apos;abonner
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            ArchAdo &copy; {new Date().getFullYear()} - Tous droits réservés.
          </div>

          <div className="flex items-center space-x-6">
            {/* Social links */}
            <div className="flex space-x-3">
                {[FaInstagram, FaFacebook, FaTwitter, FaLinkedin].map((Icon, index) => (
                <a
                    key={index}
                    href="javascript:void(0);"
                    className="w-9 h-9 bg-[#222] rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                    <Icon className="w-4 h-4 text-white" />
                </a>
                ))}
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-all duration-200 group"
            >
              <ArrowUp className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:-translate-y-1 transition-all" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}