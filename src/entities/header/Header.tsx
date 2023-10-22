import React, { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Logo } from '../../shared/ui';
import sessionModel from '../session/model';

import ProfileIcon from '../../assets/icons/profile.svg';

const Header: FC = () => {
	const navigate = useNavigate();

	const redirectToProfile = () => {
		if (sessionModel.data === null) {
			navigate('/signin');
		} else {
			navigate(`/profile/${sessionModel.data?.user_id}`);
		}
	};

	return (
		<div className='py-[40px] px-5 md:px-[100px] bg-[#FFF]'>
			<div className='flex flex-row justify-between items-center'>
				<Logo />
				<div className='hidden md:flex flex-row gap-[40px] flex-sel'>
					<NavLink to='/' className='flex-[16px] font-normal'>Главная</NavLink>
					<NavLink to='/tournaments' className='flex-[16px] font-normal'>Турниры</NavLink>
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
