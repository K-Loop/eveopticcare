import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, CheckCircle2, User, Phone, Sparkles } from 'lucide-react';
import { storeInfo } from '../data/navigation';

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    slot: 'Evening (4 PM - 8 PM)',
    service: 'Computerised Eye Testing',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number.');
      return;
    }
    setError('');
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      phone: '',
      date: '',
      slot: 'Evening (4 PM - 8 PM)',
      service: 'Computerised Eye Testing',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-lg rounded-3xl bg-[#141414] border border-[#292929] shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF00C8] via-[#00D4FF] to-[#F50914]" />

          {/* Close button */}
          <button
            onClick={handleReset}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#1e1e1e] text-[#A0A0A0] hover:text-white hover:bg-[#282828] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>

          {!submitted ? (
            <>
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F50914]/10 text-[#F50914] text-xs font-semibold uppercase tracking-wider mb-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Instant Booking</span>
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Schedule Your Eye Test
                </h3>
                <p className="text-xs sm:text-sm text-[#A0A0A0] mt-1">
                  At Eye Mate Optic, 31/4 Station Road, West Mambalam.
                </p>
              </div>

              {error && (
                <div className="mb-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-medium text-[#C0C0C0] mb-1.5">
                    Your Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#707070]" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1c1c1c] border border-[#2a2a2a] text-sm text-white placeholder-[#606060] focus:outline-none focus:border-[#F50914] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#C0C0C0] mb-1.5">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#707070]" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#1c1c1c] border border-[#2a2a2a] text-sm text-white placeholder-[#606060] focus:outline-none focus:border-[#F50914] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#C0C0C0] mb-1.5">
                      Preferred Date
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#707070]" />
                      <input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#1c1c1c] border border-[#2a2a2a] text-sm text-white focus:outline-none focus:border-[#F50914] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#C0C0C0] mb-1.5">
                      Time Slot
                    </label>
                    <div className="relative">
                      <Clock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#707070]" />
                      <select
                        value={formData.slot}
                        onChange={(e) => setFormData({ ...formData, slot: e.target.value })}
                        className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-[#1c1c1c] border border-[#2a2a2a] text-sm text-white focus:outline-none focus:border-[#F50914] transition-colors"
                      >
                        <option>Morning (10 AM - 1 PM)</option>
                        <option>Afternoon (1 PM - 4 PM)</option>
                        <option>Evening (4 PM - 8 PM)</option>
                        <option>Night (8 PM - 9:30 PM)</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#C0C0C0] mb-1.5">
                    Service Needed
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-xl bg-[#1c1c1c] border border-[#2a2a2a] text-sm text-white focus:outline-none focus:border-[#F50914] transition-colors"
                  >
                    <option>Computerised Eye Testing</option>
                    <option>Frame Selection & Lens Consultation</option>
                    <option>Contact Lens Fitting & Trial</option>
                    <option>Blue-Cut Screen Eyewear Consultation</option>
                    <option>Eyewear Repair or Adjustment</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-full bg-[#F50914] hover:bg-[#D9000B] text-white font-semibold text-sm transition-all duration-300 shadow-[0_4px_20px_rgba(245,9,20,0.35)] cursor-pointer"
                  >
                    Confirm Appointment Request
                  </button>
                  <p className="text-[11px] text-[#707070] text-center mt-2">
                    Instant confirmation. No payment required in advance.
                  </p>
                </div>
              </form>
            </>
          ) : (
            <div className="py-8 text-center flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Appointment Requested!
              </h3>
              <p className="text-sm text-[#A0A0A0] max-w-sm mb-6 leading-relaxed">
                Thank you <strong className="text-white">{formData.name}</strong>. We have logged your request for <strong className="text-white">{formData.service}</strong>. Our optometrist team will call you at <strong className="text-white">{formData.phone}</strong> to confirm your slot.
              </p>
              
              <div className="w-full p-4 rounded-2xl bg-[#1a1a1a] border border-[#292929] text-left text-xs text-[#A0A0A0] space-y-1.5 mb-6">
                <div>📍 <strong>Store Location:</strong> 31/4, Station Road, West Mambalam, Chennai - 600033</div>
                <div>📞 <strong>Store Direct Line:</strong> {storeInfo.phone}</div>
                <div>⏰ <strong>Open Daily:</strong> 10:00 AM – 9:30 PM</div>
              </div>

              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-[#202020] hover:bg-[#282828] text-white text-sm font-medium transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
