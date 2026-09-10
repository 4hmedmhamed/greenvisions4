import React from 'react';
import {
  Handshake,
  ShieldCheck,
  Building,
  CheckCircle2,
  ExternalLink,
  Award
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { PARTNERS_DATA } from '../data/mockData';

interface PartnersSectionProps {
  lang: Language;
}

export const PartnersSection: React.FC<PartnersSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];

  return (
    <section id="partners" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#109466] text-xs font-bold uppercase tracking-wider mb-3">
            <Handshake className="w-4 h-4" />
            <span>{lang === 'ar' ? 'شركاء المسيرة والريادة' : 'Strategic Alliance'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {lang === 'ar' ? 'شركاء النجاح والاعتمادات الرسمية' : 'Our Partners & Institutional Alliances'}
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            {lang === 'ar'
              ? 'نفخر بالتعاون مع الوزارات، حاضنات الأعمال، البنوك التنموية، وكبرى الكيانات الصناعية'
              : 'Collaborating with government ministries, business incubators, development banks, and industrial leaders'}
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PARTNERS_DATA.map((partner) => {
            const name = lang === 'ar' ? partner.nameAr : partner.nameEn;
            const role = lang === 'ar' ? partner.roleAr : partner.roleEn;
            const desc = lang === 'ar' ? partner.descriptionAr : partner.descriptionEn;

            return (
              <div
                key={partner.id}
                className="bg-slate-50 border border-slate-200 rounded-3xl p-6 hover:border-[#109466] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Partner Badge Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className="px-4 py-2 rounded-xl text-white font-black text-sm tracking-wider shadow-sm flex items-center justify-center min-h-[44px]"
                      style={{ backgroundColor: partner.logoBg }}
                    >
                      {partner.logoText}
                    </div>

                    <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-slate-200 text-slate-700 font-mono">
                      {partner.type.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#109466] transition-colors mb-1">
                    {name}
                  </h3>

                  <div className="text-xs font-semibold text-emerald-700 mb-3">
                    {role}
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/80 mt-4 flex items-center gap-1.5 text-[11px] font-bold text-slate-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#109466]" />
                  <span>{lang === 'ar' ? 'شريك استراتيجي معتمد' : 'Verified Strategic Partner'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Institutional Endorsements & Certifications */}
        <div className="bg-[#0e2a1c] text-white rounded-3xl p-6 sm:p-8 border border-emerald-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#109466] text-white flex items-center justify-center shrink-0">
              <Award className="w-6 h-6 text-[#fdbd31]" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                {lang === 'ar' ? 'الالتزام بمعايير الاستدامة الوطنية والدولية' : 'Compliant with Egyptian & International Standards'}
              </div>
              <div className="text-xs text-slate-300 mt-0.5">
                {lang === 'ar'
                  ? 'ترخيص جهاز تنظيم إدارة المخلفات (WMRA) • معايير الإنتاج الأنظف ENCPC • مطابقة معايير ISCC'
                  : 'WMRA Law 202/2020 Licensed • ENCPC Cleaner Production • ISCC EU Traceability Standards'}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-bold text-emerald-300">
            <span className="bg-emerald-950 px-3 py-1.5 rounded-lg border border-emerald-800">WMRA Licensed</span>
            <span className="bg-emerald-950 px-3 py-1.5 rounded-lg border border-emerald-800">ISCC Ready</span>
            <span className="bg-emerald-950 px-3 py-1.5 rounded-lg border border-emerald-800">ISO 14001 Standards</span>
          </div>
        </div>
      </div>
    </section>
  );
};
