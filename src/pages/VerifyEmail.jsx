import "../styles/VerifyEmail.css";
import invoicePilotLogo from "../assets/InvoicePilot-Logo.svg";
import emailVerifiedIcon from "../assets/Vector.svg";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  return (
    <section className="confirm-email">
      <Link to={"/"}>
        <img className="invoice-pilot-logo" src={invoicePilotLogo} alt="" />
      </Link>
      <div className="confirm-email-body">
        <img src={emailVerifiedIcon} alt="" />
        <h1>Verify Your Email Address</h1>
        <p>Your Email has been successfully Verified</p>
        <p>Tap on the button to continue with account registration</p>
        <button className="btn confirm-email-btn">Continue</button>
      </div>
    </section>
  );
};

export default VerifyEmail;
