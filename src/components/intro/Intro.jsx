import React from 'react'
import "./Intro.css"
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png";
import { NavLink } from 'react-router-dom';
import Vector1 from "../../img/Vector1.png"
import Vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import thumbup from "../../img/thumbup.png"
import Crown from "../../img/crown.png"
import glassesimoji from "../../img/glassesimoji.png"

const Intro = () => {
  return (
    <div className='intro' >
      <div className="i-left">
        <div className="i-name">
            <span>Hy! I Am</span>
            <span>Sourabh Rai Sunahare</span>
            <p>Frontend developer with good skills in web designing and development, producing the quality work</p>
        </div>
        <button className='button i-button' >Hire Me</button>
        <div className="i-icons">
          <NavLink to="https://github.com/fourabh" > 
          <img src={Github} alt="github" />
          </NavLink>
          <img src={LinkedIn} alt="linkedin" />
          <img src={Instagram} alt="instagram" />
        </div>
      </div>
      <div className="i-right">
        {/* <img src={Vector1} alt="Vector1" />
        <img src={Vector2} alt="Vector2" /> */}
        <img src={boy} alt="boy" />
      </div>
    </div>
  )
}

export default Intro;