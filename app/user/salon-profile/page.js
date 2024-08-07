"use client";
import React, { useEffect, useState } from "react";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import PersonIcon from "@mui/icons-material/Person";
import WallpaperIcon from "@mui/icons-material/Wallpaper";
import InfoIcon from "@mui/icons-material/Info";
import PublicIcon from "@mui/icons-material/Public";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ImageUploading from "react-images-uploading";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Phone from "@mui/icons-material/Phone";
import Layout from "@/components/layout/Layout";
import AddIcon from "@mui/icons-material/Add";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const page = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [logoImg, setLogoImg] = React.useState([]);
  const [bannerImg, setBannerImg] = React.useState([]);

  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState(""); 
  const [country, setCountry] = useState("");
  const [salonName, setSalonName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");
  const [password, setPassword] = useState("");

  const [isNewNumber, setIsNewNumber] = useState(false);
  const [newNumber, setNewNumber] = useState("");

  const [isNewNumber2, setIsNewNumber2] = useState(false);
  const [newNumber2, setNewNumber2] = useState("");
  const [isNewNumber3, setIsNewNumber3] = useState(false);
  const [newNumber3, setNewNumber3] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const data = await axios.get(
          `${process.env.NEXT_PUBLIC_API_LINK}/User/GetMyUserDetails`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(data.data);
        setName(data?.data?.name);
        setSurName(data?.data?.surname);
        setPhoneNumber(data?.data?.phoneNumber);
        setEmail(data?.data?.email);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const maxNumber = 1;

  const onChange = (imageList, addUpdateIndex) => {
    setLogoImg(imageList);
  };
  const onChangeBanner = (imageList, addUpdateIndex) => {
    setBannerImg(imageList);
  };

  return (
    <Layout>
      <div className="sign-template salon-template salon-profile">
        <div className="sign-details">
          <div className="myprofile-title">My Salon Profile</div>

          <div className="sign-salon-flex">
            <div className="sign-inputs">
              <div className="profil-images">
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
                              src={`${process.env.NEXT_PUBLIC_API_URL}/${image.path}`}
                              alt=""
                              height="100"
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
                  multiple
                  value={bannerImg}
                  onChange={onChangeBanner}
                  maxNumber={maxNumber}
                  dataURLKey="data_url"
                  acceptType={["jpg"]}
                >
                  {({ onImageUpload, dragProps }) => (
                    <div className="image-desktop-hider">
                      <div
                        className="sign-input-logo-section "
                        onClick={onImageUpload}
                        {...dragProps}
                      >
                        {bannerImg.length > 0 ? (
                          bannerImg.map((image, index) => (
                            <div key={index} className="sign-input-logo">
                              <img
                                src={`${process.env.NEXT_PUBLIC_API_URL}/${image.path}`}
                                alt="Banner Image"
                                height="100"
                              />
                              <div className="uploaded-remove-btn">
                                <div onClick={() => onImageRemove(index)}>
                                  X
                                </div>
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
                            size 4.5mb, allowed formats: .png, .jpg, .jpeg,
                            .svg, .webp.
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </ImageUploading>
              </div>

              <div className="flex gp-15 ">
                <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                  <OutlinedInput
                    id="standard-adornment-number53"
                    type={"text"}
                    placeholder="Name"
                    name="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
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
                    value={surname}
                    onChange={(e) => setSurName(e.target.value)}
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
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
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
              <FormControl disabled required fullWidth sx={{ marginBottom: 2 }}>
                <OutlinedInput
                  id="standard-adornment-number113"
                  type={"text"}
                  placeholder="Phone number"
                  name="PhoneNumber"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <Phone />
                    </InputAdornment>
                  }
                />
              </FormControl>
              {isNewNumber ? (
                <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                  <OutlinedInput
                    id="standard-adornment-number3"
                    type={"text"}
                    placeholder="Second Mobile Number"
                    value={newNumber}
                    onChange={(e) => setNewNumber(e.target.value)}
                    startAdornment={
                      <InputAdornment position="start">
                        <LocalPhoneIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
              ) : (
                <div
                  className="add-new-number"
                  onClick={() => setIsNewNumber(true)}
                >
                  <AddIcon /> Add Another Number
                </div>
              )}
              {isNewNumber &&
                (isNewNumber2 ? (
                  <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                    <OutlinedInput
                      id="standard-adornment-number3"
                      type={"text"}
                      placeholder="Third Mobile Number"
                      value={newNumber2}
                      onChange={(e) => setNewNumber2(e.target.value)}
                      startAdornment={
                        <InputAdornment position="start">
                          <LocalPhoneIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                ) : (
                  <div
                    className="add-new-number"
                    onClick={() => setIsNewNumber2(true)}
                  >
                    <AddIcon /> Add Another Number
                  </div>
                ))}
              {isNewNumber2 &&
                (isNewNumber3 ? (
                  <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                    <OutlinedInput
                      id="standard-adornment-number3"
                      type={"text"}
                      placeholder="Fourth Mobile Number"
                      value={newNumber3}
                      onChange={(e) => setNewNumber3(e.target.value)}
                      startAdornment={
                        <InputAdornment position="start">
                          <LocalPhoneIcon />
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                ) : (
                  <div
                    className="add-new-number"
                    onClick={() => setIsNewNumber3(true)}
                  >
                    <AddIcon /> Add Another Number
                  </div>
                ))}
            </div>
            <div className="sign-input-image  sign-inputs">
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
                    className=" mobile-hider-trailer sign-input-logo-section"
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    {bannerImg.length > 0 ? (
                      bannerImg.map((image, index) => (
                        <div key={index} className="sign-input-logo">
                          <img
                            src={`${process.env.NEXT_PUBLIC_API_URL}/${image.path}`}
                            alt="Banner Image"
                            height="100"
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
                        Logo size is 500x500 pixels (i.e. square), max file size
                        4.5mb, allowed formats: .png, .jpg, .jpeg, .svg, .webp.
                      </div>
                    </div>
                  </div>
                )}
              </ImageUploading>
              <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                <OutlinedInput
                  id="standard-adornment-number73"
                  type={"text"}
                  placeholder="Salon/Service Name"
                  name="SalonName"
                  value={salonName}
                  onChange={(e) => setSalonName(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <PersonIcon />
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
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
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
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
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
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  startAdornment={
                    <InputAdornment position="start">
                      <LocationOnIcon />
                    </InputAdornment>
                  }
                />
              </FormControl>
              <FormControl required fullWidth sx={{ marginBottom: 2 }}>
                <OutlinedInput
                  id="standard-adornment-password2"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter New Password"
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
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
