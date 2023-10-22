import { makeAutoObservable, runInAction } from 'mobx';

import { createTour, TCreateTour, TTour } from '../../../shared/api/tour';

class CreateToutModel {
	private _error: string | null = null;
	private _loading: boolean = false;
	private _data: TTour | null = null;

	get error(): string | null {
		return this._error;
	}

	get loading(): boolean {
		return this._loading;
	}

	get data(): TTour | null {
		return this._data;
	}

	constructor() {
		makeAutoObservable(this);
	}

	async setTour(dto: TCreateTour) {
		try {
			this._loading = true;
			const response = await createTour(dto);

			runInAction(() => {
				this._data = response;
				this._loading = false;
			});
		} catch (err: any) {
			this._loading = false;
			const error = err.response.data;

			runInAction(() => {
				this._error = error;
			});
		}
	}
}

export default new CreateToutModel();
