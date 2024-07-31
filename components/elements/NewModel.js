import {
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

const NewModel = ({ models }) => {
  const [notModel, setNotModel] = useState(false);

  return (
    <>
      {!notModel ? (
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth required>
              <InputLabel id="model-label">Model</InputLabel>
              <Select
                required
                fullWidth
                id="model-select"
                labelId="model-label"
                variant="outlined"
                label="Model"
                name="ModelId"
              >
                {models.length > 0 ? (
                  models.map((val) => (
                    <MenuItem value={val.id} key={val.id}>
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
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                fullWidth
                required
                id="model-input"
                variant="outlined"
                label="Enter Model Name"
                name="ModelName"
              />
            </FormControl>
          </div>
        </div>
      )}

      <FormControlLabel
        className="model-checkbox"
        control={
          <Checkbox
            checked={notModel}
            onChange={(e) => setNotModel(e.target.checked)}
          />
        }
        label="My Model is not on list"
      />
    </>
  );
};

export default NewModel;
