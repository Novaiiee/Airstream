import React, { FC } from "react";
import { CurrentWeather } from "./CurrentWeather";

export const Sidebar: FC = () => {
	return (
		<div className="flex flex-col items-center h-screen col-span-2 bg-black text-white px-10 py-8 space-y-20 font-semibold">
			<div className="flex items-center w-full justify-between">
				<div>
					<h1 className="text-3xl">Airstream</h1>
				</div>
				<div className="empty"></div>
				<div>
					<button
						className="px-5 py-3 bg-white text-black font-semibold rounded-md transition ease-in duration-75 hover:opacity-75"
						style={{ outline: "none" }}
					>
						Login
					</button>
				</div>
			</div>
			<CurrentWeather />
		</div>
	);
};
