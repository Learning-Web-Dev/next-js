import { TwelveHourWeatherType } from "../types/forcast";

export const USER_URL = "https://jsonplaceholder.typicode.com/users";

export const ACCUWEATHER_KEY = process.env.NEXT_PUBLIC_ACCUWEATHER_API_KEY;
export const ONEWEATHER_KEY = process.env.NEXT_PUBLIC_ONEWEATHER_API_KEY;
export const ACCUWEATHER_URL = "https://dataservice.accuweather.com";
export const ONEWEATHER_URL = "https://api.openweathermap.org";
export const ACCUWEATHER_ICON_URL = (key: number) =>
  `https://apidev.accuweather.com/developers/Media/Default/WeatherIcons/${
    key < 10 ? "0" + key : key
  }-s.png`;

export const SampleTwelveHoursData: TwelveHourWeatherType[] = [
  //Date should be formated in getFormatedTime()
  {
    date: new Date() + "",
    status: "Cloudy",
    temprature: { value: "33", unit: "C" },
    icon: "https://www.citypng.com/public/uploads/preview/hd-orange-storage-host-clouds-icon-png-31631696263tccmsna0eg.png?v=2023063000",
  },
  {
    date: new Date() + "",
    status: "Cloudy",
    temprature: { value: "33", unit: "C" },
    icon: "https://www.citypng.com/public/uploads/preview/hd-orange-storage-host-clouds-icon-png-31631696263tccmsna0eg.png?v=2023063000",
  },
  {
    date: new Date() + "",
    status: "Cloudy",
    temprature: { value: "33", unit: "C" },
    icon: "https://www.citypng.com/public/uploads/preview/hd-orange-storage-host-clouds-icon-png-31631696263tccmsna0eg.png?v=2023063000",
  },
  {
    date: new Date() + "",
    status: "Cloudy",
    temprature: { value: "33", unit: "C" },
    icon: "https://www.citypng.com/public/uploads/preview/hd-orange-storage-host-clouds-icon-png-31631696263tccmsna0eg.png?v=2023063000",
  },
  {
    date: new Date() + "",
    status: "Cloudy",
    temprature: { value: "33", unit: "C" },
    icon: "https://www.citypng.com/public/uploads/preview/hd-orange-storage-host-clouds-icon-png-31631696263tccmsna0eg.png?v=2023063000",
  },
  {
    date: new Date() + "",
    status: "Cloudy",
    temprature: { value: "33", unit: "C" },
    icon: "https://www.citypng.com/public/uploads/preview/hd-orange-storage-host-clouds-icon-png-31631696263tccmsna0eg.png?v=2023063000",
  },
  {
    date: new Date() + "",
    status: "Cloudy",
    temprature: { value: "33", unit: "C" },
    icon: "https://www.citypng.com/public/uploads/preview/hd-orange-storage-host-clouds-icon-png-31631696263tccmsna0eg.png?v=2023063000",
  },
  {
    date: new Date() + "",
    status: "Cloudy",
    temprature: { value: "33", unit: "C" },
    icon: "https://www.citypng.com/public/uploads/preview/hd-orange-storage-host-clouds-icon-png-31631696263tccmsna0eg.png?v=2023063000",
  },
  {
    date: new Date() + "",
    status: "Cloudy",
    temprature: { value: "33", unit: "C" },
    icon: "https://www.citypng.com/public/uploads/preview/hd-orange-storage-host-clouds-icon-png-31631696263tccmsna0eg.png?v=2023063000",
  },
  {
    date: new Date() + "",
    status: "Cloudy",
    temprature: { value: "33", unit: "C" },
    icon: "https://www.citypng.com/public/uploads/preview/hd-orange-storage-host-clouds-icon-png-31631696263tccmsna0eg.png?v=2023063000",
  },
  {
    date: new Date() + "",
    status: "Cloudy",
    temprature: { value: "33", unit: "C" },
    icon: "https://www.citypng.com/public/uploads/preview/hd-orange-storage-host-clouds-icon-png-31631696263tccmsna0eg.png?v=2023063000",
  },
  {
    date: new Date() + "",
    status: "Cloudy",
    temprature: { value: "33", unit: "C" },
    icon: "https://www.citypng.com/public/uploads/preview/hd-orange-storage-host-clouds-icon-png-31631696263tccmsna0eg.png?v=2023063000",
  },
  {
    date: new Date() + "",
    status: "Cloudy",
    temprature: { value: "33", unit: "C" },
    icon: "https://www.citypng.com/public/uploads/preview/hd-orange-storage-host-clouds-icon-png-31631696263tccmsna0eg.png?v=2023063000",
  },
];
