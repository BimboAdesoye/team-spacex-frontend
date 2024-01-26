import "../styles/Login.css";
import eyeClosedIcon from "../assets/eye-closed.svg";
import lockIcon from "../assets/lock-01.svg";
import googleIcon from "../assets/Google.svg";
import lineIcon from "../assets/Vector 2.svg";
import userProfileIcon from "../assets/user-profile-02.svg";
import { useState, useRef, useEffect } from "react";
import eyeOpenIcon from "../assets/eye-open-svgrepo-com.svg";
// import axios from "axios";

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
// const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const LOGIN_URL =
  "https://team-spacex-backend-mbhhb.ondigitalocean.app/api/login/";

const Login = () => {
  const [reveal, setReveal] = useState(true);
  const userRef = useRef();

  const [formData, setFormData] = useState({
    username: "",
    // email: "",
    password: "",
  });

  const [errMsgs, setErrMsgs] = useState({});

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
    // const { email, password } = formData;
    const { username, password } = formData;
    const errors = {};
    const isPasswordValid = PWD_REGEX.test(password);
    // const isEmailValid = EMAIL_REGEX.test(email);

    if (!username) {
      errors.username = "Username is required!";
    }
    // if (!email) {
    //   errors.email = "Email is required!";
    // } else if (!isEmailValid) {
    //   errors.email = "Enter a valid email address";
    // }

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
    }
    try {
      // const { username, password } = formData;
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({
          username: formData.username,
          password: formData.password,
        }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response.data);
      console.log(response.token);
      console.log(JSON.stringify(response));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="login">
      <form onSubmit={handleLogin}>
        <div className="input-fields">
          <span>
            <input
              type="text"
              placeholder="Username"
              ref={userRef}
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            <img src={userProfileIcon} alt="mail icon" />
            {errMsgs.username && <p className="error-message">{errMsgs.username}</p>}
          </span>
          {/* <span>
            <input
              type="email"
              placeholder="Email"
              ref={userRef}
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <img src={mailIcon} alt="mail icon" />
            {errMsgs.email && <p className="error-message">{errMsgs.email}</p>}
          </span> */}
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
        <button className="btn login-btn">Login</button>
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

export default Login;
