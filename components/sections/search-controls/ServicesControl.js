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

const ServicesControl = () => {
  const [delivery, setDelivery] = useState("");
  const [status, setStatus] = useState("");
  const [currency, setCurrency] = useState("AZN");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const [distanceUnit, setDistanceUnit] = useState("AZN");
  const [minDist, setMinDist] = useState("");
  const [maxDist, setMaxDist] = useState("");

  const [minPriceK, setMinPriceK] = useState("");
  const [maxPriceK, setMaxPriceK] = useState("");

  return (
    <FormControl id="filter-list-car-side-bar" className="list-filter">
      <span className="input-title mb-15">
        Price:
        <FormControl variant="standard">
          <Select
            id="engine-power-select"
            labelId="engine-power-label"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            sx={{ width: 100, color: "" }}
          >
            <MenuItem value={"hp"}>HP</MenuItem>
            <MenuItem value={"kw"}>KW</MenuItem>
          </Select>
        </FormControl>
      </span>
      <div className="form-group-wrap">
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Min"
                id="price-min"
                type="number"
                placeholder="0"
                value={minPrice}
                onChange={(e) => setMinPrice(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{currency}</InputAdornment>
                  ),
                }}
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
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{currency}</InputAdornment>
                  ),
                }}
                label="Max"
                type="number"
                id="engine-power-max"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </FormControl>
          </div>
        </div>
      </div>
      <span className="input-title mb-15">
        Distance:
        <FormControl variant="standard">
          <Select
            id="distance-unit-select"
            labelId="distance-unit-label"
            value={distanceUnit}
            onChange={(e) => setDistanceUnit(e.target.value)}
            sx={{ width: 100, color: "" }}
          >
            <MenuItem value={"hp"}>HP</MenuItem>
            <MenuItem value={"kw"}>KW</MenuItem>
          </Select>
        </FormControl>
      </span>
      <div className="form-group-wrap">
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Min"
                id="dist-min"
                type="number"
                placeholder="0"
                value={minDist}
                onChange={(e) => setMinDist(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {distanceUnit}
                    </InputAdornment>
                  ),
                }}
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
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {distanceUnit}
                    </InputAdornment>
                  ),
                }}
                label="Max"
                type="number"
                id="distance-max"
                value={maxDist}
                onChange={(e) => setMaxDist(e.target.value)}
              />
            </FormControl>
          </div>
        </div>
      </div>
      <span className="input-title mb-15">Price for {distanceUnit}:</span>
      <div className="form-group-wrap">
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Min"
                id="pricek-min"
                type="number"
                placeholder="0"
                value={minPriceK}
                onChange={(e) => setMinPriceK(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{currency}</InputAdornment>
                  ),
                }}
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
                id="pricek-max"
                value={maxPriceK}
                onChange={(e) => setMaxPriceK(e.target.value)}
              />
            </FormControl>
          </div>
        </div>
      </div>
      <div className="form-group">
        <div className="group-select">
          <FormControl fullWidth>
            <InputLabel id="vehicle-weight-label">Vehicle Status</InputLabel>
            <Select
              fullWidth
              id="status-select"
              labelId="status-label"
              variant="outlined"
              label="Vehicle Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
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
            <DatePicker
              label="Last Delivery Late"
              value={delivery}
              onChange={(e) => setDelivery(e.target.value)}
            />
          </FormControl>
        </div>
      </div>
    </FormControl>
  );
};

export default ServicesControl;
