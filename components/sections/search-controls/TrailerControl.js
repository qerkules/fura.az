"use client";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const TrailerControl = ({ handleUpdateSearchParams }) => {
  return (
    <FormControl id="filter-list-car-side-bar" className="list-filter">
      <div className="form-group">
        <div className="group-select">
          <FormControl fullWidth>
            <InputLabel id="lift-cap-label">Load Capacity (kg)</InputLabel>
            <Select
              fullWidth
              id="liftcap-select"
              labelId="lift-cap-label"
              variant="outlined"
              label="Load Capacity"
              onChange={(e) =>
                handleUpdateSearchParams("LoadCapacity", e.target.value)
              }
            >
              <MenuItem value={"1-1500"}>1-1500 kg</MenuItem>
              <MenuItem value={"1500-2500"}>1500-2500 kg</MenuItem>
              <MenuItem value={"2500-4500"}>2500-4500 kg</MenuItem>
              <MenuItem value={"4500-10000"}>4500-10000 kg</MenuItem>
              <MenuItem value={"10000-20000"}>10000-20000 kg</MenuItem>
              <MenuItem value={"20000+"}>20000+ kg</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>

      <div className="form-group-wrap">
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
                onChange={(e) =>
                  handleUpdateSearchParams("VehicleWeight", e.target.value)
                }
              >
                <MenuItem value={"0-7.5"}>0t - 7.5t</MenuItem>
                <MenuItem value={"7.5-12"}>7.5t - 12t</MenuItem>
                <MenuItem value={"12-18"}>12t - 18t</MenuItem>
                <MenuItem value={"18-26"}>18t - 26t</MenuItem>
                <MenuItem value={"26-32"}>26t - 32t</MenuItem>
                <MenuItem value={"32+"}>32t+</MenuItem>
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
                onChange={(e) =>
                  handleUpdateSearchParams("Axles", e.target.value)
                }
              >
                <MenuItem value={"0-5"}>0 - 5</MenuItem>
                <MenuItem value={"5-10"}>5 - 10</MenuItem>
                <MenuItem value={"10-15"}>10 - 15</MenuItem>
                <MenuItem value={"5-10"}>15 - 20</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      {/* <div className="form-group">
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
      </div> */}
    </FormControl>
  );
};

export default TrailerControl;
