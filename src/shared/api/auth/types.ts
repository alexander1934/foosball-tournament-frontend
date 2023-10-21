type TLogin = {
	login: string;
	password: string;
};

type TRegistration = {
	password: string,
	login: string;
	nickname: string;
	image_path: string;
	created_at: string;
};

export type { TLogin, TRegistration };
