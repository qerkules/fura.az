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

const ForkliftControl = () => {
  const [fuelType, setFuelType] = useState("");
  const [gearbox, setGearbox] = useState("");
  const [liftCapacity, setLiftCapacity] = useState("");
  const [eqHeight, setEqHeight] = useState("");
  const [liftHeight, setLiftHeight] = useState("");

  return (
    <FormControl id="filter-list-car-side-bar" className="list-filter">
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
            <InputLabel id="lift-cap-label">Lifting Capacity</InputLabel>
            <Select
              fullWidth
              id="liftcap-select"
              labelId="lift-cap-label"
              variant="outlined"
              label="Lifting Capacity"
              value={liftCapacity}
              onChange={(e) => setLiftCapacity(e.target.value)}
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
            <InputLabel id="eqheight-label">Equipment Height</InputLabel>
            <Select
              fullWidth
              id="eqheight-select"
              labelId="eqheight-label"
              variant="outlined"
              label="Equipment Height"
              value={eqHeight}
              onChange={(e) => setEqHeight(e.target.value)}
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
            <InputLabel id="lift-height-label">Lift Height</InputLabel>
            <Select
              fullWidth
              id="lift-height-select"
              labelId="lift-height-label"
              variant="outlined"
              label="Lift Weight"
              value={liftHeight}
              onChange={(e) => setLiftHeight(e.target.value)}
            >
              <MenuItem value={"automatic"}>Automatic</MenuItem>
              <MenuItem value={"manual"}>Manual</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </FormControl>
  );
};

export default ForkliftControl;
