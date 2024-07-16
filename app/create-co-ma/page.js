"use client";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ImageUploading from "react-images-uploading";
const features = [
  "ABS",
  "Four Whee Drive",
  "Particle Filter",
  "Quick Change Part",
  "BSS",
  "NEW",
  "Central lubricant application",
  "Damaged Vehicles",
];
const DefaultTruckCreate = () => {
  const [category, setCategory] = useState("");
  const [price, setMinPrice] = useState("");
  const [rentType, setRentType] = useState("");
  const [adType, setAdtype] = useState("");
  const [operation, setOperation] = useState("");
  const [year, setYear] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [vin, setVin] = useState("");
  const [currency, setCurrency] = useState("₼AZN");
  const [emissionSticker, setEmissionSticker] = useState("");
  const [selectedArray, setSelectedArray] = useState([]);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const maxNumber = 20;
  const onUploadImage = (imageList) => {
    setImages(imageList);
    console.log(images);
  };

  const handleSelected = (value) => {
    setSelectedArray((prevSelectedArray) =>
      prevSelectedArray.includes(value)
        ? prevSelectedArray.filter((item) => item !== value)
        : [...prevSelectedArray, value]
    );
  };
  const isSelected = (value) => selectedArray.includes(value);

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
                value={adType}
                onChange={(e) => setAdtype(e.target.value)}
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
              <InputLabel id="model-label">Model</InputLabel>
              <Select
                fullWidth
                id="model-select"
                labelId="model-label"
                variant="outlined"
                label="Model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              >
                <MenuItem value={"R500"}>R 500</MenuItem>
                <MenuItem value={"DX470"}>DX 470</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-image-input">
          <ImageUploading
            multiple
            value={images}
            onChange={onUploadImage}
            maxNumber={maxNumber}
            dataURLKey="data_url"
            acceptType={["jpg"]}
          >
            {({ onImageUpload, dragProps, onImageRemove, isDragging }) => (
              <>
                <div
                  className={`form-image-input-box ${
                    images.length > 0 ? "display-none" : "flex"
                  }`}
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <div className="first-icon-image">
                    <img src="/assets/images/icon-box/truck-front.png" />
                  </div>
                  <p>* Upload Front Image</p>
                </div>
                <div
                  onClick={onImageUpload}
                  {...dragProps}
                  className={`form-image-input-box ${
                    images.length > 0 ? "display-none" : "flex"
                  }`}
                >
                  <img src="/assets/images/icon-box/truck-back.svg" />
                  <p>* Upload Back Image</p>
                </div>
                <div
                  onClick={onImageUpload}
                  {...dragProps}
                  className={`form-image-input-box ${
                    images.length > 0 ? "display-none" : "flex"
                  }`}
                >
                  <img src="/assets/images/icon-box/truck-interior.svg" />

                  <p>* Upload interior Image</p>
                </div>
                {images.map((image, index) => (
                  <div key={index} className="image-item">
                    <img src={image.data_url} alt="" width="100" />
                    <div className="uploaded-remove-btn">
                      <div onClick={() => onImageRemove(index)}>X</div>
                    </div>
                  </div>
                ))}
                <div
                  className="form-image-input-box"
                  onClick={onImageUpload}
                  {...dragProps}
                >
                  <AddPhotoAlternateIcon />
                  <p>Upload Image</p>
                </div>
              </>
            )}
          </ImageUploading>
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
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <MenuItem value={"1999"}>1999</MenuItem>
                <MenuItem value={"2000"}>2000</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
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

        <div className="form-group prefix-input">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Hours of Operation"
                id="operation"
                value={operation}
                type="number"
                onChange={(e) => setOperation(e.target.value)}
              />
            </FormControl>
          </div>
        </div>

        <div className="form-group prefix-input">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Vin"
                id="vin"
                value={vin}
                type="number"
                onChange={(e) => setVin(e.target.value)}
              />
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
                value={emissionSticker}
                onChange={(e) => setEmissionSticker(e.target.value)}
              >
                <MenuItem value={"1none"}>1 (None)</MenuItem>
                <MenuItem value={"2red"}>2 (Red)</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="form-group prefix-input">
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
      </FormControl>
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
    </div>
  );
};

export default DefaultTruckCreate;
