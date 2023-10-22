type TCreateTour = {
	title: string;
	started_at: string;
	finished_at: string;
	description: string;
	status: 'OPENED' | 'ACTIVE' | 'CLOSED';
};

type TTour = {
	tour_id: number;
	title: string;
	started_at: string;
	finished_at: string;
	description: string;
	status: 'OPENED' | 'ACTIVE' | 'CLOSED',
	team_title: string;
};

type TTourList = {
	tour_id: number;
	title: string;
	started_at: string;
	finished_at: string;
	description: string;
	status: 'OPENED' | 'ACTIVE' | 'CLOSED';
	team_title: null;
};

export type { TCreateTour, TTour, TTourList };
