"use client";
import React, { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import useIsMobile from "../tools/UseIsMobile";
import axios from "axios";
import { useRouter } from "next/navigation";
import ModalAlert from "./ModalAlert";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const LoginDetails = () => {
  const router = useRouter();

  const [showPassword, setShowPassword] = React.useState(false);

  const [isValidEmail, setIsValidEmail] = useState(true);

  const [currentLogin, setCurrentLogin] = useState("email");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [modalMessage, setModalMessage] = useState("");
  const [modalStatus, setModalStatus] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // Email validation function
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsValidEmail(validateEmail(emailValue));
  };

  const handleNavigation = (path) => {
    router.push(path);
  };
  const modalOpener = (status, message) => {
    setModalMessage(message);
    setModalStatus(status);
    setModalOpen(true);
  };
  const handleSubmit = async () => {
    try {
      const userData = JSON.stringify({
        userNameOrEmail: email,
        password: password,
      });
      const response = await axios
        .post(`${process.env.NEXT_PUBLIC_API_LINK}/User/Login`, userData, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((data) => {
          modalOpener(true, "logged in");
          localStorage.setItem("token", data.data.token.accessToken);
          localStorage.setItem("username", "User");
          localStorage.setItem("isBusiness", data?.data?.isBusiness);
          return data.data;
        })
        .catch((error) => {
          modalOpener(false, "Email or password false");
          return error;
        });
    } catch (error) {
      modalOpener(false, "Email or password false");
      console.log(error);
    }
  };

  const isMobile = useIsMobile();
  const mobileVersion = (
    <div className="sign-background">
      <div className="sign-template">
        <div className="sign-background-image">
          <div className="sign-image-title">Login</div>
        </div>
        <div className="sign-categories">
          <div
            className={`sign-category left ${
              currentLogin === "number" ? "active" : ""
            }`}
            onClick={() => {
              setCurrentLogin("number");
            }}
          >
            With Number
          </div>
          <div
            className={`sign-category right ${
              currentLogin === "email" ? "active" : ""
            }`}
            onClick={() => {
              setCurrentLogin("email");
            }}
          >
            With Email
          </div>
        </div>
        <div className="sign-details">
          {currentLogin === "email" ? (
            <div className="sign-inputs">
              <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <OutlinedInput
                  id="standard-adornment-email"
                  type={"text"}
                  placeholder="Enter Your Email Address"
                  onChange={(e) => handleEmailChange(e)}
                  startAdornment={
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl fullWidth>
                <OutlinedInput
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your Password"
                  startAdornment={
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <div className="login-forgot-button">Forgot Password</div>
              <div className="login-buttons">
                <div
                  className="register-suggest-button default-sign-button"
                  onClick={() => {
                    handleNavigation("/sign-up/user");
                  }}
                >
                  Register
                </div>
                <div
                  className="login-button default-sign-button"
                  onClick={handleSubmit}
                >
                  Log in
                </div>
              </div>
            </div>
          ) : (
            <div className="sign-inputs">
              <div className="sign-input">
                <LocalPhoneIcon />
                <input placeholder="Enter Your Mobile Number" />
              </div>
              <div className="terms-privacy-text">
                I have read and accept the{" "}
                <a> privacy policy, user agreement and rules.</a>
              </div>
              <div className="login-buttons">
                <div className="default-sign-button register-button">
                  Register
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="sign-image"></div>
      </div>
    </div>
  );

  const desktopVersion = (
    <div className="sign-background">
      <div className="sign-template">
        <div className="sign-details">
          <div className="sign-header">
            <div className="sign-title">Login</div>
            <div className="sign-categories">
              <div
                className={`sign-category ${
                  currentLogin === "number" ? "active" : ""
                }`}
                onClick={() => {
                  setCurrentLogin("number");
                }}
              >
                With Number
              </div>
              <div
                className={`sign-category ${
                  currentLogin === "email" ? "active" : ""
                }`}
                onClick={() => {
                  setCurrentLogin("email");
                }}
              >
                With Email
              </div>
            </div>
          </div>
          {currentLogin === "email" ? (
            <div className="sign-inputs">
              <FormControl fullWidth sx={{ marginBottom: 2 }}>
                <OutlinedInput
                  id="standard-adornment-email"
                  type={"text"}
                  placeholder="Enter Your Email Address"
                  onChange={(e) => handleEmailChange(e)}
                  startAdornment={
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl fullWidth>
                <OutlinedInput
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your Password"
                  startAdornment={
                    <InputAdornment position="start">
                      <LockIcon />
                    </InputAdornment>
                  }
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
              <div className="login-forgot-button">Forgot Password</div>
              <div className="login-buttons">
                <div
                  className="register-suggest-button default-sign-button"
                  onClick={() => {
                    handleNavigation("/sign-up/user");
                  }}
                >
                  Register
                </div>
                <div
                  className="login-button default-sign-button"
                  onClick={handleSubmit}
                >
                  Log in
                </div>
              </div>
            </div>
          ) : (
            <div className="sign-inputs">
              <div className="sign-input">
                <LocalPhoneIcon />
                <input placeholder="Enter Your Mobile Number" />
              </div>
              <div className="terms-privacy-text">
                I have read and accept the{" "}
                <a> privacy policy, user agreement and rules.</a>
              </div>
              <div className="login-buttons">
                <div className="default-sign-button register-button">
                  Register
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="sign-image"></div>
      </div>
    </div>
  );
  return (
    <>
      {isMobile ? mobileVersion : desktopVersion}
      {modalOpen && ModalAlert(modalStatus, modalMessage, setModalOpen, router)}
    </>
  );
};

export default LoginDetails;
