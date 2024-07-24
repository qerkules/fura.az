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
const features = ["New"];
const DefaultSPCreate = () => {
  const [category, setCategory] = useState("");
  const [price, setMinPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [currency, setCurrency] = useState("₼AZN");
  const [productCode, setProductCode] = useState("");
  const [productName, setProductName] = useState("");
  const [description, setDescription] = useState("");

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


  return (
    <div>
      <FormControl
        id="filter-list-car-side-bar"
        className="create-ad-template list-filter"
      >
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
                value={category}
                onChange={(e) => setCategory(e.target.value)}
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
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
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
              <TextField
                label="Product Name"
                id="liheight"
                value={productName}
                type="number"
                onChange={(e) => setProductName(e.target.value)}
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
              <MenuItem value={"$USD"}>$ USD</MenuItem>
              <MenuItem value={"€EURO"}>€ EURO</MenuItem>
              <MenuItem value={"₼AZN"}>₼ AZN</MenuItem>
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
                value={price}
                onChange={(e) => setMinPrice(e.target.value)}
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

        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Product Code"
                id="liheight"
                value={productCode}
                type="number"
                onChange={(e) => setProductCode(e.target.value)}
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
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
    </div>
  );
};

export default DefaultSPCreate;
