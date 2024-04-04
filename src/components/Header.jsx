import React, { useEffect, useState } from 'react';
import "../../stylesheet/Header.css";
import { Link, useLocation } from 'react-router-dom';
import Menu from "../assets/menu.png";
import Moon from "../assets/moon.png";
import Sun from "../assets/sunny.png";

const Header = ({ handleTheme, theme }) => {
  const [isOpen, setOpen] = useState(true);
  const location = useLocation(); // Get current URL location

  const handleMenu = () => {
    setOpen(!isOpen);
  }

  return (
    <>
      <header>
        <section className='logo'>
          <div className='logo-item'>
            <div className='fluxlogo'></div>
            <div className='fluxname'>
              <h1>FLUX</h1>
            </div>
          </div>
        </section>

        {isOpen ?
          <nav>
            <ul>
              <Link className={theme ? "whiteColor" : "blackColor"} to="/" style={{ color: location.pathname === '/' ? '#7ed6df' : 'inherit' }}>Home</Link>
              <Link className={theme ? "whiteColor" : "blackColor"} to="/features" style={{ color: location.pathname === '/features' ? '#7ed6df' : 'inherit' }}>Features</Link>
              <Link className={theme ? "whiteColor" : "blackColor"} to="/aboutus" style={{ color: location.pathname === '/aboutus' ? '#7ed6df' : 'inherit' }}>About us</Link>
              <Link className={theme ? "whiteColor" : "blackColor"} to="/blog" style={{ color: location.pathname === '/blog' ? '#7ed6df' : 'inherit' }}>Blog</Link>
            </ul>
          </nav> : null
        }

        <section className='signupBtn'>
          <Link to="/getstarted"><button>Get Started</button></Link>
        </section>

        <section className='theme_changer'>
          <img src={theme ? Sun : Moon} alt='theme_img' onClick={handleTheme} />
        </section>

        <section className='menu_icon'>
          <img src={Menu} alt='menubar' onClick={handleMenu} />
        </section>
      </header>
    </>
  )
}

export default Header;
