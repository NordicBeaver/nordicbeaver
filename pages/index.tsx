import type { NextPage } from 'next';
import Head from 'next/head';
import AboutMeSection from '../components/AboutMeSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';

const Home: NextPage = () => {
  return (
    <div>
      <Header></Header>

      <Head>
        <title>Nordic Beaver - full-stack freelance developer.</title>
        <meta
          name="description"
          content="This is my personal website where I showcase the prjects I make for teh web using Javascript, Typescript, NodeJs, React etc."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero></Hero>
      <AboutMeSection></AboutMeSection>
      <SkillsSection></SkillsSection>
      <ProjectsSection></ProjectsSection>
      <ContactSection></ContactSection>

      <Footer></Footer>
    </div>
  );
};

export default Home;
