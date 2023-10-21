import React, { FC } from 'react';

import { Main } from '../pages/main';
import { Header } from '../entities/header';

export const App: FC = () => {
	return (
		<div>
			<Header />
			<div className='p-[40px]'>
				<Main />
			</div>
		</div>
	);
};
