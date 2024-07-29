import React from "react";
import InputElement from "./InputElement";
import { FormControl, InputAdornment, TextField } from "@mui/material";

const RentForm = ({ saleOrRent, types }) => {
  return (
    <div
      className={`form-group ${saleOrRent === "Rent" ? "triple" : "multiple"}`}
    >
      <div className="form-group prefix-select">
        <InputElement inputName={"Currency"} types={types} />
      </div>
      {saleOrRent === "Rent" && (
        <div className="form-group prefix-select">
          <InputElement inputName={"Renttypes"} types={types} />
        </div>
      )}
      <div className="form-group">
        <div className="group-select">
          <FormControl fullWidth>
            <TextField
              label="Price"
              id="price-min"
              required
              type="number"
              placeholder="0"
              name="Price"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">{"$"}</InputAdornment>
                ),
              }}
            />
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default RentForm;
