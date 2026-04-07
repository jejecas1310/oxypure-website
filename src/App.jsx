import React, { useState } from 'react';
import { Menu, X, Droplets, Sparkles, Phone, ArrowRight, Car, Home, Shield, ThermometerSun, Brush, CheckCircle2, ChevronRight, Mail, MapPin, Instagram, Facebook, Check, Calendar, User, Clock, Map, Navigation, AlertCircle } from 'lucide-react';

// --- COMPOSANT NAVBAR (Glassmorphism) ---
const Navbar = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-lg border-b border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center group cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="bg-gradient-to-tr from-blue-600 to-cyan-400 p-2 rounded-xl mr-3 group-hover:scale-105 transition-transform duration-300 shadow-lg shadow-cyan-200">
              <Droplets className="h-6 w-6 text-white" />
            </div>
            <span className="font-extrabold text-2xl text-slate-800 tracking-tight">
              Oxy<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">pure</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {currentPage === 'home' ? (
              <>
                <a href="#services" className="text-slate-600 hover:text-blue-600 font-semibold text-sm uppercase tracking-wider transition-colors">Services</a>
                <a href="#methodes" className="text-slate-600 hover:text-blue-600 font-semibold text-sm uppercase tracking-wider transition-colors">Expertise</a>
              </>
            ) : (
              <button onClick={() => setCurrentPage('home')} className="text-slate-600 hover:text-blue-600 font-semibold text-sm uppercase tracking-wider transition-colors">Retour à l'accueil</button>
            )}
            <button onClick={() => setCurrentPage('devis')} className="relative group overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300"></span>
              <div className="relative bg-white px-6 py-2.5 rounded-full flex items-center transition-all duration-300 group-hover:bg-opacity-0 group-hover:text-white text-slate-800 font-semibold">
                Devis express
              </div>
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-800 p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 px-2 pt-2 pb-4 space-y-1 shadow-lg absolute w-full left-0 top-20">
          {currentPage === 'home' ? (
            <>
              <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Services</a>
              <a href="#methodes" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Expertise</a>
              <a href="#avant-apres" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Avant / Après</a>
            </>
          ) : (
            <button onClick={() => { setCurrentPage('home'); setIsOpen(false); }} className="w-full text-left block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50">Retour à l'accueil</button>
          )}
          <div className="pt-2 px-3">
            <button onClick={() => { setCurrentPage('devis'); setIsOpen(false); }} className="w-full bg-blue-600 text-white px-4 py-3 rounded-xl font-medium flex items-center justify-center shadow-md">
              <Phone className="w-4 h-4 mr-2" />
              Devis gratuit
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

