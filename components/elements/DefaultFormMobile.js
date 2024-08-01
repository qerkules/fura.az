"use client";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { GetPath } from "../tools/GetPath";
import { GetCategory } from "../tools/GetCategoryId";
import { GetTypes } from "../tools/GetTypes";
import { getModels } from "../tools/GetModels";

const DefaultFormMobile = ({ handleUpdateSearchParams }) => {
  const category = GetPath().last;
  const [models, setModels] = useState([]);

  const currentCategoryId = GetCategory(category);

  const types = GetTypes(currentCategoryId);

  return (
    <FormControl
      id="filter-list-car-side-bar"
      className="list-filter mobile-list-filter"
    >
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
              onChange={(e) =>
                handleUpdateSearchParams("CategoryName", e.target.value)
              }
            >
              {types.categories.map((val) => {
                return (
                  <MenuItem key={val.id} value={val.categoryName}>
                    {val.categoryName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </div>
      {/*  Brand make input
      Distanceunittype
      EnginePowerType */}
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
              onChange={(e) => {
                handleUpdateSearchParams("BrandName", e.target.value);
                getModels(e, setModels);
              }}
            >
              {types.brands.map((val) => {
                return (
                  <MenuItem key={val.id} value={val.brandName}>
                    {val.brandName}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </div>
      </div>
      {category !== "sparepart" ? (
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
                onChange={(e) =>
                  handleUpdateSearchParams("ModelName", e.target.value)
                }
              >
                {models.length > 0 ? (
                  models.map((val) => (
                    <MenuItem key={val.id} value={val.modelName}>
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
        ""
      )}
    </FormControl>
  );
};

export default DefaultFormMobile;
