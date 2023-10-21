import React, { FC } from 'react';
import { Header } from '../entities/header';
import { Main } from '../pages/main';
import { Footer } from '../entities/footer';
import {Router} from "../routing";


export const App: FC = () => {
	return <Router />;
};
