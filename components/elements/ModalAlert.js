"use client";
import { Box, Modal, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ModalAlert = (status, message, setModalOpen, router) => {
  const handleClose = () => {
    setModalOpen(false);
    status && router.push("/");
  };
  return (
    <Modal
      open={true}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <p className="modal-desc" >
          {message}
        </p>
        <button className="modal-ok-btn" onClick={handleClose}>OK</button>
      </Box>
    </Modal>
  );
};

export default ModalAlert;
