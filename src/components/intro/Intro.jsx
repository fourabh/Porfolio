import React from 'react'
import "./Intro.css"
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png"
import Instagram from "../../img/instagram.png";

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
          
          <img src={Github} alt="github" />
          
          <img src={LinkedIn} alt="linkedin" />
          <img src={Instagram} alt="instagram" />
        </div>
      </div>
      <div className="i-right">
        I am Right
      </div>
    </div>
  )
}

export default Intro;