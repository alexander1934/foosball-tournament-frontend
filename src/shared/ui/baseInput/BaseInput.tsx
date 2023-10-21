import React, { FC, HTMLInputTypeAttribute } from 'react';

type TBaseInput = {
	placeholder: string;
	type: HTMLInputTypeAttribute;
};

const BaseInput: FC<TBaseInput> = ({ placeholder, type }) => {
	return (
		<input
			className='w-[100%] px-[12px] py-[22px] outline-0 rounded-[10px] bg-[#ECF1F7]'
			type={type}
			placeholder={placeholder}
		/>
	);
};

export { BaseInput };
