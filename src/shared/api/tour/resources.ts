import { AxiosResponse } from 'axios';

import { api } from '../apiAxios';
import {TCreateTour, TTour, TTourList} from './types';

const createTour = async (dto: TCreateTour): Promise<TTour> => {
	const response = await api.post<TTour, AxiosResponse<TTour>>(
		'/tournaments',
		{...dto}
	);
	return response.data;
};

const tourList = async (): Promise<TTourList[]> => {
	const response = await api.get<TTourList[], AxiosResponse<TTourList[]>>('/tournaments');
	return response.data;
};

export { createTour };
