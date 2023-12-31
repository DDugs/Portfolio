import React, { useState } from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png'
import menu from '../../assets/menu.png'

const Navbar = () => {
    const[showMenu, setShowMenu] = useState(false);
    return (
       <nav className="navbar">
       <img src= { logo } alt='Logo' className='logo' />
       <div className='desktopMenu'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenulistitem'>Home</Link>
        <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenulistitem'>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenulistitem'>Portfolio</Link>

       </div>
       <button className='desktopMenubtn' onClick={() => {
        document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
       }}>
           <img src={contactImg} alt="" className='desktopMenuimg' />Contact Me</button>
           <img src= {menu} alt='Menu' className='mobmenu' onClick={()=>setShowMenu(!showMenu)} />
           <div className='navMenu'style={{display: showMenu? 'flex':'none'}}>
           <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listitem' onClick={()=>setShowMenu(false)}>Home</Link>
           <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-100} duration={500} className='listitem'onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='listitem'onClick={()=>setShowMenu(false)}>Portfolio</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-100} duration={500} className='listitem'onClick={()=>setShowMenu(false)}>Contact</Link>  
        
       </div>
       </nav>
    )
}

export default Navbar;