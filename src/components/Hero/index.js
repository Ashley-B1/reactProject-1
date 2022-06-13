import "./Hero.css";

import NavBar from "../NavBar";

const Hero = () => {
  return (
    <div className="hero-container">
      <NavBar />
      <div className="introduction">
        <div className="hero-about">
          <h1 id="intro">Hello, I'm</h1>
          <h1 id="name">Jane Doe</h1>
          <h1 id="career">UI Developer. UX Designer. Problem Solver.</h1>
        </div>
        <div className="hero-opt">
          <a className="btn hero-btn">Info</a>
          <a className="btn hero-btn">Portfolio</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
