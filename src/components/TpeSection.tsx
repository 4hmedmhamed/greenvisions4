import React from 'react';
import {
  Car,
  Layers,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  FileSpreadsheet,
  Cpu,
  Sparkles,
  Award
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface TpeSectionProps {
  lang: Language;
  onRequestSample: (type: string) => void;
}

export const TpeSection: React.FC<TpeSectionProps> = ({ lang, onRequestSample }) => {
  const t = TRANSLATIONS[lang];
  const ArrowIcon = lang === 'ar' ? ArrowLeft : ArrowRight;

  const chainSteps = [
    { num: '01', title: t.tpe.chainStep1, desc: lang === 'ar' ? 'حبيبات بلمرة متجانسة' : 'Virgin-grade compounded resin' },
    { num: '02', title: t.tpe.chainStep2, desc: lang === 'ar' ? 'بثق ألواح ورولات بمقاسات دقيقة' : 'Calibrated roll extrusion' },
    { num: '03', title: t.tpe.chainStep3, desc: lang === 'ar' ? 'كبس حراري ثلاثي الأبعاد 3D' : 'Precision vacuum thermoforming' },
    { num: '04', title: t.tpe.chainStep4, desc: lang === 'ar' ? 'تشذيب حواف بالروبوت / ليزر' : 'CNC automated trimming' },
    { num: '05', title: t.tpe.chainStep5, desc: lang === 'ar' ? 'فرش سيارة فائق المتانة جاهز للتركيب' : 'OEM-ready finished liner' },
  ];

  const applications = [
    {
      titleAr: 'دواسات أرضية السيارات (Floor Mats)',
      titleEn: 'Automotive Floor Mats',
      icon: '🚗',
      descAr: 'مرونة عالية ومقاومة فائقة للانزلاق وسهولة تامة في الغسيل والتنظيف.',
      descEn: 'Exceptional flexural fatigue resistance with anti-slip high-grip textured surface.'
    },
    {
      titleAr: 'بطانات أرضيات 3D بحواف مرفوعة (3D Floor Liners)',
      titleEn: '3D Laser-Fit Floor Liners',
      icon: '🚙',
      descAr: 'تشكيل حراري دقيق يطابق أرضية السيارة ويمنع تسرب السوائل والأتربة للموكيت.',
      descEn: 'Raised perimeter walls capturing mud, liquids, and sand with deep laser-scan precision.'
    },
    {
      titleAr: 'فرش وبطانات شنطة السيارة (Trunk & Cargo Liners)',
      titleEn: 'Trunk & Cargo Cargo Liners',
      icon: '🧳',
      descAr: 'حماية قصوى لمساحة الأمتعة ضد الزيوت، المواد الكيميائية، والأوزان الثقيلة.',
      descEn: 'Heavy-duty puncture-resistant cargo protection resisting oil, water, and load scraping.'
    },
    {
      titleAr: 'قطع الديكور والتشطيب الداخلي (Interior Trim)',
      titleEn: 'Interior Trim Components',
      icon: '🚪',
      descAr: 'ملمس ناعم وعزل للصوت والاهتزازات يفي بمعايير مصنعي السيارات العالمية.',
      descEn: 'Acoustic dampening and soft-touch weather-resistant cabin seals and moldings.'
    },
    {
      titleAr: 'قطع الحماية الصناعية (Industrial Protective Parts)',
      titleEn: 'Industrial Protective Parts',
      icon: '🛠️',
      descAr: 'عوازل ميكانيكية ومانعات صدمات للآلات والمعدات الثقيلة.',
      descEn: 'Heavy impact pads, bumpers, and vibration dampeners for industrial machinery.'
    },
    {
      titleAr: 'مكونات مشكلة حرارياً حسب الطلب (Custom Thermoformed)',
      titleEn: 'Custom Thermoformed Components',
      icon: '📦',
      descAr: 'تصميم قوالب وأبعاد خاصة لمصانع السيارات وقطع الغيار البديلة.',
      descEn: 'Bespoke custom molds fabricated to precise OEM blueprints and CAD specifications.'
    }
  ];

  return (
    <section id="tpe" className="py-20 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      {/* Background Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#109466]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#fdbd31]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/60 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Car className="w-4 h-4 text-[#fdbd31]" />
            <span>{t.tpe.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white leading-tight">
            {t.tpe.title}
          </h2>
          <p className="mt-2 text-lg sm:text-xl font-bold text-[#fdbd31]">
            {t.tpe.subtitle}
          </p>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.tpe.intro}
          </p>
        </div>

        {/* Feature & Image Split Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16 bg-slate-800/80 rounded-3xl p-6 sm:p-10 border border-slate-700/80">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl font-black text-white">
              {lang === 'ar' ? 'مميزات ومواصفات خامات TPE من GreenVision:' : 'Key Engineering Advantages:'}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.tpe.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 bg-slate-900/70 p-4 rounded-xl border border-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-[#109466] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">{feat}</span>
                </div>
              ))}
            </div>

            {/* Who We Serve Pills */}
            <div className="pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-2">
                {t.tpe.serveTitle}
              </span>
              <div className="flex flex-wrap gap-2">
                {t.tpe.serveItems.map((item, iIdx) => (
                  <span key={iIdx} className="bg-emerald-950/80 border border-emerald-700/50 text-slate-200 text-xs px-3 py-1.5 rounded-lg font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                id="tpe-sample-request-btn"
                onClick={() => onRequestSample('TPE Automotive Solutions')}
                className="inline-flex items-center gap-2 bg-[#109466] hover:bg-emerald-600 text-white font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-all active:scale-95"
              >
                <FileSpreadsheet className="w-4 h-4 text-[#fdbd31]" />
                <span>{t.tpe.btnSpecSheet}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700 shadow-2xl group">
              <img
                src="/src/assets/images/tpe_automotive_mats_1789042515170.jpg"
                alt="TPE Automotive 3D Floor Mats and Cargo Liners"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="inline-block bg-[#109466] text-[10px] font-black uppercase px-2.5 py-0.5 rounded mb-1 text-white">
                  Automotive Grade
                </div>
                <div className="text-sm font-bold">
                  {lang === 'ar' ? 'تشكيل حراري فائق الدقة 3D لشنط وأرضيات السيارات' : 'High Precision 3D Thermoformed Liners'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 6 Core Applications Cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-black text-white mb-6">
            {lang === 'ar' ? 'التطبيقات الرئيسية لخامات TPE (Key Applications)' : 'Key Applications of TPE Materials'}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {applications.map((app, idx) => (
              <div
                key={idx}
                className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-6 hover:border-[#109466] hover:bg-slate-800 transition-all group"
              >
                <div className="text-3xl mb-3">{app.icon}</div>
                <h4 className="text-base font-bold text-white group-hover:text-[#fdbd31] transition-colors mb-2">
                  {lang === 'ar' ? app.titleAr : app.titleEn}
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {lang === 'ar' ? app.descAr : app.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Value Chain Process Flow */}
        <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 border border-slate-800">
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 mb-2">
            <Cpu className="w-4 h-4" />
            <span>{t.tpe.chainTitle}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 pt-4">
            {chainSteps.map((step, sIdx) => (
              <div key={sIdx} className="relative bg-slate-900 p-4 rounded-xl border border-slate-800 flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-black text-[#109466] font-mono block mb-1">
                    {step.num}
                  </span>
                  <div className="text-xs font-bold text-white mb-1">
                    {step.title}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {step.desc}
                  </div>
                </div>
                {sIdx < chainSteps.length - 1 && (
                  <div className="hidden sm:block absolute -right-3 top-1/2 -translate-y-1/2 z-10 text-emerald-400">
                    <ArrowIcon className="w-5 h-5" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
