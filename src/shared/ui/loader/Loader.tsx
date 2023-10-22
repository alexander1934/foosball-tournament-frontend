import React, { FC } from 'react';

import LoaderIcon from '../../../assets/icons/loader.svg';

const Loader: FC = () => {
	return (
		<div className='w-auto'>
			<img src={LoaderIcon} alt='loader' />
		</div>
	);
};

export { Loader };
