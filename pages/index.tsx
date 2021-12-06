import type { NextPage } from 'next';
import Head from 'next/head';
import AboutMeSection from '../components/AboutMeSection';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero></Hero>
      <AboutMeSection></AboutMeSection>
      <SkillsSection></SkillsSection>
      <ProjectsSection></ProjectsSection>
    </div>
  );
};

export default Home;
