import "../styles/WelcomeBack.css";
import invoicePilotLogo from "../assets/InvoicePilot-Logo.svg";
import lockIcon from "../assets/lock-01.svg";
import lineIcon from "../assets/Vector 2.svg";
import mailIcon from "../images/mail-01.svg";
import { useState, useRef } from "react";
import eyeOpenIcon from "../assets/eye-open-svgrepo-com.svg";
import eyeClosedIcon from "../assets/eye-closed.svg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useSnackbar } from "notistack";
import ClipLoader from "react-spinners/ClipLoader";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LOGIN_URL =
  "https://team-spacex-backend-mbhhb.ondigitalocean.app/auth/login";

const WelcomeBack = () => {
  const [reveal, setReveal] = useState(true);
  const [loading, setLoading] = useState(false);
  const userRef = useRef();

  const { enqueueSnackbar } = useSnackbar();

  const handleReveal = () => {
    setReveal(!reveal);
  };

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errMsgs, setErrMsgs] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrMsgs({});
    // console.log(value);
  };

  const validateForm = () => {
    const { email, password } = formData;
    const errors = {};
    const isPasswordValid = PWD_REGEX.test(password);
    const isEmailValid = EMAIL_REGEX.test(email);

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

  const handleLogin = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form is valid");
    } else {
      setErrMsgs(validationErrors);
      return;
    }
    setLoading(true);
    try {
      const { email, password } = formData;
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          email,
          password,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      console.log(response.token);
      enqueueSnackbar("Login Successful", { variant: "success" });
      setLoading(false);
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Login Failed", { variant: "error" });
      setLoading(false);
    }
  };

  return (
    <section className="welcome-back">
      <Link to={"/"}>
        <img className="invoice-pilot-logo" src={invoicePilotLogo} alt="" />
      </Link>
      <div className="welcome-back-body">
        <h1 className="">Welcome Back!</h1>
        <p className="sub-heading">
          Don't have an account?
          <Link to={"/UserAdmission"} className="bold">
            Sign up
          </Link>
        </p>
        <form onSubmit={handleLogin} className="welcome-back-form">
          <div className="input-fields">
            <span>
              <input
                type="email"
                placeholder="Email"
                ref={userRef}
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <img src={mailIcon} alt="mail icon" />
              {errMsgs.email && (
                <p className="error-message">{errMsgs.email}</p>
              )}
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
                onClick={handleReveal}
                alt=""
              />
              {errMsgs.password && (
                <p className="error-message">{errMsgs.password}</p>
              )}
            </span>
          </div>
          <div className="remember-password">
            <span>
              <input type="checkbox" name="" id="" />
              <p>Remember me</p>
            </span>
            <p>Forgot Password?</p>
          </div>
          <button className="btn login-btn">
            {loading ? (
              <ClipLoader
                color="white"
                width="15px"
                loading={loading}
                size={30}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Log In"
            )}
          </button>
          <div className="line">
            <img src={lineIcon} alt="line-icon" />
            <p>Or</p>
            <img src={lineIcon} alt="line-icon" />
          </div>
          <Link to={"/UserAdmission"} className="bold">
            Sign Up
          </Link>
        </form>
      </div>
    </section>
  );
};

export default WelcomeBack;
