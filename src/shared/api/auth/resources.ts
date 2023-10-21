import { api } from '../apiAxios';

import { TLogin, TRegistration } from './types';

const login = async (dto: TLogin): Promise<string> => {
	const response = await api.post('/registration', {...dto});
	return response.data;
};

const registration = async (dto: TRegistration): Promise<string> => {
	const response = await api.post('/login', {...dto});
	return response.data;
};

export { login, registration };
