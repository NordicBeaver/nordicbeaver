import React, { PropsWithChildren } from 'react';
import styles from './SectionHeading.module.css';

export default function SectionHeading({ children }: PropsWithChildren<{}>) {
  return <h2 className={styles.heading}>{children}</h2>;
}
