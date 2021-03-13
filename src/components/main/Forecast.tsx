import React, { FC, useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { ForecastBar } from "./ForecastBar";

export const Forecast: FC = () => {
	const { weather } = useContext(WeatherContext);

	return weather ? (
		<div className="w-full flex flex-col space-y-10">
			<div className="space-y-2">
				<h1 className="text-4xl">
					Weather <span className="font-semibold">Forecast</span>
				</h1>
				<h3>7 Day Forecast</h3>
			</div>
			<ul className="space-y-10 flex flex-col justify-center">
				{weather.forecast.forecastday.map((forecast) => {
					return <ForecastBar forecast={forecast} />;
				})}
			</ul>
		</div>
	) : (
		<div></div>
	);
};
