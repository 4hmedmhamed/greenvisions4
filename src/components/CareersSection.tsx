import React, { useState } from 'react';
import {
  Briefcase,
  MapPin,
  Clock,
  CheckCircle2,
  ArrowUpRight,
  Send,
  X,
  Sparkles
} from 'lucide-react';
import { Language, JobPosition } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { JOBS_DATA } from '../data/mockData';

interface CareersSectionProps {
  lang: Language;
}

export const CareersSection: React.FC<CareersSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [applicantName, setApplicantName] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantCv, setApplicantCv] = useState('');
  const [applicantNote, setApplicantNote] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedJob(null);
      setApplicantName('');
      setApplicantPhone('');
      setApplicantEmail('');
      setApplicantCv('');
      setApplicantNote('');
    }, 2500);
  };

  return (
    <section id="careers" className="py-20 bg-[#f2f2f2] border-b border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-[#109466] text-xs font-bold uppercase tracking-wider mb-3">
            <Briefcase className="w-4 h-4" />
            <span>{t.careers.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.careers.title}
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            {t.careers.subtitle}
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOBS_DATA.map((job) => {
            const title = lang === 'ar' ? job.titleAr : job.titleEn;
            const dept = lang === 'ar' ? job.deptAr : job.deptEn;
            const loc = lang === 'ar' ? job.locationAr : job.locationEn;
            const type = lang === 'ar' ? job.typeAr : job.typeEn;
            const desc = lang === 'ar' ? job.descAr : job.descEn;
            const reqs = lang === 'ar' ? job.requirementsAr : job.requirementsEn;

            return (
              <div
                key={job.id}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm hover:border-[#109466] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      {dept}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{type}</span>
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-slate-900 group-hover:text-[#109466] transition-colors mb-2">
                    {title}
                  </h3>

                  <div className="flex items-center gap-1.5 text-xs text-slate-600 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-[#109466]" />
                    <span>{loc}</span>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {desc}
                  </p>

                  {/* Requirements List */}
                  <div className="space-y-2 pt-4 border-t border-slate-100 mb-6">
                    <div className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                      {lang === 'ar' ? 'المتطلبات الأساسية:' : 'Requirements:'}
                    </div>
                    {reqs.map((req, rIdx) => (
                      <div key={rIdx} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-4 h-4 text-[#109466] shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  id={`apply-job-${job.id}`}
                  onClick={() => setSelectedJob(job)}
                  className="w-full py-3 bg-[#109466] hover:bg-[#0e2a1c] text-white font-bold text-xs rounded-xl shadow transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <span>{t.careers.applyNow}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#fdbd31]" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#109466] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-bold text-slate-900">
                  {lang === 'ar' ? 'تم استلام طلب التوظيف!' : 'Application Submitted!'}
                </h4>
                <p className="text-sm text-slate-600 max-w-sm mx-auto">
                  {t.careers.successMessage}
                </p>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="text-xs font-bold text-[#109466] uppercase tracking-wider block mb-1">
                    {t.careers.formTitle}
                  </span>
                  <h3 className="text-xl font-black text-slate-900">
                    {lang === 'ar' ? selectedJob.titleAr : selectedJob.titleEn}
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.careers.fullName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder={lang === 'ar' ? 'مثال: أحمد محمود إبراهيم' : 'e.g. Ahmed Mahmoud'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t.careers.phone} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="010XXXXXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466]"
                        dir="ltr"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {t.careers.email} *
                      </label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466]"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.careers.cvLink} *
                    </label>
                    <input
                      type="url"
                      required
                      value={applicantCv}
                      onChange={(e) => setApplicantCv(e.target.value)}
                      placeholder="https://linkedin.com/in/... or drive.google.com/..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466]"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.careers.coverNote}
                    </label>
                    <textarea
                      rows={3}
                      value={applicantNote}
                      onChange={(e) => setApplicantNote(e.target.value)}
                      placeholder={lang === 'ar' ? 'نبذة عن أهم إنجازاتك وخبرتك...' : 'Summary of your past achievements...'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#109466] hover:bg-[#0e2a1c] text-white font-bold text-sm rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-[#fdbd31]" />
                    <span>{t.careers.submitApplication}</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
