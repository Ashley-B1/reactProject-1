import React from 'react';
import './Footer.css'

import facebook from '../../images/facebook.svg';
import linkedin from '../../images/linkedin.svg';
import pinterest from '../../images/pinterest.svg';
import email from '../../images/email.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-sm'>
        <a href='#'>
          <img alt='sm' className='sm-img' src={facebook} />
        </a>
        <a href='#'>
          <img alt='sm' className='sm-img' src={linkedin} />
        </a>
        <a href='#'>
          <img alt='sm' className='sm-img' src={pinterest} />
        </a>
        <a href='#'>
          <img alt='sm' className='sm-img' src={email} />
        </a>
      </div>

      <div className='footer-contact'>
        <p>Phone: (999)874-9909</p>
        <p>Email: janedoe@gmail.com</p>
      </div>

      <div className='footer-info'>
        <div className='legal'>
          <h5>Jane Doe</h5>
          <p>Copyright ©️ 2021</p>
          <p>NY</p>
        </div>

        <div className='foot-links'>
          <a className='foot-title' href='#'>Home</a>

          <div className='foot-port'>
            <span className='foot-title'><a href='#'>Portfolio</a></span>
            <ul className='foot-list'>
              <li className='foot-items'>
                <a href='#'>Project1</a>
              </li>
              <li className='foot-items'>
                <a href='#'>Project2</a>
              </li>
              <li className='foot-items'>
                <a href='#'>Project3</a>
              </li>
              <li className='foot-items'>
                <a href='#'>See All</a>
              </li>
            </ul>
          </div>

          <div className='resume-link'>
            <span className='foot-title'><a href='#'>Resume</a></span>
            <ul className='foot-list'>
              <li className='foot-items'>
                <a href='#'>Download</a>
              </li>
            </ul>
          </div>

          <a className='foot-title' href='#'>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
