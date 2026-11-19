import React, { useState } from 'react';
import { MapPin, Phone, MessageCircle, Clock, Mail, Send, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { storeInfo } from '../data/navigation';
import { translations } from '../data/translations';

export default function Contact({ lang = 'en' }) {
  const t = translations[lang].contact;

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'Frame Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError('Please provide your name and contact phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <div className="pt-24 pb-20 bg-[#0A0A0A] text-[#F5F5F5] min-h-screen">
      
      {/* 1. Header */}
      <section className="py-12 md:py-16 border-b border-[#1C1C1C] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181818] border border-[#292929] text-xs font-semibold tracking-wider text-[#A0A0A0] uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F50914]" />
              <span>Get in Touch</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Visit <span className="text-[#F50914]">Eye Mate Optic</span>
            </h1>

            <p className="text-sm sm:text-base text-[#A0A0A0]">
              We are conveniently located on Station Road, West Mambalam. Walk in for an eye checkup, browse our frame collection, or send us a message below.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Contact Cards & Form Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left 5 Cols: Store Details */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Store Information</h2>

              {/* Address Card */}
              <div className="p-6 rounded-3xl bg-[#141414] border border-[#242424] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F50914] uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Physical Address</span>
                </div>
                <p className="text-base font-semibold text-white">
                  31/4, Station Road
                </p>
                <p className="text-sm text-[#A0A0A0]">
                  West Mambalam, Chennai, Tamil Nadu – 600033.
                </p>
                <p className="text-xs text-[#00D4FF] pt-1">
                  Landmark: Right near West Mambalam Railway Station
                </p>
                <div className="pt-2">
                  <a
                    href={storeInfo.mapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F50914] hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp Card */}
              <div className="p-6 rounded-3xl bg-[#141414] border border-[#242424] space-y-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F50914] uppercase tracking-wider">
                  <Phone className="w-4 h-4" />
                  <span>Phone & Instant Messaging</span>
                </div>
                <div>
                  <div className="text-xs text-[#888]">Primary Store Phone</div>
                  <a
                    href={`tel:${storeInfo.phoneRaw}`}
                    className="text-lg font-bold text-white hover:text-[#F50914] transition-colors"
                  >
                    {storeInfo.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={`tel:${storeInfo.phoneRaw}`}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#202020] hover:bg-[#282828] text-white text-xs font-semibold text-center transition-colors"
                  >
                    Call Now
                  </a>
                  <a
                    href={storeInfo.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold text-center flex items-center justify-center gap-1.5 transition-colors shadow-md"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Hours Card */}
              <div className="p-6 rounded-3xl bg-[#141414] border border-[#242424] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#55E64B] uppercase tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Store Hours</span>
                </div>
                <div className="text-base font-semibold text-white">
                  Monday to Sunday: 10:00 AM – 9:30 PM
                </div>
                <p className="text-xs text-[#55E64B]">
                  Open all 7 days for eye tests and frame collection.
                </p>
              </div>
            </div>

            {/* Right 7 Cols: Interactive Form */}
            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-3xl bg-[#141414] border border-[#242424] shadow-2xl relative">
                <h2 className="text-2xl font-bold text-white mb-2">
                  Send Us a Direct Message
                </h2>
                <p className="text-xs sm:text-sm text-[#A0A0A0] mb-6">
                  Have a question about lens coatings, prescription verification, or frame availability? Fill out this quick form.
                </p>

                {error && (
                  <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#C0C0C0] mb-1.5">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Anand Sundaram"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#1c1c1c] border border-[#2a2a2a] text-sm text-white placeholder-[#606060] focus:outline-none focus:border-[#F50914] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#C0C0C0] mb-1.5">
                          Mobile Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98400 12345"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#1c1c1c] border border-[#2a2a2a] text-sm text-white placeholder-[#606060] focus:outline-none focus:border-[#F50914] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-medium text-[#C0C0C0] mb-1.5">
                          Email (Optional)
                        </label>
                        <input
                          type="email"
                          placeholder="you@example.com"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#1c1c1c] border border-[#2a2a2a] text-sm text-white placeholder-[#606060] focus:outline-none focus:border-[#F50914] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-[#C0C0C0] mb-1.5">
                          Topic of Inquiry
                        </label>
                        <select
                          value={form.subject}
                          onChange={(e) => setForm({ ...form, subject: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#1c1c1c] border border-[#2a2a2a] text-sm text-white focus:outline-none focus:border-[#F50914] transition-colors"
                        >
                          <option>Frame Selection & Pricing</option>
                          <option>Computerised Eye Test Slot</option>
                          <option>Progressive & Bifocal Lenses</option>
                          <option>Contact Lens Consultation</option>
                          <option>Frame Repair & Adjustment</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#C0C0C0] mb-1.5">
                        Your Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Tell us what you're looking for or any specific prescription details..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#1c1c1c] border border-[#2a2a2a] text-sm text-white placeholder-[#606060] focus:outline-none focus:border-[#F50914] transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#F50914] hover:bg-[#D9000B] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(245,9,20,0.4)] transition-all duration-300 cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Inquiry to Eye Mate Optic</span>
                    </button>
                    <p className="text-[11px] text-[#707070] text-center">
                      (Demo Inquiry State — Instant frontend validation & receipt confirmation)
                    </p>
                  </form>
                ) : (
                  <div className="py-12 text-center flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Inquiry Received!
                    </h3>
                    <p className="text-sm text-[#A0A0A0] max-w-sm mb-6 leading-relaxed">
                      Thank you, <strong className="text-white">{form.name}</strong>. We have received your inquiry regarding <strong className="text-white">{form.subject}</strong>. Our optometrist desk at West Mambalam will call you at <strong className="text-white">{form.phone}</strong> shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setForm({
                          name: '',
                          phone: '',
                          email: '',
                          subject: 'Frame Inquiry',
                          message: '',
                        });
                      }}
                      className="px-6 py-2.5 rounded-full bg-[#202020] hover:bg-[#282828] text-white text-xs font-semibold transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 3. Full Width Embedded Google Map */}
          <div className="mt-16 rounded-3xl overflow-hidden border border-[#242424] shadow-2xl h-80 sm:h-96 relative bg-[#151515]">
            <iframe
              title="Eye Mate Optic Location Map"
              src="https://maps.google.com/maps?q=Eye%20Mate%20Optic%2C%2031%2F4%2C%20Station%20Road%2C%20West%20Mambalam%2C%20Chennai%2C%20Tamil%20Nadu%20600033&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
