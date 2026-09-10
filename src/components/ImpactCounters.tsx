import React, { useState } from 'react';
import {
  TrendingUp,
  ShieldCheck,
  Award,
  Users,
  Building,
  Briefcase,
  MapPin,
  Leaf,
  BarChart3,
  Calendar,
  Layers
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ImpactCountersProps {
  lang: Language;
}

export const ImpactCounters: React.FC<ImpactCountersProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [activeCategory, setActiveCategory] = useState<'total' | 'uco' | 'plastic' | 'solid'>('total');

  // Realistic monthly transparency data for 2025/2026
  const monthlyData = [
    { monthAr: 'يناير', monthEn: 'Jan', total: 1120, uco: 460, plastic: 380, solid: 280, co2: 610 },
    { monthAr: 'فبراير', monthEn: 'Feb', total: 1240, uco: 510, plastic: 420, solid: 310, co2: 680 },
    { monthAr: 'مارس', monthEn: 'Mar', total: 1380, uco: 570, plastic: 460, solid: 350, co2: 750 },
    { monthAr: 'أبريل', monthEn: 'Apr', total: 1450, uco: 610, plastic: 490, solid: 350, co2: 790 },
    { monthAr: 'مايو', monthEn: 'May', total: 1590, uco: 660, plastic: 530, solid: 400, co2: 870 },
    { monthAr: 'يونيو', monthEn: 'Jun', total: 1720, uco: 720, plastic: 580, solid: 420, co2: 940 },
    { monthAr: 'يوليو', monthEn: 'Jul', total: 1850, uco: 780, plastic: 620, solid: 450, co2: 1010 },
    { monthAr: 'أغسطس', monthEn: 'Aug', total: 1980, uco: 830, plastic: 670, solid: 480, co2: 1080 },
  ];

  const maxVal = 2000;

  return (
    <section id="impact" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#109466] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-[#109466]" />
            <span>{t.impact.transparencyBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.impact.title}
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            {t.impact.subtitle}
          </p>
        </div>

        {/* 6 Key Impact Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-14">
          {/* Tons Waste */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 hover:border-emerald-500 hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-[#109466] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-mono">
              85,000+
            </div>
            <div className="text-xs text-slate-600 font-semibold mt-1">
              {t.impact.statTons}
            </div>
          </div>

          {/* Tons CO2 */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 hover:border-emerald-500 hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-amber-100/80 text-amber-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Leaf className="w-5 h-5 text-[#109466]" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-mono">
              45,000+
            </div>
            <div className="text-xs text-slate-600 font-semibold mt-1">
              {t.impact.statCo2}
            </div>
          </div>

          {/* Active Users */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 hover:border-emerald-500 hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-emerald-100/80 text-[#109466] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-mono">
              120,000+
            </div>
            <div className="text-xs text-slate-600 font-semibold mt-1">
              {t.impact.statUsers}
            </div>
          </div>

          {/* Corporate Partners */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 hover:border-emerald-500 hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-sky-100/80 text-sky-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Building className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-mono">
              1,500+
            </div>
            <div className="text-xs text-slate-600 font-semibold mt-1">
              {t.impact.statPartners}
            </div>
          </div>

          {/* Green Jobs */}
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 hover:border-emerald-500 hover:shadow-md transition-all group">
            <div className="w-10 h-10 rounded-xl bg-amber-100/80 text-amber-700 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <Briefcase className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight font-mono">
              350+
            </div>
            <div className="text-xs text-slate-600 font-semibold mt-1">
              {t.impact.statJobs}
            </div>
          </div>

          {/* Delta Governorates */}
          <div className="bg-emerald-900 text-white rounded-2xl p-5 shadow-lg group">
            <div className="w-10 h-10 rounded-xl bg-emerald-800 text-[#fdbd31] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-[#fdbd31] tracking-tight font-mono">
              3
            </div>
            <div className="text-xs text-emerald-100 font-semibold mt-1">
              {t.impact.statGovs}
            </div>
          </div>
        </div>

        {/* Interactive Transparency Dashboard (Olleco & Tagaddod benchmark) */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 text-white border border-slate-800 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-1">
                <BarChart3 className="w-4 h-4" />
                <span>{lang === 'ar' ? 'تقرير التدقيق الميداني المباشر' : 'Live Field Audit Logs'}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                {t.impact.chartTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                {t.impact.chartSubtitle}
              </p>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory('total')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === 'total'
                    ? 'bg-[#109466] text-white shadow'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {lang === 'ar' ? 'إجمالي الأطنان' : 'Total Tonnage'}
              </button>
              <button
                onClick={() => setActiveCategory('uco')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === 'uco'
                    ? 'bg-amber-500 text-slate-950 font-black shadow'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {lang === 'ar' ? 'زيت طعام مستعمل (UCO)' : 'Used Cooking Oil'}
              </button>
              <button
                onClick={() => setActiveCategory('plastic')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === 'plastic'
                    ? 'bg-sky-500 text-white shadow'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {lang === 'ar' ? 'خامات البلاستيك (PCR)' : 'PCR Plastics'}
              </button>
              <button
                onClick={() => setActiveCategory('solid')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === 'solid'
                    ? 'bg-emerald-600 text-white shadow'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                }`}
              >
                {lang === 'ar' ? 'مخلفات صلبة وإلكترونية' : 'Solid & E-Waste'}
              </button>
            </div>
          </div>

          {/* Bar Chart Visualization */}
          <div className="pt-8">
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3 sm:gap-4 items-end h-56 pb-2">
              {monthlyData.map((d, idx) => {
                const val = d[activeCategory];
                const heightPercent = Math.min(100, Math.round((val / maxVal) * 100));

                let barColor = 'bg-[#109466] hover:bg-emerald-400';
                if (activeCategory === 'uco') barColor = 'bg-[#fdbd31] hover:bg-amber-300';
                if (activeCategory === 'plastic') barColor = 'bg-sky-400 hover:bg-sky-300';
                if (activeCategory === 'solid') barColor = 'bg-emerald-500 hover:bg-emerald-400';

                return (
                  <div key={idx} className="flex flex-col items-center h-full justify-end group relative">
                    {/* Tooltip on hover */}
                    <div className="absolute -top-10 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[11px] font-bold px-2 py-1 rounded shadow pointer-events-none whitespace-nowrap z-10">
                      {val.toLocaleString()} {lang === 'ar' ? 'طن' : 'Tons'}
                    </div>

                    {/* Bar */}
                    <div
                      style={{ height: `${heightPercent}%` }}
                      className={`w-full max-w-[42px] rounded-t-lg transition-all duration-500 ${barColor}`}
                    />

                    {/* Label */}
                    <div className="text-[11px] font-semibold text-slate-400 mt-2 text-center">
                      {lang === 'ar' ? d.monthAr : d.monthEn}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Chart Footer Legend */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#109466]" />
                  <span>{lang === 'ar' ? 'بيانات مدققة شهرياً' : 'Audited Monthly Logs'}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#fdbd31]" />
                  <span>{lang === 'ar' ? 'مطابق لقانون 202 لسنة 2020' : 'WMRA Law 202 Compliant'}</span>
                </span>
              </div>
              <div className="text-emerald-400 font-medium flex items-center gap-1">
                <ShieldCheck className="w-4 h-4" />
                <span>{lang === 'ar' ? 'شهادات تخلص معتمدة (Waste Transfer Notes)' : 'Certified Waste Transfer Certificates'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
