import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Main } from '../pages/main';
import { TournamentList } from '../pages/TournamentList/TournamentList';
import { Login } from '../features/auth/login/ui';
import { Registration } from '../features/auth/registration/ui';
import { PrivateRoute } from './privateRoute';
import { TournamentPage } from "../pages/tournamentPage";
import { SetAvatar } from '../features/setAvatar/ui';
import { Profile } from '../pages/profile';
import { NotFound } from '../pages/notFound';
import { CreateTour } from '../pages/createTour';

const Router: FC = () => {
    return (
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path='/createTour' element={<CreateTour />} />
          </Route>
          <Route path='/' element={<Main/>} />
          <Route path='/profile/:id' element={<Profile />} />
          <Route path='/tournaments' element={<TournamentList />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Registration />} />
          <Route path='/set-url' element={<SetAvatar />} />
          <Route path='/tournament/:id' element={<TournamentPage/>} />
          <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export { Router };
