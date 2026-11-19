import React from 'react';
import { MessageCircle } from 'lucide-react';
import { storeInfo } from '../data/navigation';

export default function FloatingWhatsApp() {
  return (
    <a
      href={storeInfo.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp with Eye Mate Optic"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#25D366] text-white font-medium text-sm shadow-[0_4px_20px_rgba(37,211,102,0.4)] hover:bg-[#20ba59] hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
    >
      <MessageCircle className="w-5 h-5 fill-current" />
      <span className="hidden sm:inline font-semibold tracking-wide">Chat on WhatsApp</span>
    </a>
  );
}
