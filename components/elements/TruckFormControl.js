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
import { GetPath } from "../tools/GetPath";
import { GetCategory } from "../tools/GetCategoryId";
import { GetTypes } from "../tools/GetTypes";

const ExtraFormControl = ({ handleUpdateSearchParams }) => {
  const path = GetPath().last;
  const currentCategoryId = GetCategory(path);
  const types = GetTypes(currentCategoryId);
  return (
    <FormControl id="filter-list-car-side-bar" className="list-filter">
      <div className="form-group-wrap">
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
                onChange={(e) =>
                  handleUpdateSearchParams("EmissionClassType", e.target.value)
                }
              >
                {types.emissionclasses.map((val) => {
                  <MenuItem key={val.index} value={val.index}>
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
                onChange={(e) =>
                  handleUpdateSearchParams(
                    "EmissionStickerType",
                    e.target.value
                  )
                }
              >
                {types.emissionstickers.map((val) => {
                  <MenuItem key={val.index} value={val.index}>
                    {val.value}
                  </MenuItem>;
                })}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className="form-group-wrap">
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
                  <MenuItem key={val.index} value={val.index}>
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
                  <MenuItem key={val.index} value={val.index}>
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
                onChange={(e) =>
                  handleUpdateSearchParams("PaintType", e.target.value)
                }
              >
                {types.paints.map((val) => {
                  <MenuItem key={val.index} value={val.index}>
                    {val.value}
                  </MenuItem>;
                })}
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className="form-group-wrap">
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
                onChange={(e) =>
                  handleUpdateSearchParams("WheelFormulaType", e.target.value)
                }
              >
                {types.wheelTypes.map((val) => {
                  <MenuItem key={val.index} value={val.index}>
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
                onChange={(e) =>
                  handleUpdateSearchParams("DrivingCabin", e.target.value)
                }
              >
                <MenuItem value={"Long road"}>Long Road</MenuItem>
                <MenuItem value={"Local"}>Local</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <span className="input-title mb-15">Engine Power:</span>
      <div className="form-group-wrap">
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Min"
                id="engine-power-min"
                type="number"
                placeholder="0"
                onChange={(e) =>
                  handleUpdateSearchParams("minHp", e.target.value)
                }
              />
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                variant="outlined"
                placeholder="10000"
                label="Max"
                type="number"
                id="engine-power-max"
                onChange={(e) =>
                  handleUpdateSearchParams("maxHp", e.target.value)
                }
              />
            </FormControl>
          </div>
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
      <div className="form-group-wrap">
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
                onChange={(e) =>
                  handleUpdateSearchParams(
                    "AirConditioningType",
                    e.target.value
                  )
                }
              >
                {types.aircotypes.map((val) => {
                  <MenuItem key={val.index} value={val.index}>
                    {val.value}
                  </MenuItem>;
                })}
              </Select>
            </FormControl>
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
                onChange={(e) =>
                  handleUpdateSearchParams(
                    "HydraulicEquipment",
                    e.target.value
                  )
                }
              >
                <MenuItem value={"Tipper-hydr"}>
                  Tipper Hydraulic Installation
                </MenuItem>
                <MenuItem value={"push-floor-hydr"}>
                  Push Floor Hydraulic Installation
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div> */}
      </div>
    </FormControl>
  );
};

export default ExtraFormControl;
