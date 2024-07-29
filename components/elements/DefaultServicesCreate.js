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

const DefaultServicesCreate = ({
  setModalMessage,
  setModalStatus,
  setModalOpen,
}) => {
  const currentCategory = GetPath().last;
  const currentCategoryId = GetCategory().serivceId;
  const types = GetTypes(currentCategoryId);

  const [year, setYear] = useState("");
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
    submitForm(
      e,
      null,
      selectedArray,
      images,
      "Service",
      modalOpener,
      year
    );
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
              <TextField label="From Where" id="fromWhere" name="FromWhere" />
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField label="ToWhere" id="toWhere" name="ToWhere" />
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
              <TextField label="Km Price" id="kmPrice" name="kmPrice" />
            </FormControl>
          </div>
        </div>

        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="vehicleType"> Vehicle Type</InputLabel>
              <Select
                labelId="vehicleType"
                id="vehicleType"
                label="Vehicle Type"
                name="VehicleType"
              >
                <MenuItem value={"Tent"}>Tent</MenuItem>
                <MenuItem value={"Reyf"}>Reyf</MenuItem>
                <MenuItem value={"Konteyner"}>Konteyner</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="form-group-wrap">
          <div className="form-group">
            <div className="group-select">
              <FormControl fullWidth>
                <InputLabel id="distanceUnit">Distance type</InputLabel>
                <Select
                  labelId="distanceUnit"
                  id="distanceUnit"
                  label="Distance unit"
                  name="DistanceMeasurementUnit"
                >
                  {types.distanceunittypes.map((val) => {
                    return (
                      <MenuItem key={val.id} value={val.value}>
                        {val.value}
                      </MenuItem>
                    );
                  })}
                </Select>
              </FormControl>
            </div>
            <div className="form-group">
              <div className="group-select">
                <FormControl fullWidth>
                  <TextField
                    label="Distance"
                    id="distance"
                    type="number"
                    name="Distance"
                  />
                </FormControl>
              </div>
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label={"Year"}
                  views={["year"]}
                  name="DeliveryDate"
                  onChange={(e) => {
                    setYear(e.$y);
                  }}
                />
              </LocalizationProvider>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label={"Year"}
                  views={["year"]}
                  name="ExpiryDate"
                  onChange={(e) => {
                    setYear(e.$y);
                  }}
                />
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
      <input type="submit" placeholder="submit" />
    </form>
  );
};

export default DefaultServicesCreate;
