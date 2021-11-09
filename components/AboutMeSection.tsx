import React from 'react';
import styles from './AboutMeSection.module.css';
import Container from './Container';
import SectionHeading from './SectionHeading';

export default function AboutMeSection() {
  return (
    <section className={styles.aboutMeSection}>
      <Container>
        <SectionHeading>About Me</SectionHeading>
        <p>
          I graduated a univesity as a mathematician/programmer about 6 years ago and I&apos;ve worked as a developer
          since then. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet dui eu erat interdum
          tincidunt. Donec condimentum leo risus, rhoncus mattis ipsum ultricies sed. Nam tincidunt ligula id orci
          pretium, ac sagittis neque elementum. Vivamus vitae posuere purus. Sed imperdiet scelerisque varius. Nam
          aliquet odio laoreet, interdum velit eget, laoreet nibh. Nam eget felis mollis, condimentum turpis at, commodo
          odio. Aliquam aliquam eros ligula, nec tristique mi rhoncus non. Donec pulvinar ante eu nisi ultricies
          faucibus. Suspendisse est ipsum, aliquam nec enim vel, accumsan tincidunt lacus. Sed aliquam, velit sit amet
          ultrices eleifend, augue diam eleifend risus, sed tincidunt nibh massa eu nulla.
        </p>
      </Container>
    </section>
  );
}
