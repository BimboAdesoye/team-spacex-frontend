import "../styles/RegisterUser.css";
import bankIcon from "../assets/bank.svg";
import checkIcon from "../assets/check-contained.svg";
import eyeClosedIcon from "../assets/eye-closed.svg";
import lockIcon from "../assets/lock-01.svg";
import mailIcon from "../assets/mail-01.svg";
import userProfileIcon from "../assets/user-profile-02.svg";
import googleIcon from "../assets/Google.svg";
import lineIcon from "../assets/Vector 2.svg";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import eyeOpenIcon from "../assets/eye-open-svgrepo-com.svg";
// import { useNavigate } from "react-router";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const REGISTER_URL =
  "https://team-spacex-backend-mbhhb.ondigitalocean.app/api/signup/";

const RegisterUser = () => {
  const [reveal, setReveal] = useState(true);
  const userRef = useRef();

  // const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    companyName: "",
    email: "",
    password: "",
  });

  const [errMsgs, setErrMsgs] = useState({});
  // const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrMsgs({});
    // console.log(value);
  };

  const handleReveal = () => {
    setReveal(!reveal);
  };

  const validateForm = () => {
    const { username, companyName, email, password } = formData;
    const errors = {};
    const isPasswordValid = PWD_REGEX.test(password);
    const isEmailValid = EMAIL_REGEX.test(email);

    if (!username) {
      errors.username = "Username is required!";
    }

    if (!companyName) {
      errors.companyName = "Company name is required!";
    }

    if (!email) {
      errors.email = "Email is required!";
    } else if (!isEmailValid) {
      errors.email = "Enter a valid email address";
    }

    if (!password) {
      errors.password = "Password is required!";
    } else if (!isPasswordValid) {
      errors.password = "Enter a valid password";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form is valid");
    } else {
      setErrMsgs(validationErrors);
    }
    try {
      const { username, password } = formData;
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          // username: formData.username,
          // password: formData.password,
          username,
          password,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      console.log(response.token);
      console.log(JSON.stringify(response));
      // navigate("/ConfirmEmail");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="register">
      <form onSubmit={handleSubmit}>
        <div className="input-fields">
          <span>
            <input
              // className={errMsgs.username !== 0 ? "active" : ""}
              type="text"
              ref={userRef}
              placeholder="Full name"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <img src={userProfileIcon} alt="user-profile icon" />
            {errMsgs.username && (
              <p className="error-message">{errMsgs.username}</p>
            )}
          </span>
          <span>
            <input
              type="text"
              placeholder="Your company name"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
            <img src={bankIcon} alt="bank icon" />
            {errMsgs.companyName && (
              <p className="error-message">{errMsgs.companyName}</p>
            )}
          </span>
          <span>
            <input
              type="text"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <img src={mailIcon} alt="mail icon" />
            {errMsgs.email && <p className="error-message">{errMsgs.email}</p>}
          </span>
          <span>
            <input
              type={reveal ? "password" : "text"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <img src={lockIcon} alt="lock icon" />
            <img
              className="eye"
              src={reveal ? eyeClosedIcon : eyeOpenIcon}
              // src={eyeOpenIcon}
              onClick={handleReveal}
              alt=""
            />
            {errMsgs.password && (
              <p className="error-message">{errMsgs.password}</p>
            )}
          </span>
        </div>
        <div className="instructions">
          <span>
            <img className="check-icon" src={checkIcon} alt="check icon" />
            <p>Enter between 8 to 20 characters</p>
          </span>
          <span>
            <img className="check-icon" src={checkIcon} alt="check icon" />
            <p>Use upper and lowercase letters</p>
          </span>
          <span>
            <img className="check-icon" src={checkIcon} alt="check icon" />
            <p>Enter at least 1 number and 1 symbol</p>
          </span>
        </div>
        <p className="privacy-policy">
          By clicking the button below, you agree to InvoicePilot
          <span className="bold"> Terms of Service</span> and
          <span className="bold"> Privacy Policy</span>
        </p>
        <button
          // disabled={errMsgs ? true : false}
          // disabled
          className="btn create-account-btn"
        >
          Create Account
        </button>
        <div className="line">
          <img src={lineIcon} alt="line-icon" />
          <p>Or</p>
          <img src={lineIcon} alt="line-icon" />
        </div>
        <span className="google">
          <img src={googleIcon} alt="google icon" />
          <p>Continue with Google</p>
        </span>
      </form>
    </section>
  );
};

export default RegisterUser;
