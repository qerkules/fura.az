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
import { GetCategory } from "../tools/GetCategoryId";
import { GetFeatures } from "../tools/GetFeatures";
import { GetTypes } from "../tools/GetTypes";
import { GetPath } from "../tools/GetPath";
import { getModels } from "../tools/GetModels";
import InputElement from "./InputElement";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { handleSelected, isSelected } from "../tools/HandleSelected";
import { submitForm } from "../tools/CreateSubmit";
import EnginePowerInput from "./EnginePowerInput";
import NewModel from "./NewModel";
import RentForm from "./RentForm";

const DefaultBusCreate = ({
  setModalMessage,
  setModalStatus,
  setModalOpen,
}) => {
  const currentCategory = GetPath().last;
  const currentCategoryId = GetCategory(currentCategory);
  const features = GetFeatures(currentCategory);
  const types = GetTypes(currentCategoryId);

  const [saleOrRent, setSaleOrRent] = useState("");
  const [year, setYear] = useState("");
  const [models, setModels] = useState([]);
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
    submitForm(e, features, selectedArray, images, "Bus", modalOpener, year);
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <FormControl
        id="filter-list-car-side-bar"
        className="create-ad-template list-filter"
      >
        <div className="form-group">
          <div className="input-search-list">
            <FormControl fullWidth>
              <InputLabel id="adtype-label">Ad Type</InputLabel>
              <Select
                fullWidth
                id="adtype-select"
                labelId="adtype-label"
                label="Ad Type"
                variant="outlined"
                name="SaleOrRent"
                value={saleOrRent}
                onChange={(e) => setSaleOrRent(e.target.value)}
              >
                <MenuItem value={"Sale"}>Sale</MenuItem>
                <MenuItem value={"Rent"}>Rent</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="input-search-list">
            <FormControl fullWidth>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                fullWidth
                id="category-select"
                labelId="category-label"
                label="Category"
                variant="outlined"
                name="CategoryId"
              >
                {types.categories.map((val) => (
                  <MenuItem value={val.id} key={val.id}>
                    {val.categoryName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="brand-label">Brand</InputLabel>
              <Select
                fullWidth
                id="brand-select"
                labelId="brand-label"
                variant="outlined"
                label="Brand"
                name="BrandId"
                onChange={(e) => getModels(e, setModels)}
              >
                {types.brands.map((val) => (
                  <MenuItem value={val.id} key={val.id}>
                    {val.brandName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <NewModel models={models} />
        <ImageUpload
          maxNumber={maxNumber}
          images={images}
          setImages={setImages}
        />
        <RentForm saleOrRent={saleOrRent} types={types} />
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
        <EnginePowerInput />
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label={"Year"}
                  views={["year"]}
                  name="Year"
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
            <InputElement inputName={"EmissionClass"} types={types} />
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <InputElement inputName={"EmissionSticker"} types={types} />
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <InputElement inputName={"FuelTypes"} types={types} />
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <InputElement inputName={"Gearboxes"} types={types} />
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <InputElement inputName={"Paints"} types={types} />
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="driving-cabin-label">Steering</InputLabel>
              <Select
                fullWidth
                id="driving-cabin-select"
                labelId="driving-cabin-label"
                variant="outlined"
                label="Steering"
                name="Steering"
              >
                <MenuItem value={"Long road"}>Left</MenuItem>
                <MenuItem value={"Local"}>Right</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="form-group">
          <div className="group-select">
            <InputElement inputName={"AirCondition"} types={types} />
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="driving-cabin-label">Cylinder Volume</InputLabel>
              <Select
                fullWidth
                id="cylinder-select"
                labelId="cylinder-label"
                variant="outlined"
                label="Cylinder Volume"
                name="CylinderVolume"
              >
                <MenuItem value={"100"}>100 cc</MenuItem>
                <MenuItem value={"200"}>200 cc</MenuItem>
                <MenuItem value={"300"}>300 cc</MenuItem>
                <MenuItem value={"400"}>400 cc</MenuItem>
                <MenuItem value={"500"}>500 cc</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Vin"
                id="vin"
                placeholder="0TYKWN847KWXN"
                name="VinCode"
              />
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Number of Seats"
                id="seats"
                placeholder="0"
                name="NumberOfSeats"
              />
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
      <div className="filter-button-container-title mt-15">Features:</div>
      <div className="filter-button-container">
        {features.map((value) => (
          <div
            key={value.id}
            className={`filter-button-select ${
              isSelected(value.id, selectedArray) ? "selected" : ""
            }`}
            onClick={() => handleSelected(value.id, setSelectedArray)}
          >
            {value.value}
          </div>
        ))}
      </div>
      <input type="submit" />
    </form>
  );
};

export default DefaultBusCreate;
