import React from 'react'
import './contact.css';
import fbicon from '../../assets/facebook-icon.png';
import igicon from '../../assets/instagram.png';

const Contact = () => {
  return (
    <section className='contactpage'>
        <div id='contact'>
            <h1 className='contactpagetitle'>Contact Me</h1>
            <span className='contactdesc'>Feel free to reach out ot me</span>
            <form className='contactform'>
                <input type='text' className='name' placeholder='Your Name' />
                <input type='text' className='email' placeholder='Your Email' />
                <textarea className='msg' name='message' rows="5" placeholder='Message'></textarea>
                <button type='submit' value='Send' className='submitbtn'>Submit</button>
                <div className='links'>
                    <img src={fbicon} alt='' className='link' />
                    <img src={igicon} alt='' className='link' />
                </div>
            </form>
        </div>

    </section>
  )
}

export default Contact
