import React from 'react';
import FacebookIcon from '../../images/footer/arcticons_facebook.svg';
import InstagramIcon from '../../images/footer/arcticons_instagram.svg';
import YoutubeIcon from '../../images/footer/arcticons_youtube.svg';
import FacebookIconMob from '../../images/footer/arcticons_facebook_mobile.svg';
import InstagramIconMob from '../../images/footer/arcticons_instagram_mobile.svg';
import YoutubeIconMob from '../../images/footer/arcticons_youtube_mobile.svg';
import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <>
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

    <div className={styles.footerMobile}>
      <a>
        <img src={YoutubeIconMob} alt="Facebook" />
      </a>
      <a>
        <img src={FacebookIconMob} alt="Facebook" />
      </a>
      <a>
        <img src={InstagramIconMob} alt="Facebook" />
      </a>
    </div>
    </>
  );
};
