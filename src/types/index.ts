export interface City {
  name: string;
  latitude: number;
  longitude: number;
  "long-name": string;
  "short-name": string;
}

export type Cities = City[];
