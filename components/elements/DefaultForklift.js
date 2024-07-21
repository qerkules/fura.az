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
import { GetFeatures } from "../tools/GetFeatures";
import { GetPath } from "../tools/GetPath";

const DefaultForkliftCreate = () => {
  const path = GetPath();
  const currentCategory = path[path.length - 1];

  const [selectedArray, setSelectedArray] = useState([]);
  const [images, setImages] = useState([]);
  const maxNumber = 20;
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelected = (value) => {
    setSelectedArray((prevSelectedArray) =>
      prevSelectedArray.includes(value)
        ? prevSelectedArray.filter((item) => item !== value)
        : [...prevSelectedArray, value]
    );
  };

  const isSelected = (value) => selectedArray.includes(value);

  const handleSubmit = () => {
    selectedArray.forEach((value) => {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [value]: true,
      }));
    });
    setFormData((prevFormData) => ({
      ...prevFormData,
      ["adImage"]: images,
    }));
  };

  const features = GetFeatures(currentCategory);

  return (
    <div>
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
                name="saleOrRent"
                // onChange={(e) => setAdtype(e.target.value)}
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value={"sale"}>sale</MenuItem>
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
                name="categoryId"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value={"standart-tractor"}>
                  Standart Tractor (5)
                </MenuItem>
                <MenuItem value={"hazardous-load"}>Hazardous Load (7)</MenuItem>
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
                name="brandId"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value={"DAF"}>
                  <span>Daf</span>
                </MenuItem>
                <MenuItem value={"SCANIA"}>Scania</MenuItem>
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
                name="modelId"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value={"R500"}>R 500</MenuItem>
                <MenuItem value={"DX470"}>DX 470</MenuItem>
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
              name="currency"
              onChange={(e) => handleInputChange(e)}
            >
              <MenuItem value={"USD"}>$ USD</MenuItem>
              <MenuItem value={"EURO"}>€ EURO</MenuItem>
              <MenuItem value={"AZN"}>₼ AZN</MenuItem>
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
                name="price"
                onChange={(e) => handleInputChange(e)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {formData.currency && formData.currency[0]}
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
              <TextField
                label="Lift Height"
                id="liheight"
                type="number"
                name="liftHeight"
                onChange={(e) => handleInputChange(e)}
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
                name="liftingCapacity"
                onChange={(e) => handleInputChange(e)}
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
              <InputLabel id="year-min-label">Year</InputLabel>
              <Select
                fullWidth
                id="year-min-select"
                labelId="year-min-label"
                variant="outlined"
                label="Year"
                name="year"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value={"1999"}>1999</MenuItem>
                <MenuItem value={"2000"}>2000</MenuItem>
              </Select>
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
                name="fuelType"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value={"petrol"}>Petrol</MenuItem>
                <MenuItem value={"diesel"}>Diesel</MenuItem>
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
                name="gaerbox"
                onChange={(e) => handleInputChange(e)}
              >
                <MenuItem value={"automatic"}>Automatic</MenuItem>
                <MenuItem value={"manual"}>Manual</MenuItem>
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
                name="hoursOfOperation"
                onChange={(e) => handleInputChange(e)}
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
                name="equipmentHeight"
                onChange={(e) => handleInputChange(e)}
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
                name="vinCode"
                onChange={(e) => handleInputChange(e)}
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
                name="adDetails"
                onChange={(e) => handleInputChange(e)}
              />
            </FormControl>
          </div>
        </div>
      </div>
      <div className="filter-button-container-title mt-15">Features:</div>
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
      <div onClick={handleSubmit}>Submit</div>
    </div>
  );
};

export default DefaultForkliftCreate;
