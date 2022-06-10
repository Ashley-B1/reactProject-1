import logo from '../../images/logo.svg';
import './NavBar.css'

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
            <li className='nav-items'>Home</li>
          </a>
          <a className='nav-link'>
            <li className='nav-items'>Portfolio</li>
          </a>
          <a className='nav-link'>
            <li className='nav-items'>Contact</li>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
