import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";
import Group from "../assets/group.png"
import Grp from "../assets/grp.png"
import Grpp from "../assets/grpp.png"
import Tag from "../assets/tag.png"
import Girl from "../assets/girl.svg"

const Home = () => {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/hero");
  };
  return (
    <div className="home1">
      <div className="home-child" />
      <img className="home-item"  src={Girl}/>
      <div className="gafarillo2">
        <span>{`Gafarillo `}</span>
        <span className="span1">.</span>
      </div>
      <b className="hi-i-am-container1">
        <span>{`Hi! `}</span>
        <span className="i-am1"> I AM</span>
      </b>
      <b className="gafarillo3">Gafarillo</b>
      <div className="home3">Home</div>
      <div className="uiux-designer-with-container1">
        <p className="im-glad-that">
          UI/UX Designer with over 3 years of experience
        </p>
        <p className="im-glad-that">with great product designing skills.</p>
      </div>
      <div className="instagram1">Instagram</div>
      <div className="youtube1">YouTube</div>
      <div className="services1">Services</div>
      <div className="download-cv1">Download CV</div>
      <div className="home-inner" />
      <div className="home-child1" />
      <div className="uiux1">UI/UX</div>
      <div className="home-child2" />
      <div className="hire-me1">Hire Me</div>
      <div className="email-me1">Email Me</div>
      <b className="years2">3 Years</b>
      <b className="b2">40+</b>
      <b className="los-angeles2">Los Angeles</b>
      <div className="experience1">Experience</div>
      <div className="projects1">Projects</div>
      <div className="living-place2">Living Place</div>
      <div className="home-child3" />
      <div className="projects-case-studies1">Projects Case Studies</div>
      <div className="sneakers-store-group">
        <div className="sneakers-store1">Sneakers Store</div>
        <div className="line-div" />
        <img className="group-icon3" alt="" src="/group.svg" />
      </div>
      <div className="flames-fitness-group">
        <div className="flames-fitness1">Flames Fitness</div>
        <div className="group-child1" />
        <img className="group-icon4" alt="" src="/group1.svg" />
      </div>
      <div className="thenx-store-group">
        <div className="thenx-store1">Thenx Store</div>
        <div className="group-child2" />
        <img className="group-icon5" alt="" src="/group2.svg" />
      </div>
      <div className="home-child4" />
      <div className="view-behance1">View Behance</div>
      <div className="home-child5">
        {/* <Link to="/hero" /> */}
      </div>
      <div className="rectangle-parent">
        <div className="group-child3" />
        <div className="group-child4" />
        <div className="email-me2">Email Me</div>
        <div className="im-glad-that-container">
          <p className="im-glad-that">{`I’m glad that you have shown your interest in my UI UX Designing portfolio website. `}</p>
          <p className="im-glad-that">Please feel free to contact me</p>
        </div>
        <div className="group-child5" />
        <Link to="/hero" className="contact-me email" onClick={handleContact}>Contact me</Link>
        <div className="cancel">
          <Link className="email" to="/hero">Cancel</Link>
        </div>
        <img className="group-child6"  src={Group} />
        <img className="group-icon6" alt="" src={Grp} />
        <img className="group-icon7" alt="" src={Grpp} />
        <Link to="/hero">
          <img
            className="iconsaxlineartagcross"
           
            src={Tag}
          />
        </Link>
      </div>
    </div>
  );
};

export default Home;
