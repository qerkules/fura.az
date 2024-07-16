"use client";
import DefaultAVCreate from "@/components/elements/DefaultAVCreate";
import DefaultBusCreate from "@/components/elements/DefaultBusCreate";
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
        <DefaultBusCreate />
      </div>
    </Layout>
  );
};

export default page;
