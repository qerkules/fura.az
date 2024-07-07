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

const ExtraFormControl = () => {
  const [emissionClass, setEmissionClass] = useState("");
  const [emissionSticker, setEmissionSticker] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [paint, setPaint] = useState("");
  const [gearbox, setGearbox] = useState("");
  const [wheelFormula, setWheelFormula] = useState("");
  const [drivingCabin, setDrivingCabin] = useState("");
  const [enginePowerType, setEnginePowerType] = useState("hp");
  const [minEnginePower, setMinEnginePower] = useState("");
  const [maxEnginePower, setMaxEnginePower] = useState("");
  const [vehicleWeight, setVehicleWeight] = useState("");
  const [axles, setAxles] = useState("");
  const [airCond, setAirCond] = useState("");
  const [hydrEqui, setHydrEqui] = useState("");

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
    <FormControl
      id="filter-list-car-side-bar"
      className="list-filter"
      style={{ display: `${isToggled ? "block" : "none"}` }}
    >
      <div className="form-group-wrap">
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="emission-class-label">Emission Class</InputLabel>
              <Select
                fullWidth
                id="emission-class-select"
                labelId="emission-class-label"
                variant="outlined"
                label="Emission Class"
                value={emissionClass}
                onChange={(e) => setEmissionClass(e.target.value)}
              >
                <MenuItem value={"euro1"}>EURO 1</MenuItem>
                <MenuItem value={"euro2"}>EURO 2</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
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
      <div className="form-group-wrap">
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="fuel-type-label">Fuel Type</InputLabel>
              <Select
                fullWidth
                id="fuel-type-select"
                labelId="fuel-type-label"
                variant="outlined"
                label="Fuel Type"
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
              >
                <MenuItem value={"petrol"}>Petrol</MenuItem>
                <MenuItem value={"diesel"}>Diesel</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="gearbox-label">Gearbox</InputLabel>
              <Select
                fullWidth
                id="gearbox-select"
                labelId="gearbox-label"
                variant="outlined"
                label="Gearbox"
                value={gearbox}
                onChange={(e) => setGearbox(e.target.value)}
              >
                <MenuItem value={"automatic"}>Automatic</MenuItem>
                <MenuItem value={"manual"}>Manual</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="paint-label">Paint</InputLabel>
              <Select
                fullWidth
                id="paint-select"
                labelId="paint-label"
                variant="outlined"
                label="Paint"
                value={paint}
                onChange={(e) => setPaint(e.target.value)}
              >
                <MenuItem value={"red"}>Red</MenuItem>
                <MenuItem value={"blue"}>Blue</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className="form-group-wrap">
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="wheel-formula-label">Wheel Formula</InputLabel>
              <Select
                fullWidth
                id="wheel-formula-select"
                labelId="wheel-formula-label"
                variant="outlined"
                label="Wheel Formula"
                value={wheelFormula}
                onChange={(e) => setWheelFormula(e.target.value)}
              >
                <MenuItem value={"4x2"}>4x2</MenuItem>
                <MenuItem value={"4x4"}>4x4</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="driving-cabin-label">Driving Cabin</InputLabel>
              <Select
                fullWidth
                id="driving-cabin-select"
                labelId="driving-cabin-label"
                variant="outlined"
                label="Driving Cabin"
                value={drivingCabin}
                onChange={(e) => setDrivingCabin(e.target.value)}
              >
                <MenuItem value={"Long road"}>Long Road</MenuItem>
                <MenuItem value={"Local"}>Local</MenuItem>
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
      <div className="form-group-wrap">
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="vehicle-weight-label">Vehicle Weight</InputLabel>
              <Select
                fullWidth
                id="vehicle-weight-select"
                labelId="vehicle-weight-label"
                variant="outlined"
                label="Vehicle Weight"
                value={vehicleWeight}
                onChange={(e) => setVehicleWeight(e.target.value)}
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
              <InputLabel id="axles-label">Axles</InputLabel>
              <Select
                fullWidth
                id="axles-select"
                labelId="axles-label"
                variant="outlined"
                label="Axles"
                value={axles}
                onChange={(e) => setAxles(e.target.value)}
              >
                <MenuItem value={"0-5"}>0 - 5</MenuItem>
                <MenuItem value={"5-10"}>5 - 10</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
      <div className="form-group-wrap">
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
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="hydr-equi-label">Hydraulic Equipment</InputLabel>
              <Select
                fullWidth
                id="hydr-equi-select"
                labelId="hydr-equi-label"
                variant="outlined"
                label="Hydraulic Equipment"
                value={hydrEqui}
                onChange={(e) => setHydrEqui(e.target.value)}
              >
                <MenuItem value={"Tipper-hydr"}>Tipper Hydraulic</MenuItem>
                <MenuItem value={"push-floor-hydr"}>Push Floor Hydraulic</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </div>
    </FormControl>
  );
};

export default ExtraFormControl;
