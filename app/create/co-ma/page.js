"use client";
import DefaultCoMaCreate from "@/components/elements/DefaultCoMa";
import useIsMobile from "@/components/elements/UseIsMobile";
import Layout from "@/components/layout/Layout";
import React from "react";

const page = () => {
  const isMobile = useIsMobile();
  return (
    <Layout>
      <div className="themesflat-container create-ad-container ">
        {/* {isMobile ? <DefaultFormMobile /> : <DefaultTruckCreate />} */}
        <DefaultCoMaCreate />
      </div>
    </Layout>
  );
};

export default page;
