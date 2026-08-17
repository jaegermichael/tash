export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  features: string[];
  deliverables: string[];
  idealFor: string;
  tag: string;
}

export interface MaterialCategory {
  id: string;
  name: string;
  description: string;
  image: string;
  popularItems: string[];
  unitTypes: string;
  leadTime: string;
  isPopular?: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Industrial' | 'Civil Works';
  location: string;
  year: string;
  image: string;
  description: string;
  scope: string[];
  materialsSupplied: string[];
  stats?: { label: string; value: string }[];
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  iconName: string;
  highlightTag?: string;
  isPromotional?: boolean;
  promoNotice?: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  role: string;
  projectType: string;
  location: string;
  content: string;
  rating: number;
  date: string;
  verified: boolean;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  projectType: string;
  location: string;
  servicesNeeded: string[];
  materialsNeeded: string[];
  estimatedBudget: string;
  timeline: string;
  message: string;
  hasBOQ: boolean;
}
