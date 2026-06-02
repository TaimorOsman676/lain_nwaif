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
          ? "bg-white/90 backdrop-blur-md border-b border-gray-100 py-3.5 shadow-premium"
          : "bg-transparent py-6"
      }`}
    >
      {/* 3. Container Padding Protection: px-4 sm:px-6 lg:px-8 */}
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
