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
import axios from "axios";
import { GetFeatures } from "../tools/GetFeatures";
import { GetCategory } from "../tools/GetCategoryId";
import { GetPath } from "../tools/GetPath";
import { GetTypes } from "../tools/GetTypes";

const DefaultAVCreate = () => {
  const currentCategory = GetPath().last;
  const currentCategoryId = GetCategory(currentCategory);
  const features = GetFeatures(currentCategory);
  const types = GetTypes(currentCategoryId);

  const [brandId, setBrandId] = useState("");
  const [models, setModels] = useState([]);

  const [currency, setCurrency] = useState("AZN");
  const [enginePowerType, setEnginePowerType] = useState("HP");

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
  
  const isSelected = (value) => selectedArray.some((el) => value === el);

  const getModels = async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_LINK}/Model/GetModelByBrandId?BrandId=${brandId}`
      );
      setModels(response.data);
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    features.forEach((feature) => {
      if (selectedArray.some((el) => feature.id !== el)) {
        formData.append(feature, false);
      }
    });

    selectedArray.forEach((value) => {
      formData.append(value, true);
    });

    for (const file of images) {
      formData.append("AdImage", file.file, file.file.name);
    }
    try {
      const token = localStorage.getItem("token");

      const response = await axios
        .post(
          `${process.env.NEXT_PUBLIC_API_LINK}/Forklift/CreateForkliftAd`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((data) => data.data)
        .catch((error) => console.error("Error:", error));
    } catch (error) {
      console.log(error);
    }
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
              >
                {types.brands.map((val) => (
                  <MenuItem
                    value={val.id}
                    key={val.id}
                    onChange={(e) => getModels(e)}
                  >
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
              >
                {models.map((val) => {
                  <MenuItem value={val.id} key={val.id}>
                    {val.modelName}
                  </MenuItem>;
                })}
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
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              {types.currTypes.map((val) => {
                <MenuItem key={val.id} value={val.id}>
                  {val}
                </MenuItem>;
              })}
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
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {currency[0]}
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </div>
        </div>
        <div className="form-group prefix-input">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Operation Hours"
                id="opHours"
                type="number"
                placeholder="0"
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
              <InputLabel id="year-min-label">Year</InputLabel>
              <Select
                fullWidth
                id="year-min-select"
                labelId="year-min-label"
                variant="outlined"
                label="Min"
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
              <InputLabel id="emission-sticker-label">
                Emission Sticker
              </InputLabel>
              <Select
                fullWidth
                id="emission-sticker-select"
                labelId="emission-sticker-label"
                variant="outlined"
                label="Emission Sticker"
              >
                <MenuItem value={"1none"}>1 (None)</MenuItem>
                <MenuItem value={"2red"}>2 (Red)</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Vin"
                id="engine-power-min"
                type="number"
                placeholder="0"
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
              <Textarea minRows={5} placeholder="Type in here..." />
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
    </form>
  );
};

export default DefaultAVCreate;
