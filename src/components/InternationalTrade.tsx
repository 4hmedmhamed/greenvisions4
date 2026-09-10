import React from 'react';
import {
  Globe2,
  ArrowUpRight,
  Ship,
  ShieldCheck,
  CheckCircle2,
  UploadCloud,
  DownloadCloud,
  Truck
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface InternationalTradeProps {
  lang: Language;
  onTradeInquiry: () => void;
}

export const InternationalTrade: React.FC<InternationalTradeProps> = ({ lang, onTradeInquiry }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="trade" className="py-20 bg-slate-900 text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Globe2 className="w-4 h-4 text-[#fdbd31]" />
            <span>{t.trade.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            {t.trade.title}
          </h2>
          <p className="mt-3 text-slate-400 text-base sm:text-lg">
            {t.trade.subtitle}
          </p>
        </div>

        {/* 3 Columns: Exports, Imports, Logistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {/* Column 1: Exports */}
          <div className="bg-slate-800/80 rounded-3xl p-7 border border-slate-700/80 hover:border-[#109466] transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-950 text-emerald-400 flex items-center justify-center mb-5 border border-emerald-800">
                <UploadCloud className="w-6 h-6 text-[#109466]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {t.trade.exportTitle}
              </h3>
              <div className="space-y-3">
                {t.trade.exportItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#109466] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-6 border-t border-slate-700/60 mt-6">
              <span className="text-xs text-emerald-400 font-semibold block">
                {lang === 'ar' ? 'مطابق لمواصفات التصدير الأوروبية' : 'EU compliant export documentation'}
              </span>
            </div>
          </div>

          {/* Column 2: Imports */}
          <div className="bg-slate-800/80 rounded-3xl p-7 border border-slate-700/80 hover:border-amber-500 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-950 text-amber-400 flex items-center justify-center mb-5 border border-amber-800">
                <DownloadCloud className="w-6 h-6 text-[#fdbd31]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {t.trade.importTitle}
              </h3>
              <div className="space-y-3">
                {t.trade.importItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-[#fdbd31] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-6 border-t border-slate-700/60 mt-6">
              <span className="text-xs text-[#fdbd31] font-semibold block">
                {lang === 'ar' ? 'تسهيلات جمركية وتخليص سريع' : 'Customs clearance & local distribution'}
              </span>
            </div>
          </div>

          {/* Column 3: Logistics & Services */}
          <div className="bg-slate-800/80 rounded-3xl p-7 border border-slate-700/80 hover:border-sky-500 transition-all flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sky-950 text-sky-400 flex items-center justify-center mb-5 border border-sky-800">
                <Ship className="w-6 h-6 text-sky-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {t.trade.servicesTitle}
              </h3>
              <div className="space-y-3">
                {t.trade.servicesItems.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="pt-6 border-t border-slate-700/60 mt-6">
              <span className="text-xs text-sky-400 font-semibold block">
                {lang === 'ar' ? 'فحص نوعي واختبارات معملية معتمدة' : 'Batch lab testing & quality certification'}
              </span>
            </div>
          </div>
        </div>

        {/* Trade CTA Bar */}
        <div className="bg-gradient-to-r from-[#109466] to-[#0e2a1c] p-6 sm:p-8 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h4 className="text-xl sm:text-2xl font-black text-white">
              {lang === 'ar' ? 'هل تبحث عن استيراد أو تصدير شحنات خامات مستدامة؟' : 'Looking to Source or Export Sustainable Feedstocks?'}
            </h4>
            <p className="text-emerald-100 text-xs sm:text-sm mt-1">
              {lang === 'ar'
                ? 'فريق التجارة الدولية جاهز لتزويدك بعينات مجانية وعروض أسعار تنافسية (FOB / CIF).'
                : 'Our global trading desk provides free commercial samples and competitive CIF/FOB pricing.'}
            </p>
          </div>
          <button
            id="trade-inquiry-btn"
            onClick={onTradeInquiry}
            className="shrink-0 bg-[#fdbd31] hover:bg-amber-400 text-slate-950 font-black text-sm px-6 py-3.5 rounded-xl shadow-lg transition-all active:scale-95 flex items-center gap-2"
          >
            <span>{t.trade.btnInquiry}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
