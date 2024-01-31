import "../styles/RegisterUser.css";
// import bankIcon from "../assets/bank.svg";
import checkIcon from "../assets/check-contained.svg";
import eyeClosedIcon from "../assets/eye-closed.svg";
import lockIcon from "../assets/lock-01.svg";
import mailIcon from "../images/mail-01.svg";
import userProfileIcon from "../assets/user-profile-02.svg";
import googleIcon from "../assets/Google.svg";
import lineIcon from "../assets/Vector 2.svg";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import eyeOpenIcon from "../assets/eye-open-svgrepo-com.svg";
// import { useNavigate } from "react-router";
import { useSnackbar } from "notistack";
import ClipLoader from "react-spinners/ClipLoader";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const REGISTER_URL =
  "https://team-spacex-backend-mbhhb.ondigitalocean.app/auth/signup";

const RegisterUser = () => {
  const [reveal, setReveal] = useState(true);
  const [loading, setLoading] = useState(false);
  const userRef = useRef();

  const { enqueueSnackbar } = useSnackbar();

  // const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
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
    const { username, first_name, last_name, email, password } = formData;
    const errors = {};
    const isPasswordValid = PWD_REGEX.test(password);
    const isEmailValid = EMAIL_REGEX.test(email);

    if (!username) {
      errors.username = "Username is required!";
    }

    if (!first_name) {
      errors.first_name = "First name is required!";
    }

    if (!last_name) {
      errors.last_name = "Last name is required!";
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
      return;
    }
    setLoading(true);
    try {
      const { username, password, email, first_name, last_name } = formData;
      const response = await axios.post(
        REGISTER_URL,
        JSON.stringify({
          username,
          password,
          email,
          first_name,
          last_name,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      console.log(response.token);
      console.log("Registration successful");
      enqueueSnackbar("Registration Successful", { variant: "success" });
      setLoading(false);
      // navigate("/ConfirmEmail");
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Registration Failed", { variant: "error" });
      setLoading(false);
    }
  };

  return (
    <section className="register">
      <form onSubmit={handleSubmit}>
        <div className="input-fields">
          <span>
            <input
              type="text"
              ref={userRef}
              placeholder="First name"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
            />
            <img src={userProfileIcon} alt="user profile icon" />
            {errMsgs.first_name && (
              <p className="error-message">{errMsgs.first_name}</p>
            )}
          </span>
          <span>
            <input
              type="text"
              placeholder="Last name"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
            />
            <img src={userProfileIcon} alt="user profile icon" />
            {errMsgs.last_name && (
              <p className="error-message">{errMsgs.last_name}</p>
            )}
          </span>
          <span>
            <input
              type="text"
              placeholder="Username"
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
            "Create Account"
          )}
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
