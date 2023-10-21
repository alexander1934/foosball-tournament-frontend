import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import {
	BaseButton,
	BaseCheckBox,
	BaseInput,
	FormContainer
} from '../../../../shared/ui';

const Registration: FC = () => {
	return (
		<FormContainer title='Регистрация'>
			<div className='flex flex-col gap-[20px]'>
				<div className='flex justify-between items-center gap-[20px]'>
					<BaseInput placeholder='Логин' type='text' />
					<BaseInput placeholder='Эл. почта' type='email' />
				</div>
				<BaseInput placeholder='Имя' type='text' />
				<BaseInput placeholder='Пароль' type='password' />
				<BaseInput placeholder='Подтверждение пароля' type='password' />
				<div className='flex flex-col gap-[10px]'>
					<BaseCheckBox
						label='Я согласен с Правила пользования и Политика конфиденциальност'
						action={() => {}}
					/>
					<BaseCheckBox
						label='Я согласен на получение рассылки'
						action={() => {}}
					/>
				</div>
				<BaseButton title='Продолжить' action={() => {}} />
				<p
					className='text-center text-[12px] font-normal'
				>
					Уже есть аккаунт?
					<NavLink to='/signin' className='font-bold'>
						Войдите!
					</NavLink>
				</p>
			</div>
		</FormContainer>
	);
};

export { Registration };
