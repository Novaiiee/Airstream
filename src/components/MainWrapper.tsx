import React, { FC } from "react";
import { Main } from "./main/Main";
import { Sidebar } from "./side/Sidebar";

export const MainWrapper: FC = () => {
	return (
		<div className="grid grid-cols-9">
			<Main />
			<Sidebar />
		</div>
	);
};
