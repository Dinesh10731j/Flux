import React, { useState } from 'react';
import "../../stylesheet/Header.css";
import { Link } from 'react-router-dom';
import Menu from "../assets/menu.png"
const Header = () => {
  const [isOpen,setOpen] = useState(true)

  const handleMenu = ()=>{
    setOpen(!isOpen)
  }
  return (
    <>
       <header>
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
          isOpen? <nav>
            <ul>
            <Link className='link' to="/">Home</Link>
              <Link className='link' to="/features">Features</Link>
              <Link className='link' to="/aboutus">About us</Link>
              <Link className='link' to="/blog">Blog</Link>
          

            </ul>
        </nav>:null
          

           
         
        }
       
        <section className='signupBtn'>
        <Link to="/getstarted"><button>Get Started</button></Link>

        </section>
        <section className='menu_icon'>
          <img src={Menu} alt='menubar' onClick={handleMenu}/>
        </section>
       </header>
    </>
  )
}

export default Header