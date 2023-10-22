import { makeAutoObservable, runInAction } from 'mobx';

import { login, TLogin } from '../../../../shared/api/auth';
import { TUser } from '../../../../shared/api/user';

class LoginModel {
	private _error: string | null = null;
	private _loading: boolean = false;
	private _data: TUser | null = null;

	get error(): string | null {
		return this._error;
	}

	get loading(): boolean {
		return this._loading;
	}

	get data(): TUser | null {
		return this._data;
	}

	constructor() {
		makeAutoObservable(this);
	}

	async setUser(dto: TLogin) {
		try {
			this._loading = true;
			const response = await login(dto);

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

export default new LoginModel();
