import React from 'react';
import {
  History,
  Award,
  Target,
  Compass,
  CheckCircle,
  MapPin,
  Calendar,
  Sparkles,
  ArrowRight,
  ArrowLeft
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { TIMELINE_DATA } from '../data/mockData';

interface AboutTimelineProps {
  lang: Language;
}

export const AboutTimeline: React.FC<AboutTimelineProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="about" className="py-20 bg-[#f2f2f2] text-slate-900 border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#109466] text-xs font-bold uppercase tracking-wider mb-3">
            <History className="w-4 h-4" />
            <span>{t.about.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.about.title}
          </h2>
          <p className="mt-4 text-slate-700 text-base sm:text-lg leading-relaxed">
            {t.about.desc1}
          </p>
        </div>

        {/* Nahdet El Mahrousa & Green Works 2020 Feature Card */}
        <div className="mb-16 bg-gradient-to-br from-[#0e2a1c] via-[#092216] to-[#0e2a1c] text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-emerald-800/60 relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#fdbd31]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#fdbd31] text-slate-950 font-black text-xs px-3 py-1 rounded-full">
                <Award className="w-4 h-4" />
                <span>{t.about.awardBadge}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                {t.about.awardTitle}
              </h3>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed">
                {t.about.awardDesc}
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-[#fdbd31]">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  {lang === 'ar' ? 'محطات وسيطة في كل حي وقرية' : 'Neighborhood Intermediate Hubs'}
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  {lang === 'ar' ? 'تبديل فوري بسلع غذائية من الماركت' : 'Direct Grocery Store Redemption'}
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-lg">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  {lang === 'ar' ? 'توعية شاملة بالفصل من المنبع' : 'Household Source-Segregation Awareness'}
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-white/5 border border-white/10 rounded-2xl text-center backdrop-blur-sm">
              <div className="w-16 h-16 rounded-2xl bg-[#fdbd31] text-slate-900 flex items-center justify-center font-black text-2xl mb-3 shadow-lg">
                2020
              </div>
              <div className="text-base font-bold text-white">
                {lang === 'ar' ? 'برنامج Green Works' : 'Green Works Program'}
              </div>
              <div className="text-xs text-emerald-300 mt-1">
                {lang === 'ar' ? 'نهضة المحروسة والشركاء الدوليين' : 'Nahdet El Mahrousa & Global Partners'}
              </div>
            </div>
          </div>
        </div>

        {/* Vision, Mission, Values Triad */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* Vision */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#109466] flex items-center justify-center mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {t.about.visionTitle}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t.about.visionText}
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {t.about.missionTitle}
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              {t.about.missionText}
            </p>
          </div>

          {/* Core Values */}
          <div className="bg-white rounded-2xl p-7 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#109466] flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {t.about.valuesTitle}
            </h3>
            <div className="space-y-2.5">
              {t.about.values.map((v, idx) => (
                <div key={idx} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-[#109466]" />
                  <span>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Section (2018 -> 2026) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#109466] text-xs font-bold mb-2">
              <Calendar className="w-3.5 h-3.5" />
              <span>{lang === 'ar' ? 'محطات مضيئة في تاريخنا' : 'Key Milestones Since Inception'}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {lang === 'ar' ? 'مسيرة الريادة والنمو (2018 - 2026)' : 'Our Growth Path (2018 - 2026)'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {lang === 'ar'
                ? 'رحلة تمتد لـ 8 سنوات بدأت من الغربية وتغطي اليوم 3 محافظات بالدلتا مع تصدير دولي'
                : 'An 8-year journey rooted in Gharbia, expanding across 3 Delta governorates with global exports'}
            </p>
          </div>

          {/* Vertical/Horizontal Interactive Timeline */}
          <div className="relative border-l-2 md:border-l-0 md:border-t-2 border-[#109466]/40 ml-4 md:ml-0 md:pt-8 md:grid md:grid-cols-5 gap-4 space-y-8 md:space-y-0">
            {TIMELINE_DATA.map((event, idx) => {
              const title = lang === 'ar' ? event.titleAr : event.titleEn;
              const desc = lang === 'ar' ? event.descAr : event.descEn;
              const badge = lang === 'ar' ? event.badgeAr : event.badgeEn;

              return (
                <div key={idx} className="relative pl-6 md:pl-0 group">
                  {/* Timeline Dot Node */}
                  <div className="absolute -left-[31px] md:left-1/2 md:-top-[41px] md:-translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-[#109466] group-hover:scale-125 group-hover:bg-[#fdbd31] transition-all shadow" />

                  <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#109466] hover:shadow-md transition-all h-full flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xl font-black text-[#109466] font-mono">
                          {event.year}
                        </span>
                        {badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#fdbd31]/20 text-slate-900">
                            {badge}
                          </span>
                        )}
                      </div>
                      <h4 className="font-bold text-sm text-slate-900 leading-snug mb-2">
                        {title}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {desc}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-semibold text-[#109466]">
                      <span>{lang === 'ar' ? 'محطة رئيسية' : 'Milestone'}</span>
                      <ArrowIcon className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
