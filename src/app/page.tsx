"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQAccordion from "@/components/FAQAccordion";
import { useLanguage } from "@/context/LanguageContext";
import { ServiceDetail, TestimonialItem } from "../types";

export default function Home() {
  const { lang, t, dir } = useLanguage();
  const [serviceFilter, setServiceFilter] = useState<string>("all");

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

  const filteredServices = serviceKeys.filter((key) => {
    if (serviceFilter === "all") return true;
    const category = t(`services.items.${key}.category`);
    return category === serviceFilter;
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
            <line x1="6" y1="6" x2="6.01" y2="6" />
            <line x1="6" y1="18" x2="6.01" y2="18" />
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
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="12" cy="12" r="4" />
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

  const getWhyUsIcon = (index: number) => {
    switch (index) {
      case 0:
        return (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
        );
      case 1:
        return (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
            <path d="M16 21.16a10 10 0 0 1-8 0" />
          </svg>
        );
      case 2:
        return (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        );
      case 3:
        return (
          <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M12 2a5 5 0 0 0-5 5v4h10V7a5 5 0 0 0-5-5z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 bg-gradient-to-br from-brand-yellow/5 via-brand-bg to-brand-bg overflow-hidden">
        {/* Parallax Image Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_hvac.png"
            alt="Lain Nuawaf Al-Aqeedi Est. HVAC Design"
            fill
            className="object-cover opacity-10"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/85 via-brand-bg to-brand-bg"></div>
        </div>

        <div className="container mx-auto px-5 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Copy & Actions */}
            <div className="lg:col-span-7 flex flex-col items-start text-start">
              <span className="inline-block bg-brand-yellowLight text-brand-yellowDark border border-brand-yellow/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                {t("hero.badge")}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-brand-slate leading-tight max-w-4xl mb-6">
                <span>{t("hero.title1")} </span>
                <span className="bg-gradient-to-r from-brand-yellowDark to-brand-yellow bg-clip-text text-transparent inline-block">
                  {t("hero.title2")}
                </span>
              </h1>
              <p className="text-base md:text-lg text-brand-muted leading-relaxed max-w-2xl mb-10">
                {t("hero.subtitle")}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="tel:+966530985071"
                  onClick={() => {
                    if (typeof window !== "undefined" && (window as any).gtag_report_phone_conversion) {
                      (window as any).gtag_report_phone_conversion();
                    }
                  }}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-brand-yellow hover:bg-brand-yellowDark text-brand-slate font-bold text-base rounded-full shadow-gold hover:-translate-y-0.5 transition-all duration-300 border-none no-underline cursor-pointer"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>{t("hero.ctaCall")}</span>
                </a>
                <Link href="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-white border border-brand-slate hover:bg-brand-slate hover:text-white text-brand-slate font-bold text-base rounded-full hover:-translate-y-0.5 transition-all duration-300 no-underline cursor-pointer">
                  {t("hero.ctaContact")}
                </Link>
              </div>

              {/* Hero Trust Badges */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mb-4 text-xs md:text-sm font-black text-brand-slate">
                <span className="flex items-center gap-1.5 bg-white/70 backdrop-blur border border-gray-100/60 px-3.5 py-2 rounded-full shadow-premium">
                  <span className="text-green-500 text-sm font-bold">✓</span>
                  {lang === "ar" ? "صيانة وتوريد 24/7" : "24/7 Support & Supply"}
                </span>
                <span className="flex items-center gap-1.5 bg-white/70 backdrop-blur border border-gray-100/60 px-3.5 py-2 rounded-full shadow-premium">
                  <span className="text-green-500 text-sm font-bold">✓</span>
                  {lang === "ar" ? "أسعار تنافسية بدون رسوم مخفية" : "Transparent Pricing - No Hidden Fees"}
                </span>
                <span className="flex items-center gap-1.5 bg-white/70 backdrop-blur border border-gray-100/60 px-3.5 py-2 rounded-full shadow-premium">
                  <span className="text-green-500 text-sm font-bold">✓</span>
                  {lang === "ar" ? "مهندسون وفنيون معتمدون" : "SCE Certified Engineers"}
                </span>
              </div>
            </div>

            {/* Right Column: Breathtaking Responsive Image Card */}
            <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[400px] lg:h-[480px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/hero_attractive.png"
                alt={lang === "ar" ? "تركيبات تكييف ميكانيكي حديثة الرياض" : "Premium mechanical HVAC installation Riyadh"}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>

          {/* Guarantees Matrix & Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-gray-200/60 max-w-4xl mt-16">
            {t("hero.guarantees").map((item: any, index: number) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="w-8 h-8 rounded-full bg-brand-yellowLight text-brand-yellowDark flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-brand-slate mb-1">{item.title}</h4>
                  <p className="text-xs text-brand-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Technical subdesc banner */}
          <div className="mt-8 flex items-center gap-3 bg-white/60 border border-gray-200/50 rounded-lg p-4 max-w-xl text-xs md:text-sm text-brand-muted">
            <svg className="w-5 h-5 text-brand-yellow flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
            </svg>
            <div>
              <strong className="text-brand-slate">{t("hero.descTitle")}</strong> — {t("hero.descSub")}
            </div>
          </div>
        </div>
      </section>

      {/* Urgency Promo Bar */}
      <div className="bg-brand-slate text-white py-4 border-b border-brand-yellow/30 z-20 relative">
        <div className="container mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-center md:text-left">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-yellow animate-ping hidden sm:inline-block"></span>
            <strong className="text-sm md:text-base tracking-tight font-black text-brand-yellow">
              {lang === "ar" ? "عرض خاص لفترة محدودة:" : "Limited Time Offer:"}
            </strong>
            <span className="text-xs md:text-sm font-bold text-gray-200">
              {lang === "ar" 
                ? "احصل على معاينة مجانية لمشروعك اليوم - اتصل الآن" 
                : "Get a free site survey for your project today - Call now"}
            </span>
          </div>
          <a 
            href="tel:+966530985071" 
            onClick={() => {
              if (typeof window !== "undefined" && (window as any).gtag_report_phone_conversion) {
                (window as any).gtag_report_phone_conversion();
              }
            }}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-brand-yellow hover:bg-brand-yellowDark text-brand-slate font-black text-xs rounded-full transition-all duration-300 shadow-gold no-underline cursor-pointer border-none"
          >
            <span>{lang === "ar" ? "احجز موعدك الآن" : "Book Survey Now"}</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>

      {/* Metrics Row */}
      <section className="bg-white border-y border-gray-100 py-12">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {t("stats").map((item: any, index: number) => (
              <div key={index} className="flex flex-col gap-2">
                <div className="text-3xl md:text-4xl font-black text-brand-yellowDark leading-none">
                  {item.number}
                </div>
                <div className="text-xs font-bold text-brand-muted uppercase tracking-wider">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with Filter tabs */}
      <section className="py-24" id="services">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-brand-slate mb-4 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-brand-yellow after:rounded-full">
              {t("services.title")}
            </h2>
            <p className="text-brand-muted text-sm md:text-base max-w-lg mx-auto">
              {t("services.subtitle")}
            </p>
          </div>

          {/* Dynamic Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: "all", label: t("services.filterAll") },
              { id: "commercial", label: t("services.filterCommercial") },
              { id: "residential", label: t("services.filterResidential") },
              { id: "support", label: t("services.filterSupport") }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setServiceFilter(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold border transition-all cursor-pointer ${
                  serviceFilter === tab.id
                    ? "bg-brand-yellow border-brand-yellow text-brand-slate shadow-gold"
                    : "bg-white border-gray-100 text-brand-muted hover:border-brand-yellow hover:text-brand-slate"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Contained Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((key) => (
              <article
                key={key}
                className="bg-white border border-gray-100 rounded-lg p-5 shadow-premium hover:shadow-md hover:border-brand-yellow/50 transition-all duration-300 flex flex-col gap-5"
              >
                {/* Visual Image container with clear padding and radius */}
                <div className="relative w-full h-48 rounded bg-gray-100 overflow-hidden flex-shrink-0">
                  <Image
                    src={getServiceImage(key)}
                    alt={t(`services.items.${key}.title`)}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover rounded transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  {/* Dynamic icon indicator absolute float */}
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
                  <p className="text-xs text-brand-muted leading-relaxed line-clamp-4 mb-5 flex-grow">
                    {t(`services.items.${key}.shortDesc`)}
                  </p>
                  
                  <Link
                    href={`/services/${key}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-yellowDark hover:gap-2 transition-all no-underline mt-auto"
                  >
                    <span>{t("services.viewDetails")}</span>
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

      {/* Why Us Section */}
      <section className="bg-brand-bgLight py-24">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-brand-slate mb-4 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-brand-yellow after:rounded-full">
              {t("whyUs.title")}
            </h2>
            <p className="text-brand-muted text-sm md:text-base max-w-lg mx-auto">
              {t("whyUs.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t("whyUs.items").map((item: any, index: number) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-lg p-8 shadow-premium text-center hover:shadow-md hover:border-brand-yellow/50 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-brand-yellowLight text-brand-yellowDark flex items-center justify-center mx-auto mb-6">
                  {getWhyUsIcon(index)}
                </div>
                <h3 className="text-base font-bold text-brand-slate mb-3">{item.title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-brand-slate mb-4 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-brand-yellow after:rounded-full">
              {t("testimonials.title")}
            </h2>
            <p className="text-brand-muted text-sm md:text-base max-w-lg mx-auto">
              {t("testimonials.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t("testimonials.list").map((item: TestimonialItem, index: number) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-lg p-8 shadow-premium flex flex-col justify-between"
              >
                <div className="flex justify-between items-start mb-5">
                  <div>
                    <h4 className="font-bold text-sm text-brand-slate">{item.name}</h4>
                    <span className="text-[11px] text-brand-light">{item.date}</span>
                  </div>
                  <div className="text-amber-400 text-sm">
                    {"★".repeat(item.rating || 5)}
                  </div>
                </div>
                <p className="text-xs text-brand-muted leading-relaxed italic mb-5">
                  &ldquo;{item.comment}&rdquo;
                </p>
                <div className="flex items-center gap-2 text-[11px] text-brand-light font-bold">
                  <svg className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 24 24">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  </svg>
                  <span>{item.source}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Call To Action */}
      <section className="bg-brand-yellow py-20 text-center">
        <div className="container mx-auto px-5 max-w-3xl flex flex-col items-center gap-6">
          <h2 className="text-3xl font-black text-brand-slate leading-tight">
            {t("ctaBlock.title")}
          </h2>
          <p className="text-brand-slate/90 text-sm md:text-base leading-relaxed mb-4">
            {t("ctaBlock.subtitle")}
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-brand-slate hover:bg-brand-slate/90 text-white font-bold text-base rounded-full shadow-gold no-underline transition-all duration-300 border-none cursor-pointer"
          >
            {t("ctaBlock.btn")}
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-brand-slate mb-4 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-brand-yellow after:rounded-full">
              {t("faq.title")}
            </h2>
            <p className="text-brand-muted text-sm md:text-base max-w-lg mx-auto">
              {t("faq.subtitle")}
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* Success Partners Slider / Grid */}
      <section className="bg-white border-t border-gray-100 py-24">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-brand-slate mb-4 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-brand-yellow after:rounded-full">
              {t("partners.title")}
            </h2>
            <p className="text-brand-muted text-sm md:text-base max-w-lg mx-auto">
              {t("partners.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {["Gree", "Toshiba", "Basic", "Elite", "Carrier", "Daikin"].map((brand) => (
              <div
                key={brand}
                className="border border-gray-100 bg-brand-bg rounded-lg p-6 text-center hover:border-brand-yellow hover:shadow-premium transition-all duration-300"
              >
                <h3 className="text-xl font-extrabold text-brand-slate mb-1">{brand}</h3>
                <small className="text-[10px] text-brand-light font-bold">
                  {lang === "ar" ? "شريك معتمد" : "Certified Partner"}
                </small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
