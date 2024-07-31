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
import Textarea from "@mui/joy/Textarea";
import ImageUpload from "./ImageUpload";
import { GetFeatures } from "../tools/GetFeatures";
import { GetCategory } from "../tools/GetCategoryId";
import { GetPath } from "../tools/GetPath";
import { GetTypes } from "../tools/GetTypes";
import InputElement from "./InputElement";
import { getModels } from "../tools/GetModels";
import { submitForm } from "../tools/CreateSubmit";
import { handleSelected, isSelected } from "../tools/HandleSelected";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import NewModel from "./NewModel";
import RentForm from "./RentForm";

const DefaultAVCreate = ({ setModalMessage, setModalStatus, setModalOpen }) => {
  const currentCategory = GetPath().last;
  const currentCategoryId = GetCategory(currentCategory);
  const features = GetFeatures(currentCategory);
  const types = GetTypes(currentCategoryId);

  const [saleOrRent, setSaleOrRent] = useState("");
  const [enginePowerType, setEnginePowerType] = useState("");
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
    submitForm(
      e,
      features,
      selectedArray,
      images,
      "AgriculturalVehicle",
      modalOpener,
      year
    );
  };

  return (
    <form id="filter-list-car-side-bar" onSubmit={(e) => handleSubmit(e)}>
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
                <MenuItem value={"Sale"}>sale</MenuItem>
                <MenuItem value={"Rent"}>rent</MenuItem>
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

        <div className="form-group prefix-input">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Operation Hours"
                id="opHours"
                type="number"
                placeholder="0"
                name="HoursOfOperation"
              />
            </FormControl>
          </div>
        </div>

        <div className="prefix-select">
          <FormControl fullWidth>
            <InputLabel id="hp/kw">Hp/Kw</InputLabel>
            <Select
              id="hp/kw-select"
              labelId="hp/kw-label"
              label="hp/kw"
              value={enginePowerType}
              onChange={(e) => setEnginePowerType(e.target.value)}
            >
              <MenuItem value={"hp"}>HP</MenuItem>
              <MenuItem value={"kw"}>KW</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-group prefix-input">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Engine Power"
                id="engine-power-min"
                type="number"
                name="EnginePowerHP"
                placeholder="0"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {enginePowerType}
                    </InputAdornment>
                  ),
                }}
              />
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
            <InputElement inputName={"EmissionSticker"} types={types} />
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
      </FormControl>
      <div className="create-description">
        <div className="form-group ">
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
      <input type="submit" placeholder="Submit" />
    </form>
  );
};

export default DefaultAVCreate;
