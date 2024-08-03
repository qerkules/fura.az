"use client";
import React, { useEffect, useState } from "react";
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
import axios from "axios";
import ModalAlert from "./ModalAlert";
import { useRouter } from "next/navigation";
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Phone from "@mui/icons-material/Phone";

const RegisterDetails = ({ currentRegister }) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [images, setImages] = React.useState([]);
  const [logoImg, setLogoImg] = React.useState([]);
  const [bannerImg, setBannerImg] = React.useState([]);

  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [modalMessage, setModalMessage] = useState("");
  const [modalStatus, setModalStatus] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [isUpdated, setIsUpdated] = useState(false);

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

  const userSubmit = async () => {
    try {
      const userData = JSON.stringify({
        name: name,
        surname: surname,
        phoneNumber: number,
        email: email,
        password: password,
        passwordConfirm: password,
      });
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_API_LINK}/User/RegisterMember`,
          userData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((data) => {
          modalOpener(true, "Created");
          return data.data;
        })
        .catch((error) => {
          modalOpener(false, "Incorrect Details");
          return error;
        });
    } catch (error) {
      console.log(error);
    }
  };

  const salonSubmit = async (e) => {
    const formData = new FormData(e.target);

    formData.append("Banner", bannerImg[0].file, bannerImg[0].file.fileName);
    formData.append("Logo", logoImg[0].file, logoImg[0].file.fileName);
    try {
      await axios
        .post(
          `${process.env.NEXT_PUBLIC_API_LINK}/User/RegisterSalon`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        )
        .then((data) => {
          modalOpener(true, "Created");
          return data.data;
        })
        .catch((error) => {
          modalOpener(false, "Incorrect Details");
          return error;
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (currentRegister === "user") userSubmit();
    if (currentRegister === "salon") salonSubmit(e);
  };

  useEffect(() => {
    setIsUpdated(true);
  }, [logoImg]);

  const maxNumber = 1;
  const isMobile = useIsMobile();

  const onChange = (imageList, addUpdateIndex) => {
    setLogoImg(imageList);
  };
  const onChangeBanner = (imageList, addUpdateIndex) => {
    setBannerImg(imageList);
  };

  let mobileVersion = (
    <form className="sign-background" onSubmit={handleSubmit}>
      <div className="sign-background-image">
        <div className="sign-image-title">Register</div>
      </div>
      {currentRegister === "user" && (
        <div className="sign-template">
          <div className="sign-categories">
            <div
              className={`sign-category active left`}
              onClick={() => {
                handleNavigation("/sign-up/user");
              }}
            >
              User
            </div>
            <div
              className={`sign-category right`}
              onClick={() => {
                handleNavigation("/sign-up/salon");
              }}
            >
              Salon / Service
            </div>
          </div>
          <div className="sign-details">
            <div className="sign-inputs">
              <div className="flex gp-15 ">
                <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                  <OutlinedInput
                    id="standard-adornment-number1"
                    type={"text"}
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    startAdornment={
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                  <OutlinedInput
                    id="standard-adornment-number2"
                    type={"text"}
                    placeholder="Surname"
                    value={surname}
                    onChange={(e) => {
                      setSurName(e.target.value);
                    }}
                    startAdornment={
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                <OutlinedInput
                  id="standard-adornment-number3"
                  type={"text"}
                  placeholder="Mobile Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <LocalPhoneIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                <OutlinedInput
                  id="standard-adornment-email"
                  type={"text"}
                  placeholder="Enter Your Email Address"
                  value={email}
                  onChange={(e) => handleEmailChange(e)}
                  startAdornment={
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl required fullWidth>
                <OutlinedInput
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your Password"
                  value={password}
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
              <div className="login-tip">
                Already Have Account?
                <a href="/sign-in"> Log in</a>
              </div>
              <div className="login-buttons">
                <input
                  type="submit"
                  className="default-sign-button register-button"
                  value={"Register"}
                />
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
                handleNavigation("/sign-up/user");
              }}
            >
              User
            </div>
            <div
              className={`sign-category active right`}
              onClick={() => {
                handleNavigation("/sign-up/salon");
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
                  <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                    <OutlinedInput
                      id="standard-adornment-number5"
                      type={"text"}
                      placeholder="Name"
                      name="Name"
                      startAdornment={
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                    <OutlinedInput
                      id="standard-adornment-number6"
                      type={"text"}
                      placeholder="Surname"
                      name="Surname"
                      startAdornment={
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>
                <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                  <OutlinedInput
                    id="standard-adornment-number7"
                    type={"text"}
                    placeholder="Salon/Service Name"
                    name="SalonName"
                    startAdornment={
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                  <OutlinedInput
                    id="standard-adornment-number8"
                    type={"text"}
                    placeholder="About"
                    name="About"
                    startAdornment={
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
            </div>
            <div className="sign-input-image sign-inputs">
              <div className="flex gp-15 ">
                <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                  <OutlinedInput
                    id="standard-adornment-number9"
                    type={"text"}
                    placeholder="Country"
                    name="Country"
                    startAdornment={
                      <InputAdornment position="start">
                        <PublicIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                  <OutlinedInput
                    id="standard-adornment-number10"
                    type={"text"}
                    placeholder="City"
                    name="City"
                    startAdornment={
                      <InputAdornment position="start">
                        <LocationCityIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                <OutlinedInput
                  id="standard-adornment-number11"
                  type={"text"}
                  placeholder="Address"
                  name="Address"
                  startAdornment={
                    <InputAdornment position="start">
                      <LocationOnIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                <OutlinedInput
                  id="standard-adornment-number12"
                  type={"text"}
                  placeholder="Phone number"
                  name="PhoneNumber"
                  startAdornment={
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                <OutlinedInput
                  id="standard-adornment-email2"
                  type={"text"}
                  placeholder="Enter Your Email Address"
                  name="Email"
                  onChange={(e) => handleEmailChange(e)}
                  startAdornment={
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                <OutlinedInput
                  id="standard-adornment-password2"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your Password"
                  name="Password"
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

              <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                <OutlinedInput
                  id="standard-adornment-password3"
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Your Password"
                  name="PasswordConfirm"
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
              <div className="flex space-around">
                <ImageUploading
                  value={logoImg}
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
                      {logoImg.length > 0 ? (
                        logoImg.map((image, index) => (
                          <div key={index} className="sign-input-logo">
                            <img
                              src={image.data_url}
                              alt="Logo Upload Image"
                              height="100"
                              style={{ height: "100%", width: "auto" }}
                            />
                            <div className="uploaded-remove-btn">
                              <div onClick={() => onImageRemove(index)}>X</div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="sign-input-logo">
                          <PersonIcon />
                        </div>
                      )}
                      <div className="sign-input-subtitle">
                        <InfoIcon /> Infos About Banner
                        <div className="extra-info">
                          Logo size is 500x500 pixels (i.e. square), max file
                          size 4.5mb, allowed formats: .png, .jpg, .jpeg, .svg,
                          .webp.
                        </div>
                      </div>
                    </div>
                  )}
                </ImageUploading>
                <ImageUploading
                  value={bannerImg}
                  onChange={onChangeBanner}
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
                      {bannerImg.length > 0 ? (
                        bannerImg.map((image, index) => (
                          <div key={index} className="sign-input-logo">
                            <img
                              src={image.data_url}
                              alt="Upload Brand Image"
                              height="100"
                              style={{ height: "100%", width: "auto" }}
                            />
                            <div className="uploaded-remove-btn">
                              <div onClick={() => onImageRemove(index)}>X</div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="sign-input-logo">
                          <WallpaperIcon />
                        </div>
                      )}
                      <div className="sign-input-subtitle">
                        <InfoIcon /> Infos About Banner
                        <div className="extra-info">
                          Logo size is 500x500 pixels (i.e. square), max file
                          size 4.5mb, allowed formats: .png, .jpg, .jpeg, .svg,
                          .webp.
                        </div>
                      </div>
                    </div>
                  )}
                </ImageUploading>
              </div>
            </div>
            <div className="login-tip">
              Already Have Account?
              <a href="/sign-in"> Log in</a>
            </div>
            <div className="login-buttons">
              <input
                type="submit"
                value={"Register"}
                className="default-sign-button register-button"
              />
            </div>
            <div className="terms-privacy-text">
              I have read and accept the{" "}
              <a> privacy policy, user agreement and rules.</a>
            </div>
          </div>
        </div>
      )}
    </form>
  );

  let desktopVersion = (
    <form className="sign-background" onSubmit={handleSubmit}>
      {currentRegister === "user" && (
        <div className="sign-template">
          <div className="sign-details">
            <div className="sign-header">
              <div className="sign-title">Register</div>

              <div className="sign-categories">
                <div
                  className={`sign-category active`}
                  onClick={() => {
                    handleNavigation("/sign-up/user");
                  }}
                >
                  User
                </div>
                <div
                  className={`sign-category`}
                  onClick={() => {
                    handleNavigation("/sign-up/salon");
                  }}
                >
                  Salon / Service
                </div>
              </div>
            </div>
            <div className="sign-inputs">
              <div className="flex gp-15 ">
                <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                  <OutlinedInput
                    id="standard-adornment-number1t6"
                    type={"text"}
                    placeholder="Name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    startAdornment={
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                  <OutlinedInput
                    id="standard-adornment-number22"
                    type={"text"}
                    placeholder="Surname"
                    value={surname}
                    onChange={(e) => {
                      setSurName(e.target.value);
                    }}
                    startAdornment={
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              </div>
              <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                <OutlinedInput
                  id="standard-adornment-number33"
                  type={"text"}
                  placeholder="Mobile Number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <LocalPhoneIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                <OutlinedInput
                  id="standard-adornment-email"
                  type={"text"}
                  placeholder="Enter Your Email Address"
                  value={email}
                  onChange={(e) => handleEmailChange(e)}
                  startAdornment={
                    <InputAdornment position="start">
                      <MailOutlineIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl required fullWidth>
                <OutlinedInput
                  id="standard-adornment-password"
                  type={showPassword ? "text" : "password"}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your Password"
                  value={password}
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

              <div className="login-tip">
                Already Have Account?
                <a href="/sign-in"> Log in</a>
              </div>
              <div className="login-buttons">
                <div
                  className="default-sign-button register-button"
                  onClick={handleSubmit}
                >
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
                    handleNavigation("/sign-up/user");
                  }}
                >
                  User
                </div>
                <div
                  className={`sign-category active`}
                  onClick={() => {
                    handleNavigation("/sign-up/salon");
                  }}
                >
                  Salon / Service
                </div>
              </div>
            </div>
            <div className="sign-salon-flex">
              <div className="sign-inputs">
                <div className="flex gp-15 ">
                  <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                    <OutlinedInput
                      id="standard-adornment-number53"
                      type={"text"}
                      placeholder="Name"
                      name="Name"
                      startAdornment={
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                    <OutlinedInput
                      id="standard-adornment-number63"
                      type={"text"}
                      placeholder="Surname"
                      name="Surname"
                      startAdornment={
                        <InputAdornment position="start">
                          <PersonIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>
                <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                  <OutlinedInput
                    id="standard-adornment-number38"
                    type={"text"}
                    placeholder="About"
                    name="About"
                    startAdornment={
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>

                <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                  <OutlinedInput
                    id="standard-adornment-email2"
                    type={"text"}
                    placeholder="Enter Your Email Address"
                    name="Email"
                    onChange={(e) => handleEmailChange(e)}
                    startAdornment={
                      <InputAdornment position="start">
                        <MailOutlineIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                  <OutlinedInput
                    id="standard-adornment-password2"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your Password"
                    name="Password"
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

                <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                  <OutlinedInput
                    id="standard-adornment-password3"
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm Your Password"
                    name="PasswordConfirm"
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
              </div>
              <div className="sign-input-image  sign-inputs">
                <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                  <OutlinedInput
                    id="standard-adornment-number73"
                    type={"text"}
                    placeholder="Salon/Service Name"
                    name="SalonName"
                    startAdornment={
                      <InputAdornment position="start">
                        <PersonIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                  <OutlinedInput
                    id="standard-adornment-number113"
                    type={"text"}
                    placeholder="Phone number"
                    name="PhoneNumber"
                    startAdornment={
                      <InputAdornment position="start">
                        <Phone />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <div className="flex gp-15 ">
                  <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                    <OutlinedInput
                      id="standard-adornment-number93"
                      type={"text"}
                      placeholder="Country"
                      name="Country"
                      startAdornment={
                        <InputAdornment position="start">
                          <PublicIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                    <OutlinedInput
                      id="standard-adornment-number103"
                      type={"text"}
                      placeholder="City"
                      name="City"
                      startAdornment={
                        <InputAdornment position="start">
                          <LocationCityIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                </div>
                <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                  <OutlinedInput
                    id="standard-adornment-number1123"
                    type={"text"}
                    placeholder="Address"
                    name="Address"
                    startAdornment={
                      <InputAdornment position="start">
                        <LocationOnIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>

                <div className="flex space-around">
                  <ImageUploading
                    value={logoImg}
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
                        {logoImg.length > 0 ? (
                          logoImg.map((image, index) => (
                            <div key={index} className="sign-input-logo">
                              <img src={image.data_url} alt="" height="100" />
                              <div className="uploaded-remove-btn">
                                <div onClick={() => onImageRemove(index)}>
                                  X
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="sign-input-logo">
                            <PersonIcon />
                          </div>
                        )}
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
                    value={bannerImg}
                    onChange={onChangeBanner}
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
                        {bannerImg.length > 0 ? (
                          bannerImg.map((image, index) => (
                            <div key={index} className="sign-input-logo">
                              <img src={image.data_url} alt="" height="100" />
                              <div className="uploaded-remove-btn">
                                <div onClick={() => onImageRemove(index)}>
                                  X
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="sign-input-logo">
                            <PersonIcon />
                          </div>
                        )}
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
            </div>
            <div className="login-tip">
              Already Have Account?
              <a href="/sign-in"> Log in</a>
            </div>
            <div className="login-buttons">
              <input
                type="submit"
                value={"Register"}
                className="default-sign-button register-button"
              />
            </div>
            <div className="terms-privacy-text">
              I have read and accept the{" "}
              <a> privacy policy, user agreement and rules.</a>
            </div>
          </div>
        </div>
      )}
    </form>
  );

  return (
    <>
      {isMobile ? mobileVersion : desktopVersion}
      {modalOpen &&
        ModalAlert(modalMessage, modalStatus, setModalOpen, router, "/sign-in")}
    </>
  );
};

export default RegisterDetails;
