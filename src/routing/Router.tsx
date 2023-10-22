import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Main } from '../pages/main';
import { TournamentList } from "../pages/TournamentList/TournamentList";
import { Login } from '../features/auth/login/ui';
import { Registration } from '../features/auth/registration/ui';
import { PrivateRoute } from './privateRoute';
import {TournamentPage} from "../pages/tournamentPage";

function Test() {
  return <p>text</p>;
}

const Router: FC = () => {
    return (
        <Routes>
            <Route path='/a' element={<PrivateRoute/>}>
              <Route path='/a' element={<Test />}/>
            </Route>
            <Route path='/' element={<Main/>}/>
            <Route path='/tournaments' element={<TournamentList />} />
            <Route path='/signin' element={<Login />} />
            <Route path='/signup' element={<Registration />} />
	          <Route path='/tournament/:id' element={<TournamentPage/>}/>

        </Routes>
    );
};

export {Router};
