import { api } from '../apiAxios';
import { AxiosResponse } from 'axios';

import { TLogin, TRegistration } from './types';
import { TUser } from '../user';
import Cookies from "js-cookie";

const login = async (dto: TLogin): Promise<TUser> => {
	const response = await api.post<TUser, AxiosResponse<TUser>>('/login', {...dto});
	return response.data;
};

const registration = async (dto: TRegistration): Promise<TUser> => {
	const response = await api.post<TUser, AxiosResponse<TUser>>('/registration', {...dto});

	// Получите значение токена из заголовка Set-Cookie
	const cookies = response.headers['set-cookie'];
	let token = '';

	if (cookies) {
		// Разделите строку заголовка по символу ";"
		const cookieParts = cookies[0].split(';');

		// Найдите часть строки, содержащую токен
		const tokenPart = cookieParts.find(part => part.includes('token='));

		if (tokenPart) {
			// Разделите строку по символу "=" и возьмите вторую часть
			token = tokenPart.split('=')[1];

			// Сохраните токен в куках
			Cookies.set('token', token);
		}
	}

	// Делайте что-то с полученным токеном
	console.log("tokeeeeeen", token);
	console.log('==========>document.cookie', document.cookie);


	return response.data;
};

export { login, registration };
