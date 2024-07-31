"use client";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

const ServiceFormMobile = ({handleUpdateSearchParams}) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [weight, setWeight] = useState("");

  return (
    <FormControl
      id="filter-list-car-side-bar"
      className="list-filter mobile-list-filter"
    >
      <div className="form-group">
        <div className="input-search-list">
          <FormControl fullWidth>
            <InputLabel id="from-label">From Where</InputLabel>
            <Select
              fullWidth
              id="from-select"
              labelId="from-label"
              label="From Where"
              variant="outlined"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
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
            <InputLabel id="to-label">To Where</InputLabel>
            <Select
              fullWidth
              id="to-select"
              labelId="to-label"
              variant="outlined"
              label="To Where"
              value={to}
              onChange={(e) => setTo(e.target.value)}
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
            <InputLabel id="weight-label">Product Weight</InputLabel>
            <Select
              fullWidth
              id="weight-select"
              labelId="weight-label"
              variant="outlined"
              label="Product Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
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

export default ServiceFormMobile;
