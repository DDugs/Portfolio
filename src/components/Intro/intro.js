import React from 'react'
import './intro.css'
import bg from '../../assets/image.png';
import {Link} from 'react-scroll';
import btnimg from '../../assets/hireme.png'

const intro = () => {
  return (
    <section id="intro">
    <div className="introcontent">
        <span className="hello">Hello,</span>
        <span className="introtext">I'm, <span className="introname">Dhruv</span> <br />A Tech Enthusiast</span>
        <p className='intropara'>"Embrace the ever-evolving world of technology,</p>
        <p className='intropara'>where innovation knows no bounds, and possibilities are limitless."</p>
        <Link><button className='btn'><img src={btnimg} alt='' className='btnimg'/>Resume</button></Link>
    </div>
    <img src={bg} alt='Profile' className='bg' />
    </section>
  )
}

export default intro;
