import React, { useEffect } from 'react';
import { Header } from '../Header';
import styles from './Layouts.module.scss'
import WebFont from 'webfontloader';
import { Footer } from '../Footer';

interface IProps {
  children: JSX.Element
}

export const Layouts = ({ children }: IProps) => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Space Mono']
      }
    });
  }, []);
  return (
    <div className={styles.main_wrapper}>
      <Header />
      <div className={styles.content_wrapper}>{children}</div>
      <Footer />
    </div>
  );
};
