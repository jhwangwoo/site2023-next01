import React from "react";
import Slider from "../components/slider/Slider";
import Intro from "../components/intro/Intro";
import Portfolio from "../components/portfolio/Portfolio";
import Youtube from "../components/youtube/Youtube";
import Unsplash from "../components/unsplash/Unsplash";
import Movie from "../components/movie/Movie";

const Home = () => {
  return (
    <>
      <Slider />
      <Intro />
      <Portfolio />
      <Youtube />
      <Unsplash />
      <Movie />
    </>
  );
};
export default Home;
