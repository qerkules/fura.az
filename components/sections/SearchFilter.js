"use client";
import React, { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DefaultFormControl from "../elements/DefaultFormControl";
import ExtraFormControl from "../elements/TruckFormControl";
import useIsMobile from "../tools/UseIsMobile";
import DefaultFormMobile from "../elements/DefaultFormMobile";

const SearchFilter = () => {
  const [open, setOpen] = useState(false);
  const [selectedArray, setSelectedArray] = useState([]);

  const features = [
    "Alloy Wheels",
    "Retarder",
    "Compressor",
    "Particle Filter",
    "New",
    "ESP",
    "Cruise Control",
    "ABS",
  ];

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSelected = (value) => {
    setSelectedArray((prevSelectedArray) =>
      prevSelectedArray.includes(value)
        ? prevSelectedArray.filter((item) => item !== value)
        : [...prevSelectedArray, value]
    );
  };
  const isMobile = useIsMobile();
  const isSelected = (value) => selectedArray.includes(value);

  return (
    <div className="search-filter-listing-car">
      <div className="filter-header-list">
        <h6 className="title-filter">Search by Filter</h6>
        <div className="btn-filter">
          <i className="icon-Grid-view" />
        </div>
      </div>
      {isMobile ? <DefaultFormMobile /> : <DefaultFormControl />}
      <div className="filter-extra-btns">
        <div className="expand-more-btn" onClick={handleOpen}>
          Expand more <ArrowRightIcon />
        </div>
        <div className="filter-form-finish-btn">
          Search
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="expanded-search"
      >
        <Box className="expanded-search-box">
          <div className="modal-title">Expanded Search</div>
          <div className="search-filter-listing-car">
            <DefaultFormControl />
            <ExtraFormControl />
          </div>
          <div className="filter-button-container-title">Features:</div>
          <div className="filter-button-container">
            {features.map((value) => (
              <div
                key={value}
                className={`filter-button-select ${
                  isSelected(value) ? "selected" : ""
                }`}
                onClick={() => handleSelected(value)}
              >
                {value}
              </div>
            ))}
          </div>
          <div className="modal-close-btn" onClick={handleClose}>
            <CloseIcon />
          </div>
          <div className="modal-finish-btn" onClick={handleClose}>
            Search
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default SearchFilter;
