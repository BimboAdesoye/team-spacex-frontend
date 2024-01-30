import CompanyLogo1 from "../images/Logo1.svg";
import CompanyLogo2 from "../images/Logo2.svg";
import CompanyLogo3 from "../images/Logo3.svg";
import CompanyLogo4 from "../images/Logo4.svg";
import CompanyLogo5 from "../images/Logo5.svg";
import "../css/companies.css";

const Companies = () => {
  return (
    <div className="companies">
      <div className="block">
        <section className="companies-body">
          <p className="companies-text">
            Trusted by Businesses for all Their Invoice needs
          </p>
          <div className="companies-logos">
            <div>
              <img src={CompanyLogo1} alt="logo" />
            </div>
            <div>
              <img src={CompanyLogo2} alt="logo" />
            </div>
            <div>
              <img src={CompanyLogo3} alt="logo" />
            </div>
            <div>
              <img src={CompanyLogo4} alt="logo" />
            </div>
            <div>
              <img src={CompanyLogo5} alt="logo" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Companies;
