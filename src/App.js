import {
  Routes,
  Route
} from 'react-router-dom'

import SplashPage from './components/SplashPage';
import PortfolioPage from './components/Portfolio/PortfolioPage';
import ContactPage from './components/ContactForm/ContactPage';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <SplashPage /> } />
        <Route path='/portfolio' element={ <PortfolioPage /> } />
        <Route path='/contact' element={ <ContactPage /> } />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
