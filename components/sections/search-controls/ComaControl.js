"use client";
import { GetCategory } from "@/components/tools/GetCategoryId";
import { GetPath } from "@/components/tools/GetPath";
import { GetTypes } from "@/components/tools/GetTypes";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const ComaControl = ({ handleUpdateSearchParams }) => {
  const path = GetPath().last;
  const currentCategoryId = GetCategory(path);
  const types = GetTypes(currentCategoryId);
  return (
    <FormControl id="filter-list-car-side-bar" className="list-filter">
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
                handleUpdateSearchParams("EmissionStickersType", e.target.value)
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
    </FormControl>
  );
};

export default ComaControl;
