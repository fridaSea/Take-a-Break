import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import MainButton from "../Button/Button";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-container">
          <a href="/" className="logo">
            Take a Break
          </a>
        </div>

        <div className="nav-container">
          <nav className={"nav " + (isOpen ? "nav--open" : "")}>
            <ul className="nav-list">
              {/* <li className="nav-item">
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? "nav-link nav-active" : "nav-link"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive ? "nav-link nav-active" : "nav-link"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink
                  to="/futureSelf"
                  className={({ isActive }) =>
                    isActive ? "nav-link nav-active" : "nav-link"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {({ isActive }) => (
                    <MainButton
                      text="Future Self"
                      onClick={() => {}}
                      variant="navbar"
                      active={isActive}
                    />
                  )}
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div
          className={`hamburger-menu ${isOpen ? "hamburger-menu--open" : ""}`}
          onClick={openMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
