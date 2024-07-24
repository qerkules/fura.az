"use client";
import DefaultAVCreate from "@/components/elements/DefaultAVCreate";
import useIsMobile from "@/components/tools/UseIsMobile";
import Layout from "@/components/layout/Layout";
import React from "react";

const page = () => {
  const isMobile = useIsMobile();
  return (
    <Layout>
      <div className="themesflat-container create-ad-container ">
        {/* {isMobile ? <DefaultFormMobile /> : <DefaultTruckCreate />} */}
        <DefaultAVCreate />
      </div>
    </Layout>
  );
};

export default page;
