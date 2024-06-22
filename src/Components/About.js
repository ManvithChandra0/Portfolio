import React from 'react';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faDatabase, faLeaf } from '@fortawesome/free-solid-svg-icons';
import { faHtml5, faCss3Alt, faJava, faPython, faReact, faNodeJs, faJs, faAws } from '@fortawesome/free-brands-svg-icons'; // Import brand icons

import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            I am skilled in <b>C</b>, <b>Java</b>, and <b>Python</b>, and have extensive experience with web development technologies 
            such as <b>HTML</b>, <b>CSS</b>, <b>Hibernate</b>, <b>Spring Boot</b>, <b>Microservices</b>, <b>React JS</b>, 
            <b>Node JS</b>, <b>MySQL</b>, and <b>MongoDB</b>.<br /><br />

            I am also skilled in full-stack development, machine learning, and deep learning, with a positive attitude, strong team spirit, and leadership capabilities.<br /><br />
            Currently, I am working on a few projects using the <b>MERN</b> stack and conducting research in identifying grape leaf diseases using deep learning algorithms.<br /><br />
            Presently, I am pursuing a B.Tech. in Computer Science and Engineering with Honors at K L University, where I have maintained a GPA of 9.54/10.0.<br />
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie 
              className="illustration" 
              animationData={Coder} 
              loop={true} 
            />
          </Tilt>
        </div>
      </div>
      
      <h1 className='SkillsHeading'> Skills</h1>
      <div className='skills'>
        <button className='skill-button'><FontAwesomeIcon icon={faCode} size="2x" /> C</button>
        <button className='skill-button'><FontAwesomeIcon icon={faJava} size="2x" /> Java</button>
        <button className='skill-button'><FontAwesomeIcon icon={faPython} size="2x" /> Python</button>
        <button className='skill-button'><FontAwesomeIcon icon={faHtml5} size="2x" /> HTML</button>
        <button className='skill-button'><FontAwesomeIcon icon={faCss3Alt} size="2x" /> CSS</button>
        <button className='skill-button'><FontAwesomeIcon icon={faDatabase} size="2x" /> SpringBoot</button>
        <button className='skill-button'><FontAwesomeIcon icon={faReact} size="2x" /> React JS</button>
        <button className='skill-button'><FontAwesomeIcon icon={faNodeJs} size="2x" /> Node JS</button>
        <button className='skill-button'><FontAwesomeIcon icon={faJs} size="2x" /> JavaScript</button>
        <button className='skill-button'><FontAwesomeIcon icon={faDatabase} size="2x" /> MySQL</button>
        <button className='skill-button'><FontAwesomeIcon icon={faDatabase} size="2x" /> MongoDB</button>
        <button className='skill-button'><FontAwesomeIcon icon={faDatabase} size="2x" /> Hibernate</button>
        <button className='skill-button'><FontAwesomeIcon icon={faAws} size="2x" /> AWS</button>
        <button className='skill-button'><FontAwesomeIcon icon={faLeaf} size="2x" /> TensorFlow</button>
      </div>
    </>
  );
}

export default About;
