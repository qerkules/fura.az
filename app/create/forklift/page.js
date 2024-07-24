"use client";
import DefaultForkliftCreate from "@/components/elements/DefaultForklift";
import ModalAlert from "@/components/elements/ModalAlert";
import Layout from "@/components/layout/Layout";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const page = () => {
  const [modalMessage, setModalMessage] = useState("");
  const [modalStatus, setModalStatus] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const router = useRouter();
  const path = "/user/ads"
  return (
    <Layout>
      <div className="themesflat-container create-ad-container ">
        <DefaultForkliftCreate
          setModalMessage={setModalMessage}
          setModalStatus={setModalStatus}
          setModalOpen={setModalOpen}
        />
      </div>
      {modalOpen && ModalAlert(modalStatus, modalMessage, setModalOpen, router, path)}
    </Layout>
  );
};

export default page;
