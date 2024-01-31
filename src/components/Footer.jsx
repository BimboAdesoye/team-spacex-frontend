import "../css/footer.css";
import {
  FooterLogo,
  FooterLogoTitle,
  Facebook,
  Linkedin,
  X,
  Instagram,
} from "../assets";

const Footer = () => {
  return (
    <footer>
      <section className="footer-main-section">
        <div className="footer-first-container">
          <div className="footer-logo-container">
            <div className="footer-logo-image-box">
              <img src={FooterLogo} alt="app logo" width={56} height={56} />
            </div>

            <div className="footer-logo-title-box">
              <img
                src={FooterLogoTitle}
                alt="app logo title"
                style={{ width: "326px", height: "56px" }}
              />
            </div>
          </div>

          <p className="footer-about-text">
            InvoicePilot is a web application designed to empower business
            owners and freelancers with a simple, intuitive, and powerful
            invoicing solution. Whether you're a solopreneur hustling your side
            gig or a growing team managing complex projects, InvoicePilot takes
            the hassle out of creating, sending, and tracking invoices, allowing
            you to focus on what truly matters: growing your business and
            getting paid.
          </p>

          <div className="social-media-logos-container">
            <div>
              <img src={X} alt="x logo" width={24} height={24} />
            </div>
            <div>
              <img src={Linkedin} alt="linked logo" width={24} height={24} />
            </div>
            <div>
              <img src={Facebook} alt="facebook logo" width={24} height={24} />
            </div>
            <div>
              <img
                src={Instagram}
                alt="Instagram logo"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>

        <div className="footer-second-container footer-list">
          <h3>COMPANY</h3>

          <ul>
            <li>About Us</li>
            <li>Our Story</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-third-container footer-list">
          <h3>WHO IT'S FOR</h3>
          <ul>
            <li>Freelancers</li>
            <li>Businesses With Employees</li>
            <li>Self-Employed Professionals</li>
            <li>Businesses With Contractors</li>
          </ul>
        </div>

        <div className="footer-fourth-container footer-list">
          <h3>POLICIES</h3>

          <ul>
            <li>Accessibility</li>
            <li>Privacy Policy</li>
            <li>Security Safeguards</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </section>

      <hr />

      <div className="footer-bottom-section">
        <p>Copyright © 2024 InvoicePilot. All right reserved.</p>

        <div>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
