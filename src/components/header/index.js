import React from 'react'
import { Link } from 'react-scroll'
import { NavLink } from 'react-router-dom'
import MobileMenu from '../MobileMenu/MobileMenu'


const Header = (props) => {
  const initialEmail = sessionStorage.getItem("email");
  const [email, setEmail] = React.useState(initialEmail)

  const handleOnClickLogoutButton = () => {
    setEmail('');
    sessionStorage.removeItem("email");
  }

  const renderLoginButton = () => (
    <NavLink className="theme-btn" to="/login"><span className="text">Login</span> <span className="mobile">
      <i className="fi flaticon-user"></i>
    </span></NavLink>
  );

  const renderLogoutButton = () => (
    <NavLink
      activeClass="active"
      className="theme-btn"
      to="/"
      onClick={handleOnClickLogoutButton}
      spy={true} smooth={true} duration={500}
    >
      <span className="text">Logout</span><span className="mobile">
        <i className="fi flaticon-user"></i>
      </span></NavLink>
  )

  const renderProfileButton = () => (
    <NavLink activeClass="active" to="/profile" spy={true} smooth={true} duration={500} >Profile</NavLink>
  )

  return (
    <header id="header">
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <NavLink className="navbar-brand logo" to='/'><small>We</small>Diet<span><i
                    className="fi flaticon-dove"></i></span></NavLink>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-1">
                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                  <button className="menu-close"><i className="ti-close"></i></button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >Home</Link>
                    </li>
                    <li><NavLink activeClass="active" to="/restaurant" spy={true} smooth={true} duration={500} >Restaurant</NavLink></li>
                    <li><NavLink activeClass="active" to="/about" spy={true} smooth={true} duration={500} >About Us</NavLink></li>
                    <li>
                      {email && renderProfileButton()}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-2">
                <div className="header-right">
                  {email
                    ? renderLogoutButton()
                    : renderLoginButton()
                  }
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header;