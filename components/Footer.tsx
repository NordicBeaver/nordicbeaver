import React from 'react';
import Container from './Container';
import styles from './Footer.module.css';
import * as feather from 'react-feather';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <span className={styles.trademark}>2021 - Nordic Beaver</span>
          <div className={styles.social}>
            <a
              href="https://github.com/NordicBeaver"
              className={styles.link}
              target="_blank"
              rel="noreferrer"
              title={`GitHub - NordicBeaver`}
            >
              <feather.GitHub></feather.GitHub>
            </a>
            <a
              href="https://www.youtube.com/channel/UCTsGAPutmiTmqmmbtYr51gw"
              className={styles.link}
              target="_blank"
              rel="noreferrer"
              title={`YouTube - NordciBeaver`}
            >
              <feather.Youtube></feather.Youtube>
            </a>
            <a href="mailto: nordicbeaver@nordicbeaver.io" className={styles.link} title={`Send Email`}>
              <feather.Mail></feather.Mail>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
