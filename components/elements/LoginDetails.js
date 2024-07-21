"use client";
import React, { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import useIsMobile from "../tools/UseIsMobile";
const LoginDetails = ({ setSignOption }) => {
  const [currentLogin, setCurrentLogin] = useState("email");
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
              <div className="sign-input">
                <MailOutlineIcon />
                <input placeholder="Enter Your Email Address" />
              </div>
              <div className="sign-input">
                <LockIcon />
                <input placeholder="Enter Your Password" />
              </div>
              <div className="login-forgot-button">Forgot Password</div>
              <div className="login-buttons">
                <div
                  className="register-suggest-button default-sign-button"
                  onClick={() => {
                    setSignOption("register");
                  }}
                >
                  Register
                </div>
                <div className="login-button default-sign-button">Log in</div>
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
              <div className="sign-input">
                <MailOutlineIcon />
                <input placeholder="Enter Your Email Address" />
              </div>
              <div className="sign-input">
                <LockIcon />
                <input placeholder="Enter Your Password" />
              </div>
              <div className="login-forgot-button">Forgot Password</div>
              <div className="login-buttons">
                <div
                  className="register-suggest-button default-sign-button"
                  onClick={() => {
                    setSignOption("register");
                  }}
                >
                  Register
                </div>
                <div className="login-button default-sign-button">Log in</div>
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
  return <>{isMobile ? mobileVersion : desktopVersion}</>;
};

export default LoginDetails;
