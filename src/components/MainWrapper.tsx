import React, { FC } from "react";
import { Main } from "./Main";
import { Sidebar } from "./Sidebar";

export const MainWrapper: FC = () => {
	return (
		<div className="grid grid-cols-9">
			<Main />
			<Sidebar />
		</div>
	);
};
