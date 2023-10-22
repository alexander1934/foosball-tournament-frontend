import React, { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema, FormData } from '../lib';
import { BaseButton,  BaseInput,  FormContainer } from '../../../../shared/ui';

const Registration: FC = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({
		resolver: yupResolver(schema),
	});

	const navigate = useNavigate();

	const onSubmit = (dto: FormData) => {
		navigate('/set-url', {state: dto});
	};

	return (
		<FormContainer title='Регистрация' onSubmit={handleSubmit(onSubmit)}>
			<BaseInput
				placeholder='Логин'
				type='text'
				{...register('login')}
				error={errors.login?.message ?? ''}
			/>
			<BaseInput
				placeholder='Имя'
				type='text'
				{...register('nickname')}
				error={errors.nickname?.message ?? ''}
			/>
			<BaseInput
				placeholder='Пароль'
				type='password'
				{...register('password')}
				error={errors.password?.message ?? ''}
			/>
			<BaseInput
				placeholder='Подтверждение пароля'
				type='password'
				{...register('confirmPassword')}
				error={errors.confirmPassword?.message ?? ''}
			/>
			<BaseButton title='Продолжить' className={'py-3'} />
			<p
				className='text-center text-[12px] font-normal'
			>
				Уже есть аккаунт?
				<NavLink to='/signin' className='font-bold'>
					Войдите!
				</NavLink>
			</p>
		</FormContainer>
	);
};

export { Registration };
