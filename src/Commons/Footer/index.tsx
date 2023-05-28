import React from 'react';
import FacebookIcon from '../../images/footer/arcticons_facebook.svg';
import InstagramIcon from '../../images/footer/arcticons_instagram.svg';
import YoutubeIcon from '../../images/footer/arcticons_youtube.svg';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <a>
        <img src={YoutubeIcon} alt="Facebook" />
      </a>
      <a>
        <img src={FacebookIcon} alt="Facebook" />
      </a>
      <a>
        <img src={InstagramIcon} alt="Facebook" />
      </a>
    </div>
  );
};
