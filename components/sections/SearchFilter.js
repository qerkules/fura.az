"use client";
import React, { useEffect, useState } from "react";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";

const SearchFilter = () => {
  const [category, setCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minDist, setMinDist] = useState("");
  const [maxDist, setMaxDist] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [currency, setCurrency] = useState("₼AZN");

  const [isToggled, setToggled] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setToggled(false);
      } else {
        setToggled(true);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const handleToggle = () => setToggled(!isToggled);
  return (
    <div className="search-filter-listing-car">
      <div className="filter-header-list">
        <h6 className="title-filter">Search by Filter</h6>
        <div className="btn-filter">
          <i className="icon-Grid-view" onClick={handleToggle}/>
        </div>
      </div>
      <FormControl
        id="filter-list-car-side-bar"
        className="list-filter"
        style={{ display: `${isToggled ? "block" : "none"}` }}
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
                  <img
                    className="brand-logo"
                    src="/assets/images/logos/daf.webp"
                  />
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
        <span className="input-title mb-15">
          Currency:
          <FormControl variant="standard">
            <Select
              id="currency-select"
              labelId="currency-label"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              sx={{ width: 100, color: "" }}
            >
              <MenuItem value={"$USD"}>$ USD</MenuItem>
              <MenuItem value={"€EURO"}>€ EURO</MenuItem>
              <MenuItem value={"₼AZN"}>₼ AZN</MenuItem>
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
                      <InputAdornment position="start">
                        {currency[0]}
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
                  placeholder="1000000"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        {currency[0]}
                      </InputAdornment>
                    ),
                  }}
                  label="Max"
                  type="number"
                  id="price-max"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </FormControl>
            </div>
          </div>
        </div>
        <span className="input-title">Year:</span>
        <div className="form-group-wrap">
          <div className="form-group">
            <div className="group-select">
              <FormControl fullWidth>
                <InputLabel id="year-min-label">Min</InputLabel>
                <Select
                  fullWidth
                  id="year-min-select"
                  labelId="year-min-label"
                  variant="outlined"
                  label="Min"
                  value={minYear}
                  onChange={(e) => setMinYear(e.target.value)}
                >
                  <MenuItem value={"1999"}>1999</MenuItem>
                  <MenuItem value={"2000"}>2000</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className="form-group">
            <div className="group-select">
              <FormControl fullWidth>
                <InputLabel id="year-max-label">Max</InputLabel>
                <Select
                  fullWidth
                  id="year-max-select"
                  labelId="year-max-label"
                  variant="outlined"
                  label="Max"
                  value={maxYear}
                  onChange={(e) => setMaxYear(e.target.value)}
                >
                  <MenuItem value={"1999"}>1999</MenuItem>
                  <MenuItem value={"2000"}>2000</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <span className="input-title">Distance:</span>
        <div className="form-group-wrap">
          <div className="form-group">
            <div className="group-select">
              <FormControl fullWidth>
                <TextField
                  label="Min"
                  id="distance-min"
                  value={minDist}
                  type="number"
                  onChange={(e) => setMinDist(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">{"km"}</InputAdornment>
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
                  label="Max"
                  id="distance-max"
                  value={maxDist}
                  onChange={(e) => setMaxDist(e.target.value)}
                  type="number"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">{"km"}</InputAdornment>
                    ),
                  }}
                />
              </FormControl>
            </div>
          </div>
        </div>
      </FormControl>
    </div>
  );
};

export default SearchFilter;
