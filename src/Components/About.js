import React from 'react';
import Tilt from 'react-parallax-tilt';
import Lottie from 'lottie-react';
import Coder from '../LottieFiles/coder.json';

const About = () => {
  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get to <b>know</b> me!</h1>
          <p>
            I am Skilled in <b>C</b>, <b>Java</b>, and <b>Python</b>, and have extensive experience with web development technologies 
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
        <button className='skill-button'>C</button>
        <button className='skill-button'>Java</button>
        <button className='skill-button'>Python</button>
        <button className='skill-button'>Html</button>
        <button className='skill-button'>CSS</button>
        <button className='skill-button'>SpringBoot</button>
        <button className='skill-button'>React Js</button>
        <button className='skill-button'>Node JS</button>
        <button className='skill-button'>Javascript</button>
        <button className='skill-button'>MySQL</button>
        <button className='skill-button'>MongoDB</button>
        <button className='skill-button'>Hibernate</button>
        <button className='skill-button'>Microservices</button>
        <button className='skill-button'>Tensorflow</button>

      </div>
    </>
  );
}

export default About;
