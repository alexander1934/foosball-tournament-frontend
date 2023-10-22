import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const NotFound: FC = () => {
	return (
		<div className='m-auto'>
			<p>404</p>
			<p>Страница не найдена</p>
			<NavLink to='/'>Вернуться на главную страницу</NavLink>
		</div>
	);
};

export { NotFound };
