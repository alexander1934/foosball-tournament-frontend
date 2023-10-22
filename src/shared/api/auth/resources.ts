import { api } from '../apiAxios';

import { TLogin, TRegistration } from './types';
import { TUser } from '../user';

const login = async (dto: TLogin): Promise<TUser> => {
	const response = await api.post('/login', {...dto});
	return response.data;
};

const registration = async (dto: TRegistration): Promise<TUser> => {
	const response = await api.post('/registration', {...dto});
	return response.data;
};

export { login, registration };
