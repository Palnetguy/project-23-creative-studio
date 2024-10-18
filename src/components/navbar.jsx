import "../styles/navbar.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import useResponsive from "../utils/useResponsive";

const Navbar = () => {
  const [mob_Nav_open, setmob_Nav_open] = useState(false);

  const handle_open_mob_nav = () => {
    setmob_Nav_open((prev) => !prev);
  };
  const screenSize=useResponsive()
  return (
    <div className="navbb"style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
      <div className={`navbar mobile ${mob_Nav_open ? "" : "closed"}`} style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <nav>
          <div className="btn_ham" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
            <Link to="/">
              <div className="logo" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
                <img src={logo} alt="" />
              </div>
            </Link>
            <div className="ham" onClick={handle_open_mob_nav} style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M20 7L4 7"
                    stroke="purple"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    // opacity="0.5"
                    d="M20 12L4 12"
                    stroke="purple"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M20 17L4 17"
                    stroke="purple"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
          <ul>
            <li>
              <Link to="/">
                COMPANY.
                <span>COMPANY.</span>
              </Link>
            </li>
            <li>
              <Link to="/works">
                WORKS.
                <span>WORKS.</span>
              </Link>
            </li>
            <li>
              <Link to="/news">
                NEWS.
                <span>NEWS.</span>
              </Link>
            </li>
            <li>
              <Link to="/imprint">
                IMPRINT.
                <span>IMPRINT.</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                CONTACT.
                <span>CONTACT.</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="navbar pc" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
        <nav>
          <Link to="/">
            <div className="logo" style={{ fontSize: screenSize === 'mobile' ? '14px' : screenSize === 'largeDesktop' ? '22px' : '18px' }}>
              <img src={logo} alt="" />
            </div>
          </Link>
          <ul>
            <li>
              <Link to="/">
                COMPANY.
                <span>COMPANY.</span>
              </Link>
            </li>
            <li>
              <Link to="/works">
                WORKS.
                <span>WORKS.</span>
              </Link>
            </li>
            <li>
              <Link to="/news">
                NEWS.
                <span>NEWS.</span>
              </Link>
            </li>
            <li>
              <Link to="/imprint">
                IMPRINT.
                <span>IMPRINT.</span>
              </Link>
            </li>
            <li>
              <Link to="/contact">
                CONTACT.
                <span>CONTACT.</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
