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
import { GetCategory } from "../tools/GetCategoryId";
import { GetPath } from "../tools/GetPath";
import { GetFeatures } from "../tools/GetFeatures";
import { GetTypes } from "../tools/GetTypes";
import { getModels } from "../tools/GetModels";
import InputElement from "./InputElement";
import { submitForm } from "../tools/CreateSubmit";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { handleSelected, isSelected } from "../tools/HandleSelected";
import NewModel from "./NewModel";
import RentForm from "./RentForm";

const DefaultSTEdit = ({ setModalMessage, setModalStatus, setModalOpen }) => {
  const currentCategory = GetPath().last;
  const currentCategoryId = GetCategory(currentCategory)
  const features = GetFeatures(currentCategory);
  const refrigatorFeatures = GetFeatures("trailer-refrigator");
  const types = GetTypes(currentCategoryId);

  const [saleOrRent, setSaleOrRent] = useState("");
  const [year, setYear] = useState("");
  const [models, setModels] = useState([]);

  const [category, setCategory] = useState("");

  const [currency, setCurrency] = useState("AZN");

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
      "SemiTrailer",
      modalOpener,
      year
    );
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
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
        <div className="form-group">
          <div className="input-search-list">
            <FormControl fullWidth>
              <InputLabel id="axles-label">Axles</InputLabel>
              <Select
                fullWidth
                id="axles-select"
                labelId="axles-label"
                label="Axles"
                variant="outlined"
                name="Axles"
              >
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="input-search-list">
            <FormControl fullWidth>
              <InputLabel id="axles-label">Door locks</InputLabel>
              <Select
                fullWidth
                id="door-select"
                labelId="door-label"
                label="Door locks"
                variant="outlined"
                name="DoorLocks"
              >
                <MenuItem value={"2"}>2</MenuItem>
                <MenuItem value={"4"}>4</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="hydr-equi-label">Hydraulic Equipment</InputLabel>
              <Select
                fullWidth
                id="hydr-equi-select"
                labelId="hydr-equi-label"
                variant="outlined"
                label="Hydraulic Equipment"
                name="HydraulicEquipment"
              >
                <MenuItem value={"Tipper-hydr"}>Tipper Hydraulic</MenuItem>
                <MenuItem value={"push-floor-hydr"}>
                  Push Floor Hydraulic
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Permissible Gross Vehicle Weight (GVW)"
                id="gvw"
                type="number"
                placeholder="0"
                // name="Gvw"
              />
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Load Capacity (kg)"
                id="loadCapacity"
                type="number"
                placeholder="0"
                name="LoadCapacity"
              />
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Vehicle Width (mm)"
                id="width"
                type="number"
                placeholder="0"
                name="VehicleWidth"
              />
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Vehicle Height (mm)"
                id="height"
                type="number"
                placeholder="0"
                name="VehicleHeight"
              />
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Internal Volume (m³)"
                id="volume"
                type="number"
                placeholder="0"
                name="LoadingAreaVolume"
              />
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Loading Space Length (mm)"
                id="length"
                type="number"
                placeholder="0"
                name="LoadingSpaceLength"
              />
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Loading Area Width (mm)"
                id="load-width"
                type="number"
                placeholder="0"
                name="LoadingAreaWidth"
              />
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Loading Area Height (mm)"
                id="load-height"
                type="number"
                placeholder="0"
                name="LoadingAreaHeight"
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
            <FormControl fullWidth>
              <TextField
                label="Vin"
                id="vin"
                placeholder="AE46FKAFFNKJSAD"
                name="VinCode"
              />
            </FormControl>
          </div>
        </div>
      </FormControl>

      {category === "d5e29989-0d63-41d7-861b-d9f50d3684a8" && (
        <>
          <div className="filter-button-container-title mt-15">
            Referee Equipment:
          </div>
          <div className="create-ad-template list-filter refrigator">
            <div className="form-group">
              <div className="group-select">
                <FormControl fullWidth>
                  <TextField
                    label="Cooling Unit"
                    id="co"
                    name="RefrigeratorRequest.CoolingUnit"
                  />
                </FormControl>
              </div>
            </div>{" "}
            <div className="form-group">
              <div className="group-select">
                <FormControl fullWidth>
                  <TextField
                    label="Cooling Unit Model"
                    id="com"
                    name="RefrigeratorRequest.CoolingUnitModel"
                  />
                </FormControl>
              </div>
            </div>{" "}
            <div className="form-group">
              <div className="group-select">
                <FormControl fullWidth>
                  <TextField
                    label="Engine Working Hours"
                    id="enh"
                    type="number"
                    name="RefrigeratorRequest.EngineWorkingHours"
                  />
                </FormControl>
              </div>
            </div>
          </div>
          <div className="filter-button-container">
            {refrigatorFeatures.map((value) => (
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
        </>
      )}
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
      <input type="submit" placeholder="submit" />
    </form>
  );
};

export default DefaultSTEdit;
