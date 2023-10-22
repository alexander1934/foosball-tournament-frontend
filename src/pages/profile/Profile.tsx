import React, { FC } from 'react';
import {useNavigate, useParams} from 'react-router-dom';

import {
	Avatar,
	BaseButton,
	BaseInput,
	Wrapper
} from '../../shared/ui';
import sessionModel from '../../entities/session/model';

const Profile: FC = () => {
	const data = sessionModel.data;
	const navigate = useNavigate();
	const { id } = useParams();

	const handleLogout = () => {
		sessionModel.logout();
		navigate('/');
	};

	return (
		<Wrapper>
			<div className='flex flex-col gap-[30px] w-[530px] m-auto'>
				<Avatar source={data?.image_path} />
				<div className='flex flex-col gap-[15px]'>
					<BaseInput type='text' value={`id: ${data?.user_id}`} disabled={true} />
					<BaseInput type='text' value={data?.login} disabled={true} />
					<BaseInput type='text' value={data?.nickname} disabled={true} />
				</div>
				<div className='flex flex-row justify-between gap-[25px]'>
					<BaseButton title='Команды' className={'py-3 w-[100%]'} action={() => {}} />
					<BaseButton title='История' className={'py-3 w-[100%]'} action={() => {}} />
				</div>
				{
					data?.user_id == id &&
					<p className='text-center text-[14px] font-medium text-[#B00020]' onClick={handleLogout}>
						Выйти из аккаунта
					</p>
				}
			</div>
		</Wrapper>
	);
};

export { Profile };
