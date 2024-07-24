"use client";
import useIsMobile from "@/components/tools/UseIsMobile";
import Layout from "@/components/layout/Layout";
import React from "react";
import DefaultTruckCreate from "@/components/elements/DefaultTruckCreate";

const page = () => {
  const isMobile = useIsMobile();
  return (
    <Layout>
      <div className="themesflat-container create-ad-container ">
        <DefaultTruckCreate />
      </div>
    </Layout>
  );
};

export default page;
