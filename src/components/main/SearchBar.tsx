import React, { ChangeEvent, FC } from "react";
import { AiOutlineSearch } from "react-icons/ai";

interface Props {
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	value: string;
}

export const SearchBar: FC<Props> = ({ value, onChange }) => {
	return (
		<div className="bg-white transition ease-in duration-150 hover:ring-2 hover:ring-gray-300 rounded-md flex items-center px-4 py-3 flex-1">
			<AiOutlineSearch className="mr-4" color="black" />
			<input
				type="text"
				onChange={onChange}
				value={value}
				className="w-full text-gray-500"
				style={{ outline: "none" }}
			/>
		</div>
	);
};
