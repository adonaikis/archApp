'use client';

import { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/src/components/ui/button';
import { Input } from '@/src/components/ui/input';
import { Textarea } from '@/src/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Header from '@/src/layout/Header';
import Footer from '@/src/layout/Footer';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const contactFormSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  subject: z.string().min(5, 'Le sujet doit contenir au moins 5 caractères'),
  message: z.string().min(20, 'Le message doit contenir au moins 20 caractères'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'contact@archado.com',
    description: 'Réponse sous 24h'
  },
  {
    icon: Phone,
    title: 'Téléphone',
    value: '+33 1 23 45 67 89',
    description: 'Lun-Ven 9h-18h'
  },
  {
    icon: MapPin,
    title: 'Adresse',
    value: '123 Avenue de l\'Éducation',
    description: 'Paris, France'
  }
];

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-title', 
        { opacity: 0, y: 50 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-title',
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.contact-info-card', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          stagger: 0.2, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-info-grid',
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.contact-form', 
        { opacity: 0, x: 50 },
        { 
          opacity: 1, 
          x: 0, 
          duration: 1, 
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-form',
            start: 'top 80%',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    setIsLoading(false);
    reset();

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <>
        <Header />
            <section id="contact" ref={sectionRef} className="py-30 bg-gradient-to-b from-blue-300 to-blue-300">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="contact-title text-4xl md:text-6xl font-bold mb-8">
                    Contactez
                    <span className="gradient-text"> Nous</span>
                </h2>
                <p className="text-xl text-gray-100 leading-relaxed">
                    Une question, une suggestion ou besoin d&apos;aide ? Notre équipe est là pour vous accompagner 
                    dans votre parcours éducatif.
                </p>
                </div>

                <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-5 gap-16">
                    {/* Contact Information */}
                    <div className="lg:col-span-2">
                    <div className="contact-info-grid space-y-8">
                        {contactInfo.map((info, index) => {
                        const Icon = info.icon;
                        return (
                            <div key={info.title} className="contact-info-card glass-effect p-8 rounded-2xl card-hover">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                <Icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                <h3 className="text-xl font-bold mb-2 text-white">{info.title}</h3>
                                <p className="text-gray-100 font-medium mb-1">{info.value}</p>
                                <p className="text-gray-200 text-sm">{info.description}</p>
                                </div>
                            </div>
                            </div>
                        );
                        })}
                    </div>

                    {/* Additional info */}
                    <div className="mt-12 glass-effect p-8 rounded-2xl">
                        <h3 className="text-xl font-bold mb-4 gradient-text">Support Communauté</h3>
                        <p className="text-gray-300 mb-6">
                        Rejoignez notre communauté active d'apprenants et d'éducateurs pour des échanges enrichissants.
                        </p>
                        <div className="flex space-x-4">
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
                        </div>
                    </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-3">
                    <div className="contact-form glass-effect p-8 md:p-12 rounded-2xl">
                        <h3 className="text-2xl font-bold mb-8 gradient-text">Envoyez-nous un message</h3>

                        {isSubmitted && (
                        <div className="mb-8 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center space-x-3">
                            <CheckCircle className="w-5 h-5 text-green-400" />
                            <span className="text-green-300">Message envoyé avec succès ! Nous vous répondrons bientôt.</span>
                        </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                            <Input
                                {...register('name')}
                                placeholder="Votre nom complet"
                                className="glass-effect border-white/20 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            {errors.name && (
                                <p className="text-red-400 text-sm mt-2">{errors.name.message}</p>
                            )}
                            </div>
                            <div>
                            <Input
                                {...register('email')}
                                type="email"
                                placeholder="Votre adresse email"
                                className="glass-effect border-white/20 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            {errors.email && (
                                <p className="text-red-400 text-sm mt-2">{errors.email.message}</p>
                            )}
                            </div>
                        </div>

                        <div>
                            <Input
                            {...register('subject')}
                            placeholder="Sujet de votre message"
                            className="glass-effect border-white/20 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            {errors.subject && (
                            <p className="text-red-400 text-sm mt-2">{errors.subject.message}</p>
                            )}
                        </div>

                        <div>
                            <Textarea
                            {...register('message')}
                            placeholder="Votre message détaillé..."
                            rows={6}
                            className="glass-effect border-white/20 rounded-xl p-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                            />
                            {errors.message && (
                            <p className="text-red-400 text-sm mt-2">{errors.message.message}</p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            disabled={isLoading}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-xl transition-all duration-200 group"
                        >
                            {isLoading ? (
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                <span>Envoi en cours...</span>
                            </div>
                            ) : (
                            <>
                                Envoyer le message
                                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </>
                            )}
                        </Button>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>
        <Footer />
    </>
  );
}