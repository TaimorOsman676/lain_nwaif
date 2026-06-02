"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { FAQItem } from "../types";

export default function FAQAccordion() {
  const { t } = useLanguage();
  const faqList: FAQItem[] = t("faq.list") || [];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-4">
      {faqList.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div
            key={index}
            className={`bg-white border rounded-lg overflow-hidden transition-all duration-300 ${
              isOpen ? "border-brand-yellow shadow-md" : "border-gray-100 shadow-sm hover:border-brand-yellow/50"
            }`}
          >
            <button
              className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 bg-transparent outline-none cursor-pointer"
              onClick={() => toggleAccordion(index)}
              aria-expanded={isOpen}
              style={{ textAlign: "inherit" }}
            >
              <span className="font-bold text-brand-slate text-base md:text-lg leading-snug">
                {item.q}
              </span>
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                  isOpen ? "bg-brand-yellow text-brand-slate rotate-180" : "bg-gray-100 text-brand-muted"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>
            </button>
            
            <div
              className={`transition-all duration-300 overflow-hidden ${
                isOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"
              }`}
            >
              <div className="px-6 py-5 bg-brand-bg/30">
                <p className="text-brand-muted text-sm md:text-base leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
