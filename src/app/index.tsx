import React, { FC } from 'react';

import { Main } from '../pages/main';
import {Login} from "../features/auth/login/ui/Login";

export const App: FC = () => {
	return (
		<Login />
	);
};
