"use client";
import Layout from "@/components/layout/Layout";
import React from "react";
import { useState } from "react";
import RegisterDetails from "@/components/elements/RegisterDetails";
import LoginDetails from "@/components/elements/LoginDetails";
const page = () => {
  return (
    <Layout headerStyle={1} footerStyle={1}>
        <RegisterDetails currentRegister={"user"}/>
    </Layout>
  );
};

export default page;
