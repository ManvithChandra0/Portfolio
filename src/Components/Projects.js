import React from 'react';
import ProjectBox from './ProjectBox';
import Auto from '../images/Auto.jpeg';
import Emotion from '../images/Emotion.jpeg';
import Weather from '../images/Weather.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox 
          projectPhoto={Weather} 
          projectName="Weather API Project using Spring Boot Microservices" 
          projectGithub="https://github.com/ManvithChandra0/WeatherApiProject"
        />
        <ProjectBox 
          projectPhoto={Emotion} 
          projectName="Real Time Emotion Detection Using CNN" 
          projectGithub="https://github.com/ManvithChandra0/Real-Time-Emotion-Detection-Using-CNN"
        />
        <ProjectBox 
          projectPhoto={Auto} 
          projectName="Auto Mobile Management System Using Mern Stack" 
          projectGithub="https://github.com/ManvithChandra0/MernAmsProject"
        />
      </div>
    </div>
  );
}

export default Projects