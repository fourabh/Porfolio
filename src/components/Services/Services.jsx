import React from 'react'
import "./Services.css"
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Cards/Card'
import resume from "./RESUME.pdf"

const Services = () => {
  return (
    <div className='services' >

        {/* left */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa reprehenderit! Mollitia, doloribus!</p>

            <a href={resume} download >
            <button className='button s-button' >Download CV</button>
            </a>

            <div className='blur s-blur' style={{background: "#ABF1FF94"}}  ></div>
        </div>

        {/* right side */}
        <div className="cards">
            <div style={{left:"4rem"}}  >
                <Card
                emoji={HeartEmoji}
                heading={"Design"}
                detail={"Figma, Sketch, Adobe, Photoshop"}
                />
            </div>

            {/* 2nd card  */}
            <div style={{top:"12rem",left:"-14rem"}} >
                <Card 
                emoji={Glasses}
                heading={"Developer"}
                detail={"Html,CSS,JavaScript,React"}
                />
            </div>

            {/* 3rd card  */}
            <div style={{top:"19rem",left:"2rem"}} >
                <Card 
                emoji={Humble}
                heading={"UI/UX"}
                detail={"khgsvkgs uyhguhy  uk hbd uygduyd uyd wuywd uywdg"}
                />
            </div>
            <div className='blur s-blur2' style={{background: "var(--purple)"}} ></div>
        </div>

    </div>
  )
}

export default Services
