import React from "react";
import Hero from "../../components/LandingPage/Hero";
import { heroContent } from "../../data/Herocontent";
import AglivoStory from "../../components/AboutPage/AglivoStory";
import MeetTeam from "../../components/AboutPage/MeetTeam";
import ChooseAglivo from "../../components/AboutPage/ChooseAglivo";

const About = () => {
  return (
    <>
      <Hero {...heroContent.about} />
      <AglivoStory />
      <MeetTeam />
      <ChooseAglivo/>
    </>
  );
};

export default About;
