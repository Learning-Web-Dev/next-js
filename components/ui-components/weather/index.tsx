import React, { useContext } from "react";
import Image from "next/image";
import S from "./style";
import { WeatherContext } from "@/components/provider";
import { TwelveHourWeatherType } from "@/utils/types/forcast";
import { timeStampToTime } from "@/utils/helpers";
import {
  FeelsLikeIcon,
  HumidityIcon,
  SunRiseIcon,
  SunSet,
} from "@/assests/icons";

const WeatherComponent = () => {
  //state Values
  const {
    currentWeather,
    twelveHoursWeather,
    fiveDaysWeather,
    currentWindData,
  } = useContext(WeatherContext);

  const humidity = currentWindData?.main?.humidity;
  const feelsLike = currentWindData?.main?.feels_like;
  const sunRise = timeStampToTime(currentWindData?.sys?.sunrise);
  const sunSet = timeStampToTime(currentWindData?.sys?.sunset);

  return (
    <div className={S.WeatherContainer}>
      <div className={S.DailyWeatherContainer}>
        {/* Current Weather */}
        <div className={S.CurrentWeatherContainer}>
          <div className={S.WeatherReportContainer}>
            <div>
              <h1 className={S.LocationText}>
                {currentWeather?.name},{currentWeather?.parentCityName}
              </h1>
              <p className={S.WeatherStatus}>{currentWeather?.status}</p>
            </div>
            <div>
              <h1 className={S.WeatherDegree}>
                {currentWeather?.temprature?.value} °C
              </h1>
            </div>
          </div>
          <Image
            src={currentWeather?.icon ?? ""}
            alt="weather-status"
            width={150}
            height={150}
          />
        </div>
        {/* Current Weather */}

        {/* Today's Weather */}
        <div className={S.TodaysWeatherContainer}>
          {twelveHoursWeather.map((weather: TwelveHourWeatherType) => (
            <div
              key={weather.date || Math.random()}
              className={S.TodaysWeatherDetail}
            >
              <p className="text-[0.5rem] md:text-lg text-gray-200">
                {weather.date}
              </p>
              <Image
                src={weather.icon ?? ""}
                alt="weather-status"
                width={75}
                height={75}
              />
              <p className="text-[8px] md:text-xs">
                {weather.temprature?.value}°C
              </p>
            </div>
          ))}
        </div>
        {/* Today's Weather */}

        {/* AirConditioner Details */}
        <div className={S.AirConditionerContainer}>
          <h1 className="text-white text-lg font-bold">Weather Condition</h1>
          <div className={S.AirConditionDetailsContainer}>
            <div className={S.AirConditionDetail + " md:justify-self-start"}>
              <SunRiseIcon />
              <p>Sun Rise : {sunRise}</p>
            </div>
            <div className={S.AirConditionDetail + " md:justify-self-end"}>
              <SunSet />
              <p>Sun Set : {sunSet}</p>
            </div>
            <div className={S.AirConditionDetail + " md:justify-self-start"}>
              <HumidityIcon />
              <p>Feels Like : {feelsLike}</p>
            </div>
            <div className={S.AirConditionDetail + " md:justify-self-end"}>
              <FeelsLikeIcon />
              <p>Humidity : {humidity}</p>
            </div>
          </div>
        </div>
        {/* AirConditioner Details */}
      </div>
      <div className={S.WeeklyWeatherContainer}>
        <h1 className={S.FiveDaysWeatherTitle}>5 days weather</h1>
        <div className={S.FiveDaysWeatherContainer}>
          {fiveDaysWeather.map((item: TwelveHourWeatherType) => {
            const date = item.date.split(" ");
            const weather = item.status.split(" ");
            const updatedDate = date[0] + " " + date[1];
            const updatedWeather = weather[0] + " " + (weather[1] ?? "");
            return (
              <>
                <div className={S.FiveDaysWeatherCard} key={Math.random()}>
                  <p className="text-[0.5rem] md:text-xs whitespace-nowrap">
                    {updatedDate}
                  </p>
                  <Image width={40} height={40} src={item.icon} alt="icon" />
                  <p className="text-[0.5rem] md:text-xs whitespace-nowrap text-gray-400">
                    {updatedWeather}
                  </p>
                  <p className="text-[0.5rem] md:text-xs text-blue-400">
                    {item.temprature.value}°C
                  </p>
                </div>
                <hr className={S.HorizontalDivider} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WeatherComponent;
