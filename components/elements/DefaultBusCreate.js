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
import ImageUpload from "./ImageUpload";
import { Textarea } from "@mui/joy";
import { GetCategory } from "../tools/GetCategoryId";
import { GetFeatures } from "../tools/GetFeatures";
import { GetTypes } from "../tools/GetTypes";
import { GetPath } from "../tools/GetPath";

const DefaultBusCreate = () => {
  const currentCategory = GetPath().last;
  const currentCategoryId = GetCategory().busId;
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
                name="ModelId"
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
              name="Currency"
            >
              {types.currTypes.map((val) => {
                <MenuItem key={val.index} value={val.index}>
                  {val.value}
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
                name="Price"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {"$"}
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
              name="DistanceMeasurementUnit"
            >
              {types.distanceunittypes.map((val) => {
                <MenuItem key={val.index} value={val.index}>
                  {val.value}
                </MenuItem>;
              })}
            </Select>
          </FormControl>
        </div>
        <div className="form-group prefix-input">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Distance"
                id="distance"
                type="number"
                name="Distance"
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
                name="EnginePowerHP"
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
                name="Year"
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
                name="EmissionClass"
              >
                {types.emissionclasses.map((val) => {
                  <MenuItem value={val.index} key={val.index}>
                    {val.value}
                  </MenuItem>;
                })}
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
                name="EmissionStickers"
              >
                {types.emissionstickers.map((val) => {
                  <MenuItem value={val.index} key={val.index}>
                    {val.value}
                  </MenuItem>;
                })}
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
                name="FuelType"
              >
                {types.fuelTypes.map((val) => {
                  <MenuItem value={val.index} key={val.index}>
                    {val.value}
                  </MenuItem>;
                })}
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
                {types.gearboxes.map((val) => {
                  <MenuItem value={val.index} key={val.index}>
                    {val.value}
                  </MenuItem>;
                })}
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
                name="Paint"
              >
                {types.paints.map((val) => {
                  <MenuItem value={val.index} key={val.index}>
                    {val.value}
                  </MenuItem>;
                })}
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
                name="WheelFormula"
              >
                {types.wheelTypes.map((val) => {
                  <MenuItem value={val.index} key={val.index}>
                    {val.value}
                  </MenuItem>;
                })}
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
                name="DrivingCabin"
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
                name="VehicleWeight"
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
                name="Axles"
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
                name="AirConditioning"
              >
                {types.aircotypes.map((val) => {
                  <MenuItem value={val.index} key={val.index}>
                    {val.value}
                  </MenuItem>;
                })}
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
                label="Vin"
                id="vin"
                type="number"
                placeholder="0"
                name="VinCode"
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

export default DefaultBusCreate;
