import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from "react-icons/ai";
import { BsPerson, BsCodeSlash } from "react-icons/bs";
import { CgFileDocument } from "react-icons/cg";
import { BsDownload } from "react-icons/bs";

const Nav = () => {
    const [navbarBlur, setNavbarBlur] = useState(false);
    const googleDriveUrl = 'https://drive.google.com/file/d/1xI3AZHBsZGhkYsnhH3wrMOYP-bkvZRCA/view'; // Replace with your Google Drive file ID

    function scrollHandler() {
        if (window.scrollY >= 20) {
            setNavbarBlur(true);
        } else {
            setNavbarBlur(false);
        }
    }

    var showMenu = () => {
        var bar = document.getElementsByClassName("bar");
        var ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.toggle("barOne");
        bar[1].classList.toggle("barTwo");
        bar[2].classList.toggle("barThree");

        ham[0].classList.toggle("showNavbar");
    }

    var hideMenu = () => {
        var bar = document.getElementsByClassName("bar");
        var ham = document.getElementsByClassName("NavbarLinks");
        bar[0].classList.remove("barOne");
        bar[1].classList.remove("barTwo");
        bar[2].classList.remove("barThree");
        ham[0].classList.remove("showNavbar");
    }

    window.addEventListener("scroll", scrollHandler);

    return (
        <nav className={navbarBlur ? 'Navbar blur' : 'Navbar'}>

            <h1 title='Reload' onClick={() => window.location.reload(true)} className='Logo'>Manvith Chandra</h1>

            <div className='Hamburger' onClick={showMenu}>
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </div>

            <ul className='NavbarLinks'>
                <li onClick={hideMenu}><Link to="/"><AiOutlineHome /> Home</Link></li>
                <li onClick={hideMenu}><Link to="/About"><BsPerson /> About</Link></li>
                <li onClick={hideMenu}><Link to="/Project"><BsCodeSlash /> Projects</Link></li>
                <li onClick={hideMenu}><Link to="/Certifications"><CgFileDocument /> Certifications</Link></li>

                <li onClick={hideMenu}>
                    <a href={googleDriveUrl} target='_blank' rel="noopener noreferrer" download="Devansh's Resume">
                        <BsDownload /> Download CV
                    </a>
                </li>
            </ul>

        </nav>
    )
}

export default Nav;
