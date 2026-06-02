export type Locale = "ar" | "en";
export type TextDirection = "rtl" | "ltr";

export interface NavigationItem {
  name: string;
  path: string;
}

export interface MetricItem {
  number: string;
  label: string;
}

export interface GuaranteeItem {
  title: string;
  desc: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  category: "commercial" | "residential" | "support";
  shortDesc: string;
  longDesc: string;
  specs: string[];
  imagePath: string;
  imagePrompt: string;
}

export interface ProjectItem {
  title: string;
  category: "commercial" | "residential" | "industrial";
  desc: string;
  location: string;
  specsLabel: string;
}

export interface TestimonialItem {
  name: string;
  date: string;
  comment: string;
  source: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ContactPayload {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  category: string;
  location: string;
}
