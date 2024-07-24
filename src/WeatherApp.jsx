import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Siliguri",
    feelsLike: 38.7,
    humidity: 74,
    temp: 31.7,
    tempMax: 31.7,
    tempMin: 31.7,
    weather: "overcast clouds",
  });
  let updateInfo = (newResult)=>{
    setWeatherInfo(newResult);
  };
  return (
    <div>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </div>
  );
}
