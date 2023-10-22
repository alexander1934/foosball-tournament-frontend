import Rect, { FC } from 'react';

import defaultAvatarIcon from '../../../assets/football.jpg';

type TAvatar = {
	source: string | undefined;
};

const Avatar: FC<TAvatar> = ({ source }) => {
	return (
		<img
			className='w-[200px] h-[200px] rounded-[100%] self-center'
			src={source || defaultAvatarIcon}
			alt='avatar'
		/>
	);
};

export { Avatar };
