import React from 'react';
import {
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Home,
  Utensils,
  Factory,
  Sparkles,
  MapPin,
  CheckCircle2,
  Download
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface HeroProps {
  lang: Language;
  onRequestCollection: (preset?: 'individual' | 'business' | 'restaurant' | 'factory') => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onRequestCollection }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0e2a1c] via-[#091b12] to-[#0e2a1c] text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Background Graphic & Light Glows */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src="/src/assets/images/hero_greenvision_eco_facility_1789042495225.jpg"
          alt="GreenVision Eco Industrial Facility"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e2a1c] via-[#0e2a1c]/80 to-[#0e2a1c]/90" />
      </div>

      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#109466]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#fdbd31]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-semibold backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#fdbd31]" />
              <span>{t.hero.badge}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#fdbd31] animate-pulse" />
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
                <span className="text-white block">{t.hero.titleHighlight}</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#109466] via-emerald-400 to-[#fdbd31]">
                  {t.hero.titleRest}
                </span>
              </h1>
              <p className="text-[#fdbd31] font-bold text-lg sm:text-xl pt-1">
                {t.tagline}
              </p>
            </div>

            {/* Description */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              {t.hero.description}
            </p>

            {/* 4 Interactive Customer Segment Entry Points */}
            <div className="pt-2">
              <span className="text-xs uppercase font-bold tracking-wider text-emerald-400 block mb-3">
                {t.hero.quickEntryTitle}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {/* Individual */}
                <button
                  id="hero-btn-individual"
                  onClick={() => onRequestCollection('individual')}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/10 hover:bg-[#109466] border border-white/10 hover:border-emerald-400 text-center transition-all group backdrop-blur-sm active:scale-95"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 group-hover:bg-white/20 flex items-center justify-center mb-1.5 text-[#fdbd31] group-hover:text-white transition-colors">
                    <Home className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white block">
                    {t.hero.entryIndividual}
                  </span>
                  <span className="text-[10px] text-emerald-300 group-hover:text-white/80 line-clamp-1 mt-0.5">
                    {lang === 'ar' ? 'للمنزل والنقاط' : 'Home & points'}
                  </span>
                </button>

                {/* Business */}
                <button
                  id="hero-btn-business"
                  onClick={() => onRequestCollection('business')}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/10 hover:bg-[#109466] border border-white/10 hover:border-emerald-400 text-center transition-all group backdrop-blur-sm active:scale-95"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 group-hover:bg-white/20 flex items-center justify-center mb-1.5 text-[#fdbd31] group-hover:text-white transition-colors">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white block">
                    {t.hero.entryBusiness}
                  </span>
                  <span className="text-[10px] text-emerald-300 group-hover:text-white/80 line-clamp-1 mt-0.5">
                    {lang === 'ar' ? 'مخلفات الشركات' : 'Corporate waste'}
                  </span>
                </button>

                {/* Restaurant */}
                <button
                  id="hero-btn-restaurant"
                  onClick={() => onRequestCollection('restaurant')}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/10 hover:bg-[#109466] border border-white/10 hover:border-emerald-400 text-center transition-all group backdrop-blur-sm active:scale-95"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 group-hover:bg-white/20 flex items-center justify-center mb-1.5 text-[#fdbd31] group-hover:text-white transition-colors">
                    <Utensils className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white block">
                    {t.hero.entryRestaurant}
                  </span>
                  <span className="text-[10px] text-emerald-300 group-hover:text-white/80 line-clamp-1 mt-0.5">
                    {lang === 'ar' ? 'عقود زيت الطعام' : 'UCO contracts'}
                  </span>
                </button>

                {/* Factory */}
                <button
                  id="hero-btn-factory"
                  onClick={() => onRequestCollection('factory')}
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-white/10 hover:bg-[#109466] border border-white/10 hover:border-emerald-400 text-center transition-all group backdrop-blur-sm active:scale-95"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/20 group-hover:bg-white/20 flex items-center justify-center mb-1.5 text-[#fdbd31] group-hover:text-white transition-colors">
                    <Factory className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-white block">
                    {t.hero.entryFactory}
                  </span>
                  <span className="text-[10px] text-emerald-300 group-hover:text-white/80 line-clamp-1 mt-0.5">
                    {lang === 'ar' ? 'خامات PCR و TPE' : 'PCR & TPE supply'}
                  </span>
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                id="hero-cta-main"
                onClick={() => onRequestCollection()}
                className="inline-flex items-center gap-2.5 bg-[#109466] hover:bg-emerald-600 text-white font-bold text-base px-6 py-3.5 rounded-xl shadow-lg shadow-emerald-950/40 hover:shadow-emerald-700/20 transition-all active:scale-95"
              >
                <span>{t.hero.quickAction}</span>
                <ArrowUpRight className="w-5 h-5 text-[#fdbd31]" />
              </button>

              <a
                href="#plastics"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-6 py-3.5 rounded-xl border border-white/15 transition-all"
              >
                <span>{t.hero.btnExplore}</span>
              </a>
            </div>

            {/* 4 Stat Badges in a clean horizontal strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-emerald-900/60">
              <div className="bg-emerald-950/40 border border-emerald-800/40 rounded-xl p-3">
                <div className="text-2xl sm:text-3xl font-black text-[#fdbd31] font-mono">
                  {t.hero.stat1Val}
                </div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">
                  {t.hero.stat1Label}
                </div>
              </div>

              <div className="bg-emerald-950/40 border border-emerald-800/40 rounded-xl p-3">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                  {t.hero.stat2Val}
                </div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">
                  {t.hero.stat2Label}
                </div>
              </div>

              <div className="bg-emerald-950/40 border border-emerald-800/40 rounded-xl p-3">
                <div className="text-2xl sm:text-3xl font-black text-[#fdbd31] font-mono">
                  {t.hero.stat3Val}
                </div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">
                  {t.hero.stat3Label}
                </div>
              </div>

              <div className="bg-emerald-950/40 border border-emerald-800/40 rounded-xl p-3">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">
                  {t.hero.stat4Val}
                </div>
                <div className="text-xs text-slate-300 font-medium mt-0.5">
                  {t.hero.stat4Label}
                </div>
              </div>
            </div>
          </div>

          {/* Phone & Plstka Visual Showcase (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              {/* Decorative background glow behind the phone mockup */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#109466] to-[#fdbd31] rounded-[2.5rem] blur opacity-40 animate-pulse" />

              {/* Smartphone Frame */}
              <div className="relative rounded-[2.2rem] bg-slate-900 border-[6px] border-slate-800 shadow-2xl overflow-hidden p-3">
                {/* Phone Speaker Notch */}
                <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-slate-900 mr-2" />
                  <div className="w-8 h-1 bg-slate-700 rounded-full" />
                </div>

                {/* Plstka App Header Inside Screen */}
                <div className="bg-[#109466] rounded-2xl p-4 text-white shadow-md">
                  <div className="flex justify-between items-center mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-white/20 flex items-center justify-center font-bold text-xs">
                        P
                      </div>
                      <div>
                        <div className="text-xs font-bold leading-tight">Plstka App • بلستكة</div>
                        <div className="text-[10px] text-emerald-100 flex items-center gap-1">
                          <MapPin className="w-2.5 h-2.5" />
                          <span>{lang === 'ar' ? 'طنطا والدلتا (مباشر)' : 'Delta Live Coverage'}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-[#fdbd31] text-slate-900 text-[11px] font-black px-2 py-0.5 rounded-full">
                        2,450 {lang === 'ar' ? 'نقطة' : 'pts'}
                      </span>
                    </div>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-2.5 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] text-emerald-200">
                        {lang === 'ar' ? 'الجمع القادم المجدول' : 'Next Scheduled Pickup'}
                      </div>
                      <div className="text-xs font-bold text-white">
                        {lang === 'ar' ? 'اليوم، 3:30 م • شاحنة رقم #4' : 'Today, 3:30 PM • Truck #4'}
                      </div>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
                  </div>
                </div>

                {/* Live Simulated Map with Truck Pins */}
                <div className="mt-3 relative h-48 bg-slate-950 rounded-xl overflow-hidden border border-slate-800">
                  <div className="absolute inset-0 bg-[radial-gradient(#109466_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />
                  
                  {/* Delta Region Map Labels */}
                  <div className="absolute top-4 left-6 bg-slate-900/90 border border-emerald-500/40 rounded-lg px-2 py-1 text-[10px] font-bold text-emerald-400">
                    📍 {lang === 'ar' ? 'طنطا (المقر الرئيسي)' : 'Tanta Central Hub'}
                  </div>
                  <div className="absolute bottom-6 right-6 bg-slate-900/90 border border-[#fdbd31]/40 rounded-lg px-2 py-1 text-[10px] font-bold text-[#fdbd31]">
                    🚛 {lang === 'ar' ? 'سيارة تجميع #12 متجهة للمنصورة' : 'Collection Truck #12'}
                  </div>
                  <div className="absolute bottom-16 left-8 bg-slate-900/90 border border-slate-700 rounded-lg px-2 py-1 text-[10px] text-slate-300">
                    📦 {lang === 'ar' ? 'محطة وسيطة - المنوفية' : 'Intermediate Hub - Menoufia'}
                  </div>

                  {/* Route lines */}
                  <svg className="absolute inset-0 w-full h-full pointer-events-none stroke-emerald-400/40 stroke-2">
                    <line x1="80" y1="40" x2="220" y2="140" strokeDasharray="4 4" />
                    <line x1="80" y1="40" x2="90" y2="120" strokeDasharray="4 4" />
                  </svg>
                </div>

                {/* Quick App Actions */}
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.plstka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-[#109466] hover:bg-emerald-600 text-white rounded-xl py-2 px-2 text-xs font-bold shadow transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-[#fdbd31]" />
                    <span>Google Play</span>
                  </a>
                  <a
                    href="https://plstka.com/?sfnsn=scwspwa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl py-2 px-2 text-xs font-semibold border border-slate-700 transition-colors"
                  >
                    <span>{lang === 'ar' ? 'موقع بلستكة' : 'Plstka Web'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
                  </a>
                </div>

                {/* Verification points notice */}
                <div className="mt-2.5 flex items-center justify-center gap-1.5 text-[10px] text-emerald-400 font-medium">
                  <CheckCircle2 className="w-3 h-3 text-[#fdbd31]" />
                  <span>{lang === 'ar' ? 'تبديل فوري بالماركت الشريكة بالدلتا' : 'Instant redemption at partner supermarkets'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
