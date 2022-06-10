import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className='about-page'>
      <div className='intro-about'>
        <h1 className='about-title'>About Me</h1>
        <i className='about-intro'>
          Sharing a little bit of my story...
        </i>
      </div>
      <div className='abt-overview'>
        <h2 className='abt-title'>General Overview</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
        </p>
      </div>
      <div className='abt-stats'>
        <h2 className='abt-title'>Statistics</h2>
        <i className='stat-intro'>And for those that don't fancy reading:</i>
        <ul className='my-stats'>
          <li className='stats-item'>
            Male, 200 years old.
          </li>
          <li className='stats-item'>
            Five feet 110 inches
          </li>
          <li className='stats-item'>
            Favorite fonts: Roboto
          </li>
          <li className='stats-item'>
            Loves to learn new things
          </li>
        </ul>
      </div>
      <div className='contact-btn'>
        <a className='abt-btn'>
          Contact
        </a>
      </div>
    </div>
  )
}

export default AboutPage
