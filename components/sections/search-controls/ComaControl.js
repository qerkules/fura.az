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

const ComaControl = () => {
  const [emissionSticker, setEmissionSticker] = useState("");

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
              value={emissionSticker}
              onChange={(e) => setEmissionSticker(e.target.value)}
            >
              <MenuItem value={"1none"}>1 (None)</MenuItem>
              <MenuItem value={"2red"}>2 (Red)</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
    </FormControl>
  );
};

export default ComaControl;
