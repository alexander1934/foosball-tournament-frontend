import React, { FC } from 'react';

type TBaseCheckBox = {
	label: string;
	action: () => void;
};

const BaseCheckBox: FC<TBaseCheckBox> = ({ label, action }) => {
	return (
		<div className='flex flex-row gap-[8px]'>
			<input
				type='checkbox'
				id='remeber_me'
				onChange={action}
			/>
			<label
				className='text-gray-500 text-[12px] font-medium'
				htmlFor='remeber_me'
			>
				{label}
			</label>
		</div>
	);
};

export { BaseCheckBox };
