import "../styles/navbar.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/">
          <div className="logo">
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
  );
};

export default Navbar;
