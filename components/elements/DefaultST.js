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
const features = [
  "Cabin",
  "Front Jack",
  "Front Hydraulics",
  "New",
  "ABS",
  "Auxiliary Heating",
  "Four Wheel Drive",
  "Hydrolic Wheel",
  "Damaged Vehicles",
];
const DefaultSTCreate = () => {
  const [category, setCategory] = useState("");
  const [price, setMinPrice] = useState("");
  const [adType, setAdtype] = useState("");
  const [year, setYear] = useState("");
  const [opHours, setOpHours] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [currency, setCurrency] = useState("₼AZN");
  const [vin, setVin] = useState("");
  const [emissionSticker, setEmissionSticker] = useState("");
  const [enginePowerType, setEnginePowerType] = useState("hp");
  const [minEnginePower, setMinEnginePower] = useState("");
  const [description, setDescription] = useState("");
  const [gvw, setGVW] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [loadCapacity, setLoadCapacity] = useState("");
  const [volume, setVolume] = useState("");
  const [length, setLength] = useState("");
  const [loadWidth, setLoadWith] = useState("");
  const [loadHeight, setLoadHeight] = useState("");
  const [axles, setAxles] = useState("");
  const [selectedArray, setSelectedArray] = useState([]);
  const [images, setImages] = useState([]);
  const maxNumber = 20;
  const onUploadImage = (imageList) => {
    setImages(imageList);
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
          <div className="input-search-list">
            <FormControl fullWidth>
              <InputLabel id="axles-label">Axles</InputLabel>
              <Select
                fullWidth
                id="axles-select"
                labelId="axles-label"
                label="Axles"
                variant="outlined"
                value={axles}
                onChange={(e) => setAxles(e.target.value)}
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
              <TextField
                label="Operation Hours"
                id="opHours"
                type="number"
                placeholder="0"
                value={opHours}
                onChange={(e) => setOpHours(e.target.value)}
              />
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
                value={gvw}
                onChange={(e) => setGVW(e.target.value)}
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
                value={loadCapacity}
                onChange={(e) => setLoadCapacity(e.target.value)}
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
                value={width}
                onChange={(e) => setWidth(e.target.value)}
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
                value={height}
                onChange={(e) => setHeight(e.target.value)}
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
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
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
                value={length}
                onChange={(e) => setLength(e.target.value)}
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
                value={loadWidth}
                onChange={(e) => setLoadWith(e.target.value)}
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
                value={loadHeight}
                onChange={(e) => setLoadHeight(e.target.value)}
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
                value={minEnginePower}
                onChange={(e) => setMinEnginePower(e.target.value)}
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
                value={year}
                onChange={(e) => setYear(e.target.value)}
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
                value={emissionSticker}
                onChange={(e) => setEmissionSticker(e.target.value)}
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
                value={vin}
                onChange={(e) => setVin(e.target.value)}
              />
            </FormControl>
          </div>
        </div>
        <div className="form-group ">
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

export default DefaultSTCreate;
