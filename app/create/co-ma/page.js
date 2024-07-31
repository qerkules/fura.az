"use client";
import DefaultCoMaCreate from "@/components/elements/DefaultCoMa";
import Layout from "@/components/layout/Layout";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ModalAlert from "@/components/elements/ModalAlert";

const page = () => {
  const [modalMessage, setModalMessage] = useState("");
  const [modalStatus, setModalStatus] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const path = "/user/ads";
  return (
    <Layout>
      <div className="widget-banner-car-listing banner-car-listing-list co-ma-bg">
        <div className="themesflat-container full">
          <div className="banner-car-listing">
            <h1 className="title text-white">Create Construction Machinery</h1>
          </div>
        </div>
      </div>
      <div className="themesflat-container create-ad-container ">
        <DefaultCoMaCreate
          setModalMessage={setModalMessage}
          setModalStatus={setModalStatus}
          setModalOpen={setModalOpen}
        />
      </div>
      {modalOpen &&
        ModalAlert(modalStatus, modalMessage, setModalOpen, router, path)}
    </Layout>
  );
};

export default page;
