"use client";
import Layout from "@/components/layout/Layout";
import React, { useEffect, useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import {
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import axios from "axios";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockIcon from "@mui/icons-material/Lock";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PersonIcon from "@mui/icons-material/Person";
import AddIcon from "@mui/icons-material/Add";
const page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [totalAdCount, setTotalAdCount] = useState(0);
  const [values, setValues] = useState([]);
  const [name, setName] = useState("");
  const [surname, setSurName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isNewNumber, setIsNewNumber] = useState(false);
  const [newNumber, setNewNumber] = useState("");

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
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const token = localStorage.getItem("token");
  //       const data = await axios.get(
  //         `${process.env.NEXT_PUBLIC_API_LINK}/Vehicle/GetAllAdsByUser?CurrentPage=${currentPage}&PageSize=15`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       );
  //       setName(data?.data?.name)
  //       setSurName(data?.data?.surname)
  //       setNumber(data?.data?.phoneNumber)
  //       setEmail(data?.data?.email)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Layout>
      <div className="themesflat-container profile-container">
        <div className="myprofile-title"> My Profile</div>

        <form>
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
              <FormControl required fullWidth sx={{ marginBottom: 2 }} disabled>
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
              {isNewNumber ? (
                <FormControl
                  required
                  fullWidth
                  sx={{ marginBottom: 2 }}
                >
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
                  placeholder="Change your Password"
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
              <div className="login-buttons">
                <input
                  type="submit"
                  className="mt-15 default-sign-button register-button"
                  value={"Update"}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default page;
