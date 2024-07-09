"use client";
import Layout from "@/components/layout/Layout";
import React from "react";
import { useState } from "react";
import RegisterDetails from "@/components/elements/RegisterDetails";
import LoginDetails from "@/components/elements/LoginDetails";
const page = () => {
  const [signOption, setSignOption] = useState("login");

  return (
    <Layout headerStyle={1} footerStyle={1}>
      {signOption === "login" ? (
        <LoginDetails setSignOption={setSignOption} />
      ) : (
        <RegisterDetails setSignOption={setSignOption}/>
      )}
    </Layout>
  );
};

export default page;
