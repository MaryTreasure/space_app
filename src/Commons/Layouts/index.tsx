import React from 'react';
import { Header } from '../Header';
import styles from './Layouts.module.scss'

interface IProps {
  children: JSX.Element
}

export const Layouts = ({ children }: IProps) => {
  return (
    <div className={styles.main_wrapper}>
      <Header />
      <div className={styles.content_wrapper}>{children}</div>
    </div>
  );
};
