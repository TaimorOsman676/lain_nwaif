"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BrandsGrid from "@/components/BrandsGrid";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { lang, t, dir } = useLanguage();
  const [filter, setFilter] = useState<string>("all");

  const serviceKeys = [
    "vrf",
    "central",
    "concealed",
    "chiller",
    "crac",
    "split",
    "cassette",
    "maintenance",
    "ventilation",
    "design",
    "duct",
    "packaged"
  ];

  const filteredKeys = serviceKeys.filter((key) => {
    if (filter === "all") return true;
    return t(`services.items.${key}.category`) === filter;
  });

  const getServiceImage = (key: string) => {
    switch (key) {
      case "vrf":
        return "/images/vrf_system.png";
      case "central":
        return "/images/central_ac.png";
      case "chiller":
        return "/images/chiller_system.png";
      case "maintenance":
        return "/images/maintenance.png";
      case "design":
        return "/images/hvac_design.png";
      case "duct":
        return "/images/duct_fabrication.png";
      case "packaged":
        return "/images/packaged_unit.png";
      default:
        return "/images/hero_hvac.png";
    }
  };

  const getServiceIcon = (key: string) => {
    switch (key) {
      case "vrf":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="8" rx="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" />
          </svg>
        );
      case "central":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        );
      case "concealed":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="4" y1="9" x2="20" y2="9" />
            <line x1="4" y1="15" x2="20" y2="15" />
            <line x1="10" y1="3" x2="10" y2="21" />
          </svg>
        );
      case "chiller":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
            <path d="M12 6v6l4 2" />
          </svg>
        );
      case "crac":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="2" y="2" width="20" height="20" rx="2" ry="2" />
            <rect x="6" y="6" width="12" height="4" />
            <rect x="6" y="14" width="12" height="4" />
          </svg>
        );
      case "split":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="6" width="18" height="10" rx="2" />
            <line x1="7" y1="12" x2="17" y2="12" />
          </svg>
        );
      case "cassette":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="4" />
            <rect x="3" y="3" width="18" height="18" rx="2" />
          </svg>
        );
      case "maintenance":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
          </svg>
        );
      case "ventilation":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>
        );
      case "design":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
          </svg>
        );
      case "duct":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 10h16M4 14h16M4 6h16M4 18h16" />
          </svg>
        );
      case "packaged":
        return (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="9" cy="9" r="2" />
            <circle cx="15" cy="15" r="2" />
            <path d="M12 3v18" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />

      {/* Banner */}
      <section className="bg-gradient-to-br from-brand-yellow/5 to-brand-bg pt-40 pb-20 border-b border-gray-100 text-center">
        <div className="container mx-auto px-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-slate mb-4">
            {t("services.title")}
          </h1>
          <p className="text-brand-muted text-sm md:text-base max-w-xl mx-auto">
            {t("services.subtitle")}
          </p>
        </div>
      </section>

      {/* Services Tabs and Grid */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: "all", label: t("services.filterAll") },
              { id: "commercial", label: t("services.filterCommercial") },
              { id: "residential", label: t("services.filterResidential") },
              { id: "support", label: t("services.filterSupport") }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all cursor-pointer ${
                  filter === tab.id
                    ? "bg-brand-yellow border-brand-yellow text-brand-slate shadow-gold"
                    : "bg-white border-gray-100 text-brand-muted hover:border-brand-yellow hover:text-brand-slate"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Service Cards Grid with Image Separators */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredKeys.map((key) => (
              <article
                key={key}
                className="bg-white border border-gray-100 rounded-lg p-5 shadow-premium hover:shadow-md hover:border-brand-yellow/50 transition-all duration-300 flex flex-col gap-5"
              >
                {/* Image layout container padded inside card */}
                <div className="relative w-full h-48 rounded bg-gray-100 overflow-hidden flex-shrink-0">
                  <Image
                    src={getServiceImage(key)}
                    alt={t(`services.items.${key}.title`)}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover rounded transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className={`absolute bottom-3 w-10 h-10 bg-brand-yellow text-brand-slate rounded flex items-center justify-center shadow z-10 ${
                    dir === "rtl" ? "right-3" : "left-3"
                  }`}>
                    {getServiceIcon(key)}
                  </div>
                </div>

                <div className="flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-brand-slate mb-3">
                    {t(`services.items.${key}.title`)}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed mb-5 flex-grow">
                    {t(`services.items.${key}.shortDesc`)}
                  </p>
                  
                  <Link
                    href={`/services/${key}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-yellowDark hover:gap-2.5 transition-all no-underline mt-auto"
                  >
                    <span>{lang === "ar" ? "تفاصيل الخدمة والمواصفات" : "Service Specifications"}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <BrandsGrid />

      <Footer />
    </>
  );
}
