"use client";
import React, { useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import InfoIcon from "@mui/icons-material/Info";
import PublicIcon from "@mui/icons-material/Public";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ImageUploading from "react-images-uploading";
import useIsMobile from "../tools/UseIsMobile";

const RegisterDetails = ({ setSignOption }) => {
  const [currentRegister, setCurrentRegister] = useState("salon");
  const [images, setImages] = React.useState([]);
  const maxNumber = 1;
  const isMobile = useIsMobile();

  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };

  let mobileVersion = (
    <div className="sign-background">
      <div className="sign-background-image">
        <div className="sign-image-title">Register</div>
      </div>
      {currentRegister === "user" && (
        <div className="sign-template">
          <div className="sign-categories">
            <div
              className={`sign-category active left`}
              onClick={() => {
                setCurrentRegister("user");
              }}
            >
              User
            </div>
            <div
              className={`sign-category right`}
              onClick={() => {
                setCurrentRegister("salon");
              }}
            >
              Salon / Service
            </div>
          </div>
          <div className="sign-details">
            <div className="sign-inputs">
              <div className="flex gp-15 ">
                <div className="sign-input">
                  <PersonIcon />
                  <input placeholder="Name" />
                </div>
                <div className="sign-input">
                  <PersonIcon />
                  <input placeholder="Lastname" />
                </div>
              </div>
              <div className="sign-input">
                <LocalPhoneIcon />
                <input placeholder="Enter Your Mobile Number" />
              </div>
              <div className="sign-input">
                <MailOutlineIcon />
                <input placeholder="Enter Your Email Address" />
              </div>
              <div className="sign-input">
                <LockIcon />
                <input placeholder="Enter Your Password" />
              </div>
              <div className="login-tip">
                Already Have Account?
                <a onClick={() => setSignOption("login")}> Log in</a>
              </div>
              <div className="login-buttons">
                <div className="default-sign-button register-button">
                  Register
                </div>
              </div>
              <div className="terms-privacy-text">
                I have read and accept the{" "}
                <a> privacy policy, user agreement and rules.</a>
              </div>
            </div>
          </div>
        </div>
      )}
      {currentRegister === "salon" && (
        <div className="sign-template salon-template">
          <div className="sign-categories">
            <div
              className={`sign-category deactive left`}
              onClick={() => {
                setCurrentRegister("user");
              }}
            >
              User
            </div>
            <div
              className={`sign-category active right`}
              onClick={() => {
                setCurrentRegister("salon");
              }}
            >
              Salon / Service
            </div>
          </div>
          <div className="sign-details">
            <div className="sign-header"></div>
            <div className="sign-salon-flex">
              <div className="sign-inputs">
                <div className="flex gp-15 ">
                  <div className="sign-input">
                    <PersonIcon />
                    <input placeholder="Name" />
                  </div>
                  <div className="sign-input">
                    <PersonIcon />
                    <input placeholder="Lastname" />
                  </div>
                </div>
                <div className="sign-input">
                  <PersonIcon />
                  <input placeholder="Salon/Service Name" />
                </div>
                <div className="sign-input">
                  <PersonIcon />
                  <input placeholder="Promotion" />
                </div>

                
                </div>
              </div>
              <div className="sign-input-image">
                <div className="sign-input">
                  <LocalPhoneIcon />
                  <input placeholder="Enter Your Mobile Number" />
                </div>
                <div className="flex gp-15 ">
                  <div className="sign-input">
                    <PublicIcon />
                    <input placeholder="Country" />
                  </div>
                  <div className="sign-input">
                    <LocationCityIcon />
                    <input placeholder="City" />
                  </div>
                </div>
                <div className="sign-input">
                  <LocationOnIcon />
                  <input placeholder="Address" />
                </div>
                <div className="sign-input">
                  <MailOutlineIcon />
                  <input placeholder="Enter Your Email Address" />
                </div>
                <div className="sign-input">
                  <LockIcon />
                  <input placeholder="Enter Your Password" />
                </div>
                <div className="flex space-around">
                  <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                    acceptType={["jpg"]}
                  >
                    {({ onImageUpload, dragProps }) => (
                      <div
                        className="sign-input-logo-section"
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        <div className="sign-input-logo">
                          <PersonIcon />
                        </div>
                        <div className="sign-input-subtitle">
                          <InfoIcon /> Infos About Banner
                          <div className="extra-info">
                            Logo size is 500x500 pixels (i.e. square), max file
                            size 4.5mb, allowed formats: .png, .jpg, .jpeg,
                            .svg, .webp.
                          </div>
                        </div>
                      </div>
                    )}
                  </ImageUploading>

                  <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                    acceptType={["jpg"]}
                  >
                    {({ onImageUpload, dragProps }) => (
                      <div
                        className="sign-input-logo-section"
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        <div className="sign-input-logo">
                          <WallpaperIcon />
                        </div>
                        <div className="sign-input-subtitle">
                          <InfoIcon /> Infos About Banner
                          <div className="extra-info">
                            Logo size is 500x500 pixels (i.e. square), max file
                            size 4.5mb, allowed formats: .png, .jpg, .jpeg,
                            .svg, .webp.
                          </div>
                        </div>
                      </div>
                    )}
                  </ImageUploading>
                
              </div>
            </div>
            <div className="login-tip">
              Already Have Account?
              <a onClick={() => setSignOption("login")}> Log in</a>
            </div>
            <div className="login-buttons">
              <div className="default-sign-button register-button">
                Register
              </div>
            </div>
            <div className="terms-privacy-text">
              I have read and accept the{" "}
              <a> privacy policy, user agreement and rules.</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  let desktopVersion = (
    <div className="sign-background">
      {currentRegister === "user" && (
        <div className="sign-template">
          <div className="sign-details">
            <div className="sign-header">
              <div className="sign-title">Register</div>

              <div className="sign-categories">
                <div
                  className={`sign-category active`}
                  onClick={() => {
                    setCurrentRegister("user");
                  }}
                >
                  User
                </div>
                <div
                  className={`sign-category`}
                  onClick={() => {
                    setCurrentRegister("salon");
                  }}
                >
                  Salon / Service
                </div>
              </div>
            </div>
            <div className="sign-inputs">
              <div className="flex gp-15 ">
                <div className="sign-input">
                  <PersonIcon />
                  <input placeholder="Name" />
                </div>
                <div className="sign-input">
                  <PersonIcon />
                  <input placeholder="Lastname" />
                </div>
              </div>
              <div className="sign-input">
                <LocalPhoneIcon />
                <input placeholder="Enter Your Mobile Number" />
              </div>
              <div className="sign-input">
                <MailOutlineIcon />
                <input placeholder="Enter Your Email Address" />
              </div>
              <div className="sign-input">
                <LockIcon />
                <input placeholder="Enter Your Password" />
              </div>
              <div className="login-tip">
              Already Have Account?
              <a onClick={() => setSignOption("login")}> Log in</a>
            </div>
              <div className="login-buttons">
                <div className="default-sign-button register-button">
                  Register
                </div>
              </div>
              <div className="terms-privacy-text">
                I have read and accept the{" "}
                <a> privacy policy, user agreement and rules.</a>
              </div>
            </div>
          </div>
          <div className="sign-image"></div>
        </div>
      )}
      {currentRegister === "salon" && (
        <div className="sign-template salon-template">
          <div className="sign-details">
            <div className="sign-header">
              <div className="sign-title">Register</div>

              <div className="sign-categories">
                <div
                  className={`sign-category`}
                  onClick={() => {
                    setCurrentRegister("user");
                  }}
                >
                  User
                </div>
                <div
                  className={`sign-category active`}
                  onClick={() => {
                    setCurrentRegister("salon");
                  }}
                >
                  Salon / Service
                </div>
              </div>
            </div>
            <div className="sign-salon-flex">
              <div className="sign-inputs">
                <div className="flex gp-15 ">
                  <div className="sign-input">
                    <PersonIcon />
                    <input placeholder="Name" />
                  </div>
                  <div className="sign-input">
                    <PersonIcon />
                    <input placeholder="Lastname" />
                  </div>
                </div>
                <div className="sign-input">
                  <PersonIcon />
                  <input placeholder="Salon/Service Name" />
                </div>
                <div className="sign-input">
                  <PersonIcon />
                  <input placeholder="Promotion" />
                </div>

                <div className="sign-input">
                  <MailOutlineIcon />
                  <input placeholder="Enter Your Email Address" />
                </div>
                <div className="flex space-around">
                  <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                    acceptType={["jpg"]}
                  >
                    {({ onImageUpload, dragProps }) => (
                      <div
                        className="sign-input-logo-section"
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        <div className="sign-input-logo">
                          <PersonIcon />
                        </div>
                        <div className="sign-input-subtitle">
                          <InfoIcon /> Infos About Banner
                          <div className="extra-info">
                            Logo size is 500x500 pixels (i.e. square), max file
                            size 4.5mb, allowed formats: .png, .jpg, .jpeg,
                            .svg, .webp.
                          </div>
                        </div>
                      </div>
                    )}
                  </ImageUploading>

                  <ImageUploading
                    multiple
                    value={images}
                    onChange={onChange}
                    maxNumber={maxNumber}
                    dataURLKey="data_url"
                    acceptType={["jpg"]}
                  >
                    {({ onImageUpload, dragProps }) => (
                      <div
                        className="sign-input-logo-section"
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        <div className="sign-input-logo">
                          <WallpaperIcon />
                        </div>
                        <div className="sign-input-subtitle">
                          <InfoIcon /> Infos About Banner
                          <div className="extra-info">
                            Logo size is 500x500 pixels (i.e. square), max file
                            size 4.5mb, allowed formats: .png, .jpg, .jpeg,
                            .svg, .webp.
                          </div>
                        </div>
                      </div>
                    )}
                  </ImageUploading>
                </div>
              </div>
              <div className="sign-input-image">
                <div className="sign-input">
                  <LocalPhoneIcon />
                  <input placeholder="Enter Your Mobile Number" />
                </div>
                <div className="flex gp-15 ">
                  <div className="sign-input">
                    <PublicIcon />
                    <input placeholder="Country" />
                  </div>
                  <div className="sign-input">
                    <LocationCityIcon />
                    <input placeholder="City" />
                  </div>
                </div>
                <div className="sign-input">
                  <LocationOnIcon />
                  <input placeholder="Address" />
                </div>
                <div className="sign-input">
                  <LockIcon />
                  <input placeholder="Enter Your Password" />
                </div>
              </div>
            </div>
            <div className="login-tip">
              Already Have Account?
              <a onClick={() => setSignOption("login")}> Log in</a>
            </div>
            <div className="login-buttons">
              <div className="default-sign-button register-button">
                Register
              </div>
            </div>
            <div className="terms-privacy-text">
              I have read and accept the{" "}
              <a> privacy policy, user agreement and rules.</a>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return <>{isMobile ? mobileVersion : desktopVersion}</>;
};

export default RegisterDetails;
