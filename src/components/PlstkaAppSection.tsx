import React, { useState } from 'react';
import {
  Smartphone,
  Gift,
  MapPin,
  BarChart3,
  Cpu,
  Download,
  ExternalLink,
  Calculator,
  ArrowUpRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface PlstkaAppSectionProps {
  lang: Language;
  onOpenBottleModal: () => void;
}

export const PlstkaAppSection: React.FC<PlstkaAppSectionProps> = ({ lang, onOpenBottleModal }) => {
  const t = TRANSLATIONS[lang];

  // Interactive Waste-to-Points Calculator State
  const [wasteType, setWasteType] = useState<'oil' | 'plastic' | 'paper'>('oil');
  const [quantity, setQuantity] = useState<number>(5);

  // Multipliers:
  // 1 Liter of Oil = 50 points = ~25 EGP
  // 1 Kg of Plastic = 30 points = ~15 EGP
  // 1 Kg of Paper = 15 points = ~7.5 EGP
  const getPointsPerUnit = () => {
    if (wasteType === 'oil') return 50;
    if (wasteType === 'plastic') return 30;
    return 15;
  };

  const getEgpPerUnit = () => {
    if (wasteType === 'oil') return 25;
    if (wasteType === 'plastic') return 15;
    return 7.5;
  };

  const totalPoints = Math.round(quantity * getPointsPerUnit());
  const totalEgp = Math.round(quantity * getEgpPerUnit());

  return (
    <section id="plstka" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#109466] text-xs font-bold uppercase tracking-wider mb-3">
            <Smartphone className="w-4 h-4" />
            <span>{t.plstka.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.plstka.title}
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            {t.plstka.subtitle}
          </p>
        </div>

        {/* Feature Grid & Interactive Calculator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Feature Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              {t.plstka.desc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
              {/* Feature 1 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 hover:border-[#109466] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-3">
                  <Gift className="w-5 h-5 text-[#fdbd31]" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-1">
                  {t.plstka.feature1Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.plstka.feature1Desc}
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 hover:border-[#109466] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#109466] flex items-center justify-center mb-3">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-1">
                  {t.plstka.feature2Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.plstka.feature2Desc}
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 hover:border-[#109466] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-1">
                  {t.plstka.feature3Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.plstka.feature3Desc}
                </p>
              </div>

              {/* Feature 4 */}
              <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200/80 hover:border-[#109466] transition-colors">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center mb-3">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-1">
                  {t.plstka.feature4Title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {t.plstka.feature4Desc}
                </p>
              </div>
            </div>

            {/* Direct Plstka Links */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.plstka"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#109466] hover:bg-emerald-600 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
              >
                <Download className="w-4 h-4 text-[#fdbd31]" />
                <span>{t.plstka.btnDownloadGoogle}</span>
              </a>

              <a
                href="https://plstka.com/?sfnsn=scwspwa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all"
              >
                <ExternalLink className="w-4 h-4 text-[#fdbd31]" />
                <span>{t.plstka.btnOpenSite}</span>
              </a>

              <button
                onClick={onOpenBottleModal}
                className="inline-flex items-center gap-2 bg-[#fdbd31] hover:bg-amber-400 text-slate-950 font-bold text-sm px-5 py-3.5 rounded-xl shadow-md transition-all active:scale-95"
              >
                <Sparkles className="w-4 h-4" />
                <span>{lang === 'ar' ? 'اطلب قارورة زيت لمنزلك' : 'Free Home Oil Bottle'}</span>
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Waste-to-Points Calculator (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-[#0e2a1c] to-[#091f14] rounded-3xl p-6 sm:p-8 text-white border border-emerald-800 shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-bold text-[#fdbd31] mb-2">
                <Calculator className="w-4 h-4" />
                <span>{t.plstka.calcTitle}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">
                {lang === 'ar' ? 'احسب عائد مخلفاتك قبل التجميع' : 'Estimate Your Reward Earnings'}
              </h3>

              {/* Type selector */}
              <div className="mb-5">
                <label className="block text-xs font-semibold text-slate-300 mb-2">
                  {t.plstka.calcWasteType}
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setWasteType('oil')}
                    className={`py-2 px-2 text-xs font-bold rounded-xl transition-all ${
                      wasteType === 'oil'
                        ? 'bg-[#109466] text-white shadow'
                        : 'bg-white/10 text-slate-300 hover:bg-white/20'
                    }`}
                  >
                    {lang === 'ar' ? 'زيت طعام' : 'Cooking Oil'}
                  </button>
                  <button
                    onClick={() => setWasteType('plastic')}
                    className={`py-2 px-2 text-xs font-bold rounded-xl transition-all ${
                      wasteType === 'plastic'
                        ? 'bg-[#109466] text-white shadow'
                        : 'bg-white/10 text-slate-300 hover:bg-white/20'
                    }`}
                  >
                    {lang === 'ar' ? 'بلاستيك' : 'Plastics'}
                  </button>
                  <button
                    onClick={() => setWasteType('paper')}
                    className={`py-2 px-2 text-xs font-bold rounded-xl transition-all ${
                      wasteType === 'paper'
                        ? 'bg-[#109466] text-white shadow'
                        : 'bg-white/10 text-slate-300 hover:bg-white/20'
                    }`}
                  >
                    {lang === 'ar' ? 'كرتون وورق' : 'Cardboard'}
                  </button>
                </div>
              </div>

              {/* Slider for Quantity */}
              <div className="mb-6">
                <div className="flex justify-between text-xs font-semibold text-slate-300 mb-2">
                  <span>{t.plstka.calcQty}</span>
                  <span className="font-mono text-emerald-400 font-bold text-sm">
                    {quantity} {wasteType === 'oil' ? (lang === 'ar' ? 'لتر' : 'Liters') : (lang === 'ar' ? 'كجم' : 'Kg')}
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={50}
                  step={1}
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-full accent-[#109466] cursor-pointer h-2 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-mono">
                  <span>1</span>
                  <span>25</span>
                  <span>50</span>
                </div>
              </div>

              {/* Calculator Output Cards */}
              <div className="grid grid-cols-2 gap-3 p-4 bg-white/5 rounded-2xl border border-white/10 mb-6">
                <div>
                  <div className="text-[11px] text-slate-300">
                    {t.plstka.calcResult}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#fdbd31] font-mono mt-0.5">
                    {totalPoints.toLocaleString()}
                  </div>
                  <div className="text-[10px] text-emerald-300">
                    {lang === 'ar' ? 'نقطة برصيد بلستكة' : 'Plstka Points'}
                  </div>
                </div>

                <div className="border-l border-white/10 pl-3">
                  <div className="text-[11px] text-slate-300">
                    {t.plstka.calcValue}
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono mt-0.5">
                    ~{totalEgp.toLocaleString()} <span className="text-xs font-sans font-bold">{lang === 'ar' ? 'جنيه' : 'EGP'}</span>
                  </div>
                  <div className="text-[10px] text-slate-300">
                    {lang === 'ar' ? 'سلع استهلاكية مجانية' : 'Free Groceries Value'}
                  </div>
                </div>
              </div>

              {/* Instant Action CTA */}
              <button
                onClick={onOpenBottleModal}
                className="w-full py-3 bg-[#109466] hover:bg-emerald-600 text-white font-bold text-sm rounded-xl transition-colors shadow flex items-center justify-center gap-2"
              >
                <span>{lang === 'ar' ? 'ابدأ الجمع الآن واستبدل نقاطك' : 'Start Collecting & Redeem'}</span>
                <ArrowUpRight className="w-4 h-4 text-[#fdbd31]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
