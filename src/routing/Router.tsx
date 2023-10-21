import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import {Main} from "../pages/main";
import {Login} from "../features/auth/login/ui/Login";
import {TournamentList} from "../pages/TournamentList";
import {TournamentPage} from "../pages/tournamentPage";

// import { PrivateRoute } from './privateRoute';
// import { Registration, Login } from '../features/auth';
// import { Users } from '../pages/users';

function Registration() {
    return null;
}
const Router: FC = () => {
    return (
        <Routes>
            {/*<Route path='/' element={<PrivateRoute/>}>*/}
            {/*    <Route path='/' element={<Users/>}/>*/}
            {/*</Route>*/}
            <Route path='/' element={<Main/>}/>
            <Route path='/tournaments' element={<TournamentList/>}/>
            <Route path='/auth/signin' element={<Login/>}/>
            <Route path='/auth/signup' element={<Registration/>}/>
            <Route path='/tournament/:id' element={<TournamentPage/>}/>
        </Routes>
    );
};

export {Router};