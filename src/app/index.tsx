import React, { FC } from 'react';

import { Header } from '../entities/header';
import { Main } from '../pages/main';
import { Footer } from '../entities/footer';

export const App: FC = () => {
	return (
		<div>
			<Header />
			<div className='p-[40px]'>
				<Main />
			</div>
			<Footer />
		</div>
	);
};
