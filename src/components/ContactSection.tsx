import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  CheckCircle2,
  ShieldCheck,
  Building2
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ContactSectionProps {
  lang: Language;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang];
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName('');
      setPhone('');
      setEmail('');
      setSubject('');
      setMessage('');
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#109466] text-xs font-bold uppercase tracking-wider mb-3">
            <MessageSquare className="w-4 h-4" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-slate-600 text-base sm:text-lg">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Details & Coverage Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-7 space-y-6">
              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#109466] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {t.contact.phoneTitle}
                  </div>
                  <div className="flex flex-col gap-1 mt-1 font-bold text-slate-900" dir="ltr">
                    <a
                      href="tel:01000651818"
                      className="text-base text-[#109466] hover:text-[#0e2a1c] transition-colors"
                    >
                      01000651818
                    </a>
                    <a
                      href="tel:01281971432"
                      className="text-base text-slate-800 hover:text-[#109466] transition-colors"
                    >
                      01281971432
                    </a>
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    {lang === 'ar' ? 'متاح واتساب أيضاً على نفس الأرقام' : 'WhatsApp available on both numbers'}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {t.contact.emailTitle}
                  </div>
                  <a
                    href="mailto:Ahmed@greenvision-eg.com"
                    className="block text-base font-bold text-slate-900 hover:text-[#109466] transition-colors mt-1"
                    dir="ltr"
                  >
                    Ahmed@greenvision-eg.com
                  </a>
                  <div className="text-xs text-slate-500 mt-1">
                    {lang === 'ar' ? 'الرد على كافة الاستفسارات خلال ساعتين' : 'Replies within 2 business hours'}
                  </div>
                </div>
              </div>

              {/* HQ and Region */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#fdbd31]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {t.contact.hqTitle}
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-1">
                    {t.contact.hqDesc}
                  </div>
                  <div className="text-xs text-emerald-700 font-semibold mt-1">
                    {lang === 'ar' ? '3 محافظات تشغيلية رئيسية بالدلتا' : '3 Central Operating Governorates'}
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-4 pt-4 border-t border-slate-200">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-[#109466] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    {t.contact.hoursTitle}
                  </div>
                  <div className="text-sm font-semibold text-slate-800 mt-1">
                    {t.contact.hoursDesc}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-7 sm:p-9 shadow-sm">
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                {lang === 'ar'
                  ? 'اترك بياناتك وسيقوم مسؤول المبيعات والعمليات بالاتصال بك فورياً'
                  : 'Submit your message and our operations desk will follow up immediately'}
              </p>

              {sent ? (
                <div className="py-12 text-center space-y-3">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#109466] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    {lang === 'ar' ? 'تم إرسال رسالتك بنجاح!' : 'Message Sent Successfully!'}
                  </h4>
                  <p className="text-xs text-slate-600">
                    {lang === 'ar'
                      ? 'شكراً لتواصلك مع GreenVision. سيتصل بك فريقنا في أقرب وقت.'
                      : 'Thank you for reaching out. We will get back to you shortly.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'ar' ? 'الاسم' : 'Name'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={lang === 'ar' ? 'اسمك الكريم' : 'Your name'}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466] bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'ar' ? 'رقم الهاتف' : 'Phone'} *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="010XXXXXXXX"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466] bg-white"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'ar' ? 'البريد الإلكتروني' : 'Email'}
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466] bg-white"
                        dir="ltr"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        {lang === 'ar' ? 'موضوع الاستفسار' : 'Subject'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder={lang === 'ar' ? 'توريد خامات، تجميع زيت، شراكة...' : 'Materials, UCO, Partnership...'}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466] bg-white"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {lang === 'ar' ? 'نص الرسالة' : 'Message'} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={lang === 'ar' ? 'اكتب تفاصيل طلبك أو استفسارك هنا...' : 'Write your detailed inquiry here...'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466] bg-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#109466] hover:bg-[#0e2a1c] text-white font-black text-sm rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 active:scale-95"
                  >
                    <Send className="w-4 h-4 text-[#fdbd31]" />
                    <span>{t.contact.sendMsg}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
