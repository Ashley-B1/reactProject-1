import React from 'react';

import Hero from '../Hero';
import AboutPage from '../AboutPage';
import Skills from '../Skills';
import Portfolio from '../Portfolio';

const SplashPage = () => {
  return (
    <div className='splash'>
      <Hero />
      <AboutPage />
      <Skills />
      <Portfolio />
    </div>
  )
}

export default SplashPage;
