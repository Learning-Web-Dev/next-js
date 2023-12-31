export type ForecastPositionType = {
  latitude: number;
  longitude: number;
};

export type TempratureValueType = {
  value: string;
  unit: string;
};

export type OneDayTempratureValueType = {
  min: TempratureValueType;
  max: TempratureValueType;
};

export type CurrentTempratureType = {
  status: string;
  temprature: TempratureValueType;
  icon: string;
};

export type InitialForcastDetail = CurrentTempratureType & {
  name: string;
  local: string;
  parentCityName?: string;
};

export interface TwelveHourWeatherType extends CurrentTempratureType {
  date: string;
}

export type GetLocationWeatherDataType = {
  data: GetLocationReturnType | undefined | null;
  windData: object;
};

export type GetLocationWindDataType = string;

export interface GetLocationReturnType {
  currentWeather: InitialForcastDetail;
  twelveHoursWeather: TwelveHourWeatherType[];
  fiveDaysWeather: TwelveHourWeatherType[];
}
