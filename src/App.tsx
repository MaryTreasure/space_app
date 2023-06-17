import React from 'react';
import styles from './App.module.scss';
import { Layouts } from './Commons/Layouts';
import { MainPage } from './Containers/MainPage';
import { Route, Routes } from 'react-router-dom';
import { routes } from './utils/constants/routes';
import { InfoPage } from './Containers/InfoPage';
import { PictureOfDayPage } from './Containers/PictureOfDayPage';
import { AuthPage } from './Containers/AuthPage';
import { GalleryPage } from './Containers/GalleryPage';
import { SolarSystemPage } from './Containers/SolarSystemPage';
import { SolarSystemInfoPage } from './Containers/SolarSystemInfoPage';
import { SunPage } from './Containers/SunPage';
import { KuiperBeltPage } from './Containers/KuiperBeltPage';
import { PlanetsPage } from './Containers/PlanetsPage';

function App() {
  return (
    <Layouts>
      <Routes>
        <Route path={routes.MAIN} element={<MainPage />} />
        <Route path={routes.INFOPAGE} element={<InfoPage />} />
        <Route path={routes.APOD} element={<PictureOfDayPage />} />
        <Route path={routes.AUTH} element={<AuthPage />} />
        <Route path={routes.GALLERY} element={<GalleryPage />} />
        <Route path={routes.SOLARSYSTEM} element={<SolarSystemPage />} />
        <Route path={routes.SOLARSYSTEMINFO} element={<SolarSystemInfoPage />} />
        <Route path={routes.SUNINFO} element={<SunPage />} />
        <Route path={routes.KUIPERBELTINFO} element={<KuiperBeltPage />} />
        <Route path={routes.PLANETS} element={<PlanetsPage />} />
      </Routes>
    </Layouts>
  );
}

export default App;
