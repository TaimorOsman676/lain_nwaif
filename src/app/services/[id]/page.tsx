"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ServiceDetail({ params }: PageProps) {
  const { lang, t, dir } = useLanguage();
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;

  const validServices = ["vrf", "central", "concealed", "chiller", "crac", "split", "cassette", "maintenance", "ventilation"];

  if (!validServices.includes(id)) {
    notFound();
  }

  const getServiceImage = (key: string) => {
    switch (key) {
      case "vrf":
        return "/images/vrf_system.png";
      case "central":
        return "/images/central_ac.png";
      case "chiller":
        return "/images/chiller_system.png";
      case "maintenance":
        return "/images/maintenance.png";
      default:
        return "/images/hero_hvac.png";
    }
  };

  const getSpecs = (key: string): string[] => {
    const specsDict: Record<string, { ar: string[]; en: string[] }> = {
      vrf: {
        ar: ["توفير طاقة يصل إلى 30%", "تحكم مستقل لكل غرفة بنظام ذكي", "إمكانية توصيل وحدة خارجية واحدة بعشرات الوحدات الداخلية", "مثالي للمباني الفاخرة والمجمعات التجارية"],
        en: ["Up to 30% energy savings", "Independent room control via smart panel", "Single outdoor unit feeds dozens of indoor units", "Ideal for luxury homes and commercial complexes"]
      },
      central: {
        ar: ["تصميم هندسي متكامل لمجاري الهواء (الدكت)", "عزل حراري وصوتي عالي الكفاءة", "توزيع هواء متساوٍ ومريح في المساحات الواسعة", "أنظمة تحكم ذكية وصيانة ميسرة"],
        en: ["Full engineering design for air ducts", "High-efficiency thermal and acoustic insulation", "Even and comfortable air distribution in wide areas", "Smart control panels and easy maintenance access"]
      },
      concealed: {
        ar: ["مظهر عصري مخفي تماماً داخل الأسقف", "ظهور فتحات توزيع الهواء (الجريلات) الأنيقة فقط", "أداء تبريدي ممتاز مع هدوء تام أثناء التشغيل", "خيار ممتاز للفلل والمكاتب الراقية"],
        en: ["Fully hidden modern design inside false ceilings", "Only elegant linear slot diffusers are visible", "Excellent cooling performance with total silence", "Premium option for upscale villas and offices"]
      },
      chiller: {
        ar: ["قدرة تبريد فائقة للمشاريع والمصانع الضخمة", "يعتمد على تبريد المياه الصديق للبيئة", "عمر افتراضي طويل وكفاءة ميكانيكية عالية", "شبكة توزيع مرنة لوحدات معالجة الهواء (AHU)"],
        en: ["Super cooling capacity for massive projects and factories", "Environmentally friendly water-cooling system", "Long life cycle and high mechanical efficiency", "Flexible distribution network for Air Handling Units (AHU)"]
      },
      crac: {
        ar: ["تحكم دقيق بدرجة الحرارة والرطوبة بنسبة خطأ ±1", "تصميم مخصص للعمل الشاق على مدار الساعة 24/7", "حماية المعدات والخوادم الحساسة من الكهرباء الساكنة والغبار", "ضمان استمرارية تشغيل بنسبة 99.99%"],
        en: ["Precise temperature & humidity control within ±1 margin", "Custom heavy-duty design for 24/7 operation", "Protects sensitive server equipment from static and dust", "Guaranteed uptime up to 99.99%"]
      },
      split: {
        ar: ["خيارات من أفضل الماركات العالمية (قري، توشيبا)", "تركيب احترافي سريع مع ضمان شامل", "أسعار اقتصادية كفاءة تبريد عالية", "توجيه ذكي لتدفق الهواء وفلاتر تنقية متطورة"],
        en: ["Supplied from top brands (Gree, Toshiba, Basic)", "Fast professional installation with full warranty", "Highly economical with excellent cooling performance", "Smart airflow routing and advanced air filters"]
      },
      cassette: {
        ar: ["توزيع هواء رباعي الاتجاهات لتغطية متساوية", "تصميم سقف أنيق لا يشغل أي مساحات جدارية", "سهل التنظيف ومقاوم للرطوبة وتراكم المياه", "الخيار الأول للمعارض والمطاعم الفاخرة"],
        en: ["4-way air distribution for uniform coverage", "Elegant ceiling layout that saves wall space", "Easy cleaning and moisture-resistant design", "First choice for showrooms and high-end restaurants"]
      },
      maintenance: {
        ar: ["صيانة وقائية دورية وإصلاح فوري للأعطال", "فريق فني معتمد ومجهز بأحدث أدوات القياس والتشخيص", "تعبئة فريون وتنظيف مجاري وفلاتر التكييف", "استخدام قطع غيار أصلية بضمان حقيقي"],
        en: ["Periodic preventive maintenance & immediate breakdown repair", "Certified technical team equipped with advanced diagnostic tools", "Freon refill, duct cleaning, and filter replacement", "Genuine spare parts usage with authentic warranty support"]
      },
      ventilation: {
        ar: ["أنظمة شفط وتهوية للمطابخ التجارية والمصانع", "تجديد مستمر للهواء وسحب الرطوبة والروائح", "مراوح ومخمدات حريق معتمدة هندسياً", "تصميم يتوافق بالكامل مع معايير الدفاع المدني"],
        en: ["Exhaust and ventilation systems for commercial kitchens & plants", "Continuous air changes to extract moisture and odors", "Engineered and certified fans and fire dampers", "Full compliance design with Civil Defense requirements"]
      }
    };
    return specsDict[key] ? specsDict[key][lang as Locale] : [];
  };

  return (
    <>
      <Navbar />

      {/* Banner */}
      <section className="bg-gradient-to-br from-brand-yellow/5 to-brand-bg pt-40 pb-20 border-b border-gray-100 text-center">
        <div className="container mx-auto px-5">
          <span className="inline-block bg-brand-yellowLight text-brand-yellowDark border border-brand-yellow/20 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            {t(`services.items.${id}.category`) === "commercial" && t("services.filterCommercial")}
            {t(`services.items.${id}.category`) === "residential" && t("services.filterResidential")}
            {t(`services.items.${id}.category`) === "support" && t("services.filterSupport")}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-slate">
            {t(`services.items.${id}.title`)}
          </h1>
        </div>
      </section>

      {/* Detail Content */}
      <section className="py-24">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 flex flex-col gap-8">
              <div>
                <h2 className="text-2xl font-black text-brand-slate mb-4">
                  {lang === "ar" ? "نظرة عامة عن الخدمة" : "Service Overview"}
                </h2>
                <p className="text-sm md:text-base text-brand-muted leading-relaxed">
                  {t(`services.items.${id}.shortDesc`)}
                </p>
              </div>

              {/* Technical features list */}
              <div className="bg-white border border-gray-100 rounded-lg p-8 shadow-premium">
                <h3 className="text-lg font-bold text-brand-slate mb-6 pb-3 border-b border-gray-100">
                  {lang === "ar" ? "المميزات والمواصفات الفنية" : "Features & Technical Specs"}
                </h3>
                <ul className="flex flex-col gap-4 list-none p-0">
                  {getSpecs(id).map((spec, index) => (
                    <li key={index} className="flex items-start gap-3 text-sm md:text-base text-brand-slate font-semibold">
                      <span className="w-6 h-6 rounded-full bg-brand-yellowLight text-brand-yellowDark flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quote Callback box */}
              <div className={`p-8 bg-brand-yellowLight/40 rounded-lg border-s-4 border-brand-yellow flex flex-col sm:flex-row items-center justify-between gap-6 ${
                dir === "rtl" ? "border-s-0 border-e-4 border-brand-yellow" : ""
              }`}>
                <div>
                  <h4 className="text-lg font-bold text-brand-slate mb-2">
                    {lang === "ar" ? "هل تحتاج لمخطط تسعير هندسي لمشروعك؟" : "Need an engineering quote for your project?"}
                  </h4>
                  <p className="text-xs md:text-sm text-brand-muted leading-relaxed">
                    {lang === "ar" 
                      ? "تواصل معنا الآن وسيقوم مهندسونا بزيارة الموقع وتقديم دراسة متكاملة مجاناً." 
                      : "Get in touch today and our engineers will visit your site and provide a free study."}
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="px-6 py-3 bg-brand-yellow hover:bg-brand-yellowDark text-brand-slate font-bold text-sm rounded-full shadow-gold no-underline transition-all duration-300 border-none cursor-pointer flex-shrink-0"
                >
                  {lang === "ar" ? "طلب تسعيرة الآن" : "Request Quote Now"}
                </Link>
              </div>
            </div>

            {/* Right Side Bar */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 flex flex-col gap-6">
              {/* Contained image container with padding */}
              <div className="bg-white border border-gray-100 rounded-lg p-4 shadow-premium">
                <div className="relative w-full h-64 rounded bg-gray-100 overflow-hidden">
                  <Image
                    src={getServiceImage(id)}
                    alt={t(`services.items.${id}.title`)}
                    fill
                    className="object-cover rounded"
                    priority
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white border border-gray-100 p-6 rounded-lg text-center shadow-premium">
                  <strong className="block text-2xl font-black text-brand-yellowDark mb-1">100%</strong>
                  <span className="text-[11px] font-bold text-brand-muted uppercase">
                    {lang === "ar" ? "جودة مضمونة" : "Guaranteed Quality"}
                  </span>
                </div>
                <div className="bg-white border border-gray-100 p-6 rounded-lg text-center shadow-premium">
                  <strong className="block text-2xl font-black text-brand-yellowDark mb-1">24/7</strong>
                  <span className="text-[11px] font-bold text-brand-muted uppercase">
                    {lang === "ar" ? "دعم فني مستمر" : "Continuous Support"}
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
