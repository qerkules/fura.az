"use client";
import {
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { GetPath } from "../tools/GetPath";
import { GetTypes } from "../tools/GetTypes";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { getModels } from "../tools/GetModels";
import { GetCategory } from "../tools/GetCategoryId";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const DefaultFormControl = ({ handleUpdateSearchParams }) => {
  const category = GetPath().last;
  const [models, setModels] = useState([]);

  const currentCategoryId = GetCategory(category);
  console.log(currentCategoryId);
  const types = GetTypes(currentCategoryId);
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

  return (
    <FormControl id="filter-list-car-side-bar" className="list-filter">
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
              name="CategoryName"
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
                name="ModelId"
                onChange={(e) =>
                  handleUpdateSearchParams("ModelName", e.target.value)
                }
              >
                {models.length > 0 ? (
                  models.map((val) => (
                    <MenuItem value={val.id} key={val.modelName}>
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
        <></>
      )}
      <span className="input-title mb-15">
        Currency:
        <FormControl variant="standard">
          <Select
            id="currency-select"
            labelId="currency-label"
            name="Currency"
            sx={{ width: 100 }}
            onChange={(e) =>
              handleUpdateSearchParams("Currency", e.target.value)
            }
          >
            {types.currTypes.map((val) => {
              return (
                <MenuItem value={val.id} key={val.id}>
                  {val.modelName}
                </MenuItem>
              );
            })}
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
                name="MinPrice"
                onChange={(e) =>
                  handleUpdateSearchParams("MinPrice", e.target.value)
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
                placeholder="1000000"
                name="MaxPrice"
                label="Max"
                type="number"
                id="price-max"
                onChange={(e) =>
                  handleUpdateSearchParams("MaxPrice", e.target.value)
                }
              />
            </FormControl>
          </div>
        </div>
      </div>
      {category !== "sparepart" ? (
        <>
          <span className="input-title">Year:</span>
          <div className="form-group-wrap">
            <div className="form-group">
              <div className="group-select">
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label={"Min Year"}
                      views={["year"]}
                      name="MinYear"
                      onChange={(date) =>
                        handleUpdateSearchParams("MinYear", date)
                      }
                    />
                  </LocalizationProvider>
                </FormControl>
              </div>
            </div>
            <div className="form-group">
              <div className="group-select">
                <FormControl fullWidth>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      label={"Max Year"}
                      views={["year"]}
                      name="MaxYear"
                      onChange={(date) =>
                        handleUpdateSearchParams("MaxYear", date)
                      }
                    />
                  </LocalizationProvider>
                </FormControl>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
      {category === "truck" ||
      category === "semi-truck" ||
      category === "bus" ? (
        <>
          <span className="input-title">Distance:</span>
          <div className="form-group-wrap">
            <div className="form-group">
              <div className="group-select">
                <FormControl fullWidth>
                  <TextField
                    label="Min"
                    id="distance-min"
                    type="number"
                    name="MinDistance"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">{"km"}</InputAdornment>
                      ),
                    }}
                    onChange={(e) =>
                      handleUpdateSearchParams("MinDistance", e.target.value)
                    }
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
                    type="number"
                    name="MaxDistance"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">{"km"}</InputAdornment>
                      ),
                    }}
                    onChange={(e) =>
                      handleUpdateSearchParams("MaxDistance", e.target.value)
                    }
                  />
                </FormControl>
              </div>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </FormControl>
  );
};

export default DefaultFormControl;
