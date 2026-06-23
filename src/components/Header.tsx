"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Header() {
  const { lang, dir, toggleLanguage, t } = useLanguage();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.home"), path: "/" },
    { name: t("nav.about"), path: "/about" },
    { name: t("nav.services"), path: "/services" },
    { name: t("nav.projects"), path: "/projects" },
    { name: t("nav.ideas"), path: "/ideas" },
    { name: t("nav.contact"), path: "/contact" }
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "shadow-premium"
          : ""
      }`}
    >
      {/* Top bar subheader */}
      <div 
        className={`bg-brand-slate text-white/90 text-[11px] md:text-xs border-b border-white/5 transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0 py-0" : "max-h-10 py-2.5"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Left Side: Email & Phone & WhatsApp */}
          <div className="flex items-center gap-4 md:gap-6 flex-wrap">
            <a
              href="tel:+966530985071"
              onClick={() => {
                if (typeof window !== "undefined" && (window as any).gtag_report_phone_conversion) {
                  (window as any).gtag_report_phone_conversion();
                }
              }}
              className="flex items-center gap-1.5 hover:text-brand-yellow transition-colors no-underline text-white/90 font-medium"
            >
              <svg className="w-3.5 h-3.5 text-brand-yellow" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 .8V7.36c.09-.27.18-.54.3-.81z" />
              </svg>
              <span dir="ltr">+966 53 098 5071</span>
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
              className="flex items-center gap-1.5 hover:text-green-400 transition-colors no-underline text-white/90 font-medium"
            >
              <svg className="w-3.5 h-3.5 text-green-500 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.638 1.977 14.17 .953 11.54 1.95c-5.442 0-9.866 4.372-9.87 9.802 0 1.714.47 3.387 1.357 4.881l-.994 3.63 3.77-.97.06.035zm12.503-4.866c-.305-.153-1.8-.886-2.078-1.002-.277-.107-.48-.158-.68.153-.2.316-.78.987-.96 1.18-.18.204-.359.224-.664.071-.305-.153-1.29-.475-2.457-1.516-.908-.81-1.52-1.81-1.7-2.115-.18-.306-.02-.472.133-.623.14-.132.305-.357.457-.53.153-.184.204-.306.305-.51.102-.204.05-.383-.025-.536-.077-.153-.68-1.63-.93-2.245-.244-.59-.49-.51-.68-.52-.176-.008-.376-.008-.576-.008-.2 0-.527.076-.8.377-.274.306-1.045 1.02-1.045 2.488 0 1.468 1.07 2.886 1.22 3.09.15.204 2.106 3.22 5.097 4.507.712.306 1.27.49 1.704.627.715.225 1.365.194 1.88.118.573-.087 1.8-.735 2.053-1.445.255-.71.255-1.316.18-1.445-.075-.128-.277-.204-.582-.357z" />
              </svg>
              <span>{lang === "ar" ? "واتساب" : "WhatsApp"}</span>
            </a>
            <a href="mailto:info@lainnwaif.com" className="hidden sm:flex items-center gap-1.5 hover:text-brand-yellow transition-colors no-underline text-white/90 font-medium">
              <svg className="w-3.5 h-3.5 text-brand-yellow" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>info@lainnwaif.com</span>
            </a>
          </div>

          {/* Right Side: Professional Tagline */}
          <div className="hidden md:flex items-center gap-2">
            <span className="text-[10px] md:text-xs font-semibold text-white/70">
              {lang === "ar" 
                ? "مشاريع التكييف والتهوية الميكانيكية تحت إشراف هندسي"
                : "Engineered HVAC & Mechanical Ventilation Projects"}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`transition-all duration-300 ${scrolled ? "py-3.5 bg-white/95 backdrop-blur-md shadow-premium border-b border-gray-100" : "py-6"}`}>
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo and Brand Details - Left side of the flex */}
          <Link href="/" className="flex items-center no-underline cursor-pointer group flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Lain Nwaif Logo"
              width={150}
              height={60}
              className="h-10 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 mix-blend-multiply"
              priority
            />
          </Link>

          {/* 1. Desktop Navigation Links - Centered, dynamic flex gaps and early collapse breakpoint */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 justify-center flex-grow">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`font-semibold text-sm xl:text-base transition-all duration-200 relative py-1 whitespace-nowrap tracking-tight ${
                  isActive(item.path)
                    ? "text-brand-slate after:w-full"
                    : "text-brand-muted hover:text-brand-slate after:w-0"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-brand-yellow after:transition-all after:duration-200`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Actions Block (Language selector & CTA button) */}
          <div className="flex items-center gap-3 md:gap-4 flex-shrink-0">
            
            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 bg-white border border-gray-100 hover:border-brand-yellow hover:bg-brand-yellowLight px-3 py-2 rounded-full cursor-pointer text-[11px] md:text-xs font-bold text-brand-muted hover:text-brand-slate transition-all whitespace-nowrap"
              aria-label="Toggle Language"
            >
              <svg
                className="w-3.5 h-3.5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>{lang === "ar" ? "English" : "العربية"}</span>
            </button>

            {/* 5. Action CTA Button - dynamic horizontal padding px-4 py-2 sm:px-5 */}
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-brand-yellow text-brand-slate font-bold text-xs sm:text-sm rounded-full transition-all duration-300 hover:bg-brand-yellowDark hover:-translate-y-0.5 shadow-gold no-underline border-none whitespace-nowrap"
            >
              {t("nav.cta")}
            </Link>

            {/* 4. Responsive Mobile Hamburger - collapses earlier at lg:hidden */}
            <button
              className="lg:hidden flex items-center justify-center p-2 bg-transparent border-none cursor-pointer text-brand-slate"
              onClick={toggleMobileMenu}
              aria-label="Toggle Menu"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`block w-full h-0.5 bg-brand-slate rounded transition-all duration-300 ${mobileMenuOpen ? "transform translate-y-[9px] rotate-45" : ""}`}></span>
                <span className={`block w-full h-0.5 bg-brand-slate rounded transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
                <span className={`block w-full h-0.5 bg-brand-slate rounded transition-all duration-300 ${mobileMenuOpen ? "transform translate-y-[-9px] -rotate-45" : ""}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed top-0 bottom-0 w-72 bg-white shadow-xl z-40 p-8 flex flex-col gap-8 transition-all duration-300 ${
          mobileMenuOpen
            ? dir === "rtl" ? "right-0" : "left-0"
            : dir === "rtl" ? "-right-80" : "-left-80"
        }`}
      >
        <div className="h-16"></div>
        <nav className="flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-bold text-base py-2.5 border-b border-gray-100 transition-all ${
                isActive(item.path)
                  ? "text-brand-slate border-brand-yellow px-2"
                  : "text-brand-muted hover:text-brand-slate hover:px-2"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-3.5 bg-brand-yellow text-brand-slate text-center font-bold rounded-full mt-4 block no-underline"
          >
            {t("nav.cta")}
          </Link>
        </nav>
      </div>

      {/* Backdrop overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-brand-slate/10 backdrop-blur-sm z-30"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </header>
  );
}
