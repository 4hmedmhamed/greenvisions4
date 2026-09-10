import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactCounters } from './components/ImpactCounters';
import { AboutTimeline } from './components/AboutTimeline';
import { ServicesSection } from './components/ServicesSection';
import { TpeSection } from './components/TpeSection';
import { PlasticsSection } from './components/PlasticsSection';
import { BiomassAndGlycerin } from './components/BiomassAndGlycerin';
import { PlstkaAppSection } from './components/PlstkaAppSection';
import { InternationalTrade } from './components/InternationalTrade';
import { PartnersSection } from './components/PartnersSection';
import { CareersSection } from './components/CareersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { RequestCollectionModal } from './components/RequestCollectionModal';
import { MessageCircle, ArrowUpRight, Phone } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalPreset, setModalPreset] = useState<
    'individual' | 'business' | 'restaurant' | 'factory' | undefined
  >(undefined);

  // Sync document direction and language attribute
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleOpenModal = (preset?: 'individual' | 'business' | 'restaurant' | 'factory') => {
    setModalPreset(preset);
    setIsModalOpen(true);
  };

  const handleOpenSampleModal = (materialName: string) => {
    setModalPreset('factory');
    setIsModalOpen(true);
  };

  return (
    <div
      className={`min-h-screen bg-[#f2f2f2] text-slate-900 font-sans ${
        lang === 'ar' ? 'text-right' : 'text-left'
      }`}
    >
      {/* Primary Sticky Header */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onRequestCollection={() => handleOpenModal()}
      />

      {/* Hero Section */}
      <Hero
        lang={lang}
        onRequestCollection={(preset) => handleOpenModal(preset)}
      />

      {/* Impact Counters & Transparency Dashboard */}
      <ImpactCounters lang={lang} />

      {/* About GreenVision & 2018-2026 Timeline & Nahdet El Mahrousa Award */}
      <AboutTimeline lang={lang} />

      {/* 6 Core Circular Economy Services */}
      <ServicesSection
        lang={lang}
        onRequestService={(title) => handleOpenModal('business')}
      />

      {/* TPE Materials & Automotive Engineering Solutions */}
      <TpeSection
        lang={lang}
        onRequestSample={(type) => handleOpenSampleModal(type)}
      />

      {/* PCR Recycled Plastics (PP & HDPE) */}
      <PlasticsSection
        lang={lang}
        onRequestSample={(title) => handleOpenSampleModal(title)}
      />

      {/* Green Vision Biomass & Refined Glycerin USP */}
      <BiomassAndGlycerin
        lang={lang}
        onRequestQuote={(item) => handleOpenSampleModal(item)}
      />

      {/* Plstka Digital Platform & Points Calculator */}
      <PlstkaAppSection
        lang={lang}
        onOpenBottleModal={() => handleOpenModal('individual')}
      />

      {/* International Trade (Export / Import) */}
      <InternationalTrade
        lang={lang}
        onTradeInquiry={() => handleOpenModal('factory')}
      />

      {/* Strategic Partners & Institutional Accreditations */}
      <PartnersSection lang={lang} />

      {/* Careers & Open Opportunities */}
      <CareersSection lang={lang} />

      {/* Contact & Regional Operations Hub */}
      <ContactSection lang={lang} />

      {/* Comprehensive Brand Footer */}
      <Footer lang={lang} />

      {/* Interactive Request Collection & Sourcing Modal */}
      <RequestCollectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        lang={lang}
        preset={modalPreset}
      />

      {/* Floating WhatsApp Action Button */}
      <a
        id="floating-whatsapp-btn"
        href="https://wa.me/201000651818"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 rounded-full shadow-2xl flex items-center gap-2 group transition-all duration-300 hover:scale-105"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-black pr-1">
          {lang === 'ar' ? 'تواصل عبر واتساب' : 'Chat on WhatsApp'}
        </span>
      </a>
    </div>
  );
}
