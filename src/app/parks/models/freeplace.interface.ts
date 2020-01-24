export interface Freeplace {
  availability?: number;
  id_park?: string;
  id_park_source?: string;
  id_park_type?: number;
  is_updated?: number;
  nb_charging_point?: number;
  nb_pmr_available?: number;
  origin?: 'PM' | 'ZP';
  segments?: string[];
}
