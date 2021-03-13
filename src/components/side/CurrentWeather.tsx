import React, { FC, useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";

export const CurrentWeather: FC = () => {
	const { weather } = useContext(WeatherContext);

	return weather ? (
		<div className="space-y-8">
			<div className="space-y-4 text-center">
				<h1 className="font-light text-4xl">Today</h1>
				<h1 className="font-light text-9xl font-montserrat">
					{weather.current.temp_c}
					<span className="text-2xl">°C</span>
				</h1>
				<h3 className="text-gray-600">
					{weather.location.name}, {weather.location.country}
				</h3>
				<div className="space-x-4 font-light flex items-center">
					<h3>Feels like {weather.current.feelslike_c} °c</h3>
					<h3>•</h3>
					<h3>{weather.current.is_day ? "Night" : "Day"}</h3>
					<h3>•</h3>
					<h3>Humidity {weather.current.humidity}</h3>
				</div>
			</div>
			<div></div>
		</div>
	) : (
		<div className="h-full w-full flex items-center justify-center">
			<h1 className="text-3xl text-center font-light">Search for a place for its weather to display</h1>
		</div>
	);
};
