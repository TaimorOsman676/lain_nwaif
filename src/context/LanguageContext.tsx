"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations } from "./translations";
import { Locale, TextDirection } from "../types";

interface LanguageContextType {
  lang: Locale;
  dir: TextDirection;
  toggleLanguage: () => void;
  t: (keyStr: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Locale>("ar"); // Default to Arabic
  const [dir, setDir] = useState<TextDirection>("rtl");

  useEffect(() => {
    // Check local storage for preference
    const savedLang = localStorage.getItem("lain_nwaif_lang") as Locale | null;
    if (savedLang && (savedLang === "ar" || savedLang === "en")) {
      setLang(savedLang);
      setDir(savedLang === "ar" ? "rtl" : "ltr");
      document.documentElement.lang = savedLang;
      document.documentElement.dir = savedLang === "ar" ? "rtl" : "ltr";
    } else {
      // Default to Arabic
      document.documentElement.lang = "ar";
      document.documentElement.dir = "rtl";
    }
  }, []);

  const toggleLanguage = () => {
    const nextLang: Locale = lang === "ar" ? "en" : "ar";
    const nextDir: TextDirection = nextLang === "ar" ? "rtl" : "ltr";
    setLang(nextLang);
    setDir(nextDir);
    localStorage.setItem("lain_nwaif_lang", nextLang);
    document.documentElement.lang = nextLang;
    document.documentElement.dir = nextDir;
  };

  // Helper function to resolve dot-notation keys
  const t = (keyStr: string): any => {
    const keys = keyStr.split(".");
    let current = translations[lang];
    
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        // Fallback to English if not found in current, or return key name
        let fallback = translations["en"];
        for (const fKey of keys) {
          if (fallback && fallback[fKey] !== undefined) {
            fallback = fallback[fKey];
          } else {
            fallback = null;
            break;
          }
        }
        return fallback || keyStr;
      }
    }
    return current;
  };

  return (
    <LanguageContext.Provider value={{ lang, dir, toggleLanguage, t }}>
      <div style={{ direction: dir }}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
