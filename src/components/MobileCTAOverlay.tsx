"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function MobileCTAOverlay() {
  const { lang } = useLanguage();

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-t border-gray-100 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] px-4 py-3.5 flex items-center justify-between gap-3 transition-all duration-300">
      
      {/* Left Button: WhatsApp - Green background */}
      <a
        href="https://wa.me/966530985071"
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
            (window as any).gtag_report_conversion();
          }
        }}
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-[#25D366] hover:bg-[#20ba5a] active:scale-95 text-white font-extrabold text-sm rounded-full transition-all shadow-[0_4px_12px_rgba(37,211,102,0.2)] no-underline"
      >
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.863-9.748.002-2.607-1.01-5.059-2.85-6.902C16.643 2.113 14.197.94 11.6.94c-5.456 0-9.9 4.373-9.902 9.75-.001 1.83.5 3.61 1.45 5.163L2.124 21.8l6.027-1.579L6.65 19.15c-.001 0-.001 0 0 0zm9.467-5.69c-.274-.137-1.62-.8-1.87-.892-.252-.093-.437-.137-.62.137-.183.273-.708.892-.868 1.075-.16.183-.32.205-.594.068-.274-.137-1.157-.427-2.204-1.362-.815-.727-1.365-1.625-1.525-1.898-.16-.273-.017-.42.12-.557.123-.123.274-.32.41-.479.138-.16.183-.273.274-.456.09-.183.046-.342-.023-.479-.068-.137-.62-1.492-.85-2.04-.223-.538-.447-.463-.618-.472-.16-.008-.343-.01-.525-.01-.183 0-.48.068-.73.342-.25.273-.957.934-.957 2.278s.978 2.64 1.115 2.822c.137.183 1.926 2.94 4.667 4.12 1.96.84 2.72 1.01 3.682.87 1.077-.16 1.62-.8 1.87-1.579.25-.778.25-1.447.175-1.58-.075-.137-.275-.22-.55-.357z"/>
        </svg>
        <span>{lang === "ar" ? "تواصل واتساب" : "WhatsApp Chat"}</span>
      </a>

      {/* Right Button: Call Now - Amber/Yellow background */}
      <a
        href="tel:+966530985071"
        onClick={() => {
          if (typeof window !== "undefined" && (window as any).gtag_report_phone_conversion) {
            (window as any).gtag_report_phone_conversion();
          }
        }}
        className="flex-1 flex items-center justify-center gap-2 py-3 bg-brand-yellow hover:bg-brand-yellowDark active:scale-95 text-brand-slate font-extrabold text-sm rounded-full transition-all shadow-[0_4px_12px_rgba(255,204,0,0.25)] no-underline"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        <span>{lang === "ar" ? "اتصل الآن" : "Call Now"}</span>
      </a>
      
    </div>
  );
}
