import React from 'react';
import ReactDOM from 'react-dom';
// import * as serviceWorker from './serviceWorker';

import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import GalleryPage from './pages/HomePage/GalleryPage';
import ActivitiesPage from './pages/HomePage/ActivitiesPage';
import RoutesPage from './pages/HomePage/RoutesPage';

import UserCreatePlacePage from './pages/user/CreatePLace/UserCreatePlacePage';
import UserCreateRoutePage from './pages/user/CreateRoute/UserCreateRoutePage';
import UserDataPage from './pages/user/UserData/UserDataPage';
import UserDeletePage from './pages/user/DeleteUser/UserDeletePage';
import UserListPlacesPage from './pages/user/ListPlaces/UserListPlacesPage';
import UserListRoutesPage from './pages/user/ListRoutes/UserListRoutesPage';

import MapaLugar from './components/Maps/MapaPrueba';

import SOAPPAge from './pages/SOAP/SOAPPage';

import {initializeFirebase} from './components/firebase/push-notification';

ReactDOM.render(
    <BrowserRouter style={{ background: 'red', }}>
        {/* ======================================================== */}
        {/* PAGINAS DEL HOME */}
        <Route exact path='/' component={HomePage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/register' component={RegisterPage} />
        <Route exact path='/gallery' component={GalleryPage} />
        <Route exact path='/activities' component={ActivitiesPage} />
        <Route exact path='/routes' component={RoutesPage} />
        {/* ======================================================== */}

        {/* ======================================================== */}
        {/* PAGINAS DEL USUARIO */}
        <Route exact path='/user-data' component={UserDataPage} />
        <Route exact path='/user-delete' component={UserDeletePage} />
        <Route exact path='/user-list-places' component={UserListPlacesPage} />
        <Route exact path='/user-list-routes' component={UserListRoutesPage} />
        <Route exact path='/user-create-place' component={UserCreatePlacePage} />
        <Route exact path='/user-create-route' component={UserCreateRoutePage} />
        {/* ======================================================== */}

        <Route exact path='/mapa-lugar' component={MapaLugar} />

        {/* ======================================================== */}
        {/* CONSUMIR EL SERVICIO SOAP EXPUESTO */}
        <Route exact path='/interface-files' component={SOAPPAge} />
        {/* ======================================================== */}
    </BrowserRouter>,
    document.getElementById('root'));
    initializeFirebase();