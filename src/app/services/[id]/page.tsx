"use client";

import React, { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";
import { Locale } from "@/types";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ServiceDetail({ params }: PageProps) {
  const { lang, t, dir } = useLanguage();
  const unwrappedParams = use(params);
  const id = unwrappedParams.id;

  const validServices = [
    "vrf",
    "central",
    "concealed",
    "chiller",
    "crac",
    "split",
    "cassette",
    "maintenance",
    "ventilation",
    "design",
    "duct",
    "packaged"
  ];

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
      case "design":
        return "/images/hvac_design.png";
      case "duct":
        return "/images/duct_fabrication.png";
      case "packaged":
        return "/images/packaged_unit.png";
      default:
        return "/images/hero_hvac.png";
    }
  };

  const getSpecs = (key: string): string[] => {
    const specsDict: Record<string, { ar: string[]; en: string[] }> = {
      vrf: {
        ar: [
          "توفير طاقة استثنائي يصل إلى 30% بنظام تدفق الفريون المتغير الذكي",
          "تحكم مستقل مرن لكل غرفة أو زون مع ربطه بنظام إدارة المباني (BMS)",
          "شريك معتمد لتركيب أجهزة سامسونج (Samsung)، دايكين (Daikin)، وإل جي (LG)",
          "توافق كامل مع كود البناء السعودي وحسابات الفقد الحراري المعتمدة"
        ],
        en: [
          "Exceptional energy savings up to 30% with smart Variable Refrigerant Flow technology",
          "Flexible independent control for each room/zone with Building Management System (BMS) linkage",
          "Certified contractor for Samsung, Daikin, LG, and Gree VRF installations",
          "Full compliance with the Saudi Building Code (SBC) and approved thermal loss studies"
        ]
      },
      central: {
        ar: [
          "تصميم هندسي متكامل لمسارات مجاري الهواء (الدكت) وصناديق التوزيع",
          "استخدام صاج مجلفن عالي السماكة مقاوم للصدأ مطابق للمواصفات العالمية",
          "توريد مكيفات كاريير (Carrier)، ترين (Trane)، ويورك (York) المركزية المعتمدة",
          "عوازل حرارية وصوتية ممتازة لمنع تكثف الرطوبة والاهتزازات والضجيج"
        ],
        en: [
          "Integrated duct layout engineering, transition calculations, and plenum boxes",
          "High-gauge galvanized steel sheet metal compliant with international standards",
          "Authorized supplier of certified Carrier, Trane, and York central package units",
          "Premium acoustic and thermal insulation preventing condensation, vibration, and noise"
        ]
      },
      concealed: {
        ar: [
          "مظهر عصري مخفي تماماً داخل الجبس والأسقف المستعارة بمظهر ديكوري راقٍ",
          "مخارج هواء (جريلات) خطية أنيقة توفر تدفقاً متوازناً وهادئاً للغاية",
          "متوافق مع مكيفات كاريير (Carrier)، جري (Gree)، وسامسونج (Samsung) المخفية",
          "حسابات CFM دقيقة وتمديدات نحاسية معزولة بأعلى درجات الكفاءة الفنية"
        ],
        en: [
          "Sleek concealed installation inside false ceilings with luxury interior profiles",
          "Linear slot diffusers and return air grills providing balanced, whisper-quiet drafts",
          "Fully compatible with Carrier, Gree, LG, and Samsung ducted split units",
          "Accurate CFM calculations and premium insulated copper refrigeration runs"
        ]
      },
      chiller: {
        ar: [
          "قدرة تبريد فائقة للمشاريع الصناعية والأبراج السكنية والمستشفيات بالمنطقة الوسطى",
          "توريد وصيانة مبردات المياه (Chillers) الهوائية والمائية لضمان كفاءة تشغيلية مستدامة",
          "عمرة ضواغط شيلر كاريير (Carrier)، يورك (York)، وترين (Trane) بأيدي مهندسين مختصين",
          "صيانة متكاملة لأبراج التبريد ومبادلات الحرارة والمعالجة الكيميائية للمياه"
        ],
        en: [
          "Super cooling capacity for massive industrial sites, residential towers, and hospitals",
          "Supply & maintenance of water-cooled and air-cooled chillers for sustainable efficiency",
          "Certified mechanical compressor overhauls for Carrier, York, Trane, and Daikin chillers",
          "Turnkey servicing of cooling towers, heat exchangers, and chemical water treatments"
        ]
      },
      crac: {
        ar: [
          "تكييف الدقة (Precision AC) للتحكم الصارم بالحرارة والرطوبة لغرف السيرفرات",
          "تصميم مخصص للتشغيل الشاق والمستمر على مدار الساعة 24/7 دون توقف",
          "شريك توريد وتركيب أجهزة تكييف غرف البيانات من هيتاشي (Hitachi) وسامسونج",
          "حماية الأجهزة الحساسة من الغبار والكهرباء الساكنة لضمان استمرارية بنسبة 99.99%"
        ],
        en: [
          "Precision Air Conditioning (CRAC) units controlling temperature and relative humidity",
          "Custom heavy-duty design for continuous 24/7 operations under extreme thermal loads",
          "Supply and commissioning partner for Hitachi, Samsung, and leading server cooling units",
          "Protects sensitive hardware from static and dust, securing 99.99% server uptime"
        ]
      },
      split: {
        ar: [
          "مكيفات سبليت جدارية بأسعار اقتصادية وأداء ممتاز للمساحات الفردية والمكاتب",
          "توريد وتركيب سريع لماركات جري (Gree)، كاريير (Carrier)، وسامسونج (Samsung)",
          "تمديد وتأسيس مواسير النحاس الأمريكي الأصلي المعزول لمنع تسريب الغاز",
          "توافق كامل مع مواصفات الهيئة السعودية للمواصفات والمقاييس (SASO)"
        ],
        en: [
          "Economical wall-mounted split units with optimal performance for rooms and offices",
          "Fast delivery and mounting of Gree, Carrier, Samsung, and LG split systems",
          "Installation of genuine insulated American copper lines to prevent refrigerant leaks",
          "100% compliance with Saudi Standards, Metrology and Quality Organization (SASO) ratings"
        ]
      },
      cassette: {
        ar: [
          "توزيع هواء رباعي الاتجاهات لتغطية متوازنة وشاملة للمساحات التجارية والمطاعم",
          "تصميم سقف مسطح لا يشغل أي مساحات جدارية ويسهل دمجه بالجبس",
          "تركيب احترافي لوحدات كاريير (Carrier)، جري (Gree)، وسامسونج (Samsung)",
          "تأسيس شبكات تصريف المياه بميول دقيقة مع مضخات لمنع أي تسريب"
        ],
        en: [
          "Uniform 4-way air distribution for complete coverage in retail halls and dining zones",
          "Ceiling-mounted layout saving wall spaces, flush integrated with false ceilings",
          "Professional mounting of high-efficiency Carrier, Gree, and Samsung cassette units",
          "Accurate drainage layout planning with built-in mini-pumps to avoid leakage"
        ]
      },
      maintenance: {
        ar: [
          "عقود صيانة وقائية سنوية (PPM) لجميع المنشآت لضمان كفاءة التبريد وإطالة عمر الأجهزة",
          "فريق طوارئ هندسي لإصلاح الأعطال الطارئة على مدار الساعة 24/7 بالرياض",
          "فحص وضبط شحن الفريون، غسيل المكثفات الكيميائي، وتطهير فلاتر الهواء ومسارات التصريف",
          "استخدام قطع غيار أصلية ومضمونة لوحدات كاريير (Carrier)، ترين (Trane)، ويورك (York)"
        ],
        en: [
          "Structured Planned Preventative Maintenance (PPM) contracts protecting your cooling assets",
          "Emergency mechanical response teams responding to sudden failures 24/7 in Riyadh",
          "Refrigerant leak testing, chemical coil washing, filter cleaning, and drain purging",
          "Exclusive usage of genuine OEM replacement parts for Carrier, Trane, York, and Samsung"
        ]
      },
      ventilation: {
        ar: [
          "تصميم شبكات تهوية وسحب الهواء للمطابخ التجارية والمطاعم والمستودعات والمواقف",
          "تجديد الهواء المستمر وحقن هواء نقي بديل (Make-up Air) لضمان ضغط هواء متوازن",
          "تركيب مراوح طرد ومخمدات حريق معزولة (Fire Dampers) معتمدة هندسياً",
          "التزام كامل باشتراطات الدفاع المدني السعودي والبلديات بالمنطقة الوسطى"
        ],
        en: [
          "Custom exhaust and fresh-air injection layouts for commercial kitchens and factories",
          "Continuous air changes (ACH) and make-up air setups to achieve balanced room pressures",
          "Installation of certified commercial exhaust fans, fire dampers, and fresh air ducts",
          "Full compliance with Saudi Civil Defense and municipality safety regulations"
        ]
      },
      design: {
        ar: [
          "دراسة هندسية متكاملة وحساب الأحمال الحرارية الدقيقة باستخدام برامج معتمدة مثل HAP",
          "إعداد المخططات التنفيذية (Shop Drawings) ومخططات تنسيق مسارات الخدمات (Coordination Drawings)",
          "تصميم وتوزيع مخارج الهواء وجريلات التوزيع لضمان انتشار هادئ وانسيابي وخالٍ من التيارات",
          "مخططات معتمدة متوافقة مع متطلبات كود البناء السعودي والهيئة السعودية للمهندسين"
        ],
        en: [
          "Comprehensive engineering study and precise load planning using certified HAP software",
          "Drafting mechanical Shop Drawings and Coordination prints to prevent utility clashes",
          "Acoustic and airflow design of diffusers and linear grills for quiet, draft-free distribution",
          "Certified blueprints complying fully with Saudi Building Code (SBC) requirements"
        ]
      },
      duct: {
        ar: [
          "تصنيع مجاري الهواء (الدكت) في ورش مؤسستنا بالرياض باستخدام أحدث الماكينات والصاج المجلفن",
          "عزل حراري خارجي وصوتي داخلي فائق الكثافة (Fiberglass / Rockwool) لمكافحة تكثف المياه",
          "تثبيت وتدعيم مجاري الهواء بدعامات قوية وحشوات مانعة للاهتزاز والضجيج",
          "تصنيع وتشكيل الصاج يلتزم التزاماً كاملاً بمعايير ومواصفات SMACNA العالمية"
        ],
        en: [
          "Duct fabrication in our Riyadh workshop using high-gauge galvanized steel sheet metal",
          "High-density fiberglass or rockwool thermal insulation and vapor barriers to stop condensation",
          "Duct run supports using heavy-duty hangers and anti-vibration gaskets to isolate noise",
          "Fabrication and joint methods conforming strictly to SMACNA international guidelines"
        ]
      },
      packaged: {
        ar: [
          "توريد وتركيب مكيفات الباكج (Packaged Units) للصالات المفتوحة والمعارض والمساجد والفلل الكبيرة",
          "بناء وتجهيز القواعد الخرسانية المتينة مع مخمدات الاهتزاز الفعالة على أسطح المباني",
          "توصيل وعزل شبكات دكت الإمداد والراجع (Supply & Return) بمواد مقاومة لعوامل الطقس الخارجية",
          "التعامل مع كبرى الماركات العالمية الرائدة مثل كاريير (Carrier)، ترين (Trane)، ويورك (York)"
        ],
        en: [
          "Supply and installation of rooftop packaged units for retail halls, mosques, and villas",
          "Rooftop concrete vibration pad construction to isolate mechanical vibration and structural noise",
          "Supply & Return external weatherproof clad insulation wrapping for rooftop duct runs",
          "Turnkey installations featuring premium units from Carrier, Trane, York, and Samsung"
        ]
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

              {/* SEO Extended Content Block */}
              {t(`services.items.${id}.extendedContent`) && (
                <div className="flex flex-col gap-8 mt-4">
                  {t(`services.items.${id}.extendedContent`).map((item: any, idx: number) => (
                    <div key={idx} className="bg-white border border-gray-100 rounded-lg p-8 shadow-premium">
                      <h2 className="text-xl md:text-2xl font-black text-brand-slate mb-4">
                        {item.heading}
                      </h2>
                      <p className="text-sm md:text-base text-brand-muted leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              )}
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
                    sizes="(max-width: 1024px) 100vw, 33vw"
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
