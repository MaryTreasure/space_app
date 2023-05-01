import React from 'react';
import styles from './App.module.scss';
import { Layouts } from './Commons/Layouts';
import { MainPage } from './Containers/MainPage';

function App() {
  return (
    <div className={styles.wrapper}>
      <Layouts>
        <MainPage />
      </Layouts>
    </div>
  );
}

export default App;
