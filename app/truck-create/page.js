"use client";
import DefaultFormMobile from "@/components/elements/DefaultFormMobile";
import DefaultTruckCreate from "@/components/elements/DefaultTruckCreate";
import useIsMobile from "@/components/elements/UseIsMobile";
import Layout from "@/components/layout/Layout";
import React from "react";

const page = () => {
  const isMobile = useIsMobile();
  return (
    <Layout>
      <div className="themesflat-container create-ad-container ">
        {/* {isMobile ? <DefaultFormMobile /> : <DefaultTruckCreate />} */}
        <DefaultTruckCreate />
      </div>
    </Layout>
  );
};

export default page;
