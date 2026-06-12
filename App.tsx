import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  UserPlus,
  CalendarRange,
  ChevronRight,
  Sparkles,
  ArrowRight,
  Mail,
  Compass,
  Layout,
  Phone
} from "lucide-react";

const CONFIG = {
  topBarText: "🪟 INDIVIDUALISIERT & PROFESSIONELL: DER ENTWURF FÜR DEIN PROJEKT",
  brandName: "DIEBAUBOUTIQUE",
  brandSubtitle: "IHR PARTNER FÜR FENSTER, TÜREN & HOCHWERTIGE BAUPROJEKTE",
  badgeText: "EXKLUSIVER DESIGN-ENTWURF",
  headlinePart1: "Exklusive Bauelemente. ",
  headlinePart2: "Perfekte Sanierung.",
  subheadline: "Ein maßgeschneidertes digitales System für Diebauboutique. Entwickelt für die Region Braunschweig, Wolfsburg, Gifhorn und Umgebung, um anspruchsvolle Neubau- und Sanierungsprojekte online perfekt zu präsentieren, qualifizierte Kundenanfragen zu generieren und neue Fachkräfte zu begeistern.",
  primaryCtaText: "Projekt anfragen",
  secondaryCtaText: "Erstgespräch buchen",
  imageUrl: "/bild.jpg" 
};

