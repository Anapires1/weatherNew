export type ExtrasProps = {
  meanCn0: number;
  maxCn0: number;
  satellites: number;
};

export type CoordsProps = {
  speed: number;
  heading: number;
  accuracy: number;
  altitude: number;
  longitude: number;
  latitude: number;
};

export type CurrentLocationProps = {
  mocked: boolean;
  extras: ExtrasProps;
  timestamp: number;
  coords: CoordsProps;
};
