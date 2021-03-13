import axios from "axios";
import React, { createContext, FC, useCallback, useEffect, useState } from "react";
import { Weather } from "../../types";

interface WeatherContextValues {
	search(query: string): void;
	weather: Weather | null;
}

export const WeatherContext = createContext({} as WeatherContextValues);
const apiKey = "50262174312b43bcb8215612203108";

export const WeatherProvider: FC = ({ children }) => {
	const [weather, setWeather] = useState<Weather | null>(null);

	const search = useCallback(async (query: string) => {
		try {
			if (!query) return;
	
			const res = await axios.get(
				`http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${query}&days=7&aqi=no&alerts=no`
			);
	
			setWeather(res.data);
		} catch (err) {
			return;
		}
	}, []);

	// useEffect(() => {
	// 	search("toronto");
	// }, [search]);

	return <WeatherContext.Provider value={{ search, weather }}>{children}</WeatherContext.Provider>;
};
