"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

interface BrandItem {
  id: string;
  nameAr: string;
  nameEn: string;
  subAr: string;
  subEn: string;
  image: string;
  altAr: string;
  altEn: string;
  seoKeywordsAr: string;
  seoKeywordsEn: string;
}

export default function BrandsGrid() {
  const { lang, dir } = useLanguage();

  const premiumBrands: BrandItem[] = [
    {
      id: "carrier",
      nameAr: "كاريير",
      nameEn: "Carrier",
      subAr: "أنظمة التكييف المركزي وتكييف باكج",
      subEn: "Central Package & Chiller Systems",
      image: "/images/brand_carrier.png",
      altAr: "تركيب وصيانة أنظمة تكييف كاريير بالرياض",
      altEn: "Installation and maintenance of Carrier HVAC systems in Riyadh",
      seoKeywordsAr: "مكيفات كاريير مركزي الرياض صيانة تكييف كاريير بالرياض",
      seoKeywordsEn: "Carrier central AC Riyadh Carrier package unit"
    },
    {
      id: "trane",
      nameAr: "ترين",
      nameEn: "Trane",
      subAr: "مكيفات باكج ووحدات معالجة الهواء",
      subEn: "Rooftop Packaged & AHU Units",
      image: "/images/brand_york.png",
      altAr: "تركيب مكيفات باكج ترين في الرياض",
      altEn: "Installation of Trane packaged AC units in Riyadh",
      seoKeywordsAr: "مكيفات باكج ترين الرياض صيانة ترين مركزي",
      seoKeywordsEn: "Trane packaged AC Riyadh Trane chiller maintenance"
    },
    {
      id: "samsung",
      nameAr: "سامسونج",
      nameEn: "Samsung",
      subAr: "أنظمة التكييف الذكي VRF",
      subEn: "Smart Variable Refrigerant Flow (VRF)",
      image: "/images/brand_samsung.png",
      altAr: "تركيب أنظمة VRF سامسونج بالرياض",
      altEn: "Samsung VRF DVM S system installation in Riyadh",
      seoKeywordsAr: "تكييف سامسونج VRF الرياض وكيل سامسونج تكييف",
      seoKeywordsEn: "Samsung VRF system Riyadh Samsung DVM AC"
    },
    {
      id: "daikin",
      nameAr: "دايكين",
      nameEn: "Daikin",
      subAr: "أنظمة التكييف الذكي VRV اليابانية",
      subEn: "Japanese VRV & Multi-Split Tech",
      image: "/images/brand_daikin.png",
      altAr: "تركيب تكييف دايكن VRV بالرياض",
      altEn: "Daikin VRV system installation Riyadh",
      seoKeywordsAr: "تكييف دايكن VRV الرياض صيانة دايكن مركزي",
      seoKeywordsEn: "Daikin VRV Riyadh Daikin VRF cooling"
    },
    {
      id: "hitachi",
      nameAr: "هيتاشي",
      nameEn: "Hitachi",
      subAr: "وحدات التبريد ومكيفات الدقة",
      subEn: "Industrial Chillers & Precision AC",
      image: "/images/brand_samsung.png",
      altAr: "تركيب تكييف هيتاشي للغرف الحساسة بالرياض",
      altEn: "Hitachi precision cooling installation in Riyadh",
      seoKeywordsAr: "مكيفات هيتاشي دقة غرف سيرفرات الرياض",
      seoKeywordsEn: "Hitachi precision AC Riyadh Hitachi chiller"
    },
    {
      id: "york",
      nameAr: "يورك",
      nameEn: "York",
      subAr: "شيلرات المياه ومكيفات الباكج الكبيرة",
      subEn: "Water Chillers & Rooftop Packages",
      image: "/images/brand_york.png",
      altAr: "صيانة شيلرات يورك بالرياض",
      altEn: "York chiller plant maintenance Riyadh",
      seoKeywordsAr: "صيانة شيلر يورك الرياض مكيفات باكج يورك",
      seoKeywordsEn: "York chiller maintenance Riyadh York package unit"
    },
    {
      id: "lg",
      nameAr: "إل جي",
      nameEn: "LG",
      subAr: "أنظمة تكييف Multi V VRF المتطورة",
      subEn: "Multi V VRF Commercial Cooling",
      image: "/images/brand_daikin.png",
      altAr: "تركيب تكييف إل جي مركزي بالرياض",
      altEn: "LG Multi V VRF installation in Riyadh",
      seoKeywordsAr: "تكييف إل جي VRF الرياض مكيفات إل جي مركزي بالرياض",
      seoKeywordsEn: "LG Multi V VRF Riyadh LG commercial AC"
    }
  ];

  const marketBrands: BrandItem[] = [
    {
      id: "gree",
      nameAr: "جري",
      nameEn: "Gree",
      subAr: "مكيفات دكت سبليت والسبليت الجداري",
      subEn: "Ducted Split & Wall Mounted Units",
      image: "/images/brand_gree.png",
      altAr: "تركيب مكيفات دكت سبليت جري بالرياض",
      altEn: "Gree ducted split AC installation in Riyadh",
      seoKeywordsAr: "مكيفات جري دكت سبليت الرياض تركيب سبليت جري",
      seoKeywordsEn: "Gree ducted split Riyadh Gree wall split AC"
    },
    {
      id: "midea",
      nameAr: "ميديا",
      nameEn: "Midea",
      subAr: "مكيفات الدكت والسبليت السقفية",
      subEn: "High-Efficiency Ducted & Cassette AC",
      image: "/images/brand_gree.png",
      altAr: "تركيب مكيفات ميديا دكت سبليت في الرياض",
      altEn: "Midea ducted split installation in Riyadh",
      seoKeywordsAr: "مكيفات ميديا دكت سبليت الرياض صيانة ميديا كاسيت",
      seoKeywordsEn: "Midea ducted split Riyadh Midea cassette AC"
    },
    {
      id: "zamil",
      nameAr: "الزامل",
      nameEn: "Zamil",
      subAr: "الوحدات المجمعة وتكييف باكج وطني",
      subEn: "Saudi Packaged Units & Ducted AC",
      image: "/images/brand_zamil.png",
      altAr: "تركيب مكيفات الزامل باكج بالرياض",
      altEn: "Zamil packaged AC installation in Riyadh",
      seoKeywordsAr: "تكييف الزامل باكج الرياض صيانة الزامل مركزي",
      seoKeywordsEn: "Zamil packaged AC Riyadh Zamil ducted split"
    },
    {
      id: "general",
      nameAr: "أو جنرال",
      nameEn: "O General",
      subAr: "مكيفات مخفية وجدارية فائقة التحمل",
      subEn: "Heavy-Duty Concealed & Split AC",
      image: "/images/brand_gree.png",
      altAr: "تركيب مكيفات أو جنرال دكت سبليت بالرياض",
      altEn: "O General concealed split installation in Riyadh",
      seoKeywordsAr: "تكييف أو جنرال دكت سبليت الرياض مكيفات جنرال جداري",
      seoKeywordsEn: "O General concealed split Riyadh O General AC"
    },
    {
      id: "fuji",
      nameAr: "فوجي الكهربائية",
      nameEn: "Fuji Electric",
      subAr: "مكيفات دكت سبليت موفرة للطاقة",
      subEn: "Eco-Friendly Concealed Duct Split",
      image: "/images/brand_gree.png",
      altAr: "تركيب مكيفات فوجي دكت سبليت بالرياض",
      altEn: "Fuji Electric ducted split installation in Riyadh",
      seoKeywordsAr: "مكيفات فوجي دكت سبليت الرياض صيانة مكيفات فوجي بالرياض",
      seoKeywordsEn: "Fuji Electric ducted split Riyadh Fuji AC maintenance"
    },
    {
      id: "skm",
      nameAr: "إس كي إم",
      nameEn: "SKM",
      subAr: "مكيفات الخليج المجمعة والباكج",
      subEn: "Gulf-Specification Packaged Units",
      image: "/images/brand_zamil.png",
      altAr: "تركيب مكيفات إس كي إم باكج بالرياض",
      altEn: "SKM packaged unit installation in Riyadh",
      seoKeywordsAr: "مكيفات إس كي إم باكج الرياض صيانة تكييف SKM",
      seoKeywordsEn: "SKM packaged AC Riyadh SKM central air handler"
    }
  ];

  const renderSection = (title: string, subtitle: string, list: BrandItem[]) => {
    return (
      <div className="flex flex-col gap-8">
        <div className="border-s-4 border-brand-yellow px-4 py-1">
          <h2 className="text-xl md:text-2xl font-black text-brand-slate tracking-tight">
            {title}
          </h2>
          <p className="text-xs md:text-sm text-brand-muted font-bold mt-1.5">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {list.map((brand) => (
            <Link
              key={brand.id}
              href="/contact"
              className="group relative h-48 rounded-lg border border-gray-100 overflow-hidden shadow-premium hover:shadow-xl hover:border-brand-yellow/50 transition-all duration-300 transform hover:-translate-y-1 block no-underline"
            >
              {/* background brand image */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={brand.image}
                  alt={lang === "ar" ? brand.altAr : brand.altEn}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-slate/95 via-brand-slate/75 to-brand-slate/40"></div>
              </div>

              {/* Card Contents */}
              <div className="absolute inset-0 z-10 p-5 flex flex-col justify-end gap-1.5">
                <h3 className="text-base md:text-lg font-black text-white leading-none">
                  {lang === "ar" ? brand.nameAr : brand.nameEn}
                </h3>
                <p className="text-[10px] md:text-xs text-brand-yellow font-bold leading-tight line-clamp-2">
                  {lang === "ar" ? brand.subAr : brand.subEn}
                </p>

                {/* Micro-CTA that appears or becomes highlighted on hover */}
                <div className="mt-2 text-[10px] md:text-xs font-black bg-brand-yellow text-brand-slate px-2.5 py-1.5 rounded-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap self-start">
                  {lang === "ar" ? "طلب تسعيرة الآن ←" : "Request Quote Now →"}
                </div>
              </div>

              {/* Semantic SEO microcopy hidden from readers but readable by crawlers */}
              <div className="sr-only">
                {lang === "ar" ? brand.seoKeywordsAr : brand.seoKeywordsEn}
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-24 bg-brand-bg border-t border-gray-100">
      <div className="container mx-auto px-5 flex flex-col gap-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-black text-brand-slate mb-4 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-12 after:h-1 after:bg-brand-yellow after:rounded-full">
            {lang === "ar" ? "العلامات التجارية المعتمدة للتكييف" : "Authorized HVAC Brands & Systems"}
          </h2>
          <p className="text-brand-muted text-sm md:text-base">
            {lang === "ar"
              ? "نصمم ونركب ونقوم بصيانة أنظمة التبريد لكبرى الشركات العالمية والمحلية في الرياض بكفاءة هندسية مطلقة."
              : "We design, install, and service cooling layouts from leading global and regional manufacturers in Riyadh."}
          </p>
        </div>

        {renderSection(
          lang === "ar" ? "الأنظمة المركزية والذكية العالمية" : "International Premium Brands - Central & VRF Systems",
          lang === "ar" ? "حلول التكييف ذو الحجم الضخم وتقنية تدفق التبريد المتغير" : "Large capacity central layouts and smart VRF/VRV solutions",
          premiumBrands
        )}

        {renderSection(
          lang === "ar" ? "الأنظمة الأكثر طلباً ووحدات الباكج" : "High-Volume Market Leaders - Ducted Split & Package Units",
          lang === "ar" ? "مكيفات الدكت سبليت المخفية والوحدات المجمعة والسبليت الجداري" : "High performance concealed splits, packaged rooftops, and split units",
          marketBrands
        )}
      </div>
    </section>
  );
}
