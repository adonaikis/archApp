'use client';

import { useEffect, useRef } from 'react';
import { HelpCircle, Shield, Download, Users } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/src/components/ui/accordion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/src/layout/Header';
import Footer from '@/src/layout/Footer';

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    id: 'item-1',
    question: 'Comment accéder aux documents de la bibliothèque ?',
    answer: 'L\'accès à notre bibliothèque est entièrement gratuit. Vous pouvez consulter et télécharger tous nos documents sans inscription. Utilisez simplement notre moteur de recherche ou naviguez par catégories pour trouver les ressources qui vous intéressent.'
  },
  {
    id: 'item-2',
    question: 'Quels types de documents puis-je trouver sur ArchAdo ?',
    answer: 'Notre bibliothèque contient une grande variété de ressources éducatives : cours PDF, vidéos explicatives, exercices pratiques, guides méthodologiques, mémoires de recherche, et bien plus. Tous les niveaux sont couverts, du collège aux études supérieures.'
  },
  {
    id: 'item-3',
    question: 'Les documents sont-ils vérifiés et de qualité ?',
    answer: 'Absolument ! Chaque document est soigneusement vérifié par notre équipe d\'experts avant publication. Nous nous assurons de la qualité académique, de l\'actualité des informations et de la pertinence pédagogique de chaque ressource.'
  },
  {
    id: 'item-4',
    question: 'Comment puis-je contribuer à la bibliothèque ?',
    answer: 'Nous encourageons les contributions de qualité ! Vous pouvez soumettre vos propres ressources éducatives via notre formulaire de contact. Chaque soumission sera évaluée par notre équipe avant publication pour maintenir nos standards de qualité.'
  },
  {
    id: 'item-5',
    question: 'Y a-t-il des restrictions sur l\'utilisation des documents ?',
    answer: 'La plupart de nos documents sont sous licence Creative Commons ou domaine public. Vous pouvez les utiliser à des fins éducatives et personnelles. Pour un usage commercial, veuillez vérifier les conditions spécifiques de chaque document.'
  },
  {
    id: 'item-6',
    question: 'Comment rester informé des nouveautés ?',
    answer: 'Vous pouvez vous abonner à notre newsletter pour recevoir les dernières mises à jour, nouveaux documents et actualités éducatives. Nous publions également régulièrement sur nos réseaux sociaux.'
  },
  {
    id: 'item-7',
    question: 'La plateforme est-elle sécurisée ?',
    answer: 'La sécurité est notre priorité. Nous utilisons les derniers protocoles de sécurité pour protéger nos utilisateurs et garantir l\'intégrité de nos ressources. Tous les téléchargements sont vérifiés et exempts de malwares.'
  },
  {
    id: 'item-8',
    question: 'Puis-je utiliser ArchAdo sur mobile ?',
    answer: 'Bien sûr ! Notre plateforme est entièrement responsive et optimisée pour tous les appareils : smartphones, tablettes et ordinateurs. L\'expérience utilisateur reste fluide et intuitive sur tous les écrans.'
  }
];

const helpCategories = [
  {
    icon: HelpCircle,
    title: 'Aide Générale',
    description: 'Questions fréquentes sur l\'utilisation de la plateforme'
  },
  {
    icon: Shield,
    title: 'Sécurité',
    description: 'Informations sur la protection de vos données'
  },
  {
    icon: Download,
    title: 'Téléchargements',
    description: 'Guide pour télécharger et utiliser nos ressources'
  },
  {
    icon: Users,
    title: 'Communauté',
    description: 'Comment participer et contribuer à ArchAdo'
  }
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.faq-title', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.faq-title',
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.help-category', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.help-categories',
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.faq-accordion', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.faq-accordion',
            start: 'top 80%',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
        <Header />
            <section id="faq" ref={sectionRef} className="py-30 bg-gradient-to-b from-blue-300 to-blue-300">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="faq-title text-4xl md:text-6xl font-bold mb-8">
                    Questions
                    <span className="gradient-text"> Fréquentes</span>
                </h2>
                <p className="text-xl text-gray-100 leading-relaxed">
                    Trouvez rapidement les réponses à vos questions sur le fonctionnement 
                    de notre bibliothèque numérique et ses fonctionnalités.
                </p>
                </div>

                {/* Help Categories */}
                <div className="help-categories mb-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {helpCategories.map((category) => {
                    const Icon = category.icon;
                    return (
                        <div
                        key={category.title}
                        className="help-category glass-effect p-6 rounded-2xl text-center card-hover group"
                        >
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                            <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                            {category.title}
                        </h3>
                        <p className="text-gray-100 text-sm leading-relaxed">
                            {category.description}
                        </p>
                        </div>
                    );
                    })}
                </div>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-4xl mx-auto">
                <div className="faq-accordion glass-effect rounded-2xl p-8">
                    <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqData.map((faq) => (
                        <AccordionItem 
                        key={faq.id} 
                        value={faq.id}
                        className="border border-white/10 rounded-xl overflow-hidden"
                        >
                        <AccordionTrigger className="px-6 py-4 text-left hover:bg-white/5 transition-colors [&[data-state=open]>svg]:rotate-180">
                            <span className="text-lg font-semibold text-white pr-4">
                            {faq.question}
                            </span>
                        </AccordionTrigger>
                        <AccordionContent className="px-6 pb-4">
                            <div className="pt-2 border-t border-white/10">
                            <p className="text-gray-100 leading-relaxed">
                                {faq.answer}
                            </p>
                            </div>
                        </AccordionContent>
                        </AccordionItem>
                    ))}
                    </Accordion>
                </div>

                {/* Contact Support */}
                <div className="text-center mt-12">
                    <div className="glass-effect p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4 gradient-text">
                        Vous ne trouvez pas votre réponse ?
                    </h3>
                    <p className="text-gray-100 mb-6">
                        Notre équipe support est là pour vous aider. N&apos;hésitez pas à nous contacter.
                    </p>
                    <button 
                        onClick={() => {
                        const element = document.querySelector('#contact');
                        if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }
                        }}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-200"
                    >
                        Contactez le Support
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </section>
        <Footer />
    </>
  );
}