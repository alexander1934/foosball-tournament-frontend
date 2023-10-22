import React, {
	ChangeEvent,
	FC,
	useEffect,
	useState
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import registrationModel from '../../auth/registration/model';
import sessionModel from '../../../entities/session/model';
import {
	BaseButton,
	Error,
	FormContainer,
	Loader
} from '../../../shared/ui';

import defaultAvatarIcon from '../../../assets/football.jpg';

const SetAvatar: FC = observer(() => {
	const [link, setLink] = useState<string>('');
	const navigate = useNavigate();

	const { state } = useLocation();

	const onSubmit = async () => {
		const formData = new FormData();
		formData.append('avatar', link);
		registrationModel.createUser({
			login: state.login,
			nickname: state.nickname,
			password: state.password,
			image_path: link,
		});
	}

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files[0]) {
			setLink(URL.createObjectURL(e.target.files[0]));
		}
	}

	useEffect(() => {
		if (registrationModel.data) {
			sessionModel.setUser(registrationModel.data);
			navigate('/');
		}
	}, [registrationModel.data]);

	if (registrationModel.loading) {
		return <Loader />;
	}

	return (
		<FormContainer title='Выберите аватар'>
			<img
				className='w-[200px] h-[200px] rounded-[100%] self-center'
				src={link || defaultAvatarIcon}
				alt='avatar'
			/>
			<input
				// className='hidden'
				type='file'
				id='upload-photo'
				className='self-center'
				accept='image/png,image/jpeg,image/gif'
				onChange={handleOnChange}
			/>
			<BaseButton
				title='Зарегистрироваться'
				type='button'
				className={'py-3'}
				action={onSubmit}
			/>
			{registrationModel.error && <Error error={registrationModel.error} />}
		</FormContainer>
	);
});

export { SetAvatar };
