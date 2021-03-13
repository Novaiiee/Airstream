import React, { FC } from "react";
import { FaTemperatureLow } from "react-icons/fa";
import { Forecast } from "../../types";
import { MdDateRange } from "react-icons/md";
import { BiCloudRain } from "react-icons/bi";
import { WiRaindrop } from "react-icons/wi";

interface Props {
	forecast: Forecast;
}

export const ForecastBar: FC<Props> = ({ forecast }) => {
	return (
		<div className="flex items-center space-x-16 text-gray-400 text-2xl p-5  bg-white rounded-md">
      <h1 className="flex items-center space-x-2">
        <MdDateRange />
				<span className="text-gray-900">Date:</span>
				<span>{forecast.date}</span>
			</h1>
			<h1 className="flex items-center space-x-2">
				<FaTemperatureLow />
				<span className="text-gray-900">Temperature:</span>
				<span>{forecast.day.avgtemp_c}°C</span>
			</h1>
      <h1 className="flex items-center space-x-2">
        <WiRaindrop size="30"/>
        <span className="text-gray-900">Humidity:</span>
        <span>{forecast.day.avghumidity}</span>
			</h1>
      <h1 className="flex items-center space-x-2">
        <BiCloudRain />
				<span className="text-gray-900">Chance of Rain:</span>
				<span>{forecast.day.daily_chance_of_rain}%</span>
			</h1>
		</div>
	);
};
