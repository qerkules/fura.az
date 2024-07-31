"use client"
import { FormControl, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";


const EnginePowerInput = () => {
  const [hpPower, setHpPower] = useState(0);
  const [kwPower, setKwPower] = useState(0);
  const handlePower = (e, type) => {
    if (type === "hp") {
      setHpPower(e.target.value);
      setKwPower(Math.round(e.target.value * 0.7457));
    }

    if (type === "kw") {
      setKwPower(e.target.value);
      setHpPower(Math.round(e.target.value * 1.34102));
    }
  };
  return (
    <div className="form-group-engine-power">
      <div className="form-group">
        <div className="group-select">
          <FormControl fullWidth>
            <TextField
              label="Engine Power"
              id="engine-power-min"
              type="number"
              placeholder="0"
              name="EnginePowerHP"
              value={hpPower}
              onChange={(e) => handlePower(e, "hp")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">{"HP"}</InputAdornment>
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
              label="Engine Power"
              id="engine-power-min"
              type="number"
              placeholder="0"
              name="EnginePowerKW"
              value={kwPower}
              onChange={(e) => handlePower(e, "kw")}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">{"KW"}</InputAdornment>
                ),
              }}
            />
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default EnginePowerInput;
