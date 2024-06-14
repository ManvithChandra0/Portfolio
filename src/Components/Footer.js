import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Manvith Chandra</h4>
      <h4>Copyrights Reserved By Manvith Chandra &copy; 2024 </h4>
      <div className='footerLinks'>
        <a href="https://github.com/ManvithChandra0" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/manvith-chandra-07b380223/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:c.manvithchandra@gmail.com' target='_blank'><GrMail/></a>
      </div>
    </footer>
  )
}

export default Footer