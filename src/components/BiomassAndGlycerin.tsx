import React from 'react';
import {
  Flame,
  Droplet,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  TreePine,
  Layers,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface BiomassAndGlycerinProps {
  lang: Language;
  onRequestQuote: (item: string) => void;
}

export const BiomassAndGlycerin: React.FC<BiomassAndGlycerinProps> = ({ lang, onRequestQuote }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="biomass" className="py-20 bg-[#f2f2f2] border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: Green Vision Biomass */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#109466] text-xs font-bold uppercase tracking-wider mb-3">
              <Flame className="w-4 h-4" />
              <span>{t.biomass.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              {t.biomass.title}
            </h2>
            <p className="mt-3 text-slate-600 text-base sm:text-lg">
              {t.biomass.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Wood Pellets */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center mb-5">
                  <TreePine className="w-6 h-6" />
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-amber-50 text-amber-800 text-xs font-bold mb-3">
                  6-8 mm Biofuel Pellets
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">
                  {t.biomass.pelletsTitle}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {t.biomass.pelletsDesc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#109466]" />
                    <span>{lang === 'ar' ? 'قطر 6-8 مم أسطواني بكثافة عالية' : '6-8mm high-density cylindrical shape'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#109466]" />
                    <span>{lang === 'ar' ? 'قيمة حرارية عالية واحتراق نظيف منخفض الرماد' : 'High calorific output with minimal ash'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#109466]" />
                    <span>{lang === 'ar' ? 'بديل مستدام للمازوت والغاز في الغلايات والمزارع' : 'Sustainable fuel replacement for industrial boilers'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500 font-mono">
                  {lang === 'ar' ? 'شكائر 15 كجم / جامبو 1 طن' : '15kg bags / 1-ton jumbo'}
                </span>
                <button
                  onClick={() => onRequestQuote('Wood Pellets')}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#109466] hover:text-[#0e2a1c]"
                >
                  <span>{lang === 'ar' ? 'طلب عرض سعر' : 'Get Quote'}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#fdbd31]" />
                </button>
              </div>
            </div>

            {/* Card 2: Agricultural Residues */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#109466] flex items-center justify-center mb-5">
                  <Layers className="w-6 h-6" />
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold mb-3">
                  Delta Agri Feedstocks
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3">
                  {t.biomass.agriTitle}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {t.biomass.agriDesc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#109466]" />
                    <span>{lang === 'ar' ? 'تجميع وتجفيف قش الأرز ومخلفات المحاصيل بالدلتا' : 'Collection and drying of Delta rice straw and residues'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#109466]" />
                    <span>{lang === 'ar' ? 'خام مغذٍ لتصنيع الأعلاف الحيوانية والأسمدة العضوية' : 'Raw feedstock for animal feed and organic compost'}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#109466]" />
                    <span>{lang === 'ar' ? 'المساهمة المباشرة في القضاء على السحابة السوداء' : 'Direct elimination of open field residue burning'}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 mt-6 flex justify-between items-center">
                <span className="text-xs font-bold text-slate-500 font-mono">
                  {lang === 'ar' ? 'بالات مضغوطة / شاحنات صب' : 'Compacted bales / Bulk trailers'}
                </span>
                <button
                  onClick={() => onRequestQuote('Agricultural Residues')}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#109466] hover:text-[#0e2a1c]"
                >
                  <span>{lang === 'ar' ? 'طلب توريد للمزارع' : 'Order Supply'}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#fdbd31]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Refined Glycerin */}
        <div id="glycerin" className="bg-[#0e2a1c] text-white rounded-3xl p-8 sm:p-12 border border-emerald-800 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdbd31] text-slate-950 text-xs font-black">
                <Droplet className="w-4 h-4" />
                <span>{t.glycerin.badge}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                {t.glycerin.title}
              </h2>
              <p className="text-emerald-300 font-semibold text-base">
                {t.glycerin.subtitle}
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t.glycerin.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                {t.glycerin.specs.map((sp, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-emerald-950/60 p-3 rounded-xl border border-emerald-800 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#fdbd31] shrink-0 mt-0.5" />
                    <span>{sp}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  id="glycerin-inquiry-btn"
                  onClick={() => onRequestQuote('Refined Glycerin USP 99.5%')}
                  className="bg-[#109466] hover:bg-emerald-600 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-all active:scale-95 flex items-center gap-2"
                >
                  <span>{lang === 'ar' ? 'طلب توريد براميل جلسرين' : 'Order Glycerin Drums'}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#fdbd31]" />
                </button>
                <span className="text-xs text-emerald-400 font-medium">
                  {lang === 'ar' ? 'براميل 250 كجم زرقاء وفليكسي تانك 20 طن' : 'Blue 250kg drums & 20-ton Flexitanks'}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-emerald-950/80 rounded-2xl border border-emerald-700/60 text-center">
              <div className="w-16 h-16 rounded-2xl bg-sky-500/20 text-sky-300 flex items-center justify-center mb-3">
                <Droplet className="w-8 h-8" />
              </div>
              <div className="text-3xl font-black text-[#fdbd31] font-mono">
                99.5%
              </div>
              <div className="text-sm font-bold text-white mt-1">
                USP Grade Purity
              </div>
              <p className="text-xs text-slate-400 mt-2">
                {lang === 'ar' ? 'معتمد لصناعات الراتنجات ومستحضرات التجميل والصابون' : 'Certified for resins, cosmetics, antifreeze, & pharmaceuticals'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
