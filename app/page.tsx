'use client';

import Header from '@/src/layout/Header';
import HeroSection from '@/src/sections/HeroSection';
import AboutSection from '@/src/sections/AboutSection';
import Footer from '@/src/layout/Footer';
import LibrarySection from '@/src/sections/LibrarySection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Header />
      <HeroSection />
      <AboutSection />
      <LibrarySection />
      <Footer />
    </main>
  );
}