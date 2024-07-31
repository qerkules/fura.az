"use client";
import DefaultSTCreate from "@/components/elements/DefaultST";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/navigation";
import ModalAlert from "@/components/elements/ModalAlert";
import React, { useState } from "react";

const page = () => {
  const [modalMessage, setModalMessage] = useState("");
  const [modalStatus, setModalStatus] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const path = "/user/ads";
  return (
    <Layout>
      <div className="widget-banner-car-listing banner-car-listing-list trailer-bg">
        <div className="themesflat-container full">
          <div className="banner-car-listing">
            <h1 className="title text-white">Create Semi Trailer</h1>
          </div>
        </div>
      </div>
      <div className="themesflat-container create-ad-container ">
        <DefaultSTCreate
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
