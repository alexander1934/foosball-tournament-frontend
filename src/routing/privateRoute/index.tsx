import React, { FC } from 'react';
import { Navigate, Outlet, RouteProps } from 'react-router-dom';
import { isAuth } from '../../shared/lib';

const PrivateRoute: FC<RouteProps> = () => {
	return isAuth() ? <Outlet /> : <Navigate to='/signin' />;
};

export { PrivateRoute };
