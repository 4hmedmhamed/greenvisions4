import React, { useState, useEffect } from 'react';
import { Phone, Mail, Globe, Menu, X, ArrowUpRight, Leaf, ShieldCheck } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onRequestCollection: (preset?: 'individual' | 'business' | 'restaurant' | 'factory') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onRequestCollection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#tpe', label: t.nav.tpe },
    { href: '#plastics', label: t.nav.plastics },
    { href: '#biomass', label: t.nav.biomass },
    { href: '#plstka', label: t.nav.plstka },
    { href: '#impact', label: t.nav.impact },
    { href: '#partners', label: t.nav.partners },
    { href: '#contact', label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification & Contact Bar */}
      <div className="bg-[#0e2a1c] text-emerald-100 text-xs py-2 px-4 border-b border-emerald-900/40">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-[#109466]/40 text-[#fdbd31] px-2 py-0.5 rounded-full font-medium text-[11px]">
              <ShieldCheck className="w-3 h-3" />
              <span>{lang === 'ar' ? 'سنة التأسيس 2018' : 'Since 2018'}</span>
            </span>
            <span className="hidden sm:inline text-emerald-300">•</span>
            <span className="hidden sm:inline font-medium">{t.topbarNotice}</span>
          </div>

          <div className="flex items-center gap-4 text-xs">
            <a
              href="tel:01000651818"
              className="flex items-center gap-1.5 hover:text-[#fdbd31] transition-colors"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-[#109466]" />
              <span className="font-semibold">01000651818</span>
            </a>
            <span className="text-emerald-700 hidden md:inline">|</span>
            <a
              href="mailto:Ahmed@greenvision-eg.com"
              className="hidden md:flex items-center gap-1.5 hover:text-[#fdbd31] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#109466]" />
              <span>Ahmed@greenvision-eg.com</span>
            </a>
            <span className="text-emerald-700">|</span>
            {/* Language Switcher */}
            <button
              id="lang-toggle-btn"
              onClick={onToggleLang}
              className="flex items-center gap-1 text-xs font-bold text-white bg-emerald-800/60 hover:bg-emerald-700 px-2.5 py-1 rounded transition-colors"
              title={lang === 'ar' ? 'Switch to English' : 'التحويل للغة العربية'}
            >
              <Globe className="w-3.5 h-3.5 text-[#fdbd31]" />
              <span>{t.nav.language}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-200 border-b ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-slate-200/80 py-2.5'
            : 'bg-white border-slate-200 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#109466] to-[#0e2a1c] flex items-center justify-center text-white shadow-md shadow-emerald-900/15 group-hover:scale-105 transition-transform">
              <Leaf className="w-5 h-5 text-[#fdbd31]" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black tracking-tight text-[#0e2a1c]">GREEN</span>
                <span className="text-xl font-black tracking-tight text-[#109466]">VISION</span>
              </div>
              <span className="text-[10px] font-bold text-slate-500 tracking-wider -mt-1">
                {lang === 'ar' ? 'جرين فيجن للاقتصاد الدائري' : 'CIRCULAR SOLUTIONS'}
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden xl:flex items-center gap-5 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-[#109466] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#109466] after:absolute after:bottom-0 after:left-0 after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTA & Mobile Trigger */}
          <div className="flex items-center gap-3">
            <button
              id="cta-request-collection-nav"
              onClick={() => onRequestCollection()}
              className="relative inline-flex items-center gap-2 bg-[#109466] hover:bg-[#0e2a1c] text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg shadow-sm hover:shadow-md transition-all active:scale-95"
            >
              <span>{t.nav.requestCollection}</span>
              <ArrowUpRight className="w-4 h-4 text-[#fdbd31]" />
            </button>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Menu Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-2">
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-slate-700 hover:bg-emerald-50 hover:text-[#109466] rounded-md transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onRequestCollection();
                }}
                className="w-full flex items-center justify-center gap-2 bg-[#109466] text-white py-2.5 rounded-lg font-bold text-sm shadow"
              >
                <span>{t.nav.requestCollection}</span>
                <ArrowUpRight className="w-4 h-4 text-[#fdbd31]" />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
