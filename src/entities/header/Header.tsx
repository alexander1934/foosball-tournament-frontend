import React, { FC } from 'react';

import { Logo } from '../../shared/ui';

import ProfileIcon from '../../assets/icons/profile.svg';
import {useNavigate} from "react-router-dom";

const Header: FC = () => {
	const navigate = useNavigate();

	const redirectToProfile = () => {
		navigate('/signin');
	};

	return (
		<div className='py-[40px] px-5 md:px-[100px] bg-[#FFF]'>
			<div className='flex flex-row justify-between items-center'>
				<Logo />
				<div className='hidden md:flex flex-row gap-[40px] flex-sel'>
					<a className='flex-[16px] font-normal'>Турниры</a>
					<a className='flex-[16px] font-normal'>События</a>
					<a className='flex-[16px] font-normal'>Сообщество</a>
				</div>
				<img
					className='hidden md:block'
					src={ProfileIcon}
					alt='profile'
					onClick={redirectToProfile}
				/>
			</div>
		</div>
	);
};

export { Header };
