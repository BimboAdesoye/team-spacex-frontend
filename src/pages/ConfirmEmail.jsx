import "../styles/ConfirmEmail.css";
import invoiceImage from "../assets/invoice-image.svg";
import logo from "../assets/Logo.svg";
import ipsum from "../assets/ipsum.svg";
import logoIpsum from "../assets/logoipsum.svg";
import logoIpsumBrand from "../assets/logo-ipsum-brand.svg";
import logo2 from "../assets/logo2.svg";
import mailIcon from "../images/mail-01.svg";
import invoicePilotLogo from "../assets/InvoicePilot-Logo.svg";
import { Link } from "react-router-dom";

const ConfirmEmail = () => {
  return (
    <section className="confirm-email">
      <Link to={"/"}>
        <img className="invoice-pilot-logo" src={invoicePilotLogo} alt="" />
      </Link>
      <div className="frame1">
        <div className="get-email">
          <h1>Confirm your Email</h1>
          <p className="sub-heading">
            <span className="bold">InvoicePilot</span> helps freelancers,
            consultants, and small businesses around the world simplify their
            finances
          </p>
          <div className="enter-code">
            <span>
              <img src={mailIcon} alt="" />
              <p className="bold">Get your Email</p>
            </span>
            <p>*************@gma**.com</p>
            <button className="btn get-email-btn">Enter your code</button>
          </div>
        </div>
      </div>
      <div className="logo" style={{ backgroundImage: `url(${invoiceImage})` }}>
        <div className="slogan">
          <h2 className="">
            Trusted by Businesses for all Their invoice needs
          </h2>
          <div className="brands">
            <img src={logo} alt="" />
            <img src={ipsum} alt="" />
            <img src={logoIpsum} alt="" />
            <img src={logoIpsumBrand} alt="" />
            <img src={logo2} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmEmail;
