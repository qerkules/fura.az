"use client";
import DefaultBusCreate from "@/components/elements/DefaultBusCrea";
import ModalAlert from "@/components/elements/ModalAlert";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [modalMessage, setModalMessage] = useState("");
  const [modalStatus, setModalStatus] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const path = "/user/ads";
  return (
    <Layout>
      <div className="widget-banner-car-listing banner-car-listing-list bus-bg">
        <div className="themesflat-container full">
          <div className="banner-car-listing">
            <h1 className="title text-white">Create Bus</h1>
          </div>
        </div>
      </div>
      <div className="themesflat-container create-ad-container ">
        <DefaultBusCreate
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
