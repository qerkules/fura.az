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

const TrailerControl = () => {
  const [loadCapacity, setLoadCapacity] = useState("");
  const [vehicleWeight, setVehicleWeight] = useState("");
  const [axles, setAxles] = useState("");
  const [hydrEqui, setHydrEqui] = useState("");

  return (
    <FormControl id="filter-list-car-side-bar" className="list-filter">
      <div className="form-group">
        <div className="group-select">
          <FormControl fullWidth>
            <InputLabel id="load-capacity-label">Load Capacity (kg)</InputLabel>
            <Select
              fullWidth
              id="load-capacity-select"
              labelId="load-capacity-label"
              variant="outlined"
              label="Load Capacity"
              value={loadCapacity}
              onChange={(e) => setLoadCapacity(e.target.value)}
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
            <InputLabel id="vehicle-weight-label">
              Permissible Gross Vehicle Weight (GVW)
            </InputLabel>
            <Select
              fullWidth
              id="vehicle-weight-select"
              labelId="vehicle-weight-label"
              variant="outlined"
              label="Permissible Gross Vehicle Weight (GVW)"
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
    </FormControl>
  );
};

export default TrailerControl;
