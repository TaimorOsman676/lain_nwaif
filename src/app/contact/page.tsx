"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { lang, t } = useLanguage();

  return (
    <>
      <Navbar />

      {/* Banner */}
      <section className="bg-gradient-to-br from-brand-yellow/5 to-brand-bg pt-40 pb-20 border-b border-gray-100 text-center">
        <div className="container mx-auto px-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-slate mb-4">
            {t("contact.title")}
          </h1>
          <p className="text-brand-muted text-sm md:text-base max-w-xl mx-auto">
            {t("contact.subtitle")}
          </p>
        </div>
      </section>

      {/* Contact Grid Section */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Form Column (Left side) */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-gray-100 p-8 md:p-10 rounded-lg shadow-premium">
                <h3 className="text-xl font-black text-brand-slate mb-2">
                  {lang === "ar" ? "أرسل لنا تفاصيل طلبك الفني" : "Send Us Your Inquiry"}
                </h3>
                <p className="text-xs text-brand-muted mb-8 leading-relaxed">
                  {lang === "ar" 
                    ? "املأ النموذج أدناه وسيتواصل معك مهندسو المبيعات أو الصيانة خلال ساعات العمل لتقديم تقييم مجاني."
                    : "Fill out the form below and our engineers will get back to you shortly."}
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Direct Info Column (Right side) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                
                {/* Phone Item */}
                <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-premium flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-full bg-brand-yellowLight text-brand-yellowDark flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-slate mb-1">
                      {lang === "ar" ? "رقم الهاتف المباشر" : "Direct Phone Call"}
                    </h4>
                    <a href="tel:+966530985071" className="text-sm font-bold text-brand-yellowDark hover:underline no-underline">
                      {t("contact.phone")}
                    </a>
                    <a
                      href="https://wa.me/966530985071"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#25D366] text-xs font-bold block mt-1 hover:underline no-underline"
                    >
                      {lang === "ar" ? "المراسلة المباشرة عبر واتساب" : "Chat on WhatsApp"}
                    </a>
                  </div>
                </div>

                {/* Email Item */}
                <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-premium flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-full bg-brand-yellowLight text-brand-yellowDark flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-slate mb-1">
                      {lang === "ar" ? "البريد الإلكتروني للمراسلات" : "Email Address"}
                    </h4>
                    <a href="mailto:info@lainnwaif.com" className="text-sm font-bold text-brand-yellowDark hover:underline no-underline">
                      {t("contact.email")}
                    </a>
                  </div>
                </div>

                {/* Address Item */}
                <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-premium flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-full bg-brand-yellowLight text-brand-yellowDark flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-slate mb-1">
                      {lang === "ar" ? "موقع المكتب الرئيسي" : "Main Office Location"}
                    </h4>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {t("contact.address")}
                    </p>
                  </div>
                </div>

                {/* Hours Item */}
                <div className="bg-white border border-gray-100 p-6 rounded-lg shadow-premium flex gap-4 items-start">
                  <div className="w-11 h-11 rounded-full bg-brand-yellowLight text-brand-yellowDark flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-slate mb-1">
                      {lang === "ar" ? "أوقات العمل" : "Working Hours"}
                    </h4>
                    <p className="text-xs text-brand-muted leading-normal">
                      {t("contact.workingHours")}
                    </p>
                    <span className="text-[10px] font-bold text-rose-500 block mt-0.5">
                      {t("contact.friday")}
                    </span>
                  </div>
                </div>

              </div>

              <div className="bg-white border border-gray-100 p-8 rounded-lg shadow-premium">
                <h3 className="text-base font-bold text-brand-slate mb-3">
                  {lang === "ar" ? "نطاق التغطية الجغرافية للمشاريع" : "Geographical Coverage Area"}
                </h3>
                <p className="text-xs text-brand-muted leading-relaxed mb-6">
                  {lang === "ar"
                    ? "نقدم خدماتنا ونغطي بشكل كامل مدينة الرياض الكبرى والمناطق والمدن الصناعية التابعة لها بالمملكة."
                    : "We provide our services and mainly cover the greater Riyadh city and all industrial zones and cities belonging to it in the Kingdom."}
                </p>
                
                {/* Dynamic Styled Coverage Map Placeholder */}
                <div className="h-32 bg-brand-bg border border-gray-100 rounded-md flex items-center justify-center gap-3 relative overflow-hidden">
                  <div className="absolute inset-0 bg-radial-gradient from-brand-yellow/5 to-transparent"></div>
                  
                  {/* Live Pulse Node */}
                  <div className="relative z-10 w-3 h-3 rounded-full bg-brand-yellow flex items-center justify-center">
                    <div className="absolute w-6 h-6 rounded-full border border-brand-yellow animate-ping opacity-60"></div>
                  </div>
                  
                  <span className="text-xs font-bold text-brand-slate relative z-10">
                    {lang === "ar" ? "تغطية كاملة لمدينة الرياض" : "Full Riyadh City Coverage"}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
