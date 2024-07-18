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
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ImageUploading from "react-images-uploading";
import { Textarea } from "@mui/joy";
import ImageUpload from "./ImageUpload";
const features = [
  "ABS",
  "ESP",
  "EBS",
  "Auxiliary Heating",
  "Compressor",
  "Cruise Control",
  "Adaptive Cruise Control",
  "Four Wheel Drive",
  "Particle Filter",
  "Navigation System",
  "Parking heater",
  "Trailer Hitch Fixed",
  "Damaged Vehicles",
  "Metallic",
  "New",
  "Alloy wheels",
  "Tailgate Load Platform",
  "Crane",
  "Retarder",
  "Intarder",
];
const DefaultSTTruckCreate = () => {
  const [category, setCategory] = useState("");
  const [price, setMinPrice] = useState("");
  const [rentType, setRentType] = useState("");
  const [adType, setAdtype] = useState("");
  const [dist, setDist] = useState("");
  const [year, setYear] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [currency, setCurrency] = useState("₼AZN");
  const [distanceType, setDistanceType] = useState("km");
  const [emissionClass, setEmissionClass] = useState("");
  const [emissionSticker, setEmissionSticker] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [paint, setPaint] = useState("");
  const [gearbox, setGearbox] = useState("");
  const [wheelFormula, setWheelFormula] = useState("");
  const [drivingCabin, setDrivingCabin] = useState("");
  const [enginePowerType, setEnginePowerType] = useState("hp");
  const [minEnginePower, setMinEnginePower] = useState("");
  const [vehicleWeight, setVehicleWeight] = useState("");
  const [axles, setAxles] = useState("");
  const [airCond, setAirCond] = useState("");
  const [hydrEqui, setHydrEqui] = useState("");
  const [selectedArray, setSelectedArray] = useState([]);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [vin, setVin] = useState("");
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

        <div className="form-group prefix-select">
          <FormControl fullWidth>
            <InputLabel id="distance-type-label">Km/Miles</InputLabel>
            <Select
              variant="outlined"
              id="distance-type-select"
              labelId="distance-type-label"
              label="Km/Miles"
              value={distanceType}
              onChange={(e) => setDistanceType(e.target.value)}
            >
              <MenuItem value={"km"}>Km</MenuItem>
              <MenuItem value={"miles"}>Miles</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-group prefix-input">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Distance"
                id="distance"
                value={dist}
                type="number"
                onChange={(e) => setDist(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{"km"}</InputAdornment>
                  ),
                }}
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
              <InputLabel id="emission-class-label">Emission Class</InputLabel>
              <Select
                fullWidth
                id="emission-class-select"
                labelId="emission-class-label"
                variant="outlined"
                label="Emission Class"
                value={emissionClass}
                onChange={(e) => setEmissionClass(e.target.value)}
              >
                <MenuItem value={"euro1"}>EURO 1</MenuItem>
                <MenuItem value={"euro2"}>EURO 2</MenuItem>
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
              <InputLabel id="fuel-type-label">Fuel Type</InputLabel>
              <Select
                fullWidth
                id="fuel-type-select"
                labelId="fuel-type-label"
                variant="outlined"
                label="Fuel Type"
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
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
                value={gearbox}
                onChange={(e) => setGearbox(e.target.value)}
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
              <InputLabel id="paint-label">Paint</InputLabel>
              <Select
                fullWidth
                id="paint-select"
                labelId="paint-label"
                variant="outlined"
                label="Paint"
                value={paint}
                onChange={(e) => setPaint(e.target.value)}
              >
                <MenuItem value={"red"}>Red</MenuItem>
                <MenuItem value={"blue"}>Blue</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="wheel-formula-label">Wheel Formula</InputLabel>
              <Select
                fullWidth
                id="wheel-formula-select"
                labelId="wheel-formula-label"
                variant="outlined"
                label="Wheel Formula"
                value={wheelFormula}
                onChange={(e) => setWheelFormula(e.target.value)}
              >
                <MenuItem value={"4x2"}>4x2</MenuItem>
                <MenuItem value={"4x4"}>4x4</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="driving-cabin-label">Driving Cabin</InputLabel>
              <Select
                fullWidth
                id="driving-cabin-select"
                labelId="driving-cabin-label"
                variant="outlined"
                label="Driving Cabin"
                value={drivingCabin}
                onChange={(e) => setDrivingCabin(e.target.value)}
              >
                <MenuItem value={"Long road"}>Long Road</MenuItem>
                <MenuItem value={"Local"}>Local</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="vehicle-weight-label">Vehicle Weight</InputLabel>
              <Select
                fullWidth
                id="vehicle-weight-select"
                labelId="vehicle-weight-label"
                variant="outlined"
                label="Vehicle Weight"
                value={vehicleWeight}
                onChange={(e) => setVehicleWeight(e.target.value)}
              >
                <MenuItem value={"0-7.5"}>0t - 7.5t</MenuItem>
                <MenuItem value={"7.5-15"}>7.5t - 15t</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="axles-label">Axles</InputLabel>
              <Select
                fullWidth
                id="axles-select"
                labelId="axles-label"
                variant="outlined"
                label="Axles"
                value={axles}
                onChange={(e) => setAxles(e.target.value)}
              >
                <MenuItem value={"0-5"}>0 - 5</MenuItem>
                <MenuItem value={"5-10"}>5 - 10</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="air-cond-label">Air Condition</InputLabel>
              <Select
                fullWidth
                id="air-cond-select"
                labelId="air-cond-label"
                variant="outlined"
                label="Air Condition"
                value={airCond}
                onChange={(e) => setAirCond(e.target.value)}
              >
                <MenuItem value={"no-air"}>No Air</MenuItem>
                <MenuItem value={"manual-air"}>Manual Air</MenuItem>
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
                value={hydrEqui}
                onChange={(e) => setHydrEqui(e.target.value)}
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
                label="Vin"
                id="vin"
                type="number"
                placeholder="0"
                value={vin}
                onChange={(e) => setVin(e.target.value)}
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

export default DefaultSTTruckCreate;
