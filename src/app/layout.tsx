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
    icon: "/logo_symbol.png",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                if (typeof window === 'undefined' || !window.MutationObserver) return;
                const removeAttributes = (node) => {
                  if (node.nodeType === 1) {
                    if (node.hasAttribute('bis_skin_checked')) {
                      node.removeAttribute('bis_skin_checked');
                    }
                    node.querySelectorAll('[bis_skin_checked]').forEach((el) => {
                      el.removeAttribute('bis_skin_checked');
                    });
                  }
                };
                const observer = new MutationObserver((mutations) => {
                  mutations.forEach((mutation) => {
                    if (mutation.type === 'attributes' && mutation.attributeName === 'bis_skin_checked') {
                      mutation.target.removeAttribute('bis_skin_checked');
                    }
                    if (mutation.type === 'childList') {
                      mutation.addedNodes.forEach(removeAttributes);
                    }
                  });
                });
                observer.observe(document.documentElement, {
                  childList: true,
                  subtree: true,
                  attributes: true,
                  attributeFilter: ['bis_skin_checked']
                });
              })();
            `,
          }}
        />
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

            window.gtag_report_conversion = function(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-18153816282/EiBfCKiWuMMcENqBtdBD',
                  'value': 1.0,
                  'currency': 'SAR',
                  'event_callback': callback
              });
              return false;
            };

            window.gtag_report_phone_conversion = function(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-18153816282/rTjECKWp0sMcENqBtdBD',
                  'value': 1.0,
                  'currency': 'SAR',
                  'event_callback': callback
              });
              return false;
            };
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
