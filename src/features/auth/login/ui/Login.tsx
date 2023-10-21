import React, { FC } from 'react';

import { BaseButton, FormContainer } from '../../../../shared/ui';

const Login: FC = () => {
	return (
		<FormContainer title='Вход'>
			<div className='flex flex-col gap-[20px]'>
				<input type='text' />
				<input type='text' />
				<div>
					<input type='checkbox' />
					<a>Восстановить пароль</a>
				</div>
				<BaseButton title='Продолжить' action={() => console.log('==========>click')} />
				<p>Еще нет аккаунта?<a>Зарегистрируйтесь!</a></p>
			</div>
		</FormContainer>
	);
};

export { Login };
