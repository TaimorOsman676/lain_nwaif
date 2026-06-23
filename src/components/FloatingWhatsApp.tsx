"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingWhatsApp() {
  const { lang, dir } = useLanguage();

  return (
    <a
      href="https://wa.me/966530985071"
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
          (window as any).gtag_report_conversion();
        }
      }}
      className={`fixed bottom-8 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#128C7E] ${
        dir === "rtl" ? "left-8" : "right-8"
      }`}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse effect */}
      <div className="absolute inset-0 w-full h-full bg-[#25D366] rounded-full opacity-60 animate-ping z-0"></div>
      
      <svg
        className="w-8 h-8 z-10 relative"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.455h.008c6.56 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
      
      {/* Tooltip */}
      <span
        className={`absolute bottom-16 bg-slate-900 text-white px-4 py-2 rounded text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg ${
          dir === "rtl" ? "left-0 translate-x-0" : "right-0 translate-x-0"
        } hidden md:inline`}
        style={{ transition: "all 0.2s ease" }}
      >
        {lang === "ar" ? "تواصل معنا عبر واتساب" : "Chat with us on WhatsApp"}
      </span>
    </a>
  );
}
