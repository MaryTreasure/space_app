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

function App() {
  return (
    <div className={styles.wrapper}>
      <Layouts>
        <Routes>
          <Route path={routes.MAIN} element={<MainPage />} />
          <Route path={routes.INFOPAGE} element={<InfoPage />} />
          <Route path={routes.APOD} element={<PictureOfDayPage />} />
          <Route path={routes.AUTH} element={<AuthPage />} />
          <Route path={routes.GALLERY} element={<GalleryPage />} />
        </Routes>
      </Layouts>
    </div>
  );
}

export default App;
