"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { lang, t } = useLanguage();
  const values = t("aboutPage.values") || [];

  return (
    <>
      <Navbar />

      {/* Banner */}
      <section className="bg-gradient-to-br from-brand-yellow/5 to-brand-bg pt-40 pb-20 border-b border-gray-100 text-center">
        <div className="container mx-auto px-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-slate mb-4">
            {t("aboutPage.title")}
          </h1>
          <p className="text-brand-muted text-sm md:text-base max-w-xl mx-auto">
            {t("aboutPage.subtitle")}
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold text-brand-yellowDark tracking-widest uppercase">
                {lang === "ar" ? "من نحن" : "WHO WE ARE"}
              </span>
              <h2 className="text-3xl font-black text-brand-slate">
                {t("aboutPage.storyTitle")}
              </h2>
              <p className="text-sm md:text-base text-brand-muted leading-relaxed">
                {t("aboutPage.storyDesc")}
              </p>
            </div>

            {/* Visual Corporate Card */}
            <div className="bg-white border border-gray-100 rounded-lg p-10 shadow-premium hover:border-brand-yellow/50 transition-all duration-300 relative text-center">
              <div className="w-16 h-16 rounded bg-brand-yellow font-extrabold text-2xl text-brand-slate flex items-center justify-center mx-auto mb-6 shadow-gold">
                LW
              </div>
              <h3 className="text-xl font-black text-brand-slate mb-3">
                {lang === "ar" ? "لين نوايف للتكييف" : "Lain Nwaif HVAC"}
              </h3>
              <p className="text-xs md:text-sm text-brand-muted leading-relaxed mb-6">
                {lang === "ar" 
                  ? "شريكك الموثوق لتصميم وتوريد وتصنيع أنظمة التكييف والتهوية في المملكة."
                  : "Your trusted partner for designing, supplying, and manufacturing HVAC systems in the Kingdom."}
              </p>
              <div className="inline-block border border-brand-yellow/30 color-brand-yellowDark bg-brand-yellowLight px-5 py-2 rounded-full text-xs font-bold">
                {lang === "ar" ? "متوافق مع رؤية المملكة 2030" : "Fully Aligned with Vision 2030"}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-brand-bgLight py-24">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-100 p-10 rounded-lg shadow-premium">
              <div className="w-12 h-12 rounded-full bg-brand-yellowLight text-brand-yellowDark flex items-center justify-center mb-6">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <polygon points="12 8 8 12 12 16 16 12 12 8" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-slate mb-4">
                {t("aboutPage.missionTitle")}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                {t("aboutPage.missionDesc")}
              </p>
            </div>

            <div className="bg-white border border-gray-100 p-10 rounded-lg shadow-premium">
              <div className="w-12 h-12 rounded-full bg-brand-yellowLight text-brand-yellowDark flex items-center justify-center mb-6">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-brand-slate mb-4">
                {t("aboutPage.visionTitle")}
              </h3>
              <p className="text-sm text-brand-muted leading-relaxed">
                {t("aboutPage.visionDesc")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-brand-slate mb-4 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-brand-yellow after:rounded-full">
              {t("aboutPage.valuesTitle")}
            </h2>
            <p className="text-brand-muted text-sm md:text-base max-w-lg mx-auto">
              {lang === "ar" 
                ? "المبادئ الحاكمة لعمليات التصنيع والتركيب لضمان الكفاءة المطلقة" 
                : "The guiding principles of our manufacturing and mechanical contracting operations"}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((val: any, index: number) => (
              <div
                key={index}
                className="bg-white border border-gray-100 p-8 rounded-lg shadow-premium relative overflow-hidden group hover:border-brand-yellow/50 hover:shadow-md transition-all duration-300"
              >
                <div className="absolute top-2 start-4 text-4xl font-extrabold text-brand-yellowLight select-none leading-none opacity-50 z-0">
                  0{index + 1}
                </div>
                <h3 className="text-lg font-bold text-brand-slate mb-3 relative z-10">
                  {val.title}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed relative z-10">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
