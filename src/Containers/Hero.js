import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import Girl from "../assets/girl.svg"

const Hero = () => {
    const [showText, setShowText] = useState(false);

  const handleMouseEnter = () => {
    setShowText(true);
  };

  const handleMouseLeave = () => {
    setShowText(false);
  };
  return (
    <div className="hero">
      <div className="hero-child" />
      <img className="hero-item" alt="" src={Girl}
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
      />
      {showText && (
        <div className="image-hover-text"><div className="ellipse-div" />
        <div className="home2-child5" />
        <b className="bring-real-life-container">
          <span>Bring Real Life Ideas Into </span>
          <span className="design">DESIGN</span>
          <span> Is My Passion</span>
        </b>
        <b className="years1">24 Years</b>
        <b className="harvard">Harvard</b>
        <b className="los-angeles1">Los Angeles</b>
        <b className="photography">Photography</b>
        <b className="b1">4.0</b>
        <div className="age">Age</div>
        <div className="university">University</div>
        <div className="living-place1">Living Place</div>
        <div className="hobby">Hobby</div>
        <div className="gpa">GPA</div>
        </div>
      )}
      <div className="gafarillo4">
        <span>{`Gafarillo `}</span>
        <span className="span2">.</span>
      </div>
      <b className="hi-i-am-container2">
        <span>{`Hi! `}</span>
        <span className="i-am2"> I AM</span>
      </b>
      <b className="gafarillo5">Gafarillo</b>
      <div className="home4">
        <Link to="/home" className='email'>Home</Link>
      </div>
      <div className="uiux-designer-with-container2">
        <p className="uiux-designer-with2">
          UI/UX Designer with over 3 years of experience
        </p>
        <p className="uiux-designer-with2">with great product designing skills.</p>
      </div>
      <div className="instagram2">Instagram</div>
      <div className="youtube2">YouTube</div>
      <div className="services2">Services</div>
      <div className="download-cv2">Download CV</div>
      <div className="hero-inner" />
      <div className="hero-child1" />
      <div className="uiux2">UI/UX</div>
      <div className="hero-child2" />
      <div className="hire-me2">Hire Me</div>
      <div className="email-me3">
        <Link className='email' to="/home">Email Me</Link>
      </div>
      <b className="years3">3 Years</b>
      <b className="b3">40+</b>
      <b className="los-angeles3">Los Angeles</b>
      <div className="experience2">Experience</div>
      <div className="projects2">Projects</div>
      <div className="living-place3">Living Place</div>
      <div className="hero-child3" />
      <div className="projects-case-studies2">Projects Case Studies</div>
      <div className="sneakers-store-container">
        <div className="sneakers-store2">Sneakers Store</div>
        <div className="group-child7" />
        <img className="group-icon8" alt="" src="/group.svg" />
      </div>
      <div className="flames-fitness-container">
        <div className="flames-fitness2">Flames Fitness</div>
        <div className="group-child8" />
        <img className="group-icon9" alt="" src="/group1.svg" />
      </div>
      <div className="thenx-store-container">
        <div className="thenx-store2">Thenx Store</div>
        <div className="group-child9" />
        <img className="group-icon10" alt="" src="/group2.svg" />
      </div>
      <div className="hero-child4" />
      <div className="view-behance2">View Behance</div>
    </div>
  );
};

export default Hero;
