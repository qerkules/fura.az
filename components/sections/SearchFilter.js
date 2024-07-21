"use client";
import React, { useEffect, useState } from "react";
import { Box, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DefaultFormControl from "../elements/DefaultFormControl";
import TruckFormControl from "../elements/TruckFormControl";
import useIsMobile from "../tools/UseIsMobile";
import DefaultFormMobile from "../elements/DefaultFormMobile";
import { GetPath } from "../tools/GetPath";
import { GetFeatures } from "../tools/GetFeatures";
import AvControl from "./search-controls/AvControl";
import TrailerControl from "./search-controls/TrailerControl";
import ForkliftControl from "./search-controls/ForkliftControl";
import ComaControl from "./search-controls/ComaControl";
import BusControl from "./search-controls/BusControl";
import ServiceFormMobile from "../elements/ServiceFormMobile";
import ServicesControl from "./search-controls/ServicesControl";

const SearchFilter = () => {
  const [open, setOpen] = useState(false);
  const [selectedArray, setSelectedArray] = useState([]);

  const path = GetPath().last;

  const features = GetFeatures(path);

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
  const handleCurrentForm = () => {
    if (path === "services") {
      if (isMobile) {
        return <ServiceFormMobile />;
      } else {
        return <ServicesControl />;
      }
    } else {
      if (isMobile) {
        return <DefaultFormMobile />;
      } else {
        return <DefaultFormControl />;
      }
    }
  };

  const handleExtraControls = () => {
    if (path === "av") return <AvControl />;
    if (path === "bus") return <BusControl />;
    if (path === "co-ma") return <ComaControl />;
    if (path === "forklift") return <ForkliftControl />;
    if (path === "semi-truck") return <TruckFormControl />;
    if (path === "trailer") return <TrailerControl />;
    if (path === "truck") return <TruckFormControl />;
    if (path === "truck-under") return <TruckFormControl />;
  };

  return (
    <div className="search-filter-listing-car">
      <div className="filter-header-list">
        <h6 className="title-filter">Search by Filter</h6>
        <div className="btn-filter">
          <i className="icon-Grid-view" />
        </div>
      </div>
      {handleCurrentForm()}

      <div className="filter-extra-btns">
        <div className="expand-more-btn" onClick={handleOpen}>
          Expand more <ArrowRightIcon />
        </div>
        <div className="filter-form-finish-btn">Search</div>
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
            {handleExtraControls()}
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
