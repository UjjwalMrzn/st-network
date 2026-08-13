export interface Partner {
  id: string;
  name: string;
  isPlaceholder?: boolean;
  logo?: string;
}

export interface ProductService {
  id: string;
  title: string;
  description: string;
  icon: string;
  badge?: string;
}

export interface LocationPin {
  name: string;
  code: string;
  coordinates: [number, number]; // [longitude, latitude]
}