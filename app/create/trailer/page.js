"use client";
import DefaultAVCreate from "@/components/elements/DefaultAVCreate";
import DefaultFormMobile from "@/components/elements/DefaultFormMobile";
import DefaultSTCreate from "@/components/elements/DefaultST";
import DefaultTruckCreate from "@/components/elements/DefaultTruckCreate";
import useIsMobile from "@/components/tools/UseIsMobile";
import Layout from "@/components/layout/Layout";
import React from "react";

const page = () => {
  const isMobile = useIsMobile();
  return (
    <Layout>
      <div className="themesflat-container create-ad-container ">
        {/* {isMobile ? <DefaultFormMobile /> : <DefaultTruckCreate />} */}
        <DefaultSTCreate />
      </div>
    </Layout>
  );
};

export default page;
