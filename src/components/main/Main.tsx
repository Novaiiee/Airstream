import React, { FC, FormEvent, MouseEvent, useContext, useState } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { Forecast } from "./Forecast";
import { SearchBar } from "./SearchBar";

export const Main: FC = () => {
	const [searchQuery, setSearchQuery] = useState("");
	const { search } = useContext(WeatherContext);

	const onSubmit = (e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		search(searchQuery);
	};

	return (
		<div className="h-screen bg-blue-50 col-span-7 flex flex-col px-10 py-8 space-y-20">
			<form onSubmit={onSubmit} className="flex items-center w-full justify-between space-x-4">
				<SearchBar value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
				<button
					onClick={onSubmit}
					className="px-5 py-3 bg-black text-white font-semibold rounded-md transition ease-in duration-75 hover:opacity-75"
				>
					Search
				</button>
				<h1 className="font-medium flex-1">Enter in the place on the left</h1>
			</form>
			<Forecast />
		</div>
	);
};
