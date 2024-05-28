export interface Place {
  id: number;
  name: string;
  phone: string;
  phone2: string;
  image: string;
  latitude: number;
  longitude: number;
  place_type: string[];
  work_start_time: string | null;
  work_end_time: string | null;
  work_days: WorkDay[];
  website: string;
  instagram: string;
  telegram: string;
  telegram_bot: string;
  facebook: string;
  twitter: string;
  youtube: string;
  info: string | null;
  full_address: string;
  timezone: string;
  user_name: string;
  user_phone: string;
  status: boolean;
  created_at: string;
  about: string[];
}

type WorkDay = {
  dayOfWeek: number; // 1 for Monday, 2 for Tuesday, ..., 7 for Sunday
  startTime: string;
  endTime: string;
};
