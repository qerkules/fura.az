import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const InputElement = ({ types, inputName }) => {
  const InputReturner = (title, name, types) => (
    <FormControl fullWidth>
      <InputLabel id={`${name}-label`}>{title}</InputLabel>
      <Select
        variant="outlined"
        id={`${name}-select`}
        labelId={`${name}-label`}
        label={name}
        name={name}
      >
        {types.map((val) => (
          <MenuItem key={val.index} value={val.index}>
            {val.value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );

  if (inputName === "Gearboxes") {
    return InputReturner("Gearboxes", "Gearboxes", types.gearboxes);
  }
  if (inputName === "AirContidition") {
    return InputReturner("Gearboxes", "Gearboxes", types.aircotypes);
  }
  if (inputName === "Currency") {
    return InputReturner("Currency", "Currency", types.currTypes);
  }
  if (inputName === "FuelTypes") {
    return InputReturner("Fuel Type", "FuelType", types.fuelTypes);
  }
  if (inputName === "WheelTypes") {
    return InputReturner("Gearboxes", "Gearboxes", types.wheelTypes);
  }
  if (inputName === "DistanceUnit") {
    return InputReturner("Gearboxes", "Gearboxes", types.distanceunittypes);
  }
  if (inputName === "EmissionClass") {
    return InputReturner("Gearboxes", "Gearboxes", types.emissionclasses);
  }
  if (inputName === "EmissionSticker") {
    return InputReturner("Emission Sticker", "EmissionSticker", types.emissionstickers);
  }
  if (inputName === "Paints") {
    return InputReturner("Gearboxes", "Gearboxes", types.paints);
  }
};

export default InputElement;
