"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { ContactPayload } from "../types";

export default function ContactForm() {
  const { t, lang } = useLanguage();
  const [formData, setFormData] = useState<ContactPayload>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    category: "commercial",
    location: "riyadh_north"
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Simulate API submit latency
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setFormData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
        category: "commercial",
        location: "riyadh_north"
      });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {status === "success" && (
        <div className="flex items-center gap-3 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-sm font-semibold animate-fade-in">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
          <span>{t("contact.formSuccess")}</span>
        </div>
      )}

      {status === "error" && (
        <div className="flex items-center gap-3 p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-lg text-sm font-semibold animate-fade-in">
          <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="8" x2="12" y2="12"></line>
            <line x1="12" y1="16" x2="12.01" y2="16"></line>
          </svg>
          <span>{t("contact.formError")}</span>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-bold text-brand-slate">
            {t("contact.formName")}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-brand-bg border border-gray-200 rounded-md text-brand-slate focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/10 transition-all outline-none"
            placeholder={t("contact.formName")}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-bold text-brand-slate">
            {t("contact.formPhone")}
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-brand-bg border border-gray-200 rounded-md text-brand-slate focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/10 transition-all outline-none"
            placeholder="05xxxxxxx"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm font-bold text-brand-slate">
            {t("contact.formEmail")}
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-brand-bg border border-gray-200 rounded-md text-brand-slate focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/10 transition-all outline-none"
            placeholder="name@example.com"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-sm font-bold text-brand-slate">
            {t("contact.formSubject")}
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 bg-brand-bg border border-gray-200 rounded-md text-brand-slate focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/10 transition-all outline-none"
            placeholder={t("contact.formSubject")}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="category" className="text-sm font-bold text-brand-slate">
            {lang === "ar" ? "تصنيف المشروع" : "Project Category"}
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-brand-bg border border-gray-200 rounded-md text-brand-slate focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/10 transition-all outline-none"
          >
            <option value="commercial">{lang === "ar" ? "تكييف تجاري" : "Commercial HVAC"}</option>
            <option value="residential">{lang === "ar" ? "تكييف سكني" : "Residential HVAC"}</option>
            <option value="industrial">{lang === "ar" ? "مشاريع صناعية وحكومية" : "Industrial/Government"}</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="location" className="text-sm font-bold text-brand-slate">
            {lang === "ar" ? "موقع المشروع" : "Project Location"}
          </label>
          <select
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-brand-bg border border-gray-200 rounded-md text-brand-slate focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/10 transition-all outline-none"
          >
            <option value="riyadh_north">{lang === "ar" ? "شمال الرياض" : "North Riyadh"}</option>
            <option value="riyadh_south">{lang === "ar" ? "جنوب الرياض" : "South Riyadh"}</option>
            <option value="riyadh_east">{lang === "ar" ? "شرق الرياض" : "East Riyadh"}</option>
            <option value="riyadh_west">{lang === "ar" ? "غرب الرياض" : "West Riyadh"}</option>
            <option value="riyadh_center">{lang === "ar" ? "وسط الرياض" : "Central Riyadh"}</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-bold text-brand-slate">
          {t("contact.formMessage")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-brand-bg border border-gray-200 rounded-md text-brand-slate focus:border-brand-yellow focus:ring-2 focus:ring-brand-yellow/10 transition-all outline-none"
          placeholder={t("contact.formMessage")}
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full py-4 px-6 bg-brand-yellow text-brand-slate font-bold rounded-full transition-all duration-300 hover:bg-brand-yellowDark hover:-translate-y-0.5 shadow-gold disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer border-none"
      >
        {status === "sending" ? (
          <span className="w-5 h-5 border-2 border-brand-slate/20 border-t-brand-slate rounded-full animate-spin"></span>
        ) : (
          <>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            <span>{t("contact.formSubmit")}</span>
          </>
        )}
      </button>
    </form>
  );
}
