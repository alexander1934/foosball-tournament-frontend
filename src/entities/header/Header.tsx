import React, { FC } from 'react';
import ProfileIcon from '../../assets/icons/profile.svg';

const Header: FC = () => {
	return (
		<div className='py-[40px] px-5 md:px-[100px] bg-[#FFF]'>
			<div className='flex flex-row justify-between items-center'>
				<div className='flex flex-col items-center'>
					<p className='text-[20px] font-bold'>Foosball</p>
					<p className='text=[12px] font-medium'>Tournament</p>
				</div>
				<div className='hidden md:flex flex-row gap-[40px] flex-sel'>
					<a className='flex-[16px] font-normal'>Турниры</a>
					<a className='flex-[16px] font-normal'>События</a>
					<a className='flex-[16px] font-normal'>Сообщество</a>
				</div>
				<img className='hidden md:block' src={ProfileIcon}  alt='profile' />
			</div>
		</div>
	);
};

export { Header };
