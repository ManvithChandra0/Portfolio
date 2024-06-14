import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>Manvith Chandra</b></h1>
          <Typed/>   
        </div>

        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
    I am Skilled in <b>C</b>, <b>Java</b>, and <b>Python</b>, and have extensive experience with web development technologies 
    such as <b>HTML</b>, <b>CSS</b>, <b>Hibernate</b>, <b>Spring Boot</b>, <b>Microservices</b>, <b>React JS</b>, 
    <b>Node JS</b>, <b>MySQL</b>, and <b>MongoDB</b>.<br />
    <br></br>

    I am also skilled in full-stack development, machine learning, and deep learning, with a positive attitude, strong team spirit, and leadership capabilities.<br /><br />
    Currently, I am working on a few projects using the <b>MERN</b> stack and conducting research in identifying grape leaf diseases using deep learning algorithms.<br />
    <br></br>
    Presently, I am pursuing a B.Tech. in Computer Science and Engineering with Honors at K L University, where I have maintained a GPA of 9.54/10.0.<br />
</p>

        </div>
        
      </div>
    </div>
  )
}

export default Home