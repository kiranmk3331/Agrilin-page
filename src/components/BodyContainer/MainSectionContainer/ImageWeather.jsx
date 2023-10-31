import React from "react";
import Picture from "./assets/Asset 2@4x 1.png";
import WeatherIcon from "./assets/fluent_weather-hail-day-48-regular.svg";

const ImageWeather = () => {
  return (
    <div className="grid grid-cols-3">
      <img src={Picture} alt="" className="col-span-2 rounded-md" />

      <div className="flex flex-col col-span-1 bg-white  shadow p-4 relative right-24 justify-center rounded-md">
        <div className="flex items-center gap-4">
          <img src={WeatherIcon} alt="" />
          <h1 className="text-4xl font-medium">29</h1>
          <p className="text-xs font-medium ">°C I°F</p>
        </div>
        <div className="flex justify-evenly items-center">
          <div>
            <p className="font-medium">Partly cloudy</p>
            <p className="text-[#979797] text-xs">
              Kochi, Kerala Wednesday, 4:00 pm
            </p>
          </div>
          <div>
            <p>
              <span className="text-xs">Precipitation: </span>
              <span className="text-xs text-[#86BF02]">4%</span>
            </p>
            <p>
              <span className="text-xs"> Humidity: </span>
              <span className="text-xs text-[#86BF02]">4%</span>
            </p>
            <p>
              <span className="text-xs">Precipitation: </span>
              <span className="text-xs text-[#86BF02]">4%</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageWeather;
