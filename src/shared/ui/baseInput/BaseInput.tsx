import React, { forwardRef, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';
import { Error } from '../error';

type TBaseInput = {
	type: HTMLInputTypeAttribute;
	disabled?: boolean;
	value?: string;
	placeholder?: string;
	error?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const BaseInput = forwardRef<HTMLInputElement, TBaseInput>(
	({ error, ...rest }, ref) => {
		return (
			<div className='flex flex-col gap-[5px] w-[100%]'>
				<input
					className={
					`px-[12px] py-[12px] outline-0 rounded-[10px] ${rest.disabled ? 
						'disabled:bg-[#FFF] border-gray-500 border-1 border-solid text-gray-500' : 
						'bg-[#ECF1F7]'} 
						placeholder:text-[12px] font-normal`
					}
					{...rest}
					ref={ref}
				/>
				{error && <Error error={error} />}
			</div>
		);
	},
);

export { BaseInput };
