"use client";
import useIsMobile from "@/components/tools/UseIsMobile";
import Layout from "@/components/layout/Layout";
import DefaultTruckCreate from "@/components/elements/DefaultTruckCreate";
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
      <div className="themesflat-container create-ad-container ">
        <DefaultTruckCreate
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
