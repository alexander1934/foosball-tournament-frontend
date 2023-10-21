import React, { FC } from 'react';
import Main from "../pages/main/Main";
import {Header} from "../entities/header";
import {Footer} from "../entities/footer/Footer";

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
