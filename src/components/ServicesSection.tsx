import React from 'react';
import {
  Droplets,
  Trash2,
  Boxes,
  Car,
  Flame,
  Smartphone,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { SERVICES_DATA } from '../data/mockData';

interface ServicesSectionProps {
  lang: Language;
  onRequestService: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onRequestService }) => {
  const t = TRANSLATIONS[lang];

  // Helper to render lucide icon dynamically
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Droplets':
        return <Droplets className="w-6 h-6" />;
      case 'Trash2':
        return <Trash2 className="w-6 h-6" />;
      case 'Boxes':
        return <Boxes className="w-6 h-6" />;
      case 'Car':
        return <Car className="w-6 h-6" />;
      case 'Flame':
        return <Flame className="w-6 h-6" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6" />;
      default:
        return <Boxes className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#109466] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span>{t.services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.services.title}
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            {t.services.subtitle}
          </p>
        </div>

        {/* 6 Circular Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service) => {
            const title = lang === 'ar' ? service.titleAr : service.titleEn;
            const summary = lang === 'ar' ? service.summaryAr : service.summaryEn;
            const details = lang === 'ar' ? service.detailsAr : service.detailsEn;
            const badge = lang === 'ar' ? service.badgeAr : service.badgeEn;

            return (
              <div
                key={service.id}
                className="bg-slate-50 rounded-3xl p-7 border border-slate-200 hover:border-[#109466] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-200 text-[#109466] flex items-center justify-center group-hover:bg-[#109466] group-hover:text-white transition-colors">
                      {renderIcon(service.icon)}
                    </div>
                    {badge && (
                      <span className="text-[11px] font-black px-2.5 py-1 rounded-full bg-[#fdbd31]/25 text-slate-900">
                        {badge}
                      </span>
                    )}
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#109466] transition-colors mb-3">
                    {title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {summary}
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-200/80">
                    {details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#109466] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <button
                    onClick={() => onRequestService(title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#109466] group-hover:text-[#0e2a1c] transition-colors"
                  >
                    <span>{t.services.requestBtn}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#fdbd31]" />
                  </button>
                  <span className="text-[10px] text-slate-600 uppercase tracking-widest font-mono">
                    GV-SVC-{service.id.toUpperCase()}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
