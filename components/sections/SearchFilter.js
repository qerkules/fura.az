"use client";
import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import DefaultFormControl from "../elements/DefaultFormControl";
import TruckFormControl from "../elements/TruckFormControl";
import useIsMobile from "../tools/UseIsMobile";
import DefaultFormMobile from "../elements/DefaultFormMobile";
import { GetPath } from "../tools/GetPath";
import AvControl from "./search-controls/AvControl";
import TrailerControl from "./search-controls/TrailerControl";
import ForkliftControl from "./search-controls/ForkliftControl";
import ComaControl from "./search-controls/ComaControl";
import BusControl from "./search-controls/BusControl";
import ServiceFormMobile from "../elements/ServiceFormMobile";
import ServicesControl from "./search-controls/ServicesControl";
import axios from "axios";
import { GetCategory } from "../tools/GetCategoryId";

const SearchFilter = ({ setValues }) => {
  const [open, setOpen] = useState(false);
  const [searchParams, setSearchParams] = useState({});
  const path = GetPath().last;
  const currentCategoryId = GetCategory(path);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUpdateSearchParams = (param, value) => {
    setSearchParams((prevState) => ({
      ...prevState,
      [param]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let mypath;
    if (path === "av") mypath = "AgriculturalVehicle";
    if (path === "sparepart") mypath = "Sparepart";
    if (path === "bus") mypath = "Bus";
    if (path === "co-ma") mypath = "ConstructionMachinery";
    if (path === "forklift") mypath = "Forklift";
    if (path === "semi-truck") mypath = "SemiTrailerTruck";
    if (path === "trailer") mypath = "SemiTrailer";
    if (path === "truck") mypath = "Truck";

    const filteredParams = Object.entries(searchParams).reduce(
      (acc, [key, value]) => {
        if (value) {
          acc[key] = value;
        }
        return acc;
      },
      {}
    );

    filteredParams.ProductTypeId = currentCategoryId;

    const url = `${process.env.NEXT_PUBLIC_API_LINK}/Search/${mypath}Search`;
    try {
      const response = await axios.get(url, { params: filteredParams });
      setValues(
        response.data?.searchList?.results?.$values?.map((data) => data.vehicle)
      );
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const isMobile = useIsMobile();

  const handleCurrentForm = () => {
    if (path === "services") {
      return isMobile ? (
        <ServiceFormMobile
          handleUpdateSearchParams={handleUpdateSearchParams}
        />
      ) : (
        <ServicesControl handleUpdateSearchParams={handleUpdateSearchParams} />
      );
    } else {
      return isMobile ? (
        <DefaultFormMobile
          handleUpdateSearchParams={handleUpdateSearchParams}
        />
      ) : (
        <DefaultFormControl
          handleUpdateSearchParams={handleUpdateSearchParams}
        />
      );
    }
  };

  const handleExtraControls = () => {
    if (path === "av")
      return <AvControl handleUpdateSearchParams={handleUpdateSearchParams} />;
    if (path === "bus")
      return <BusControl handleUpdateSearchParams={handleUpdateSearchParams} />;
    if (path === "co-ma")
      return (
        <ComaControl handleUpdateSearchParams={handleUpdateSearchParams} />
      );
    if (path === "forklift")
      return (
        <ForkliftControl handleUpdateSearchParams={handleUpdateSearchParams} />
      );
    if (path === "semi-truck")
      return (
        <TruckFormControl handleUpdateSearchParams={handleUpdateSearchParams} />
      );
    if (path === "trailer")
      return (
        <TrailerControl handleUpdateSearchParams={handleUpdateSearchParams} />
      );
    if (path === "truck")
      return (
        <TruckFormControl handleUpdateSearchParams={handleUpdateSearchParams} />
      );
    if (path === "truck-under")
      return (
        <TruckFormControl handleUpdateSearchParams={handleUpdateSearchParams} />
      );
  };

  return (
    <form className="search-filter-listing-car" onSubmit={handleSubmit}>
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
        <input type="submit" className="modal-finish-btn" value="Search" />
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
            <DefaultFormControl
              handleUpdateSearchParams={handleUpdateSearchParams}
            />
            {handleExtraControls()}
          </div>
          <div className="modal-close-btn" onClick={handleClose}>
            <CloseIcon />
          </div>
          <input
            type="submit"
            className="modal-finish-btn"
            placeholder="Search"
          />
        </Box>
      </Modal>
    </form>
  );
};

export default SearchFilter;
