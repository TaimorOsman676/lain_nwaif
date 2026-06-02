"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

export default function Ideas() {
  const { lang, t } = useLanguage();
  const blogList = t("ideasPage.list") || [];

  return (
    <>
      <Navbar />

      {/* Banner */}
      <section className="bg-gradient-to-br from-brand-yellow/5 to-brand-bg pt-40 pb-20 border-b border-gray-100 text-center">
        <div className="container mx-auto px-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-slate mb-4">
            {t("ideasPage.title")}
          </h1>
          <p className="text-brand-muted text-sm md:text-base max-w-xl mx-auto">
            {t("ideasPage.subtitle")}
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogList.map((post: any) => (
              <article
                key={post.id}
                className="bg-white border border-gray-100 p-8 rounded-lg shadow-premium hover:shadow-md hover:border-brand-yellow/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex gap-4 items-center text-xs text-brand-light font-semibold mb-5">
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-brand-yellow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3.5 h-3.5 text-brand-yellow" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {post.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-brand-slate leading-snug mb-3">
                    {post.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed mb-6">
                    {post.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-auto">
                  <button className="flex items-center gap-1.5 bg-transparent border-none text-xs font-bold text-brand-yellowDark hover:gap-2.5 transition-all cursor-pointer p-0">
                    <span>{t("ideasPage.readMore")}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
