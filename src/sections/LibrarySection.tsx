'use client';

import { useState, useEffect, useRef } from 'react';
import { Download, Eye, FileText, BookOpen, FileImage, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const documentsData = [
  {
    id: 1,
    title: 'Algèbre Linéaire - Cours Complet',
    description: 'Cours complet d\'algèbre linéaire avec exercices corrigés et applications pratiques',
    category: 'mathématiques',
    level: 'Université',
    year: '2024',
    format: 'PDF',
    size: '2.5 Mo',
    downloads: 1300,
    rating: 4.8,
    author: 'Professeure Marie Dubois',
    tags: ['algèbre', 'mathématiques', 'université'],
    icon: FileText,
    color: 'bg-red-500'
  },
  {
    id: 2,
    title: 'Introduction à la Physique Quantique',
    description: 'Manuel d\'introduction aux concepts fondamentaux de la physique quantique',
    category: 'sciences',
    level: 'Lycée',
    year: '2024',
    format: 'PDF',
    size: '3.2 Mo',
    downloads: 890,
    rating: 4.6,
    author: 'Dr Jean Martin',
    tags: ['physique', 'quantique', 'sciences'],
    icon: FileText,
    color: 'bg-blue-500'
  },
  {
    id: 3,
    title: 'Analyse Littéraire - Méthodes et Techniques',
    description: 'Guide pratique pour l\'analyse littéraire avec exemples d\'œuvres classiques',
    category: 'littérature',
    level: 'Lycée',
    year: '2023',
    format: 'PDF',
    size: '1.8 Mo',
    downloads: 670,
    rating: 4.7,
    author: 'Prof. Sophie Laurent',
    tags: ['littérature', 'analyser', 'méthodes'],
    icon: BookOpen,
    color: 'bg-purple-500'
  },
  {
    id: 4,
    title: 'Histoire de France - Révolution Française',
    description: 'Étude approfondie de la Révolution française et ses conséquences',
    category: 'histoire',
    level: 'Collège',
    year: '2024',
    format: 'PDF',
    size: '4.1 Mo',
    downloads: 1100,
    rating: 4.9,
    author: 'Professeur Pierre Moreau',
    tags: ['histoire', 'révolution', 'France'],
    icon: FileText,
    color: 'bg-orange-500'
  },
  {
    id: 5,
    title: 'Grammaire anglaise avancée',
    description: 'Manuel complet de grammaire anglaise pour niveau avancé',
    category: 'langues',
    level: 'Université',
    year: '2024',
    format: 'PDF',
    size: '2.9 Mo',
    downloads: 780,
    rating: 4.5,
    author: 'Professeure Emma Thompson',
    tags: ['anglais', 'grammaire', 'langues'],
    icon: BookOpen,
    color: 'bg-green-500'
  },
  {
    id: 6,
    title: 'Techniques de Dessin - Perspective',
    description: 'Guide pratique pour maîtriser les techniques de perspective en dessin',
    category: 'arts',
    level: 'Lycée',
    year: '2023',
    format: 'PDF',
    size: '5.2 Mo',
    downloads: 520,
    rating: 4.4,
    author: 'Prof. Lucas Artiste',
    tags: ['dessin', 'perspective', 'arts'],
    icon: FileImage,
    color: 'bg-pink-500'
  }
];

export default function LibrarySection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredDocuments, setFilteredDocuments] = useState(documentsData);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.library-header', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.library-header',
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.document-card', 
        { opacity: 0, y: 50, scale: 0.95 },
        { 
          opacity: 1, 
          y: 0, 
          scale: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.documents-grid',
            start: 'top 80%',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    let filtered = documentsData;

    if (searchTerm) {
      filtered = filtered.filter(doc => 
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredDocuments(filtered);
  }, [searchTerm]);

  return (
    <section id="bibliotheque" ref={sectionRef} className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="library-header max-w-4xl mx-auto mb-16">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Documents Populaires
              </h2>
              <p className="text-lg text-gray-600">
                Découvrez les ressources les plus appréciées par notre communauté
              </p>
            </div>
            <Button 
              variant="ghost" 
              className="text-gray-600 hover:text-gray-900 flex items-center space-x-2"
            >
              <span>Voir tout</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Documents Grid */}
        <div className="documents-grid">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {filteredDocuments.map((document) => {
              const Icon = document.icon;
              return (
                <div
                  key={document.id}
                  className="document-card bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  {/* Document header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-8 h-8 ${document.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <Button size="sm" variant="ghost" className="p-1 h-auto">
                      <FileText className="w-4 h-4 text-gray-400" />
                    </Button>
                  </div>

                  {/* Document info */}
                  <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {document.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                    {document.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {document.tags.slice(0, 3).map((tag, index) => (
                      <span 
                        key={tag}
                        className={`px-2 py-1 text-xs rounded-full ${
                          index === 0 ? 'bg-blue-100 text-blue-700' :
                          index === 1 ? 'bg-gray-100 text-gray-700' :
                          'bg-purple-100 text-purple-700'
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                    {document.tags.length > 3 && (
                      <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-500">
                        +{document.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Author and year */}
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                    <span>{document.author}</span>
                    <span>{document.year}</span>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <Download className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{document.downloads}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{document.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        document.format === 'PDF' ? 'bg-red-100 text-red-700' :
                        document.format === 'Video' ? 'bg-blue-100 text-blue-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {document.format}
                      </span>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        document.level === 'Université' ? 'bg-purple-100 text-purple-700' :
                        document.level === 'Lycée' ? 'bg-orange-100 text-orange-700' :
                        'bg-blue-100 text-blue-700'
                      }`}>
                        {document.level}
                      </span>
                    </div>
                  </div>

                  {/* Size */}
                  <div className="text-sm text-gray-500 mb-4">
                    {document.size}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" className="flex-1 border-gray-300 hover:bg-gray-50">
                      <Eye className="w-4 h-4 mr-2" />
                      Aperçu
                    </Button>
                    <Button size="sm" className="flex-1 bg-gray-900 hover:bg-gray-800 text-white">
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}