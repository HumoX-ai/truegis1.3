export interface Place {
  id: number;
  name: string;
  phone: string;
  phone2?: string | null;
  image?: string | null;
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
