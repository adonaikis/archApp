'use client';

import { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Home, Info, Library, Mail, HelpCircle, Search } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import Link from 'next/link';

const navigationItems = [
  { name: 'Accueil', href: '/', icon: Home },
  { name: 'Bibliothèque', href: '#', icon: Library },
  { name: 'À propos de', href: '#', icon: Info },
  { name: 'Contact', href: '/contact', icon: Mail },
  { name: 'FAQ', href: '/faq', icon: HelpCircle },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-sm' 
          : 'bg-white backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href='/'>
            <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex flex-col">
                    <span className="text-xl font-bold gradient-text">ArchAdo</span>
                    <span className="text-xs text-gray-600">Bibliothèque Numérique</span>
                    </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navigationItems.map((item) => (
              <Button
                asChild
                key={item.name}
                className="text-gray-600 border-0 shadow-none bg-transparent hover:text-gray-100 transition-colors duration-200 font-medium flex items-center space-x-2"
              >
                <Link href={item.href}>
                    <item.icon className="w-4 h-4" />
                    <span className='text-sm'>{item.name}</span>
                </Link>
              </Button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex md:items-center lg:items-end flex-1 max-w-md mx-8">
            <div className="relative w-full items-end">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Rechercher des documents"
                className="pl-10 pr-4 py-2 w-full bg-gray-50 border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button size="sm" className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gray-900 hover:bg-gray-800 text-white px-3 py-1 rounded-md">
                <Search className="w-3 h-3" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            {isMenuOpen ? <X className="w-6 h-6 text-gray-900" /> : <Menu className="w-6 h-6 text-gray-900" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 py-4 bg-white rounded-2xl border border-gray-200 shadow-lg">
            <div className="flex flex-col space-y-2">
              {/* Mobile Search */}
              <div className="px-4 mb-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    type="text"
                    placeholder="Rechercher des documents"
                    className="pl-10 pr-4 py-2 w-full bg-gray-50 border-gray-200 rounded-lg text-sm"
                  />
                </div>
              </div>
              
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    asChild
                    key={item.name}
                    className="flex items-center border-0 shadow-none bg-transparent space-x-3 px-4 py-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-all duration-200 mx-2"
                  >
                    <Link href={item.href}>
                        <Icon className="w-5 h-5" />
                        <span>{item.name}</span>
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}