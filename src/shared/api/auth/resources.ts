import { api } from '../apiAxios';
import { AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

import { TLogin, TRegistration } from './types';
import { TUser } from '../user';

const login = async (dto: TLogin): Promise<TUser> => {
	const response = await api.post<TUser, AxiosResponse<TUser>>('/login', {...dto});
	return response.data;
};

const registration = async (dto: TRegistration): Promise<TUser> => {
	const response = await api.post<TUser, AxiosResponse<TUser>>('/registration', {...dto});

	const cookies = response.headers['set-cookie'];
	let token = '';

	if (cookies) {
		const cookieParts = cookies[0].split(';');

		const tokenPart = cookieParts.find(part => part.includes('token='));

		if (tokenPart) {
			token = tokenPart.split('=')[1];

			Cookies.set('token', token);
		}
	}
	return response.data;
};

export { login, registration };
