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
import ImageUpload from "./ImageUpload";
import { GetTypes } from "../tools/GetTypes";
import { GetFeatures } from "../tools/GetFeatures";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { getModels } from "../tools/GetModels";
import { GetPath } from "../tools/GetPath";
import { GetCategory } from "../tools/GetCategoryId";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { handleSelected, isSelected } from "../tools/HandleSelected";

const DefaultTruckCreate = ({
  setModalMessage,
  setModalStatus,
  setModalOpen,
}) => {
  const currentCategory = GetPath().last;
  const currentCategoryId = GetCategory().truckId;
  const features = GetFeatures(currentCategory);
  const types = GetTypes(currentCategoryId);

  const [notModel, setNotModel] = useState(true);
  const [newModel, setNewModel] = useState(false);
  const [models, setModels] = useState([]);

  const [currency, setCurrency] = useState("AZN");
  const [enginePowerType, setEnginePowerType] = useState("HP");

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
    submitForm(e, features, selectedArray, images, "Truck", modalOpener);
  };
  return (
    <form onSubmit={handleSubmit}>
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

        {notModel ? (
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
        ) : (
          <div className="form-group">
            <div className="group-select">
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  id="model-input"
                  variant="outlined"
                  label="Model"
                  value={newModel}
                  onChange={(e) => setNewModel(e.target.value)}
                />
              </FormControl>
            </div>
          </div>
        )}
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
              {types.distanceunittypes.map((val, index) => (
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
              <InputLabel id="emission-class-label">Emission Class</InputLabel>
              <Select
                fullWidth
                id="emission-class-select"
                labelId="emission-class-label"
                variant="outlined"
                label="Emission Class"
                name="EmissionClass"
              >
                {types.emissionclasses.map((val, index) => (
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
              <InputLabel id="emission-sticker-label">
                Emission Sticker
              </InputLabel>
              <Select
                fullWidth
                id="emission-sticker-select"
                labelId="emission-sticker-label"
                variant="outlined"
                label="Emission Sticker"
                name="EmissionSticker"
              >
                {types.emissionstickers.map((val, index) => (
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
              <InputLabel id="paint-label">Paint</InputLabel>
              <Select
                fullWidth
                id="paint-select"
                labelId="paint-label"
                variant="outlined"
                label="Paint"
                name="Paint"
              >
                {types.paints.map((val, index) => (
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
              <InputLabel id="wheel-formula-label">Wheel Formula</InputLabel>
              <Select
                fullWidth
                id="wheel-formula-select"
                labelId="wheel-formula-label"
                variant="outlined"
                label="Wheel Formula"
                name="WheelFormula"
              >
                {types.wheelTypes.map((val, index) => (
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
                {types.aircotypes.map((val, index) => (
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
              <TextField label="Vin" id="vin" name="VinCode" placeholder="0TYKWN847KWXN"/>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Cylinder Volume"
                id="cyVolume"
                type="number"
                placeholder="0"
                name="CylinderVolume"
              />
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Steering"
                id="steering"
                placeholder="0"
                name="Steering"
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

export default DefaultTruckCreate;
