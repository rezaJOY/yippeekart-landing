import classNames from "classnames";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
const Header = () => {
  //? @___Locale State___@
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <header className="headerSection" id="headerSection">
      <div className="container">
        <div className="headerArea">
          <div className="brandLogoWrapper">
            <a href="/">
              <img src="logo.png" alt="brandLogo" className="brandLogo" />
            </a>
          </div>
          <div className="mainMenu">
            <div
              className={classNames("sidebar", {
                ["sidebarOpen"]: showSidebar,
              })}
              id="sidebar"
            >
              <div className="sidebarInnr">
                {/* <!-- update start--> */}
                <div
                  className="sidebarCloseIcon"
                  id="sidebarCloseIcon"
                  onClick={() => setShowSidebar(false)}
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15.414"
                      height="15.414"
                      viewBox="0 0 15.414 15.414"
                    >
                      <g
                        id="Menu_icon"
                        data-name="Menu icon"
                        transform="translate(-1.793 2.207)"
                      >
                        <line
                          id="Line_3"
                          data-name="Line 3"
                          x1="19.799"
                          transform="translate(2.5 -1.5) rotate(45)"
                          fill="none"
                          stroke="#000"
                          strokeWidth="2"
                        ></line>{" "}
                        <line
                          id="Line_1"
                          data-name="Line 1"
                          x1="19.799"
                          transform="translate(2.5 12.5) rotate(-45)"
                          fill="none"
                          stroke="#000"
                          strokeWidth="2"
                        ></line>{" "}
                      </g>{" "}
                    </svg>
                  </span>
                </div>
                {/* <!-- update end --> */}
                <nav className="navbarNav">
                  <ul className="navbarList">
                    <li className="navbarItem">
                      <Link
                        to="/"
                        className="navbarLink"
                        onClick={() => setShowSidebar(false)}
                      >
                        Home
                      </Link>
                    </li>
                    <li className="navbarItem">
                      <Link
                        to="/about"
                        className="navbarLink"
                        onClick={() => setShowSidebar(false)}
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="getAppBtnWrapper">
                  <a href="https://play.google.com/store/apps/details?id=com.yippeekart.app">
                    <button type="button" className="getAppBtn btn">
                      Get The App
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div
              className={classNames("hamburgerIcon", {
                ["sidebarOpen"]: showSidebar,
              })}
              id="hamburger"
              onClick={() => setShowSidebar(true)}
            >
              <div className="hamburgerIconInner">
                {/* <!-- update start --> */}
                <svg
                  width="23"
                  height="17"
                  viewBox="0 0 23 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.1 1.21429C0.1 1.81581 0.680832 2.32857 1.4375 2.32857H21.5625C22.3192 2.32857 22.9 1.81581 22.9 1.21429C22.9 0.612761 22.3192 0.1 21.5625 0.1H1.4375C0.680832 0.1 0.1 0.612761 0.1 1.21429ZM21.5625 14.6714H16.7708C16.0142 14.6714 15.4333 15.1842 15.4333 15.7857C15.4333 16.3872 16.0142 16.9 16.7708 16.9H21.5625C22.3192 16.9 22.9 16.3872 22.9 15.7857C22.9 15.1842 22.3192 14.6714 21.5625 14.6714ZM21.5625 7.38571H9.10417C8.3475 7.38571 7.76667 7.89848 7.76667 8.5C7.76667 9.10152 8.3475 9.61429 9.10417 9.61429H21.5625C22.3192 9.61429 22.9 9.10152 22.9 8.5C22.9 7.89848 22.3192 7.38571 21.5625 7.38571Z"
                    fill="#312D83"
                    stroke="white"
                    strokeWidth="0.2"
                  />
                </svg>
                {/* <!-- update end --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
