import React from 'react';
import {
  Leaf,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  Award,
  ArrowUp,
  Download,
  ExternalLink
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e2a1c] text-white pt-16 pb-12 border-t border-emerald-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-emerald-900/60">
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#109466] to-emerald-700 flex items-center justify-center text-white shadow-md">
                <Leaf className="w-5 h-5 text-[#fdbd31]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="text-xl font-black tracking-tight text-white">GREEN</span>
                  <span className="text-xl font-black tracking-tight text-[#109466]">VISION</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-300 tracking-wider">
                  {lang === 'ar' ? 'جرين فيجن للاقتصاد الدائري' : 'CIRCULAR SOLUTIONS'}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm">
              {t.footer.aboutCompany}
            </p>

            <div className="pt-2 flex flex-wrap gap-2 text-[11px] font-bold text-emerald-400">
              <span className="bg-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-800">
                {lang === 'ar' ? 'تأسست 2018' : 'Since 2018'}
              </span>
              <span className="bg-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-800">
                {lang === 'ar' ? '3 محافظات بالدلتا' : '3 Delta Govs'}
              </span>
              <span className="bg-emerald-950 px-2.5 py-1 rounded-lg border border-emerald-800 text-[#fdbd31]">
                Green Works 2020 Winner
              </span>
            </div>
          </div>

          {/* Col 2: Solutions & Products (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
              {t.footer.solutionsLinks}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a href="#services" className="hover:text-[#fdbd31] transition-colors">
                  {lang === 'ar' ? 'تجميع زيت الطعام المستعمل (UCO)' : 'Used Cooking Oil Collection'}
                </a>
              </li>
              <li>
                <a href="#plastics" className="hover:text-[#fdbd31] transition-colors">
                  {lang === 'ar' ? 'حبيبات PCR PP و HDPE' : 'PCR PP & HDPE Pellets'}
                </a>
              </li>
              <li>
                <a href="#tpe" className="hover:text-[#fdbd31] transition-colors">
                  {lang === 'ar' ? 'رولات وألواح TPE للسيارات' : 'Automotive TPE Sheets & Rolls'}
                </a>
              </li>
              <li>
                <a href="#biomass" className="hover:text-[#fdbd31] transition-colors">
                  {lang === 'ar' ? 'بيليت الخشب والمخلفات الزراعية' : 'Wood Pellets & Biomass'}
                </a>
              </li>
              <li>
                <a href="#glycerin" className="hover:text-[#fdbd31] transition-colors">
                  {lang === 'ar' ? 'جلسرين مكرر USP Grade 99.5%' : 'Refined USP Glycerin'}
                </a>
              </li>
              <li>
                <a href="#trade" className="hover:text-[#fdbd31] transition-colors">
                  {lang === 'ar' ? 'التجارة الدولية والتصدير' : 'International Trade & Export'}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Plstka Platform & App (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
              {lang === 'ar' ? 'منصة بلستكة' : 'Plstka App'}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <a
                  href="https://plstka.com/?sfnsn=scwspwa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#fdbd31] transition-colors flex items-center gap-1"
                >
                  <span>{lang === 'ar' ? 'موقع بلستكة' : 'Plstka Web'}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://play.google.com/store/apps/details?id=com.plstka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#fdbd31] transition-colors flex items-center gap-1"
                >
                  <span>Google Play</span>
                  <Download className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#plstka" className="hover:text-[#fdbd31] transition-colors">
                  {lang === 'ar' ? 'حاسبة النقاط' : 'Points Calculator'}
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-[#fdbd31] transition-colors">
                  {t.nav.careers}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Operations (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-emerald-400">
              {t.nav.contact}
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2" dir="ltr">
                <Phone className="w-3.5 h-3.5 text-[#109466] shrink-0" />
                <a href="tel:01000651818" className="hover:text-[#fdbd31]">
                  01000651818
                </a>
                <span>/</span>
                <a href="tel:01281971432" className="hover:text-[#fdbd31]">
                  01281971432
                </a>
              </div>
              <div className="flex items-center gap-2" dir="ltr">
                <Mail className="w-3.5 h-3.5 text-[#109466] shrink-0" />
                <a href="mailto:Ahmed@greenvision-eg.com" className="hover:text-[#fdbd31]">
                  Ahmed@greenvision-eg.com
                </a>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#fdbd31] shrink-0 mt-0.5" />
                <span>{lang === 'ar' ? 'محافظة الغربية (طنطا) • تغطية الدقهلية والمنوفية' : 'Gharbia (Tanta HQ) • Daqahlia & Menoufia'}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            {t.footer.rights}
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-slate-500">
              {t.footer.developedWith}
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-emerald-950 hover:bg-emerald-900 text-emerald-400 hover:text-white transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
