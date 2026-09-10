export type Language = 'ar' | 'en';

export interface Partner {
  id: string;
  nameAr: string;
  nameEn: string;
  roleAr: string;
  roleEn: string;
  type: 'government' | 'finance' | 'technology' | 'industrial' | 'accelerator';
  logoText: string;
  logoBg: string;
  iconName?: string;
  descriptionAr: string;
  descriptionEn: string;
}

export interface TimelineEvent {
  year: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  highlight?: boolean;
  badgeAr?: string;
  badgeEn?: string;
}

export interface ServiceItem {
  id: string;
  icon: string;
  titleAr: string;
  titleEn: string;
  summaryAr: string;
  summaryEn: string;
  detailsAr: string[];
  detailsEn: string[];
  badgeAr?: string;
  badgeEn?: string;
  image?: string;
}

export interface ProductItem {
  id: string;
  category: 'pp' | 'hdpe' | 'tpe' | 'biomass' | 'glycerin';
  titleAr: string;
  titleEn: string;
  gradeAr: string;
  gradeEn: string;
  descAr: string;
  descEn: string;
  specsAr: string[];
  specsEn: string[];
  colorAr: string;
  colorEn: string;
  colorHex: string;
  applicationsAr: string[];
  applicationsEn: string[];
  capacityAr: string;
  capacityEn: string;
  image?: string;
}

export interface JobPosition {
  id: string;
  titleAr: string;
  titleEn: string;
  deptAr: string;
  deptEn: string;
  locationAr: string;
  locationEn: string;
  typeAr: string;
  typeEn: string;
  descAr: string;
  descEn: string;
  requirementsAr: string[];
  requirementsEn: string[];
}
