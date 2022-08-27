import React from 'react'
import { Link } from 'react-router-dom'
import MobileMenu2 from '../MobileMenu2/MobileMenu2';

const Header2 = (props) => {
  const ClickHandler = () => {
    window.scrollTo(10, 0);
  }
  const initialEmail = sessionStorage.getItem("email");
  const [email, setEmail] = React.useState(initialEmail)

  const handleOnClickLogoutButton = () => {
    setEmail('');
    sessionStorage.removeItem("email");
  }

  const renderLoginButton = () => (
    <Link className="theme-btn" to="/login"><span className="text">Login</span> <span className="mobile">
      <i className="fi flaticon-user"></i>
    </span></Link>
  )

  const renderLogoutButton = () => (
    <Link
      className="theme-btn" to="/"
      onClick={handleOnClickLogoutButton}
    >
      <span className="text">Logout</span> <span className="mobile">
        <i className="fi flaticon-user"></i>
      </span>
    </Link>
  )

  const renderProfileButton = () => (
    <Link onClick={ClickHandler} to="/profile">Profile</Link>
  )

  return (
    <header id="header">
      <div className={`wpo-site-header ${props.hclass}`}>
        <nav className="navigation navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-3 d-lg-none dl-block">
                <div className="mobail-menu">
                  <MobileMenu2 />
                </div>
              </div>
              <div className="col-lg-2 col-md-6 col-6">
                <div className="navbar-header">
                  <Link className="navbar-brand logo" to='/'><small>My</small>love<span><i
                    className="fi flaticon-dove"></i></span></Link>
                </div>
              </div>
              <div className="col-lg-8 col-md-1 col-1">
                <div id="navbar" className="collapse navbar-collapse navigation-holder">
                  <button className="menu-close"><i className="ti-close"></i></button>
                  <ul className="nav navbar-nav mb-2 mb-lg-0">
                    <li className="menu-item-has-children">
                      <Link to="/home">Home</Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/restaurant">Restaurant</Link>
                    </li>
                    <li>
                      <Link onClick={ClickHandler} to="/about">About Us</Link>
                    </li>
                    <li className="menu-item-has-children">
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

export default Header2;