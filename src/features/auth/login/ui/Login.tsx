import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import {
	BaseButton,
	BaseCheckBox,
	BaseInput,
	FormContainer
} from '../../../../shared/ui';

const Login: FC = () => {
	return (
		<FormContainer title='Вход'>
			<div className='flex flex-col gap-[20px]'>
				<BaseInput placeholder='Логин' type='text' />
				<BaseInput placeholder='Пароль' type='password' />
				<div className='flex flex-row justify-between items-center'>
					<BaseCheckBox label='Запомнить меня' action={() => {}} />
					<a className='text-inherit text-[12px] font-medium'>Восстановить пароль</a>
				</div>
				<BaseButton title='Продолжить' action={() => {}} />
				<p
					className='text-center text-[12px] font-normal'
				>Еще нет аккаунта?
					<NavLink to='/signup' className='font-bold'>
						Зарегистрируйтесь!
					</NavLink>
				</p>
			</div>
		</FormContainer>
	);
};

export { Login };
