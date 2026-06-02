"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { ProjectItem } from "../types";

export default function Projects() {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<string>("all");

  const projectList: ProjectItem[] = t("projectsPage.list") || [];

  const filteredProjects = projectList.filter((proj) => {
    if (filter === "all") return true;
    return proj.category === filter;
  });

  return (
    <>
      <Navbar />

      {/* Banner */}
      <section className="bg-gradient-to-br from-brand-yellow/5 to-brand-bg pt-40 pb-20 border-b border-gray-100 text-center">
        <div className="container mx-auto px-5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-slate mb-4">
            {t("projectsPage.title")}
          </h1>
          <p className="text-brand-muted text-sm md:text-base max-w-xl mx-auto">
            {t("projectsPage.subtitle")}
          </p>
        </div>
      </section>

      {/* Filterable Grid */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: "all", label: t("projectsPage.all") },
              { id: "commercial", label: t("projectsPage.commercial") },
              { id: "residential", label: t("projectsPage.residential") },
              { id: "industrial", label: t("projectsPage.industrial") }
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

          {/* Grid of Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 p-8 rounded-lg shadow-premium hover:shadow-md hover:border-brand-yellow/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="bg-brand-yellowLight text-brand-yellowDark border border-brand-yellow/20 px-3 py-1 rounded text-[10px] font-extrabold uppercase">
                      {proj.category === "commercial" && t("projectsPage.commercial")}
                      {proj.category === "residential" && t("projectsPage.residential")}
                      {proj.category === "industrial" && t("projectsPage.industrial")}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-brand-light font-semibold">
                      <svg className="w-4 h-4 text-brand-yellow flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      <span>{proj.location}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-black text-brand-slate mb-3">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed mb-6">
                    {proj.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 mt-auto">
                  <span className="text-[10px] text-brand-light font-bold">
                    {lang === "ar" ? "نظام تكييف معتمد" : "Certified AC System"}
                  </span>
                  {/* Status Node */}
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                    <span className="text-[10px] font-bold text-emerald-600">
                      {lang === "ar" ? "منجز" : "Completed"}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
