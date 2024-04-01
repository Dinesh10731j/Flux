import React, { useEffect, useState } from 'react';
import "../../stylesheet/Header.css";
import { Link } from 'react-router-dom';
import Menu from "../assets/menu.png";
import Moon from "../assets/moon.png";
import Sun from "../assets/sunny.png";
const Header = ({handleTheme,theme}) => {
  const [isOpen,setOpen] = useState(true);

  const handleMenu = ()=>{
    setOpen(!isOpen);
  }


  return (
    <>
       <header  >
        <section className='logo'>
        <div className='logo-item'>
        <div className='fluxlogo'>


        </div>
        <div className='fluxname'>
            <h1>FLUX</h1>
        </div>

        </div>

        </section>
        {
          isOpen? <nav >
            <ul>
            <Link  className= {theme?"whiteColor":"blackColor"} to="/">Home</Link>
              <Link  className= {theme?"whiteColor":"blackColor"} to="/features">Features</Link>
              <Link  className= {theme?"whiteColor":"blackColor"} to="/aboutus">About us</Link>
              <Link  className= {theme?"whiteColor":"blackColor"} to="/blog">Blog</Link>

            </ul>
        </nav>:null
          

           
         
        }
       
        <section className='signupBtn'>
        <Link to="/getstarted"><button>Get Started</button></Link>

        </section>
        <section className='theme_changer'>
          <img src={theme?Sun:Moon} alt='theme_img' onClick={()=>handleTheme()}/>
        </section>
        <section className='menu_icon'>
          <img src={Menu} alt='menubar' onClick={handleMenu}/>
        </section>
       </header>
    </>
  )
}

export default Header