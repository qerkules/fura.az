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

const AvControl = () => {
  const [emissionSticker, setEmissionSticker] = useState("");
  const [enginePowerType, setEnginePowerType] = useState("hp");
  const [minEnginePower, setMinEnginePower] = useState("");
  const [maxEnginePower, setMaxEnginePower] = useState("");
  const [airCond, setAirCond] = useState("");

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
                value={emissionSticker}
                onChange={(e) => setEmissionSticker(e.target.value)}
              >
                <MenuItem value={"1none"}>1 (None)</MenuItem>
                <MenuItem value={"2red"}>2 (Red)</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <span className="input-title mb-15">
        Engine Power:
        <FormControl variant="standard">
          <Select
            id="engine-power-select"
            labelId="engine-power-label"
            value={enginePowerType}
            onChange={(e) => setEnginePowerType(e.target.value)}
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
                id="engine-power-min"
                type="number"
                placeholder="0"
                value={minEnginePower}
                onChange={(e) => setMinEnginePower(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {enginePowerType}
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
                      {enginePowerType}
                    </InputAdornment>
                  ),
                }}
                label="Max"
                type="number"
                id="engine-power-max"
                value={maxEnginePower}
                onChange={(e) => setMaxEnginePower(e.target.value)}
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
                value={airCond}
                onChange={(e) => setAirCond(e.target.value)}
              >
                <MenuItem value={"no-air"}>No Air</MenuItem>
                <MenuItem value={"manual-air"}>Manual Air</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      
    </FormControl>
  );
};

export default AvControl;
