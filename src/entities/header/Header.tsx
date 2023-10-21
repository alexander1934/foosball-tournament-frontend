import React, { FC } from 'react';
import ProfileIcon from '../../assets/icons/profile.svg';

const Header: FC = () => {
	return (
		<div className='py-[40px] px-[100px]'>
			<div className='flex flex-row justify-between items-center'>
				<div className='flex flex-col'>
					<p className='text-[20px] '>Foosball</p>
					<p>Tournament</p>
				</div>
				<div>
					<a>Турниры</a>
					<a>События</a>
					<a>Сообщество</a>
				</div>
				<div>
					<img src={ProfileIcon}  alt='profile' />
				</div>
			</div>
		</div>
	);
};

export { Header };
