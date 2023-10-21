import React, { FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import { BaseButton } from '../baseButton';

type TFormContainer = {
	title: string;
};

const FormContainer: FC<PropsWithChildren<TFormContainer>> = ({ title, children }) => {
	const navigation = useNavigate();

	const handleComeback = () => {
		navigation(-1);
	}

	return (
		<div className='flex flex-col gap-[90px]'>
			<BaseButton title='Назад' action={handleComeback}/>
			<div className=''>
				<h1>{title}</h1>
				{children}
			</div>
		</div>
	);
};

export { FormContainer };
