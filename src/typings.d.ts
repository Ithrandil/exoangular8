declare module 'googlemaps';

/**
 * Terms declaration
 */
declare interface Terms {
  id?: string;
  text?: string;
  title?: string;
  version?: string;
  entityName?: string;
  type?: string;
  status?: string;
  shouldNotifyUser?: boolean;
  creationDate?: string;
  modificationDate?: string;
  publicationDate?: string;
}

/**
 * Freeplace declaration
 */
declare interface Freeplace {
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

/**
 * PARK DECLARATION
 */
interface Polygon {
  x?: number;
  y?: number;
}

declare interface Park {
  address?: string;
  capacityMax?: number;
  description?: string | null;
  granted_points?: { occasional?: []; recurring?: [] };
  id_park?: string;
  id_park_source?: string;
  id_park_type?: number;
  indoor?: number;
  latitude?: number;
  longitude?: number;
  max_height?: number;
  name?: string;
  nb_charging_point?: number;
  nb_pmr?: number;
  origin?: 'PM' | 'ZP';
  parkfares?: { occasional?: []; recurring?: [] };
  polygon?: Polygon[];
  segments?: [
    {
      charging_point?: number;
      id_park?: string;
      id_park_source?: string;
      id_segment?: string;
      name?: string;
      pmr?: number;
      polygon?: Polygon[];
      status?: 'active';
      unavailabilities?: { occasional?: []; recurring?: [] };
    }
  ];
  status?: string;
  unavailabilities?: { occasional?: []; recurring?: [] };
}

declare interface User {
  email?: string;
  password?: string;
  jwt?: string;
}
