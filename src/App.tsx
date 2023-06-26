import React from 'react';
import { Layouts } from './Commons/Layouts';
import { MainPage } from './Containers/MainPage';
import { Route, Routes } from 'react-router-dom';
import { routes } from './utils/constants/routes';
import { InfoPage } from './Containers/InfoPage';
import { PictureOfDayPage } from './Containers/PictureOfDayPage';
import { MastPage } from './Containers/RoversPages/MastPage';
import { SolarSystemPage } from './Containers/SolarSystemPage';
import { SolarSystemInfoPage } from './Containers/SolarSystemInfoPage';
import { SunPage } from './Containers/SunPage';
import { KuiperBeltPage } from './Containers/KuiperBeltPage';
import { PlanetsPage } from './Containers/PlanetsPage';
import { VenusPage } from './Containers/PlanetsPages/VenusPage';
import { EarthPage } from './Containers/PlanetsPages/EarthPage';
import { MarsPage } from './Containers/PlanetsPages/MarsPage';
import { JupiterPage } from './Containers/PlanetsPages/JupiterPage';
import { SaturnPage } from './Containers/PlanetsPages/SaturnPage';
import { UranusPage } from './Containers/PlanetsPages/UranusPage';
import { NeptunPage } from './Containers/PlanetsPages/NeptunPage';
import { MarsRoversPage } from './Containers/MarsRoversPage';
import { ChemcamPage } from './Containers/RoversPages/Chemcampage';
import { FhazPage } from './Containers/RoversPages/FhazPage';
import { MahliPage } from './Containers/RoversPages/MahliPage';

function App() {
  return (
    <Layouts>
      <Routes>
        <Route path={routes.MAIN} element={<MainPage />} />
        <Route path={routes.INFOPAGE} element={<InfoPage />} />
        <Route path={routes.APOD} element={<PictureOfDayPage />} />
        <Route path={routes.MARSROVERS} element={<MarsRoversPage />} />
        <Route path={routes.MAST} element={<MastPage />} />
        <Route path={routes.SOLARSYSTEM} element={<SolarSystemPage />} />
        <Route path={routes.SOLARSYSTEMINFO} element={<SolarSystemInfoPage />} />
        <Route path={routes.SUNINFO} element={<SunPage />} />
        <Route path={routes.KUIPERBELTINFO} element={<KuiperBeltPage />} />
        <Route path={routes.PLANETS} element={<PlanetsPage />} />
        <Route path={routes.VENUS} element={<VenusPage />} />
        <Route path={routes.EARTH} element={<EarthPage />} />
        <Route path={routes.MARS} element={<MarsPage />} />
        <Route path={routes.JUPITER} element={<JupiterPage />} />
        <Route path={routes.SATURN} element={<SaturnPage />} />
        <Route path={routes.URANUS} element={<UranusPage />} />
        <Route path={routes.NEPTUN} element={<NeptunPage />} />
        <Route path={routes.CHEMCAM} element={<ChemcamPage />} />
        <Route path={routes.FHAZ} element={<FhazPage />} />
        <Route path={routes.MAHLI} element={<MahliPage />} />
      </Routes>
    </Layouts>
  );
}

export default App;
