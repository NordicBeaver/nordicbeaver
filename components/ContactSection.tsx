import React from 'react';
import styles from './ContactSection.module.css';
import Container from './Container';
import SectionHeading from './SectionHeading';

export default function ContactSection() {
  return (
    <section className={styles.contactSection}>
      <Container>
        <SectionHeading>Contact Me</SectionHeading>
        <p>
          If you have an offer to work on a project, or a question, or just want to chat, feel free to send me an email
          at{' '}
          <a href="mailto: nordicbeaver@nordicbeaver.io" className={styles.mailLink}>
            nordicbeaver@nordicbeaver.io
          </a>
        </p>
      </Container>
    </section>
  );
}
