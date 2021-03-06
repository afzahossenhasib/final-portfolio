import React, { useState } from 'react';
import logo from '../../../Images/pic/HASIB.png'
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {

    // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)

    return (
        <div>
            <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <Link to='/'><img src={logo} alt='' /></Link>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li><Link className='btn_shadow' to='/'>Home</Link></li>
                <li><Link className='btn_shadow' to='/about'>About</Link></li>
                  <li><Link className='btn_shadow' to='/project'>Projects</Link></li>
                  <li><Link className='btn_shadow' to='/resume'>Resume</Link></li>
                  <li><Link className='btn_shadow' to='/blog'>Blog</Link></li>
                  <li><a className='btn_shadow' href="#contact">Contact</a></li>
            </ul>

            <button className='t-btn' onClick={() => setMobile(!Mobile)}>
            {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
        </div>
    );
};

export default Header;