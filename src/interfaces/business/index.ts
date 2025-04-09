export interface BusinessType {
  title: string;
  description?: string;
  images?: string[];
  video?: string;
  contact?: Contact[];
  work_place: WorkPlace;
}

export interface Contact {
  email: string;
  phone: string;
}

export interface WorkPlace {
  coordinate: string;
  latitude: string;
  address?: Address;
}

export interface Address {
  national: string;
  city: string;
  district: string;
  village: string;
}
