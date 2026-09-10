import React, { useState } from 'react';
import {
  Boxes,
  CheckCircle2,
  Filter,
  ArrowUpRight,
  ShieldCheck,
  Package,
  Layers,
  Sparkles
} from 'lucide-react';
import { Language, ProductItem } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { PRODUCTS_DATA } from '../data/mockData';

interface PlasticsSectionProps {
  lang: Language;
  onRequestSample: (productTitle: string) => void;
}

export const PlasticsSection: React.FC<PlasticsSectionProps> = ({ lang, onRequestSample }) => {
  const t = TRANSLATIONS[lang];
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'pp' | 'hdpe'>('all');

  const ppProducts = PRODUCTS_DATA.filter((p) => p.category === 'pp');
  const hdpeProducts = PRODUCTS_DATA.filter((p) => p.category === 'hdpe');

  const filteredProducts =
    selectedCategory === 'all'
      ? [...ppProducts, ...hdpeProducts]
      : selectedCategory === 'pp'
      ? ppProducts
      : hdpeProducts;

  return (
    <section id="plastics" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#109466] text-xs font-bold uppercase tracking-wider mb-3">
            <Boxes className="w-4 h-4" />
            <span>{t.plastics.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.plastics.title}
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            {t.plastics.subtitle}
          </p>
        </div>

        {/* Industrial Overview Card with Macro Photography */}
        <div className="bg-[#0e2a1c] text-white rounded-3xl p-6 sm:p-10 mb-14 border border-emerald-800 shadow-xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-2 bg-[#fdbd31] text-slate-950 text-xs font-black px-3 py-1 rounded-full">
                <ShieldCheck className="w-3.5 h-3.5" />
                {lang === 'ar' ? 'طاقة إنتاجية +200 طن شهرياً' : '+200 Tons Monthly Capacity'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {lang === 'ar' ? 'معايير صناعية صارمة ورقابة مخبرية لكل دفعة' : 'Strict Industrial Lab QC on Every Batch'}
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t.plastics.note}
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-emerald-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#fdbd31]" />
                  {lang === 'ar' ? '100% مصدر صناعي موحد (BOPP Scrap)' : '100% Single-Source Post-Industrial BOPP'}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#fdbd31]" />
                  {lang === 'ar' ? 'فلترة مصهور دقيقة (Melt Filtration)' : 'Fine Melt Filtration for Zero Contamination'}
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#fdbd31]" />
                  {lang === 'ar' ? 'عينات مخبرية مجانية قبل التعاقد' : 'Lab Samples Available Prior to Contracting'}
                </span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-emerald-700/50 shadow-2xl">
                <img
                  src="/src/assets/images/pcr_plastic_pellets_1789042538391.jpg"
                  alt="High Quality PCR Plastic Pellets"
                  className="w-full h-64 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-xs font-bold text-white flex justify-between items-center">
                  <span>{lang === 'ar' ? 'حبيبات PCR PP و HDPE متجانسة' : 'Uniform PCR PP & HDPE Pellets'}</span>
                  <span className="text-[#fdbd31] font-mono">QC Passed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-[#109466] text-white shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {lang === 'ar' ? 'جميع الخامات' : 'All Polymers'}
            </button>
            <button
              onClick={() => setSelectedCategory('pp')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === 'pp'
                  ? 'bg-[#109466] text-white shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              PP Homopolymer (بولي بروبيلين)
            </button>
            <button
              onClick={() => setSelectedCategory('hdpe')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === 'hdpe'
                  ? 'bg-[#109466] text-white shadow'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              HDPE Blow Moulding (بولي إيثيلين)
            </button>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const title = lang === 'ar' ? product.titleAr : product.titleEn;
            const grade = lang === 'ar' ? product.gradeAr : product.gradeEn;
            const desc = lang === 'ar' ? product.descAr : product.descEn;
            const color = lang === 'ar' ? product.colorAr : product.colorEn;
            const specs = lang === 'ar' ? product.specsAr : product.specsEn;
            const apps = lang === 'ar' ? product.applicationsAr : product.applicationsEn;
            const capacity = lang === 'ar' ? product.capacityAr : product.capacityEn;

            return (
              <div
                key={product.id}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 hover:border-[#109466] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Color & Grade Header */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-5 h-5 rounded-full border border-slate-300 shadow-sm shrink-0"
                        style={{ backgroundColor: product.colorHex }}
                      />
                      <span className="text-xs font-bold text-slate-700">{color}</span>
                    </div>
                    <span className="text-[11px] font-black px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-800">
                      {grade}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[#109466] transition-colors mb-2">
                    {title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {desc}
                  </p>

                  {/* Specifications */}
                  <div className="space-y-2 mb-4 pt-3 border-t border-slate-200">
                    <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider">
                      {lang === 'ar' ? 'المواصفات والخصائص:' : 'Key Specifications:'}
                    </div>
                    {specs.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <span className="text-[#109466] font-bold">•</span>
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>

                  {/* Applications Pills */}
                  <div className="mb-4">
                    <div className="text-[11px] font-bold text-slate-800 uppercase tracking-wider mb-2">
                      {lang === 'ar' ? 'أبرز التطبيقات:' : 'Applications:'}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {apps.map((app, aIdx) => (
                        <span
                          key={aIdx}
                          className="bg-white border border-slate-200 text-slate-700 text-[11px] font-medium px-2 py-0.5 rounded-md"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA & Capacity */}
                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                    {capacity}
                  </span>

                  <button
                    onClick={() => onRequestSample(title)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#109466] hover:text-[#0e2a1c] transition-colors"
                  >
                    <span>{t.plastics.btnRequestSample}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#fdbd31]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
