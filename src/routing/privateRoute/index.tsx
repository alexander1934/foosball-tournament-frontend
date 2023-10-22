import React, { FC } from 'react';
import { Navigate, Outlet, RouteProps } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import sessionModel from '../../entities/session/model';

const PrivateRoute: FC<RouteProps> = observer(() => {
	return sessionModel.isAuthChecked && sessionModel.data ? (
		<Outlet />
	) : (
		<Navigate to='/signin' />
	);
});

export { PrivateRoute };