// --- COMPOSANT HERO SECTION (Moderne & Asymétrique) ---
const HeroSection = ({ setCurrentPage }) => {
  return (
    <div className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
            Le renouveau de vos <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500">
              intérieurs.
            </span>
          </h1>
          
          <p className="text-xl text-slate-600 mb-10 max-w-2xl">
            Véhicules, canapés et matelas. Une propreté chirurgicale, des odeurs neutralisées et des couleurs ravivées, directement à votre domicile.
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
            <button onClick={() => setCurrentPage('devis')} className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 flex items-center justify-center group">
              Voir nos tarifs et options
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button onClick={() => document.getElementById('avant-apres')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center justify-center shadow-sm hover:shadow-md">
              Voir les résultats
            </button>
          </div>
          
          {/* Texte de présentation de l'entreprise */}
          <div className="mt-16 pt-8 border-t border-slate-200/60 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-slate-500 leading-relaxed text-sm md:text-base">
              <strong className="text-slate-700">MyNexvia</strong> est une jeune entreprise basée à Colleville-Montgomery, dans le Calvados. Spécialisée dans le soin et la rénovation des textiles, notre mission est d'allier exigence et matériel haute-technologie pour redonner vie à vos intérieurs. Nous intervenons directement chez vous ou sur votre lieu de travail pour vous offrir un résultat impeccable, sans compromis sur la qualité.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

// --- COMPOSANT SERVICES (Bento Box Layout) ---
const ServicesSection = () => {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Domaines d'intervention.</h2>
            <p className="text-lg text-slate-500 max-w-lg">Cliquez sur un domaine pour explorer les détails de notre prise en charge.</p>
          </div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          
          {/* Bento Box 1 - Véhicules (Large) */}
          <div className="md:col-span-2 relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg">
            <img src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1200&q=80" alt="Intérieur voiture" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="flex justify-between items-end">
                <div>
                  <div className="bg-blue-500/20 backdrop-blur-md text-blue-300 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border border-blue-400/30">
                    <Car className="w-6 h-6" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">Véhicules</h3>
                  <p className="text-slate-300 max-w-md hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                    Sièges tissus, moquettes, plafonnier. Nous recréons l'odeur et l'aspect du neuf dans votre habitacle.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white group-hover:bg-blue-600 transition-colors">
                  <ChevronRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Bento Box 2 - Maison (Tall) */}
          <div className="relative rounded-3xl overflow-hidden group cursor-pointer shadow-lg bg-slate-100">
            <img src="https://images.unsplash.com/photo-1550226891-ef816aed4a98?auto=format&fit=crop&w=800&q=80" alt="Canapé propre" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-70 group-hover:opacity-80 transition-opacity"></div>
            
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="bg-cyan-500/20 backdrop-blur-md text-cyan-300 w-12 h-12 rounded-2xl flex items-center justify-center mb-4 border border-cyan-400/30">
                <Home className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Maison & Textiles</h3>
              <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                Canapés, fauteuils, matelas, tapis.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- COMPOSANT METHODES (Interactif) ---
const MethodsSection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const methods = [
    {
      icon: <Droplets className="w-5 h-5" />,
      title: "Injection-Extraction",
      subtitle: "Le lavage en profondeur",
      desc: "Notre machine injecte une solution nettoyante professionnelle au cœur des fibres pour dissoudre la saleté incrustée, puis l'aspire instantanément avec les résidus. Résultat : des textiles éclatants, sans auréoles, qui sèchent en quelques heures.",
      image: "https://images.unsplash.com/photo-1585144860106-998ca08293a5?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <ThermometerSun className="w-5 h-5" />,
      title: "Nettoyage à la vapeur",
      subtitle: "L'assainissement naturel",
      desc: "L'arme absolue contre les micro-organismes. Grâce à l'action de la vapeur à très haute température, nous éliminons 99,9% des bactéries, virus et acariens, le tout sans aucun produit chimique agressif.",
      image: "https://images.unsplash.com/photo-1628150993077-d67b25e79194?auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: <Brush className="w-5 h-5" />,
      title: "Action Mécanique",
      subtitle: "Détachage ciblé",
      desc: "Les taches tenaces (café, boue, graisse) ne nous résistent pas. Nous appliquons un shampoing spécifique suivi d'un brossage doux (manuel ou à l'aide d'une brosse rotative) pour détacher la fibre sans l'abîmer avant le rinçage final.",
      image: "https://images.unsplash.com/photo-1581428982868-e410dd1b0824?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="methodes" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Notre Technologie de Soin.</h2>
          <p className="text-lg text-slate-500">Découvrez les 3 étapes de notre processus de remise à neuf.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl p-4 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
          
          {/* Menu interactif gauche */}
          <div className="w-full lg:w-1/3 space-y-3">
            {methods.map((method, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center space-x-4 border-2 ${
                  activeTab === index 
                  ? 'border-blue-600 bg-blue-50 shadow-md' 
                  : 'border-transparent hover:bg-slate-50 hover:border-slate-100'
                }`}
              >
                <div className={`p-3 rounded-xl ${activeTab === index ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'}`}>
                  {method.icon}
                </div>
                <div>
                  <div className={`font-bold text-lg ${activeTab === index ? 'text-blue-900' : 'text-slate-700'}`}>
                    {method.title}
                  </div>
                  <div className={`text-sm ${activeTab === index ? 'text-blue-600 font-medium' : 'text-slate-500'}`}>
                    {method.subtitle}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Affichage dynamique droite */}
          <div className="w-full lg:w-2/3">
            <div className="relative h-full min-h-[400px] rounded-3xl overflow-hidden group">
              <img 
                src={methods[activeTab].image} 
                alt={methods[activeTab].title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                key={activeTab} // Force re-render for animation
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full text-white animate-fade-in-up">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white backdrop-blur-md border border-white/30 text-sm font-bold text-slate-900 mb-4">
                  Étape {activeTab + 1}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{methods[activeTab].title}</h3>
                <p className="text-slate-200 text-lg md:text-xl leading-relaxed max-w-2xl">
                  {methods[activeTab].desc}
                </p>
                <ul className="mt-6 space-y-2">
                  <li className="flex items-center text-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-3" /> Efficacité prouvée
                  </li>
                  <li className="flex items-center text-slate-100">
                    <CheckCircle2 className="w-5 h-5 text-cyan-400 mr-3" /> Respect des matériaux
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// --- COMPOSANT AVANT / APRÈS ---
const BeforeAfterSection = ({ setCurrentPage }) => {
  const projects = [
    {
      title: "Rénovation Intégrale Habitacle",
      desc: "Détachage des sièges, aspiration en profondeur des moquettes et remise à neuf des plastiques pour retrouver le confort du premier jour.",
      image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Sauvetage Canapé Tissu",
      desc: "Élimination des taches incrustées (liquides, nourriture) et traitement anti-odeurs. Le tissu retrouve sa couleur d'origine et sa souplesse.",
      image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <section id="avant-apres" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4">L'efficacité en images.</h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Des résultats concrets, sans filtre. Découvrez la puissance de l'injection-extraction et de la vapeur sur les textiles les plus abîmés.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="group relative rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white/50 bg-white/60 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="relative h-[250px] sm:h-[350px] w-full overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-transparent"></div>

                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg border border-white/10">
                  Avant
                </div>
                <div className="absolute top-4 right-4 bg-cyan-500/90 backdrop-blur-md text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg border border-white/20">
                  Après
                </div>
              </div>
              
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold text-slate-800 mb-3 pr-10">{project.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button onClick={() => setCurrentPage('devis')} className="bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-sm hover:shadow-md inline-flex items-center group">
            Consulter nos formules et tarifs
            <ArrowRight className="w-5 h-5 ml-3 text-blue-600 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

// --- COMPOSANT FOOTER (Glassmorphism) ---
const Footer = ({ setCurrentPage }) => {
  const handleNavClick = (page, targetId = null) => {
    setCurrentPage(page);
    if (targetId) {
      setTimeout(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-white/40 bg-white/40 backdrop-blur-xl pt-20 pb-8 mt-12 shadow-[0_-8px_30px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-16">
          
          <div className="md:col-span-5">
            <div className="flex items-center group cursor-pointer mb-6" onClick={() => setCurrentPage('home')}>
              <div className="bg-gradient-to-tr from-blue-600 to-cyan-400 p-2 rounded-xl mr-3 shadow-lg shadow-cyan-200">
                <Droplets className="h-6 w-6 text-white" />
              </div>
              <span className="font-extrabold text-2xl text-slate-800 tracking-tight">
                Oxy<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">pure</span>
              </span>
            </div>
            <p className="text-slate-600 text-lg mb-8 max-w-sm">
              L'expert du nettoyage en profondeur. Nous redonnons vie à vos textiles et assainissons votre intérieur directement à domicile.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/60 border border-white flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-white/60 border border-white flex items-center justify-center text-slate-500 hover:text-blue-600 hover:bg-white hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Navigation</h4>
            <ul className="space-y-4">
              <li><button onClick={() => handleNavClick('home')} className="text-slate-600 hover:text-blue-600 font-medium transition-colors flex items-center group"><ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" /> Accueil</button></li>
              <li><button onClick={() => handleNavClick('home', 'services')} className="text-slate-600 hover:text-blue-600 font-medium transition-colors flex items-center group"><ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" /> Nos Services</button></li>
              <li><button onClick={() => handleNavClick('home', 'methodes')} className="text-slate-600 hover:text-blue-600 font-medium transition-colors flex items-center group"><ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" /> Notre Expertise</button></li>
              <li><button onClick={() => handleNavClick('home', 'avant-apres')} className="text-slate-600 hover:text-blue-600 font-medium transition-colors flex items-center group"><ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" /> Avant / Après</button></li>
              <li><button onClick={() => handleNavClick('devis')} className="text-slate-600 hover:text-blue-600 font-medium transition-colors flex items-center group"><ChevronRight className="w-4 h-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" /> Tarifs & Devis</button></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-wider text-sm">Contact & Interventions</h4>
            <ul className="space-y-5">
              <li className="flex items-start group">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-xl mr-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-slate-900 font-bold text-lg">06 12 34 56 78</div>
                  <div className="text-slate-500 text-sm">Mar-Dim, 8h - 19h</div>
                </div>
              </li>
              <li className="flex items-center group text-slate-600 font-medium">
                <div className="p-2 bg-cyan-100 text-cyan-600 rounded-xl mr-4 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                contact@mynexvia.fr
              </li>
              <li className="flex items-start group text-slate-600 font-medium">
                <div className="p-2 bg-slate-200 text-slate-600 rounded-xl mr-4 group-hover:bg-slate-700 group-hover:text-white transition-colors mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="mt-1">Intervention à domicile ou sur votre lieu de travail</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-500 text-sm font-medium">
            © {new Date().getFullYear()} MyNexvia. Tous droits réservés.
          </div>
          <div className="flex space-x-8 text-sm font-medium">
            <button onClick={() => handleNavClick('mentions')} className="text-slate-500 hover:text-blue-600 transition-colors">Mentions légales</button>
            <button onClick={() => handleNavClick('confidentialite')} className="text-slate-500 hover:text-blue-600 transition-colors">Politique de confidentialité</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- COMPOSANT CALCULATEUR DE DISTANCE ---
const DistanceCalculator = ({ onCalculated }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleCalculate = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const geoRes = await fetch(`https://nominatim.openstreetmap.org/search?format=json&countrycodes=fr&q=${encodeURIComponent(query)}`);
      const geoData = await geoRes.json();

      if (!geoData || geoData.length === 0) {
        throw new Error("Ville ou code postal introuvable en France.");
      }

      const destLat = geoData[0].lat;
      const destLon = geoData[0].lon;
      const destName = geoData[0].display_name.split(',')[0];

      const baseLat = 49.2741;
      const baseLon = -0.2997;

      const routeRes = await fetch(`https://router.project-osrm.org/route/v1/driving/${baseLon},${baseLat};${destLon},${destLat}?overview=false`);
      const routeData = await routeRes.json();

      if (routeData.code !== 'Ok') {
        throw new Error("Impossible de calculer l'itinéraire routier.");
      }

      const distanceKm = parseFloat((routeData.routes[0].distance / 1000).toFixed(1));
      let extraFee = 0;

      if (distanceKm > 30) {
        extraFee = parseFloat(((distanceKm - 30) * 0.5).toFixed(2));
      }

      setResult({ distance: distanceKm, fee: extraFee, destName: destName });
      if (onCalculated) onCalculated(extraFee, { distance: distanceKm, city: destName });
    } catch (err) {
      setError(err.message);
      if (onCalculated) onCalculated(0, null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] max-w-3xl mx-auto w-full">
      <div className="flex items-center mb-6">
        <div className="bg-indigo-100 text-indigo-600 p-3 rounded-2xl mr-4">
          <Map className="w-6 h-6" />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 text-xl">Estimez vos frais de déplacement</h4>
          <p className="text-sm text-slate-500">Départ depuis Colleville-Montgomery (14880)</p>
        </div>
      </div>

      <form onSubmit={handleCalculate} className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-grow">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
            <MapPin className="w-5 h-5" />
          </div>
          <input 
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Entrez votre ville ou code postal..." 
            className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all bg-slate-50"
            required
          />
        </div>
        <button 
          type="submit" 
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl font-bold transition-all shadow-md flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed min-w-[140px]"
        >
          {loading ? (
            <span className="flex h-5 w-5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-white/50"></span>
            </span>
          ) : (
            <>
              Calculer <Navigation className="w-4 h-4 ml-2" />
            </>
          )}
        </button>
      </form>

      {error && (
        <div className="flex items-start p-4 bg-red-50 text-red-700 rounded-xl border border-red-100">
          <AlertCircle className="w-5 h-5 mr-3 flex-shrink-0 mt-0.5" />
          <p className="text-sm font-medium">{error}</p>
        </div>
      )}

      {result && (
        <div className={`p-5 rounded-2xl border-2 transition-all duration-500 ${result.fee === 0 ? 'bg-green-50 border-green-200' : 'bg-orange-50 border-orange-200'}`}>
          <div className="flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
            <div className="mb-4 sm:mb-0">
              <div className="text-sm font-bold text-slate-700 mb-1">
                Distance jusqu'à <span className="capitalize">{result.destName}</span> :
              </div>
              <div className="text-3xl font-extrabold text-slate-900">
                {result.distance} <span className="text-xl text-slate-500 font-bold">km</span>
              </div>
            </div>
            
            <div className="h-10 w-px bg-slate-200 hidden sm:block mx-6"></div>
            
            <div className="text-center sm:text-right">
              <div className="text-sm font-bold text-slate-700 mb-1">Frais de déplacement :</div>
              {result.fee === 0 ? (
                <div className="inline-flex items-center text-green-600 bg-green-100 px-3 py-1 rounded-full font-bold text-lg">
                  <CheckCircle2 className="w-5 h-5 mr-1.5" /> Gratuit
                </div>
              ) : (
                <div className="text-2xl font-extrabold text-orange-600">
                  +{result.fee.toFixed(2).replace('.', ',')} €
                </div>
              )}
            </div>
          </div>
          
          {result.fee > 0 && (
            <p className="text-xs text-orange-600/80 text-center sm:text-right mt-2 font-medium">
              (Au-delà de 30km, tarif de 0.50€/km)
            </p>
          )}
        </div>
      )}
    </div>
  );
};

// --- COMPOSANTS PAGES LÉGALES ---
const LegalNotice = () => (
  <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Mentions Légales</h1>
      
      <div className="space-y-8 text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">1. Éditeur du site</h2>
          <p>Nom de l'entreprise : MyNexvia</p>
          <p>Statut juridique : Micro-entreprise (Auto-entrepreneur)</p>
          <p>Siège social : [Votre adresse postale]</p>
          <p>SIRET : [Votre numéro SIRET]</p>
          <p>Email : contact@mynexvia.fr</p>
          <p>Téléphone : 06 12 34 56 78</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">2. Hébergement</h2>
          <p>Le site est hébergé par : Vercel Inc.</p>
          <p>Adresse de l'hébergeur : 340 S Lemon Ave #4133 Walnut, CA 91789, USA</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">3. Propriété intellectuelle</h2>
          <p>Le contenu de ce site web (textes, images, éléments graphiques) est la propriété exclusive de MyNexvia. Toute reproduction, distribution ou utilisation non autorisée est strictement interdite.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">4. Responsabilité</h2>
          <p>MyNexvia s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, l'entreprise ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour.</p>
        </section>
      </div>
    </div>
  </div>
);

const PrivacyPolicy = () => (
  <div className="pt-32 pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 animate-fade-in-up">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-8">Politique de Confidentialité</h1>
      
      <div className="space-y-8 text-slate-600 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">1. Collecte des données</h2>
          <p>Nous collectons les données suivantes via notre formulaire de contact et de réservation : Nom, Prénom, Numéro de téléphone, Adresse email, et Adresse postale. Ces données sont recueillies pour nous permettre de traiter votre demande de devis et d'intervention.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">2. Utilisation des données</h2>
          <p>Les informations personnelles que vous nous fournissez sont utilisées exclusivement dans le cadre de notre relation commerciale (établissement de devis, planification de rendez-vous, facturation). Elles ne seront jamais vendues, louées ou cédées à des tiers.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">3. Conservation des données</h2>
          <p>Vos données sont conservées pendant la durée stricte nécessaire à la finalité de leur traitement et conformément à la législation en vigueur pour la comptabilité (jusqu'à 10 ans pour les factures).</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-slate-800 mb-3">4. Vos droits</h2>
          <p>Conformément à la loi "Informatique et Libertés" et au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition sur vos données personnelles. Vous pouvez exercer ces droits en nous contactant à l'adresse : contact@mynexvia.fr.</p>
        </section>
      </div>
    </div>
  </div>
);

// --- COMPOSANT MODAL DE RÉSERVATION ---
const BookingModal = ({ isOpen, onClose, bookingContext }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const modalContentRef = React.useRef(null);

  React.useEffect(() => {
    if (isOpen) {
      setSelectedDate('');
      setSelectedTime('');
      document.body.style.overflow = 'hidden';
      if (modalContentRef.current) {
        modalContentRef.current.scrollTop = 0;
      }
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  if (!isOpen || !bookingContext) return null;

  const dateObj = selectedDate ? new Date(selectedDate + 'T12:00:00') : null; 
  const isMonday = dateObj ? dateObj.getDay() === 1 : false;
  
  const duration = bookingContext.type === 'vehicule' ? 2 : 1;

  const getAvailableSlots = () => {
    if (!selectedDate || isMonday) return [];
    const maxStartHour = 18 - duration;
    const slots = [];
    for (let i = 9; i <= maxStartHour; i++) {
      slots.push(`${i}h00`);
    }
    return slots;
  };

  const availableSlots = getAvailableSlots();

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      
      <div 
        ref={modalContentRef} 
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] md:max-h-[95vh] overflow-y-auto animate-fade-in-up"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-[60] bg-white/90 backdrop-blur-md p-2 rounded-full text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors shadow-sm"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col md:flex-row w-full min-h-full">
          
          {/* Colonne Gauche : Récapitulatif (Bleu) */}
          <div className="w-full md:w-[42%] bg-gradient-to-br from-slate-900 to-blue-900 p-6 md:p-8 lg:p-10 text-white flex flex-col relative">
            <div className="absolute top-0 left-0 w-full h-full bg-blue-500/10 blur-2xl pointer-events-none"></div>
            
            <div className="relative z-10 mb-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Sparkles className="w-6 h-6 mr-3 text-cyan-400" /> 
                Votre demande
              </h3>
              
              <div className="bg-white/10 rounded-2xl p-5 mb-6 backdrop-blur-md border border-white/10">
                <div className="text-cyan-300 text-sm font-semibold uppercase tracking-wider mb-2">Prestation sélectionnée</div>
                <div className="text-xl font-bold mb-1">{bookingContext.planName}</div>
                
                {bookingContext.category && <div className="text-slate-300 text-sm mb-4">{bookingContext.category}</div>}
                
                {bookingContext.options && bookingContext.options.length > 0 && (
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="text-cyan-300 text-sm font-semibold mb-2">Détails de la demande :</div>
                    <ul className="space-y-1.5">
                      {bookingContext.options.map((opt, i) => (
                        <li key={i} className="text-slate-200 text-sm flex items-start">
                          <Check className="w-4 h-4 mr-2 mt-0.5 text-cyan-400 flex-shrink-0" />
                          {opt}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {bookingContext.travelCity && (
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <div className="text-cyan-300 text-sm font-semibold mb-2">Déplacement ({bookingContext.travelCity}) :</div>
                    <div className="text-slate-200 text-sm flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                      {bookingContext.travelFee > 0 ? `+${bookingContext.travelFee}€` : 'Inclus (Gratuit)'}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* --- LE PRIX EN GROS --- */}
            <div className="relative z-10 mt-auto pt-8 w-full">
              <div className="bg-gradient-to-b from-white/10 to-transparent backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/20 shadow-2xl">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-blue-100 text-sm">Sous-total prestation</span>
                  <span className="text-white font-medium">{parseFloat((bookingContext.total - bookingContext.travelFee).toFixed(2))}€</span>
                </div>
                
                <div className="flex justify-between items-center mb-5">
                  <span className="text-blue-100 text-sm">Déplacement</span>
                  <span className={`${bookingContext.travelFee > 0 ? 'text-white' : 'text-cyan-300'} font-medium`}>
                    {bookingContext.travelFee > 0 ? `+${parseFloat(bookingContext.travelFee.toFixed(2))}€` : 'Gratuit'}
                  </span>
                </div>

                <div className="border-t border-white/20 pt-6 mt-3">
                  <div className="text-cyan-300 text-xs font-bold uppercase tracking-widest mb-1">Total Estimé</div>
                  <div className="text-5xl font-extrabold text-white flex items-baseline leading-none">
                    {parseFloat(Number(bookingContext.total).toFixed(2))}€
                  </div>
                </div>
              </div>
              
              <p className="text-blue-200/70 text-xs mt-5 leading-relaxed flex items-start">
                <AlertCircle className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                Ce devis sera confirmé sur place avant le début de l'intervention.
              </p>
            </div>
          </div>

          {/* Colonne Droite : Formulaire (Blanc) */}
          <div className="w-full md:w-[58%] p-6 md:p-8 lg:p-10 bg-white">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Vos coordonnées</h3>
            <p className="text-slate-500 mb-8 text-sm">Remplissez ce formulaire pour que nous puissions valider votre rendez-vous.</p>

            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert("Demande envoyée avec succès ! (Simulation)"); onClose(); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-700 ml-1">Nom & Prénom <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <User className="h-5 w-5" />
                    </div>
                    <input type="text" required className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-slate-50" placeholder="Jean Dupont" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-700 ml-1">Téléphone <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Phone className="h-5 w-5" />
                    </div>
                    <input type="tel" required className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-slate-50" placeholder="06 12 34 56 78" />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 ml-1">Adresse de l'intervention <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                    <Home className="h-5 w-5" />
                  </div>
                  <input type="text" required className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-slate-50" placeholder="N°, rue, bâtiment..." />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-700 ml-1">Code Postal / Ville <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <input type="text" required className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-slate-50" placeholder="75001 Paris" />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Mail className="h-5 w-5" />
                    </div>
                    <input type="email" className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-slate-50" placeholder="jean.dupont@email.com" />
                  </div>
                </div>
              </div>

              {/* Bloc Date & Créneaux Horaires */}
              <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-100">
                <div className="space-y-1.5">
                  <label className="text-sm font-bold text-slate-700 ml-1">Date d'intervention souhaitée <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <input 
                      type="date" 
                      required 
                      min={new Date().toISOString().split('T')[0]} 
                      value={selectedDate}
                      onChange={(e) => {
                        setSelectedDate(e.target.value);
                        setSelectedTime('');
                      }}
                      className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white" 
                    />
                  </div>
                </div>

                {selectedDate && isMonday && (
                  <div className="text-red-600 text-sm font-medium p-3 bg-red-50 rounded-xl border border-red-100 animate-fade-in-up">
                    Nous sommes fermés le Lundi. Veuillez sélectionner un jour entre le Mardi et le Dimanche.
                  </div>
                )}

                {selectedDate && !isMonday && (
                  <div className="pt-2 animate-fade-in-up">
                    <label className="text-sm font-bold text-slate-700 ml-1 mb-3 flex items-center">
                      <Clock className="w-4 h-4 mr-1.5 text-blue-500" /> 
                      Heure de début souhaitée <span className="text-red-500 ml-1">*</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableSlots.map(slot => (
                        <button
                          type="button"
                          key={slot}
                          onClick={() => setSelectedTime(slot)}
                          className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${selectedTime === slot ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-600 ring-offset-1' : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200 hover:border-blue-200'}`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                    <input type="text" className="hidden" required value={selectedTime} onChange={() => {}} />
                  </div>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-bold text-slate-700 ml-1">Précisions (Facultatif)</label>
                <textarea rows="2" className="block w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-slate-50 resize-none" placeholder="Accès prise électrique, type de taches, etc..."></textarea>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button type="submit" className="w-full sm:w-2/3 bg-blue-600 hover:bg-blue-700 text-white py-3.5 rounded-xl font-bold transition-colors shadow-lg shadow-blue-500/30 flex items-center justify-center group">
                  Envoyer ma demande
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <button type="button" onClick={onClose} className="w-full sm:w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3.5 rounded-xl font-bold transition-colors">
                  Annuler
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

// --- COMPOSANT DEVIS / TARIFS ---
const PricingView = () => {
  const [activeCategory, setActiveCategory] = useState('vehicules');
  
  // États pour le calculateur de devis Véhicules
  const [selectedPlan, setSelectedPlan] = useState('chic');
  const [selectedCat, setSelectedCat] = useState('A');
  const [selectedOptions, setSelectedOptions] = useState([]);

  // États pour le calculateur de devis Maison (Panier)
  const [maisonCart, setMaisonCart] = useState({});
  
  // États pour les frais de déplacement
  const [travelFee, setTravelFee] = useState(0);
  const [travelInfo, setTravelInfo] = useState(null);

  // États pour la modale de réservation
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookingContext, setBookingContext] = useState(null);

  // --- DONNÉES VÉHICULES ---
  const vehiculesPlans = [
    { 
      id: 'classe',
      name: "Forfait Classe", 
      basePrice: 59,
      price: "Dès 59€", 
      desc: "L'essentiel pour un habitacle propre et dépoussiéré.", 
      features: ["Aspiration habitacle & coffre", "Dépoussiérage des plastiques", "Vitres intérieures & contours de portes", "Tapis de sol", "Nettoyage vapeur"], 
      popular: false 
    },
    { 
      id: 'chic',
      name: "Forfait Chic", 
      basePrice: 79,
      price: "Dès 79€", 
      desc: "Formule complète avec shampouinage en profondeur des textiles.", 
      features: ["Tout le Forfait Classe", "Shampooing (sièges, moquettes, tapis)", "Soin rénovateur plastique", "Parfum d'ambiance"], 
      popular: true 
    }
  ];

  const categoriesVehicules = [
    { id: 'A', label: 'Catégorie A', desc: 'Clio, 208, C2...', price: 0 },
    { id: 'B', label: 'Catégorie B', desc: 'Mégane, 308, C4...', price: 5 },
    { id: 'C', label: 'Catégorie C', desc: '508, DS5, 4X4...', price: 10 },
  ];

  const optionsVehicules = [
    { id: 'sale', label: 'Intérieur très sale (poils, sable, terre)', price: 20 },
    { id: 'bebe', label: 'Forfait Bébé (Siège enfant + désinfection)', price: 15 },
    { id: 'plafonnier', label: 'Nettoyage du plafonnier', price: 15 },
  ];

  // --- DONNÉES MAISON & TEXTILES ---
  const MAISON_ITEMS = {
    canape: {
      title: "Canapés & Fauteuils",
      icon: <Home className="w-6 h-6 text-blue-600" />,
      items: [
        { id: 'canape_1p', label: 'Fauteuil (1 place)', price: 35 },
        { id: 'canape_2p', label: 'Canapé 2 places', desc: '~140cm de large', price: 60 },
        { id: 'canape_3p', label: 'Canapé 3 places', desc: '~200cm de large', price: 80 },
        { id: 'canape_4p', label: 'Canapé 4 places / Angle', desc: 'Petit canapé d\'angle', price: 110 },
        { id: 'canape_5p', label: 'Canapé 5 places', desc: 'Canapé d\'angle standard', price: 130 },
        { id: 'canape_6p', label: 'Canapé 6 places et +', desc: 'Panoramique / U', price: 150 },
      ],
      options: [
        { id: 'opt_convertible', label: 'Tiroir lit (Convertible)', price: 20 },
        { id: 'opt_coussins', label: 'Coussins amovibles', price: 10 },
        { id: 'opt_poils', label: 'Poils d\'animaux', price: 15 },
      ]
    },
    matelas: {
      title: "Matelas",
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      items: [
        { id: 'matelas_simple', label: 'Matelas Simple', desc: '90x190 cm', price: 50 },
        { id: 'matelas_double', label: 'Matelas Double', desc: '140x190 cm', price: 70 },
        { id: 'matelas_queen', label: 'Matelas Queen / King Size', desc: '160x200 cm et +', price: 90 },
      ],
      options: []
    },
    tapis: {
      title: "Tapis",
      icon: <Brush className="w-6 h-6 text-cyan-600" />,
      items: [
        { id: 'tapis', label: 'Tapis', desc: '70€ le premier, puis 20€/tapis', price: 70, isSpecialTapis: true },
      ],
      options: []
    }
  };

  const updateMaisonQty = (id, delta) => {
    setMaisonCart(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, current + delta);
      const newState = { ...prev };
      if (next === 0) delete newState[id];
      else newState[id] = next;
      return newState;
    });
  };

  const toggleOption = (optId) => {
    setSelectedOptions(prev => prev.includes(optId) ? prev.filter(id => id !== optId) : [...prev, optId]);
  };

  // --- CALCULS EN DIRECT ---
  const isVehicule = activeCategory === 'vehicules';

  // Calcul Véhicules
  const currentPlanObj = vehiculesPlans.find(p => p.id === selectedPlan);
  const baseVehiculeTotal = (currentPlanObj ? currentPlanObj.basePrice : 0)
                          + (categoriesVehicules.find(c => c.id === selectedCat)?.price || 0)
                          + selectedOptions.reduce((sum, optId) => sum + (optionsVehicules.find(o => o.id === optId)?.price || 0), 0);
  const totalVehicule = baseVehiculeTotal + travelFee;

  // Calcul Maison (Panier Dynamique)
  let baseMaisonTotal = 0;
  const selectedMaisonDetails = [];

  Object.entries(maisonCart).forEach(([id, qty]) => {
    let itemDef = null;
    Object.values(MAISON_ITEMS).forEach(cat => {
      const found = cat.items.find(i => i.id === id) || cat.options.find(i => i.id === id);
      if (found) itemDef = found;
    });

    if (itemDef) {
      if (itemDef.isSpecialTapis) {
        baseMaisonTotal += 70 + (qty > 1 ? (qty - 1) * 20 : 0);
      } else {
        baseMaisonTotal += itemDef.price * qty;
      }
      // Ajouter au détail lisible pour le ticket
      selectedMaisonDetails.push(`${qty}x ${itemDef.label}`);
    }
  });
  
  const totalMaison = baseMaisonTotal + travelFee;

  // Valeurs actives globales pour le résumé
  const activeTotal = isVehicule ? totalVehicule : totalMaison;
  const activePlanName = isVehicule ? currentPlanObj.name : "Prestation sur mesure";

  // --- GESTION DE LA MODALE ---
  const handleBook = () => {
    if (isVehicule) {
      setBookingContext({
        type: 'vehicule',
        planName: activePlanName,
        category: categoriesVehicules.find(c => c.id === selectedCat)?.label,
        options: selectedOptions.map(id => optionsVehicules.find(o => o.id === id)?.label),
        total: totalVehicule,
        travelFee: travelFee,
        travelCity: travelInfo ? travelInfo.city : null,
      });
      setIsModalOpen(true);
    } else {
      if (Object.keys(maisonCart).length === 0) {
        alert("Veuillez ajouter au moins un textile à votre devis avant de continuer.");
        return;
      }
      setBookingContext({
        type: 'maison',
        planName: 'Nettoyage Maison & Textiles',
        category: null, // Plus besoin de catégorie unique, tout est dans options
        options: selectedMaisonDetails,
        total: totalMaison,
        travelFee: travelFee,
        travelCity: travelInfo ? travelInfo.city : null,
      });
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <div className="pt-32 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-in-up">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Votre devis <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">en direct.</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-10">
            {isVehicule ? "Sélectionnez vos options ci-dessous pour obtenir le tarif précis de votre intervention. Zéro mauvaise surprise." : "Composez votre devis sur mesure en ajoutant la quantité souhaitée pour chaque élément."}
          </p>
        
          {/* Toggle Véhicules / Maison */}
          <div className="inline-flex bg-white/60 backdrop-blur-md p-1.5 rounded-2xl border border-slate-200 shadow-sm">
            <button
              onClick={() => setActiveCategory('vehicules')}
              className={`flex items-center px-6 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ${activeCategory === 'vehicules' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
            >
              <Car className="w-5 h-5 mr-2" /> Véhicules
            </button>
            <button 
              onClick={() => setActiveCategory('maison')}
              className={`flex items-center px-6 py-3 rounded-xl font-bold text-sm md:text-base transition-all duration-300 ${activeCategory === 'maison' ? 'bg-slate-900 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
            >
              <Home className="w-5 h-5 mr-2" /> Maison & Textiles
            </button>
          </div>
        </div>

        {isVehicule ? (
          <>
            <div className="max-w-4xl mx-auto mb-8 bg-blue-50 border-blue-100 text-blue-800 p-4 rounded-xl flex items-center justify-center font-medium animate-fade-in-up">
              <span className="flex h-3 w-3 relative mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              Étape 1 : Choisissez votre formule de base
            </div>

            {/* Pricing Cards Grid Vehicules */}
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl gap-8 items-stretch mx-auto mb-12">
              {vehiculesPlans.map((plan) => {
                const isSelected = selectedPlan === plan.id;
                return (
                  <div 
                    key={plan.id} 
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 flex flex-col transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-2 hover:shadow-xl cursor-pointer ${isSelected ? 'ring-4 ring-blue-500 border-transparent bg-blue-50/20' : plan.popular ? 'border-2 border-blue-400' : 'border border-slate-100'}`}
                  >
                    
                    {plan.popular && !isSelected && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center">
                        <Sparkles className="w-4 h-4 mr-1" /> Le plus choisi
                      </div>
                    )}

                    {isSelected && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg flex items-center">
                        <Check className="w-4 h-4 mr-1" /> Sélectionné
                      </div>
                    )}

                    <div className="mb-6 min-h-[100px]">
                      <h3 className="text-2xl font-bold text-slate-800 mb-3 leading-tight">{plan.name}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{plan.desc}</p>
                    </div>

                    <div className="mb-8">
                      <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                    </div>

                    <ul className="space-y-4 flex-grow">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className={`mt-1 rounded-full p-0.5 mr-3 flex-shrink-0 ${plan.popular || isSelected ? 'bg-blue-100 text-blue-600' : 'bg-cyan-100 text-cyan-600'}`}>
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-slate-700 font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* ÉTAPE 2 & 3 : VÉHICULES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto animate-fade-in-up">
              {/* Catégories Interactives */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="mb-6">
                  <h4 className="font-bold text-slate-900 mb-1 flex items-center text-lg"><Car className="w-6 h-6 mr-3 text-blue-600" /> Étape 2 : Votre véhicule</h4>
                  <p className="text-sm text-slate-500 italic ml-9">Vous ne connaissez pas la catégorie de votre véhicule ? Consultez votre carte grise.</p>
                </div>
                <div className="space-y-3">
                  {categoriesVehicules.map(cat => (
                    <div 
                      key={cat.id} 
                      onClick={() => setSelectedCat(cat.id)} 
                      className={`p-4 rounded-2xl border-2 flex items-center cursor-pointer transition-all duration-200 ${selectedCat === cat.id ? 'border-blue-500 bg-blue-50/50 shadow-sm' : 'border-slate-100 hover:border-blue-200 bg-white'}`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center mr-4 flex-shrink-0 ${selectedCat === cat.id ? 'border-blue-600' : 'border-slate-300'}`}>
                        {selectedCat === cat.id && <div className="w-2.5 h-2.5 bg-blue-600 rounded-full"></div>}
                      </div>
                      <div className="flex-grow">
                        <div className={`font-bold ${selectedCat === cat.id ? 'text-blue-900' : 'text-slate-800'}`}>{cat.label}</div>
                        <div className="text-xs text-slate-500 mt-0.5">{cat.desc}</div>
                      </div>
                      <div className={`font-bold ${selectedCat === cat.id ? 'text-blue-700' : 'text-slate-600'}`}>
                        {cat.price === 0 ? 'Inclus' : `+${cat.price}€`}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Options Interactives */}
              <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <h4 className="font-bold text-slate-900 mb-6 flex items-center text-lg"><Sparkles className="w-6 h-6 mr-3 text-cyan-500" /> Étape 3 : Options (Facultatif)</h4>
                <div className="space-y-3">
                  {optionsVehicules.map(opt => {
                    const isChecked = selectedOptions.includes(opt.id);
                    return (
                      <div 
                        key={opt.id} 
                        onClick={() => toggleOption(opt.id)} 
                        className={`p-4 rounded-2xl border-2 flex items-center cursor-pointer transition-all duration-200 ${isChecked ? 'border-cyan-500 bg-cyan-50/50 shadow-sm' : 'border-slate-100 hover:border-cyan-200 bg-white'}`}
                      >
                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center mr-4 flex-shrink-0 transition-colors ${isChecked ? 'bg-cyan-500 border-cyan-500' : 'border-slate-300'}`}>
                          {isChecked && <Check className="w-3.5 h-3.5 text-white" />}
                        </div>
                        <div className={`flex-grow font-semibold text-sm ${isChecked ? 'text-cyan-900' : 'text-slate-700'}`}>
                          {opt.label}
                        </div>
                        <div className={`font-bold ${isChecked ? 'text-cyan-700' : 'text-slate-600'}`}>
                          +{opt.price}€
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        ) : (
          /* PANIER MULTI-SÉLECTION MAISON & TEXTILES */
          <div className="animate-fade-in-up max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto mb-8 bg-cyan-50 border-cyan-100 text-cyan-800 p-4 rounded-xl flex items-center justify-center font-medium">
              <span className="flex h-3 w-3 relative mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-cyan-400"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              Ajoutez les éléments que vous souhaitez nettoyer
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {Object.entries(MAISON_ITEMS).map(([key, category]) => (
                <div key={key} className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex flex-col hover:shadow-xl transition-all">
                  
                  <div className="flex items-center mb-6 border-b border-slate-100 pb-4">
                    <div className="bg-blue-50 p-3 rounded-2xl mr-4">{category.icon}</div>
                    <h3 className="text-xl font-bold text-slate-800">{category.title}</h3>
                  </div>

                  <div className="flex-grow space-y-2">
                    {category.items.map(item => (
                      <div key={item.id} className="flex justify-between items-center py-2.5">
                        <div>
                          <div className="font-bold text-slate-700 text-sm">{item.label}</div>
                          {item.desc && <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>}
                          <div className="text-blue-600 font-bold text-xs mt-1">{item.isSpecialTapis ? 'Dès 70€' : `+${item.price}€`}</div>
                        </div>
                        <div className="flex items-center space-x-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200 ml-4 flex-shrink-0">
                          <button onClick={() => updateMaisonQty(item.id, -1)} className="w-8 h-8 flex items-center justify-center bg-white rounded-lg text-slate-600 font-bold shadow-sm hover:text-blue-600 transition-colors">-</button>
                          <span className="font-bold w-6 text-center text-sm text-slate-800">{maisonCart[item.id] || 0}</span>
                          <button onClick={() => updateMaisonQty(item.id, 1)} className="w-8 h-8 flex items-center justify-center bg-white rounded-lg text-blue-600 font-bold shadow-sm hover:bg-blue-50 transition-colors">+</button>
                        </div>
                      </div>
                    ))}

                    {category.options.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Options complémentaires</div>
                        {category.options.map(opt => (
                          <div key={opt.id} className="flex justify-between items-center py-2.5">
                            <div>
                              <div className="font-bold text-slate-600 text-sm">{opt.label}</div>
                              <div className="text-cyan-600 font-bold text-xs mt-1">+{opt.price}€</div>
                            </div>
                            <div className="flex items-center space-x-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200 ml-4 flex-shrink-0">
                              <button onClick={() => updateMaisonQty(opt.id, -1)} className="w-8 h-8 flex items-center justify-center bg-white rounded-lg text-slate-600 font-bold shadow-sm hover:text-cyan-600 transition-colors">-</button>
                              <span className="font-bold w-6 text-center text-sm text-slate-800">{maisonCart[opt.id] || 0}</span>
                              <button onClick={() => updateMaisonQty(opt.id, 1)} className="w-8 h-8 flex items-center justify-center bg-white rounded-lg text-cyan-600 font-bold shadow-sm hover:bg-cyan-50 transition-colors">+</button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          </div>
        )}

        {/* BLOC : INFO + DÉPLACEMENT + RÉCAPITULATIF UNIFIÉ */}
        <div className="mt-8 md:mt-12 max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          
          {/* Info complémentaire */}
          <div className="text-center text-slate-500 text-sm bg-white/50 backdrop-blur-sm p-6 md:p-8 rounded-3xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] space-y-3 w-full">
            <p><strong>Bon à savoir :</strong> {isVehicule ? "Nos prestations sont exclusivement dédiées au soin intérieur de votre véhicule." : "Pour les canapés modulables ou hors normes, le prix final sera validé ensemble sur place."} Ce devis en ligne est une estimation fiable, soumise à validation visuelle le jour de l'intervention.</p>
            <p><strong>Lieu d'intervention :</strong> Le nettoyage s'effectue à votre <strong>domicile</strong> ou sur votre <strong>lieu de travail</strong>. La seule contrainte est de disposer d'une <strong>prise électrique à 25 mètres maximum</strong>.</p>
            <p>Le déplacement est gratuit dans un rayon de 30 kilomètres. Au-delà : 0.50€/km.</p>
          </div>

          {/* Module de Calcul de Distance */}
          <DistanceCalculator onCalculated={(fee, info) => { setTravelFee(fee); setTravelInfo(info); }} />

          {/* RÉCAPITULATIF FLOTTANT / STICKY (S'adapte Vehicules / Maison) */}
          <div className="bg-slate-900 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between shadow-2xl border border-slate-800 relative overflow-hidden mt-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
            
            <div className="mb-6 md:mb-0 relative z-10 w-full md:w-auto text-center md:text-left">
              <div className="text-slate-400 font-medium mb-1 uppercase tracking-wider text-sm">Total estimé de la prestation</div>
              <div className="flex items-baseline justify-center md:justify-start">
                <span className="text-5xl font-extrabold text-white">{parseFloat(activeTotal.toFixed(2))}</span>
                <span className="text-2xl text-slate-300 ml-1">€</span>
              </div>
              <div className="text-slate-400 text-sm mt-3 flex flex-wrap justify-center md:justify-start gap-2">
                <span className="bg-slate-800 px-2 py-1.5 rounded-md">{activePlanName}</span>
                
                {isVehicule ? (
                  <>
                    <span className="bg-slate-800 px-2 py-1.5 rounded-md">Catégorie {selectedCat}</span>
                    {selectedOptions.length > 0 && <span className="bg-blue-900/50 text-blue-300 px-2 py-1.5 rounded-md">{selectedOptions.length} option(s)</span>}
                  </>
                ) : (
                  <>
                    {Object.keys(maisonCart).length > 0 && (
                      <span className="bg-cyan-900/50 text-cyan-300 px-2 py-1.5 rounded-md border border-cyan-500/20">
                        {Object.values(maisonCart).reduce((a, b) => a + b, 0)} élément(s) au devis
                      </span>
                    )}
                  </>
                )}

                {travelFee > 0 && <span className="bg-orange-900/50 text-orange-300 px-2 py-1.5 rounded-md border border-orange-500/20">Déplacement : +{travelFee}€</span>}
                {travelInfo && travelFee === 0 && <span className="bg-green-900/50 text-green-300 px-2 py-1.5 rounded-md border border-green-500/20">Déplacement inclus</span>}
              </div>
            </div>

            <button 
              onClick={handleBook}
              className="relative z-10 w-full md:w-auto bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-1 flex items-center justify-center group"
            >
              Valider et réserver
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Inclusion de la Modale */}
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        bookingContext={bookingContext} 
      />
    </>
  );
};

// --- COMPOSANT PRINCIPAL (APP) ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="min-h-screen font-sans text-slate-800 selection:bg-blue-200 selection:text-blue-900 relative overflow-hidden">
      
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: none; }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>

      <div className="fixed inset-0 z-[-1] bg-[#f8fafc]"></div>
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-300/20 blur-[120px] z-[-1]"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-cyan-300/20 blur-[120px] z-[-1]"></div>
      <div className="fixed top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-indigo-300/10 blur-[120px] z-[-1]"></div>
      
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="relative z-0">
        {currentPage === 'home' && (
          <div className="animate-fade-in-up">
            <HeroSection setCurrentPage={setCurrentPage} />
            <ServicesSection />
            <MethodsSection />
            <BeforeAfterSection setCurrentPage={setCurrentPage} />
          </div>
        )}
        {currentPage === 'devis' && (
          <PricingView />
        )}
        {currentPage === 'mentions' && (
          <LegalNotice />
        )}
        {currentPage === 'confidentialite' && (
          <PrivacyPolicy />
        )}
      </main>
      
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}