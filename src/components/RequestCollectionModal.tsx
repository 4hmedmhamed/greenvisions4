import React, { useState, useEffect } from 'react';
import {
  X,
  Building2,
  Home,
  CheckCircle2,
  Send,
  Truck,
  Droplets,
  Boxes,
  Car,
  ShieldCheck,
  Calendar,
  MapPin,
  Sparkles
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface RequestCollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  preset?: 'individual' | 'business' | 'restaurant' | 'factory';
}

export const RequestCollectionModal: React.FC<RequestCollectionModalProps> = ({
  isOpen,
  onClose,
  lang,
  preset
}) => {
  const t = TRANSLATIONS[lang];
  const [tab, setTab] = useState<'b2b' | 'b2c'>(preset === 'individual' ? 'b2c' : 'b2b');
  const [submitted, setSubmitted] = useState(false);

  // Sync preset when opening
  useEffect(() => {
    if (preset === 'individual') {
      setTab('b2c');
    } else {
      setTab('b2b');
    }
  }, [preset, isOpen]);

  // Form Fields B2B
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [wasteType, setWasteType] = useState('oil');
  const [estQty, setEstQty] = useState('');
  const [governorate, setGovernorate] = useState('Gharbia');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  // Form Fields B2C
  const [fullName, setFullName] = useState('');
  const [b2cPhone, setB2cPhone] = useState('');
  const [b2cAddress, setB2cAddress] = useState('');
  const [deliveryTiming, setDeliveryTiming] = useState('morning');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-20 h-20 rounded-full bg-emerald-100 text-[#109466] flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-black text-slate-900">
              {t.form.successTitle}
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
              {t.form.successDesc}
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 max-w-sm mx-auto text-xs text-slate-600 space-y-1 text-right" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
              <div><strong>{lang === 'ar' ? 'رقم التذكرة:' : 'Ticket ID:'}</strong> GV-{Math.floor(100000 + Math.random() * 900000)}</div>
              <div><strong>{lang === 'ar' ? 'فريق اللوجستيات:' : 'Logistics Desk:'}</strong> 01000651818</div>
              <div><strong>{lang === 'ar' ? 'المقر الإقليمي:' : 'Regional Hub:'}</strong> {lang === 'ar' ? 'الغربية والدلتا' : 'Delta Operations Hub'}</div>
            </div>

            <div className="pt-4">
              <button
                onClick={handleResetAndClose}
                className="px-8 py-3 bg-[#109466] hover:bg-[#0e2a1c] text-white font-bold text-sm rounded-xl shadow transition-colors"
              >
                {t.form.closeBtn}
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Heading */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#109466] text-xs font-bold mb-2">
                <Truck className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'خدمات تجميع معتمدة بالدلتا' : 'Certified Delta Logistics'}</span>
              </div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                {t.form.modalTitle}
              </h2>
            </div>

            {/* B2B vs B2C Tab Switcher */}
            <div className="grid grid-cols-2 p-1.5 bg-slate-100 rounded-2xl mb-6 border border-slate-200">
              <button
                type="button"
                onClick={() => setTab('b2b')}
                className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                  tab === 'b2b'
                    ? 'bg-[#109466] text-white shadow'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Building2 className="w-4 h-4" />
                <span>{t.form.tabB2B}</span>
              </button>

              <button
                type="button"
                onClick={() => setTab('b2c')}
                className={`py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                  tab === 'b2c'
                    ? 'bg-[#109466] text-white shadow'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Home className="w-4 h-4" />
                <span>{t.form.tabB2C}</span>
              </button>
            </div>

            {/* Tab 1: B2B Form */}
            {tab === 'b2b' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.companyName} *
                    </label>
                    <input
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder={lang === 'ar' ? 'مثال: مصنع الدلتا للغزل / مطعم البركة' : 'e.g. Delta Factory / Grand Restaurant'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.contactPerson} *
                    </label>
                    <input
                      type="text"
                      required
                      value={contactPerson}
                      onChange={(e) => setContactPerson(e.target.value)}
                      placeholder={lang === 'ar' ? 'الاسم والصفة' : 'Name and title'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="01000651818"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466]"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.email}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="procurement@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466]"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.wasteType} *
                    </label>
                    <select
                      value={wasteType}
                      onChange={(e) => setWasteType(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466] bg-white"
                    >
                      <option value="oil">{t.form.oilOption}</option>
                      <option value="plastic">{t.form.plasticOption}</option>
                      <option value="tpe">{t.form.tpeOption}</option>
                      <option value="solid">{t.form.solidOption}</option>
                      <option value="biomass">{t.form.biomassOption}</option>
                      <option value="glycerin">{t.form.glycerinOption}</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.governorate} *
                    </label>
                    <select
                      value={governorate}
                      onChange={(e) => setGovernorate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466] bg-white"
                    >
                      <option value="Gharbia">{t.form.govGharbia}</option>
                      <option value="Daqahlia">{t.form.govDaqahlia}</option>
                      <option value="Menoufia">{t.form.govMenoufia}</option>
                      <option value="Other">{t.form.govOther}</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.estQty}
                    </label>
                    <input
                      type="text"
                      value={estQty}
                      onChange={(e) => setEstQty(e.target.value)}
                      placeholder={lang === 'ar' ? 'مثال: 500 لتر زيت / 5 طن بلاستيك شهرياً' : 'e.g. 500 L / 5 tons monthly'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.addressDetails} *
                    </label>
                    <input
                      type="text"
                      required
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder={lang === 'ar' ? 'المدينة، المنطقة الصناعية أو الشارع' : 'City, Industrial zone or street'}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.form.notes}
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder={lang === 'ar' ? 'مواعيد التجميع المناسبة أو مواصفات فنية إضافية...' : 'Preferred pickup schedule or specs...'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#109466] hover:bg-[#0e2a1c] text-white font-black text-sm rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 active:scale-95"
                >
                  <Send className="w-4 h-4 text-[#fdbd31]" />
                  <span>{t.form.submitB2B}</span>
                </button>
              </form>
            )}

            {/* Tab 2: B2C Home Bottle Request */}
            {tab === 'b2c' && (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-xs text-emerald-950 mb-4">
                  <div className="font-bold mb-1 flex items-center gap-1.5 text-[#109466]">
                    <Sparkles className="w-4 h-4 text-[#fdbd31]" />
                    <span>{t.form.b2cTitle}</span>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    {t.form.b2cSubtitle}
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.form.fullName} *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={lang === 'ar' ? 'اسم المستلم' : 'Full Name'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.phone} *
                    </label>
                    <input
                      type="tel"
                      required
                      value={b2cPhone}
                      onChange={(e) => setB2cPhone(e.target.value)}
                      placeholder="010XXXXXXXX"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466]"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      {t.form.governorate} *
                    </label>
                    <select
                      value={governorate}
                      onChange={(e) => setGovernorate(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466] bg-white"
                    >
                      <option value="Gharbia">{t.form.govGharbia}</option>
                      <option value="Daqahlia">{t.form.govDaqahlia}</option>
                      <option value="Menoufia">{t.form.govMenoufia}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.form.familyAddress} *
                  </label>
                  <input
                    type="text"
                    required
                    value={b2cAddress}
                    onChange={(e) => setB2cAddress(e.target.value)}
                    placeholder={lang === 'ar' ? 'المدينة، الحي، الشارع، ورقم العقار والدور' : 'City, neighborhood, street, floor no.'}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    {t.form.deliveryTime}
                  </label>
                  <select
                    value={deliveryTiming}
                    onChange={(e) => setDeliveryTiming(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#109466] bg-white"
                  >
                    <option value="morning">{lang === 'ar' ? 'الفترة الصباحية (10 ص - 2 ظ)' : 'Morning (10 AM - 2 PM)'}</option>
                    <option value="evening">{lang === 'ar' ? 'الفترة المسائية (3 ظ - 7 م)' : 'Evening (3 PM - 7 PM)'}</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#fdbd31] hover:bg-amber-400 text-slate-950 font-black text-sm rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 active:scale-95"
                >
                  <Send className="w-4 h-4" />
                  <span>{t.form.submitB2C}</span>
                </button>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
