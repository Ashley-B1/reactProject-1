import React from 'react';

import Hero from '../Hero';
import AboutPage from '../AboutPage';
import Skills from '../Skills';
import Portfolio from '../Portfolio';
import ContactForm from '../ContactForm';

const SplashPage = () => {
  return (
    <div className='splash'>
      <Hero />
      <AboutPage />
      <Skills />
      <Portfolio />
      <ContactForm />
    </div>
  )
}

export default SplashPage;
