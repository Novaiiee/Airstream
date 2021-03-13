export interface Weather {
	location: {
		name: string;
		country: string;
	};
	current: {
		temp_c: number;
		temp_f: number;
		is_day: number;
		condition: {
			text: string;
		};
		humidity: number;
		feelslike_c: number;
		feelslike_f: number;
	};
	forecast: {
		forecastday: Forecast[];
	};
}

export interface Forecast {
	date: string;
	day: {
		avgtemp_c: number;
		avgtemp_f: number;
		avghumidity: number;
		daily_chance_of_rain: string;
		daily_chance_of_snow: string;
	};
}
