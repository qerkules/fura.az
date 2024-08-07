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
import EnginePowerInput from "./EnginePowerInput";
import { submitForm } from "../tools/CreateSubmit";
import RentForm from "./RentForm";
import NewModel from "./NewModel";

const DefaultSTTruckEdit = ({ setModalMessage, setModalStatus, setModalOpen }) => {
  const currentCategory = GetPath().last;
  const currentCategoryId =GetCategory(currentCategory)
  const features = GetFeatures(currentCategory);
  const types = GetTypes(currentCategoryId);

  const [saleOrRent, setSaleOrRent] = useState("");

  const [models, setModels] = useState([]);

  const [currency, setCurrency] = useState("AZN");

  const [year, setYear] = useState("");

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
      "SemiTrailerTruck",
      modalOpener
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormControl
        id="filter-list-car-side-bar"
        className="create-ad-template list-filter"
      >
        <div className="form-group">
          <div className="input-search-list">
            <FormControl fullWidth required>
              <InputLabel id="adtype-label">Ad Type</InputLabel>
              <Select
                fullWidth
                id="adtype-select"
                labelId="adtype-label"
                label="Ad Type"
                variant="outlined"
                name="SaleOrRent"
                value={saleOrRent}
                onChange={(e) => setSaleOrRent(e.target.value)}
              >
                <MenuItem value={"Sale"}>sale</MenuItem>
                <MenuItem value={"Rent"}>rent</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="input-search-list">
            <FormControl fullWidth required>
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
            <FormControl fullWidth required>
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

        <NewModel models={models} />
        <ImageUpload
          maxNumber={maxNumber}
          images={images}
          setImages={setImages}
        />

        <RentForm saleOrRent={saleOrRent} types={types} />

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
        <EnginePowerInput />
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
              <TextField
                fullWidth
                id="fuel-type-select"
                variant="outlined"
                label="Fuel Tank (L)"
                name="FuelTank"
                type="number"
              />
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
              <TextField
                fullWidth
                id="vehicle-weight-select"
                variant="outlined"
                type="number"
                label="Permissible Gross Weight"
                name="LicencedWeight"
              />
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
                <MenuItem value={5}>5</MenuItem>
                <MenuItem value={10}>10</MenuItem>
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
              <TextField
                label="Vin"
                id="vin"
                name="VinCode"
                placeholder="0TYKWN847KWXN"
              />
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="cylinder-label">Cylinder Volume</InputLabel>
              <Select
                fullWidth
                id="cylinder-select"
                labelId="cylinder-label"
                variant="outlined"
                label="Cylinder Volume"
                name="CylinderVolume"
              >
                <MenuItem value={100}>100</MenuItem>
                <MenuItem value={200}>200</MenuItem>
                <MenuItem value={300}>300</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="steering-label">Steering</InputLabel>
              <Select
                fullWidth
                id="steering-select"
                labelId="steering-label"
                variant="outlined"
                label="Steering"
                name="Steering"
              >
                <MenuItem value={"Left"}>Left</MenuItem>
                <MenuItem value={"Right"}>Right</MenuItem>
              </Select>
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
                name="VehicleWidth"
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
                name="VehicleHeight"
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

export default DefaultSTTruckEdit;
