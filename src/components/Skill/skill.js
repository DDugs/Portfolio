import React from 'react'
import './skill.css';
import uidesign from '../../assets/ui-design.png'
import webdesign from '../../assets/website-design.png'
import appdesign from '../../assets/app-design.png'

const Skill = () => {
  return (
    <section id='skill'>
        <span className='skilltitle'>What I Do</span>
        <span className='skilldesc'>I have not much skills in Frontend and Backend as i am still learning </span>
        <div className='skillbars'>
            <div className='skillbar'>
                <img src={uidesign} alt='UIdesign' className='skillbarimg'/>
                <div className='skillbartext'>
                    <h2>Frontend</h2>
                    <p>React.js, HTML, CSS, JavaScript</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={webdesign} alt='UIdesign' className='skillbarimg'/>
                <div className='skillbartext'>
                    <h2>Backend</h2>
                    <p>Python, Mysql</p>
                </div>
            </div>
            <div className='skillbar'>
                <img src={appdesign} alt='Appdesign' className='skillbarimg'/>
                <div className='skillbartext'>
                    <h2>Others</h2>
                    <p>Git, Github, Netlify, VS Code</p>
                </div>
            </div>
        </div>
    </section>   
);
}
export default Skill;
