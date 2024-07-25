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
import { Textarea } from "@mui/joy";
import { GetFeatures } from "../tools/GetFeatures";
import { GetPath } from "../tools/GetPath";
import ImageUpload from "./ImageUpload";
import { GetTypes } from "../tools/GetTypes";
import { GetCategory } from "../tools/GetCategoryId";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import InputElement from "./InputElement";
import { handleSelected, isSelected } from "../tools/HandleSelected";
import { getModels } from "../tools/GetModels";

const DefaultForkliftCreate = ({
  setModalMessage,
  setModalStatus,
  setModalOpen,
}) => {
  const currentCategory = GetPath().last;
  const currentCategoryId = GetCategory().forkliftId;
  const features = GetFeatures(currentCategory);
  const types = GetTypes(currentCategoryId);

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
      "Forklift",
      modalOpener,
      year
    );
  };

  return (
    <form id="filter-list-car-side-bar" onSubmit={(e) => handleSubmit(e)}>
      <div className="create-ad-template list-filter">
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
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="model-label">Model</InputLabel>
              <Select
                fullWidth
                id="model-select"
                labelId="model-label"
                variant="outlined"
                label="Model"
                name="ModelId"
              >
                {models && models.length > 0 ? (
                  models.map((val) => (
                    <MenuItem value={val.id} key={val.id}>
                      {val.modelName}
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem value={"none"} disabled>
                    -
                  </MenuItem>
                )}
              </Select>
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
                label="Lift Height"
                id="liheight"
                type="number"
                name="LiftHeight"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{"mm"}</InputAdornment>
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
                label="Lifting Capacity"
                id="eqheight"
                type="number"
                name="LiftingCapacity"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{"kq"}</InputAdornment>
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
            <FormControl fullWidth>
              <TextField
                label="Hours of Operation"
                id="operation"
                type="number"
                name="HoursOfOperation"
              />
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Equipment Height"
                id="eqheight"
                type="number"
                name="EquipmentHeight"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{"mm"}</InputAdornment>
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
                label="Vin"
                id="vin"
                type="number"
                placeholder="0"
                name="VinCode"
              />
            </FormControl>
          </div>
        </div>
      </div>
      <div className="create-description">
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <FormLabel>Description:</FormLabel>
              <Textarea
                minRows={5}
                placeholder="Type in here..."
                name="adDetails"
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

export default DefaultForkliftCreate;
