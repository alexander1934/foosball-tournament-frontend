import axios from 'axios';

const api = axios.create({
	baseURL: 'http://46.17.40.48',
	headers: {
		accept: 'accept: application/json',
	},
});

export { api };
