import React, { FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import { BaseButton } from '../baseButton';

type TFormContainer = {
	title: string;
};

const FormContainer: FC<PropsWithChildren<TFormContainer>> = ({ title, children }) => {
	const navigate = useNavigate();

	const handleComeback = () => {
		navigate(-1);
	}

	return (
		<div className='flex flex-col gap-[20px] p-[40px]'>
			<div className='justify-start'>
				<BaseButton title='Назад' action={handleComeback} />
			</div>
			<div className='w-[900px] bg-[#FFF] shadow-lg m-auto px-[168px] py-[60px] rounded-[10px] gap-[30px] flex flex-col'>
				<h1 className='text-[32px] font-bold text-center'>{title}</h1>
				{children}
			</div>
		</div>
	);
};

export { FormContainer };
