import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="container-fluid navbar-bg sticky-top">
      <div className="container ">
        <nav className="navbar navbar-expand-lg" id="navbar">
          <img
            src="/images/logo.jpg"
            alt="company logo"
            className="overlay-content"
          />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item ">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link" to="aboutus">
                  About Us
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="services">
                  Services
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="solutions">
                  Solutions
                </Link>
              </li>
              <li className="nav-item dropdown ">
                <Link
                  className="nav-link dropdown-toggle"
                  id="navbarDarkDropdownMenuLink"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  to="products"
                >
                  Products
                </Link>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDarkDropdownMenuLink"
                >
                  <li>
                    <Link className="dropdown-item" to="fibaro">
                      Fibaro
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="others">
                      others
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="blog">
                  Blog
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link" to="contactus">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
