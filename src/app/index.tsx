import React, { FC } from 'react';
import Main from "../pages/main/Main";
import {Header} from "../entities/header";
import {Footer} from "../entities/footer/Footer";
import {Router} from "../routing";

export const App: FC = () => {
	return <Router />;
};
