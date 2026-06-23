"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { lang, t } = useLanguage();

  const services = [
    { name: t("services.items.vrf.title"), path: "/services/vrf" },
    { name: t("services.items.central.title"), path: "/services/central" },
    { name: t("services.items.concealed.title"), path: "/services/concealed" },
    { name: t("services.items.chiller.title"), path: "/services/chiller" },
    { name: t("services.items.crac.title"), path: "/services/crac" },
    { name: t("services.items.split.title"), path: "/services/split" },
    { name: t("services.items.cassette.title"), path: "/services/cassette" },
    { name: t("services.items.maintenance.title"), path: "/services/maintenance" },
    { name: t("services.items.ventilation.title"), path: "/services/ventilation" }
  ];

  const quickLinks = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.projects"), path: "/projects" },
    { name: t("nav.ideas"), path: "/ideas" },
    { name: t("nav.contact"), path: "/contact" }
  ];

  return (
    <footer className="bg-brand-bgLight text-brand-slate pt-20 pb-10 border-t border-gray-200">
      <div className="container mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* Company Bio */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center">
              <Image
                src="/logo.png"
                alt="Lain Nwaif Logo"
                width={150}
                height={60}
                className="h-12 w-auto object-contain mix-blend-multiply"
              />
            </div>
            <p className="text-brand-muted text-sm leading-relaxed max-w-sm">
              {lang === "ar"
                ? "مؤسسة سعودية وطنية معتمدة ومصنفة في أعمال مقاولات أنظمة التكييف والتهوية وتصنيع مجاري الهواء (الدكت) بأعلى معايير الجودة والكفاءة الفنية."
                : "A certified Saudi contracting firm specializing in engineering HVAC infrastructure, mechanical ventilation layouts, and structural duct manufacturing."}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a href="#" className="w-9 h-9 rounded-full bg-white border border-gray-200 text-brand-muted hover:bg-brand-yellow hover:text-brand-slate hover:border-brand-yellow flex items-center justify-center transition-all duration-200" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white border border-gray-200 text-brand-muted hover:bg-brand-yellow hover:text-brand-slate hover:border-brand-yellow flex items-center justify-center transition-all duration-200" aria-label="LinkedIn">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white border border-gray-200 text-brand-muted hover:bg-brand-yellow hover:text-brand-slate hover:border-brand-yellow flex items-center justify-center transition-all duration-200" aria-label="Instagram">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>

          {/* Service Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-brand-slate font-extrabold text-base relative pb-2 after:content-[''] after:absolute after:bottom-0 after:start-0 after:w-8 after:h-0.5 after:bg-brand-yellow">
              {lang === "ar" ? "خدمات التكييف" : "HVAC Services"}
            </h4>
            <ul className="flex flex-col gap-3 list-none p-0">
              {services.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="text-brand-muted hover:text-brand-slate text-sm transition-all duration-200 hover:translate-x-1 rtl:hover:-translate-x-1 inline-block no-underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-brand-slate font-extrabold text-base relative pb-2 after:content-[''] after:absolute after:bottom-0 after:start-0 after:w-8 after:h-0.5 after:bg-brand-yellow">
              {lang === "ar" ? "روابط سريعة" : "Quick Links"}
            </h4>
            <ul className="flex flex-col gap-3 list-none p-0">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="text-brand-muted hover:text-brand-slate text-sm transition-all duration-200 hover:translate-x-1 rtl:hover:-translate-x-1 inline-block no-underline">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-6">
            <h4 className="text-brand-slate font-extrabold text-base relative pb-2 after:content-[''] after:absolute after:bottom-0 after:start-0 after:w-8 after:h-0.5 after:bg-brand-yellow">
              {t("contact.infoTitle")}
            </h4>
            <ul className="flex flex-col gap-4 list-none p-0">
              <li className="flex items-start gap-3 text-brand-muted text-sm">
                <svg className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>{t("contact.address")}</span>
              </li>
              <li className="flex items-start gap-3 text-brand-muted text-sm">
                <svg className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <div className="flex flex-col gap-1">
                  <a
                    href="tel:+966530985071"
                    onClick={() => {
                      if (typeof window !== "undefined" && (window as any).gtag_report_phone_conversion) {
                        (window as any).gtag_report_phone_conversion();
                      }
                    }}
                    className="hover:text-brand-slate text-brand-muted no-underline"
                  >
                    {t("contact.phone")}
                  </a>
                  <a
                    href="https://wa.me/966530985071"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      if (typeof window !== "undefined" && (window as any).gtag_report_conversion) {
                        (window as any).gtag_report_conversion();
                      }
                    }}
                    className="text-[#25D366] font-bold text-xs hover:underline no-underline"
                  >
                    {lang === "ar" ? "واتساب متاح" : "WhatsApp Chat"}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3 text-brand-muted text-sm">
                <svg className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <a href="mailto:info@lainnwaif.com" className="hover:text-brand-slate text-brand-muted no-underline">
                  {t("contact.email")}
                </a>
              </li>
              <li className="flex items-start gap-3 text-brand-muted text-sm">
                <svg className="w-5 h-5 text-brand-yellow flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12,6 12,12 16,14"></polyline>
                </svg>
                <div>
                  <div>{t("contact.workingHours")}</div>
                  <div className="text-rose-500 font-bold text-[11px] mt-0.5">{t("contact.friday")}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-200/60 gap-5 text-center">
          <p className="text-xs text-brand-light font-semibold">
            &copy; {new Date().getFullYear()} {lang === "ar" ? "مؤسسة لين نوايف للتكييف. جميع الحقوق محفوظة." : "Lain Nwaif HVAC Est. All rights reserved."}
          </p>

          {/* Saudi Vision 2030 Badge */}
          <div className="flex items-center gap-2">
            <svg className="w-12 h-7" viewBox="0 0 100 60" fill="none">
              <path d="M15 15C22 15 25 22 28 30C31 38 34 45 42 45C50 45 52 38 55 30C58 22 61 15 68 15C75 15 78 22 81 30" stroke="url(#goldGrad)" strokeWidth="8" strokeLinecap="round" />
              <circle cx="35" cy="22" r="6" fill="#FFCC00" />
              <circle cx="58" cy="38" r="4" fill="#E6B800" />
              <defs>
                <linearGradient id="goldGrad" x1="15" y1="15" x2="81" y2="30" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#FFCC00" />
                  <stop offset="0.5" stopColor="#E6B800" />
                  <stop offset="1" stopColor="#B38F00" />
                </linearGradient>
              </defs>
            </svg>
            <div className="flex flex-col text-left leading-none">
              <span className="text-[8px] tracking-wider text-brand-light font-bold">VISION رؤيــــــــة</span>
              <strong className="text-sm text-brand-yellowDark font-black">2030</strong>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