export default function App() {
  const [demoActive, setDemoActive] = useState<boolean>(false);
  const [applicantCount, setApplicantCount] = useState<number>(14);
  
  // 3D Tilt Effekt States für das Mockup
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMoveCard = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const element = cardRef.current;
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    setRotateX(-y / 12);
    setRotateY(x / 12);
  };

  const handleMouseLeaveCard = () => {
    setRotateX(0);
    setRotateY(0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setApplicantCount((prev) => prev + (Math.random() > 0.91 ? 1 : 0));
    }, 5200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#FCFBF9] text-[#1E293B] font-sans antialiased selection:bg-[#C5A880]/10 selection:text-[#0F172A]">
      
      {/* 1. TOP BAR BANNER */}
      <div className="bg-[#0F172A] text-[#FCFBF9] py-2.5 text-[10px] font-mono tracking-[0.2em] text-center px-4 relative z-50 shadow-xs">
        {CONFIG.topBarText}
      </div>

      {/* 2. HEADER & NAVIGATION */}
      <header className="border-b border-[#E2E8F0] bg-white/80 backdrop-blur-md sticky top-0 z-40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <Layout className="w-4 h-4 text-[#C5A880]" />
              <span className="font-sans text-base font-bold tracking-widest text-[#0F172A]">{CONFIG.brandName}</span>
            </div>
            <span className="text-[8px] uppercase tracking-[0.22em] text-[#C5A880] font-bold mt-0.5">
              {CONFIG.brandSubtitle}
            </span>
          </div>

          <nav className="hidden md:flex space-x-8 text-xs uppercase tracking-widest text-neutral-400 font-medium">
            <span className="text-[#C5A880] font-semibold cursor-default flex items-center gap-1">
              <Sparkles className="w-3 h-3 animate-pulse" /> Live Prototyp
            </span>
            <span className="opacity-40 cursor-not-allowed">Fenster & Türen</span>
            <span className="opacity-40 cursor-not-allowed">Projekte</span>
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden sm:inline-flex items-center gap-1.5 bg-[#FAF8F5] border border-[#E2E8F0] px-3 py-1 rounded-full text-[10px] font-mono text-[#0F172A]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C5A880] animate-ping"></span>
              PROTOTYP
            </div>
            <button 
              onClick={() => setDemoActive(true)}
              className="bg-[#0F172A] text-white uppercase text-[10px] tracking-widest font-semibold px-5 py-3 hover:bg-[#1E293B] active:scale-98 transition-all duration-200 shadow-sm cursor-pointer"
            >
              Konzept öffnen
            </button>
          </div>

        </div>
      </header>

      {/* 3. MAIN HERO SECTION */}
      <main className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-24 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">
          
          {/* Links: Text & Features */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-white border border-[#E2E8F0] px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest text-neutral-500 uppercase shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5A880]" />
              <span>{CONFIG.badgeText}</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0F172A] leading-[1.1]">
              {CONFIG.headlinePart1} <br />
              <span className="bg-gradient-to-r from-[#C5A880] to-[#0F172A] bg-clip-text text-transparent italic font-serif font-normal">
                {CONFIG.headlinePart2}
              </span>
            </h1>
            
            <p className="text-neutral-500 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
              {CONFIG.subheadline}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button 
                onClick={() => setDemoActive(true)}
                className="group w-full sm:w-auto bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs uppercase tracking-widest font-bold px-8 py-4.5 text-center transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
              >
                <span>{CONFIG.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button 
                onClick={() => setDemoActive(true)}
                className="w-full sm:w-auto bg-white border border-[#E2E8F0] text-neutral-700 hover:bg-[#FAF8F5] text-xs uppercase tracking-widest font-bold px-8 py-4.5 text-center transition-all duration-200 flex items-center justify-center space-x-2 shadow-xs active:scale-98 cursor-pointer"
              >
                <span>{CONFIG.secondaryCtaText}</span>
                <Mail className="w-4 h-4 text-neutral-400" />
              </button>
            </div>

            {/* Feature-Karten */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-[#E2E8F0] max-w-xl">
              {[
                {
                  icon: <CalendarRange className="w-4 h-4 text-[#C5A880]" />,
                  title: "Digitaler Bauelemente-Planer",
                  desc: "Interessenten konfigurieren grobe Anforderungen für Fenster, Türen oder Sanierungsprojekte online. Perfekt qualifizierte Anfragen direkt im Postfach."
                },
                {
                  icon: <UserPlus className="w-4 h-4 text-[#C5A880]" />,
                  title: "Mitarbeiter-Gewinnung",
                  desc: "Mobiles Bewerbungstool für Monteure und Handwerker aus der Region BS/WOB. Kurzbewerbung in 60 Sekunden ohne lästigen Papierkram."
                }
              ].map((feat, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -4, borderColor: "rgba(197, 168, 128, 0.4)" }}
                  className="p-5 bg-white border border-[#E2E8F0] rounded-2xl shadow-xs transition-all duration-300"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#0F172A] uppercase tracking-wider">
                    {feat.icon}
                    <span>{feat.title}</span>
                  </div>
                  <p className="text-xs text-neutral-500 mt-2 leading-relaxed">{feat.desc}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>

          {/* Rechts: Interaktives 3D-Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="lg:col-span-5 w-full flex justify-center"
            style={{ perspective: 1000 }}
          >
            <motion.div
              ref={cardRef}
              onMouseMove={handleMouseMoveCard}
              onMouseLeave={handleMouseLeaveCard}
              animate={{ rotateX, rotateY }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="w-full max-w-md bg-white border border-[#E2E8F0] rounded-3xl p-5 shadow-[0_25px_60px_-15px_rgba(15,23,42,0.06)] space-y-4 backface-visible transform-gpu"
            >
              
              {/* Browser Header */}
              <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-200" />
                </div>
                <div className="text-[9px] font-mono text-neutral-400 bg-[#FAF8F5] px-3 py-0.5 border border-[#E2E8F0] rounded-md">
                  diebauboutique-entwurf.de
                </div>
                <ChevronRight className="w-3 h-3 text-neutral-300" />
              </div>

              {/* Bild-Bereich */}
              <div className="relative rounded-2xl overflow-hidden shadow-inner border border-[#E2E8F0] aspect-[4/3] bg-[#FAF8F5] group">
                {CONFIG.imageUrl ? (
                  <img 
                    src={CONFIG.imageUrl} 
                    alt="Diebauboutique Fenster und Türen" 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#C5A880]/10 to-neutral-50 flex flex-col items-center justify-center text-neutral-400 p-4">
                    <span className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">[ Visueller Platzhalter ]</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-transparent opacity-70 pointer-events-none" />
                <div className="absolute bottom-3 left-3 text-white pointer-events-none">
                  <span className="text-[8px] font-mono text-neutral-300 uppercase tracking-widest block">Vercel Live-Vorschau</span>
                  <span className="text-xs font-semibold tracking-wide">Premium-Bauelemente & Handwerk</span>
                </div>
              </div>

              {/* Interaktiver Live-Zähler */}
              <div className="p-4 bg-[#FAF8F5] border border-[#E2E8F0] rounded-2xl flex items-center justify-between shadow-xs">
                <div className="space-y-0.5">
                  <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-wider">System-Aktivität</span>
                  <div className="text-xs font-bold text-[#0F172A] flex items-center gap-2">
                    <span>{applicantCount} qualifizierte Anfragen in Region BS/WOB</span>
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C5A880] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C5A880]"></span>
                    </span>
                  </div>
                </div>
                <div className="w-8 h-8 bg-[#0F172A]/5 rounded-full flex items-center justify-center text-[#0F172A]">
                  <Phone className="w-4 h-4" />
                </div>
              </div>

            </motion.div>
          </motion.div>

        </div>
      </main>

      {/* 4. MODAL DETAILED CONCEPT */}
      <AnimatePresence>
        {demoActive && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setDemoActive(false)}
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", duration: 0.4 }}
              className="max-w-md w-full bg-white border border-[#E2E8F0] p-6 rounded-3xl relative z-10 shadow-2xl"
            >
              <div className="space-y-4 text-center">
                <div className="w-12 h-12 rounded-full bg-[#FAF8F5] text-[#C5A880] flex items-center justify-center mx-auto border border-[#E2E8F0]">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">Hinweis zum Prototyp</h3>
                <p className="text-neutral-500 text-xs leading-relaxed">
                  Dieses digitale Kundensystem befindet sich im exklusiven Vorschau-Modus für Diebauboutique. Nach Freischaltung werden alle Formulare, Materialvorwahlen und Recruiting-Tools voll funktionsfähig geschaltet.
                </p>
                
                <div className="p-3.5 bg-[#FAF8F5] rounded-xl border border-[#E2E8F0] text-left font-mono text-[10px] text-neutral-500 space-y-1">
                  <div className="text-[#C5A880] font-bold">// Geplante Integrationen:</div>
                  <div className="text-[#0F172A] font-semibold">- Automatisierter Vorqualifizierungs-Assistent für Fenster & Türen</div>
                  <div className="text-[#0F172A] font-semibold">- WhatsApp-Schnittstelle für Express-Bewerbungen auf der Baustelle</div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setDemoActive(false)}
                    className="w-full py-3 rounded-xl text-xs font-semibold bg-[#0F172A] hover:bg-[#1E293B] active:scale-98 text-white transition-all duration-200 cursor-pointer shadow-sm"
                  >
                    Schließen
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
