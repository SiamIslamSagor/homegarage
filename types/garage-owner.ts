export interface GarageOwnerFormData {
  name: string;
  number: string;
  address: string;
  ownerNIDImageUrl?: string;
  garageName: string;
  garageAddress: string;
  garageTradeLicenseUrl?: string;
  garageType: string;
  trifoldImageUrl?: string;
  ownerNIDImage?: FileList;
  garageTradeLicenseFile?: FileList;
  trifoldImage?: FileList;
}

export interface PartsShopOwnerFormData {
  name: string;
  number: string;
  address: string;
  ownerNIDImageUrl?: string;
  shopName: string;
  shopAddress: string;
  shopTradeLicenseUrl?: string;
  shopType: string;
  trifoldImageUrl?: string;
  ownerNIDImage?: FileList;
  shopTradeLicenseFile?: FileList;
  trifoldImage?: FileList;
}

export interface MechanicFormData {
  name: string;
  number: string;
  address: string;
  ownerNIDImageUrl?: string;
  specialization: string;
  experience: string;
  certificateUrl?: string;
  mechanicType: string;
  trifoldImageUrl?: string;
  ownerNIDImage?: FileList;
  certificateFile?: FileList;
  trifoldImage?: FileList;
}

export interface ImageUploadState {
  preview: string;
  isUploading: boolean;
}

export interface FormFieldProps {
  label: string;
  id: string;
  type: string;
  placeholder: string;
  error?: string;
  register: any;
  required?: boolean;
}
