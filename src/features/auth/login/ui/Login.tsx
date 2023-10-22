import React, { FC, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { schema, FormData } from '../lib';
import loginModel from '../model';
import sessionModel from '../../../../entities/session/model';
import {
	BaseButton,
	BaseInput,
	Error,
	FormContainer,
	Loader
} from '../../../../shared/ui';

const Login: FC = observer(() => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormData>({ resolver: yupResolver(schema) });

	const onSubmit = (dto: FormData) => {
		loginModel.setUser({
			login: dto.login.trim(),
			password: dto.password.trim(),
		});
	};

	useEffect(() => {
		if (loginModel.data) {
			sessionModel.setUser(loginModel.data);
			navigate('/');
		}
	}, [loginModel.data]);

	if (loginModel.loading) {
		return <Loader />;
	}

	return (
		<FormContainer title='Вход' onSubmit={handleSubmit(onSubmit)}>
			<BaseInput
				placeholder='Логин'
				type='text'
				{...register('login')}
				error={errors.login?.message ?? ''}
			/>
			<BaseInput
				placeholder='Пароль'
				type='password'
				{...register('password')}
				error={errors.password?.message ?? ''}
			/>
			<a className='text-end text-gray-500 text-[12px] font-medium'>
				Восстановить пароль
			</a>
			<BaseButton title='Продолжить' className={'py-3'} />
			<p
				className='text-center text-[12px] font-normal'
			>Еще нет аккаунта?
				<NavLink to='/signup' className='font-bold'>
					Зарегистрируйтесь!
				</NavLink>
			</p>
			{loginModel.error && <Error error={loginModel.error} />}
		</FormContainer>
	);
});

export { Login };
