import { makeAutoObservable, runInAction } from 'mobx';

import { TUser } from '../../../shared/api/user';

class SessionModel {
	private _isAuthChecked: boolean = false;
	private _isAuth: boolean = false;
	private _data: TUser | null = null;

	get isAuthChecked(): boolean {
		return this._isAuthChecked;
	}

	get isAuth(): boolean {
		return this._isAuth;
	}

	get data(): TUser | null {
		return this._data;
	}

	constructor() {
		makeAutoObservable(this);
		this.load();
	}

	public setUser(dto: TUser) {
		try {
			window.localStorage.setItem(
				SessionModel.name,
				JSON.stringify({
					user: dto,
				}),
			);
			runInAction(() => {
				this._isAuth = true;
				this.load();
			});
		} catch (err) {
			console.log('Ошибка данных');
		}
	}

	public getUser() {
		return this._data;
	}

	private load() {
		try {
			const user = Object.assign(
				this,
				JSON.parse(
					window.localStorage.getItem(SessionModel.name) || '{}',
				),
			).user;
			if (user) {
				runInAction(() => {
					this._data = user;
					this._isAuthChecked = true;
				});
			}
		} catch (err) {
			console.log('Ошибка загрузки данных');
		}
	}

	public logout() {
		try {
			window.localStorage.setItem(
				SessionModel.name,
				JSON.stringify({
					user: null,
				}),
			);
			runInAction(() => {
				this._isAuthChecked = false;
				this._data = null;
				this._isAuth = false;
			});
		} catch (err) {
			console.log('Ошибка выхода');
		}
	}

	// async logout(token: string) {
	// 	try {
	// 		await logout(token);
	// 		sidebarModel.resetData();
	// 		window.localStorage.setItem(
	// 			SessionModel.name,
	// 			JSON.stringify({
	// 				user: null,
	// 			}),
	// 		);
	// 		runInAction(() => {
	// 			this._isAuthChecked = false;
	// 			this._data = null;
	// 			this._isAuth = false;
	// 		});
	// 	} catch (err) {
	// 		console.log('Ошибка выхода');
	// 	}
	// }
}

export default new SessionModel();
