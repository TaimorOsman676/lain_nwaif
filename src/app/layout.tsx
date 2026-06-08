import React, { ReactNode } from "react";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileCTAOverlay from "@/components/MobileCTAOverlay";
import { Metadata } from "next";
import Script from "next/script";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-cairo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "مؤسسة لين نوايف العقيدي للتكييف | Lain Nuawaf Al-Aqeedi Est.",
  description: "الخيار الأول للتكييف والأعمال الإلكتروميكانيكية بالرياض. تصميم، توريد وتصنيع مجاري الهواء (الدكت) وأنظمة VRF والشيلر وفق رؤية 2030.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="bg-brand-bg text-brand-slate min-h-screen flex flex-col transition-all duration-300 pb-20 md:pb-0" suppressHydrationWarning>
        {/* Google Tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18153816282"
          strategy="afterInteractive"
        />
        <Script id="google-tag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18153816282');
          `}
        </Script>

        <LanguageProvider>
          {children}
          <FloatingWhatsApp />
          <MobileCTAOverlay />
        </LanguageProvider>
      </body>
    </html>
  );
}
