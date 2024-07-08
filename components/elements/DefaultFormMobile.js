"use client";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const DefaultFormMobile = () => {
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");

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
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value={"standart-tractor"}>
                Standart Tractor (5)
              </MenuItem>
              <MenuItem value={"hazardous-load"}>Hazardous Load (7)</MenuItem>
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
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
            >
              <MenuItem value={"DAF"}>
                <span>Daf</span>
              </MenuItem>
              <MenuItem value={"SCANIA"}>Scania</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
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
              value={model}
              onChange={(e) => setModel(e.target.value)}
            >
              <MenuItem value={"R500"}>R 500</MenuItem>
              <MenuItem value={"DX470"}>DX 470</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </FormControl>
  );
};

export default DefaultFormMobile;
