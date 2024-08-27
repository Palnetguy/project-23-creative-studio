import "../styles/navbar.css";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link target="_top" to="/">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </Link>
        <ul>
          <li>
            <Link target="_top" to="/">
              COMPANY.
              <span>COMPANY.</span>
            </Link>
          </li>
          <li>
            <Link target="_top" to="/works">
              WORKS.
              <span>WORKS.</span>
            </Link>
          </li>
          <li>
            <Link target="_top" to="/news">
              NEWS.
              <span>NEWS.</span>
            </Link>
          </li>
          <li>
            <Link target="_top" to="/imprint">
              IMPRINT.
              <span>IMPRINT.</span>
            </Link>
          </li>
          <li>
            <Link target="_top" to="/contact">
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
