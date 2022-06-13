import logo from '../../images/logo.svg';
import './NavBar.css'

import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-left">
        <a className='logo-link'>
          <img src={logo} />
        </a>
      </div>
      <div className='nav-right'>
        <ul className='nav-options'>
          <a className='nav-link'>
            <li className='nav-items'>
            <Link to='/'>
                Home
            </Link>
            </li>
          </a>
          <a className='nav-link'>
            <li className='nav-items'>
            <Link to='/portfolio'>
              Portfolio
            </Link>
            </li>
          </a>
          <a className='nav-link'>
            <li className='nav-items'>
              <Link to='/contact'>
                Contact
              </Link>
            </li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
