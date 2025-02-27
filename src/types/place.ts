export interface Image {
  id: number;
  image: string;
  created: string;
  place: number;
  user: number;
}

export interface Place {
  id: number;
  name: string;
  phone: string;
  phone2?: string | null;
  image?: string | null;
  images?: Image[] | null;
  latitude: number;
  longitude: number;
  place_type: string[];
  work_start_time?: string | null;
  work_end_time?: string | null;
  work_days?: WorkDay[] | null;
  website?: string | null;
  instagram?: string | null;
  telegram?: string | null;
  telegram_bot?: string | null;
  photo_url?: string | null;
  facebook?: string | null;
  twitter?: string | null;
  youtube?: string | null;
  info?: string | null;
  rating?: number | null;
  full_address: string;
  timezone: string;
  user_name?: string;
  user_phone?: string;
  status: boolean;
  created_at?: string;
  about?: string[] | null;
  district?: string | null;
  city?: string;
  country?: string;
  working_hours?: string | null;
  type: string;
}

export type WorkDay = {
  dayOfWeek: number; // 1 for Monday, 2 for Tuesday, ..., 7 for Sunday
  startTime: string;
  endTime: string;
};

export interface PlaceComments {
  length: number;
  id: number;
  place: number;
  user: User;
  star: number | null;
  text: string | null;
  created_time: string;
  results: any[];
}

interface User {
  id: number;
  full_name: string;
  username: string;
  telegram_id: string;
  lang: string;
  profile_photo_url: string | null;
}

interface Media {
  id: number | null;
  media: string | null;
  product: number | null;
}

export interface PlacePromotions {
  id: number | null;
  percent: number | null;
  media: Media[] | null;
  name: string | null;
  price: number | null;
  discount_price: number | null;
  start_date: string | null;
  end_date: string | null;
  created_at: string | null;
  description: string | null;
  place: number | null;
  category: number | null;
}
