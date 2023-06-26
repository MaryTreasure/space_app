import React from 'react';
import { Header } from '../Header';
import styles from './Layouts.module.scss';
import { Footer } from '../Footer';

interface IProps {
  children: JSX.Element;
}

export const Layouts = ({ children }: IProps) => {
  return (
    <div className={styles.mainWrapper}>
      <Header />
      <div className={styles.contentWrapper}>{children}</div>
      <Footer />
    </div>
  );
};
