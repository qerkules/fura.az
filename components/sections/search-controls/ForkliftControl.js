"use client";
import { GetCategory } from "@/components/tools/GetCategoryId";
import { GetPath } from "@/components/tools/GetPath";
import { GetTypes } from "@/components/tools/GetTypes";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const ForkliftControl = ({ handleUpdateSearchParams }) => {
  const path = GetPath().last;
  const currentCategoryId = GetCategory(path);
  const types = GetTypes(currentCategoryId);

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
              onChange={(e) =>
                handleUpdateSearchParams("FuelType", e.target.value)
              }
            >
              {types.fuelTypes.map((val) => {
                <MenuItem key={val.id} value={val.id}>
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
              onChange={(e) =>
                handleUpdateSearchParams("GearBoxType", e.target.value)
              }
            >
              {types.gearboxes.map((val) => {
                <MenuItem key={val.id} value={val.id}>
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
            <InputLabel id="lift-cap-label">Lifting Capacity</InputLabel>
            <Select
              fullWidth
              id="liftcap-select"
              labelId="lift-cap-label"
              variant="outlined"
              label="Lifting Capacity"
              onChange={(e) =>
                handleUpdateSearchParams("LiftingCapacity", e.target.value)
              }
            >
              <MenuItem value={"1-200"}>1-200 kg</MenuItem>
              <MenuItem value={"201-1000"}>201-1000 kg</MenuItem>
              <MenuItem value={"1001-5000+"}>1001-5000 kg</MenuItem>
              <MenuItem value={"5001-10000+"}>5001-10000 kg</MenuItem>
              <MenuItem value={"10001+"}>10001+ kg</MenuItem>
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
              onChange={(e) =>
                handleUpdateSearchParams("ExuipmentHeight", e.target.value)
              }
            >
              <MenuItem value={"1-2000"}>1-2000 mm</MenuItem>
              <MenuItem value={"2001-5000"}>2001-5000 mm</MenuItem>
              <MenuItem value={"5001+"}>5001+ mm</MenuItem>
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
              onChange={(e) =>
                handleUpdateSearchParams("LiftHeight", e.target.value)
              }
            >
              <MenuItem value={"1-2000"}>1-2000 mm</MenuItem>
              <MenuItem value={"2001-5000"}>2001-5000 mm</MenuItem>
              <MenuItem value={"5001+"}>5001+ mm</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </FormControl>
  );
};

export default ForkliftControl;
