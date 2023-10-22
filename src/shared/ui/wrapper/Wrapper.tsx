import React, { FC, PropsWithChildren } from 'react';

import { Header } from '../../../entities/header';
import { Footer } from '../../../entities/footer';

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Header />
			<div className='p-[40px]'>
				{children}
			</div>
			<Footer />
		</>
	);
};

export { Wrapper };
