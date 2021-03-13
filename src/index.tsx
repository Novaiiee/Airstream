import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import { WeatherProvider } from "./components/contexts/WeatherContext";
import "./css/tailwind.css";

ReactDOM.render(
	<React.StrictMode>
		<WeatherProvider>
			<App />
		</WeatherProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
