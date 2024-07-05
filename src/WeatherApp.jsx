import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
  let [weatherDetail, setWeatherDetail] = useState({
    city: "Delhi",
    feelsLike: 30.05,
    temp: 26.15,
    tempMax: 28.08,
    tempMin: 24.98,
    humidity: 85,
    weather: "Cloudy Broken",
  });

  let updateInfo = (newInfo) => {
    setWeatherDetail(newInfo);
  };
  return (
    <>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox Info={weatherDetail} />
    </>
  );
}
