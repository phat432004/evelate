import { LucideIcon } from 'lucide-react';

export interface FeatureTab {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface StatCardProps {
  percentage?: string;
  icon?: LucideIcon;
  title: string;
  description: string;
  bgColor?: string;
  iconColor?: string;
}

export interface ExpertCategory {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export interface Testimonial {
  text: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}
