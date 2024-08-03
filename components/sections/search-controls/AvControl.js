import { GetCategory } from "@/components/tools/GetCategoryId";
import { GetPath } from "@/components/tools/GetPath";
import { GetTypes } from "@/components/tools/GetTypes";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";

const AvControl = ({ handleUpdateSearchParams }) => {
  const path = GetPath().last;
  const currentCategoryId = GetCategory(path);
  const types = GetTypes(currentCategoryId);
  return (
    <FormControl id="filter-list-car-side-bar" className="list-filter">
      <div className="form-group-wrap">
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
                  return (
                    <MenuItem key={val.index} value={val.index}>
                      {val.value}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="gearbox-sticker-label">Gearbox</InputLabel>
              <Select
                fullWidth
                id="gearbox-sticker-select"
                labelId="gearbox-sticker-label"
                variant="outlined"
                label="Gearbox"
                onChange={(e) =>
                  handleUpdateSearchParams("GearBoxType", e.target.value)
                }
              >
                {types.gearboxes.map((val) => {
                  return (
                    <MenuItem key={val.index} value={val.index}>
                      {val.value}
                    </MenuItem>
                  );
                })}
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
                handleUpdateSearchParams("AirConditioningType", e.target.value)
              }
            >
              {types.aircotypes.map((val) => {
                return (
                  <MenuItem key={val.index} value={val.index}>
                    {val.value}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </div>
    </FormControl>
  );
};

export default AvControl;
