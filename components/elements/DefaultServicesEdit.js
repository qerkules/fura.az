"use client";
import {
  FormControl,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import ImageUpload from "./ImageUpload";
import { Textarea } from "@mui/joy";
import InputElement from "./InputElement";
import { submitForm } from "../tools/CreateSubmit";
import { GetCategory } from "../tools/GetCategoryId";
import { GetFeatures } from "../tools/GetFeatures";
import { GetTypes } from "../tools/GetTypes";
import { handleSelected, isSelected } from "../tools/HandleSelected";
import { GetPath } from "../tools/GetPath";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";

const DefaultServicesEdit = ({
  setModalMessage,
  setModalStatus,
  setModalOpen,
}) => {
  const currentCategory = GetPath().last;
  const currentCategoryId = GetCategory(currentCategory)
  const types = GetTypes(currentCategoryId);

  const [selectedArray, setSelectedArray] = useState([]);
  const [images, setImages] = useState([]);

  const maxNumber = 20;

  const modalOpener = (status, message) => {
    setModalMessage(message);
    setModalStatus(status);
    setModalOpen(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    submitForm(e, null, selectedArray, images, "Service", modalOpener);
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        id="filter-list-car-side-bar"
        className="create-ad-template list-filter"
      >
        <div className="form-group">
          <div className="input-search-list">
            <FormControl fullWidth>
              <TextField label="From Where" id="fromWhere" name="FromAddress" />
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField label="ToWhere" id="toWhere" name="ToAddress" />
            </FormControl>
          </div>
        </div>

        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Type of Product"
                id="typeOfProduct"
                name="typeOfProduct"
              />
            </FormControl>
          </div>
        </div>

        <ImageUpload
          maxNumber={maxNumber}
          images={images}
          setImages={setImages}
        />

        <div className="form-group prefix-select">
          <InputElement inputName={"Currency"} types={types} />
        </div>

        <div className="form-group prefix-input">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Price"
                id="price-min"
                type="number"
                placeholder="0"
                name="Price"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{"$"}</InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </div>
        </div>

        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Km Price"
                type="number"
                id="kmPrice"
                name="PriceForKm"
              />
            </FormControl>
          </div>
        </div>

        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="vehicleType"> Vehicle Status</InputLabel>
              <Select
                labelId="vehicleType"
                id="vehicleType"
                label="Vehicle Status"
                name="VehicleStatus"
              >
                <MenuItem value={"Tent"}>Tent</MenuItem>
                <MenuItem value={"Reyf"}>Reyf</MenuItem>
                <MenuItem value={"Konteyner"}>Konteyner</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="form-group prefix-select">
          <InputElement inputName={"DistanceUnit"} types={types} />
        </div>
        <div className="form-group prefix-input">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Distance"
                id="distance"
                type="number"
                name="Distance"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{"km"}</InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </div>
        </div>

        <div className="form-group ">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Product Weight"
                id="productWeight"
                type="number"
                name="ServiceWeight"
              />
            </FormControl>
          </div>
        </div>

        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label={"Delivery Date"} name="ServiceDeliveryDate" />
              </LocalizationProvider>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label={"Expiry Date"} name="ServiceExpireDate" />
              </LocalizationProvider>
            </FormControl>
          </div>
        </div>
      </FormControl>
      <div className="create-description">
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <FormLabel>Description:</FormLabel>
              <Textarea
                minRows={5}
                placeholder="Type in here..."
                name="AdDetails"
              />
            </FormControl>
          </div>
        </div>
      </div>
      <input type="submit" placeholder="submit" className="mt-15" />
    </form>
  );
};

export default DefaultServicesEdit;
