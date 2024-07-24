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
import axios from "axios";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DefaultForkliftCreate = ({
  setModalMessage,
  setModalStatus,
  setModalOpen,
}) => {
  const currentCategory = GetPath().last;
  const currentCategoryId = GetCategory().forkliftId;
  const features = GetFeatures(currentCategory);
  const types = GetTypes(currentCategoryId);

  const [year, setYear] = useState();
  const [models, setModels] = useState([]);
  const [selectedArray, setSelectedArray] = useState([]);
  const [images, setImages] = useState([]);

  const maxNumber = 20;

  const handleSelected = (selectedItem) => {
    setSelectedArray((prevSelectedArray) =>
      prevSelectedArray.some((item) => item === selectedItem.id)
        ? prevSelectedArray.filter((item) => item !== selectedItem.id)
        : [...prevSelectedArray, selectedItem]
    );
  };

  const getModels = async (e) => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_LINK}/Model/GetModelByBrandId?BrandId=${e.target.value}`
      );
      setModels(response.data.$values);
      return response.data.$values;
    } catch (error) {
      throw error;
    }
  };

  const isSelected = (value) => selectedArray.some((el) => value === el);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const submitData = new FormData(e.target);
    submitData.append(year);

    features.forEach((feature) => {
      if (selectedArray.some((el) => feature.id !== el)) {
        submitData.append(feature.id, false);
      }
    });

    selectedArray.forEach((value) => {
      submitData.append(value, true);
    });

    for (const file of images) {
      submitData.append("AdImage", file.file, file.file.name);
    }
    try {
      const token = localStorage.getItem("token");

      const response = await axios
        .post(
          `${process.env.NEXT_PUBLIC_API_LINK}/Forklift/CreateForkliftAd`,
          submitData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((data) => {
          modalOpener(true, "Succesfully Created");
          return data.data;
        })
        .catch((error) => {
          modalOpener(false, "Ad Cannot be Create");
          return error;
        });

      setModalOpen(true);
      setModalMessage();
      setModalStatus();
    } catch (error) {
      modalOpener(false, "Ad Cannot be Create");
      console.log(error);
    }
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
                onChange={(e) => {
                  getModels(e);
                }}
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
                {models.length > 0 ? (
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
          <FormControl fullWidth>
            <InputLabel id="currency-label">Currency</InputLabel>
            <Select
              variant="outlined"
              id="currency-select"
              labelId="currency-label"
              label="Currency"
              name="Currency"
            >
              {types.currTypes.map((val, index) => (
                <MenuItem key={index} value={val.index}>
                  {val.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
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
                  onChange={(e) => setYear(e.target.value)}
                />
              </LocalizationProvider>
            </FormControl>
          </div>
        </div>

        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="fuel-type-label">Fuel Type</InputLabel>
              <Select
                fullWidth
                id="fuel-type-select"
                labelId="fuel-type-label"
                variant="outlined"
                label="Fuel Type"
                name="FuelType"
              >
                {types.fuelTypes.map((val, index) => (
                  <MenuItem key={index} value={val.index}>
                    {val.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="gearbox-label">Gearbox</InputLabel>
              <Select
                fullWidth
                id="gearbox-select"
                labelId="gearbox-label"
                variant="outlined"
                label="Gearbox"
                name="Gearbox"
              >
                {types.gearboxes.map((val, index) => (
                  <MenuItem key={index} value={val.index}>
                    {val.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
              isSelected(value.id) ? "selected" : ""
            }`}
            onClick={() => handleSelected(value.id)}
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
