import "../css/navbar.css";
import invoicePilotLogo from "../assets/InvoicePilot-Logo.svg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="block nav">
        <div className="nav">
          <img className="brand" src={invoicePilotLogo} alt="" />
          <ul className="nav-list">
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
          <div className="nav-btns">
            <button className="home-btn home-btn-white">
              <Link to={"/WelcomeBack"}>Login</Link>
            </button>
            <button className="home-btn home-btn-blue">
              <Link to={"/UserAdmission"}>Create an Account</Link>
            </button>
          </div>
        </div>
      </div>
      {/* <div className="navbar-logo-box">
        <div className="logo-left">
          <img src={LeftLogoImg} alt="left-logo" width="56px" height="56px" />
        </div>

        <div className="logo-right">
          <img
            src={RightLogoImg}
            alt="right-logo"
            width="262px"
            height="20px"
          />
        </div>
      </div>

      <DarkButton content={"Create an Account"} style={"nav"} /> */}
    </nav>
  );
};

export default NavBar;
