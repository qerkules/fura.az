import { Textarea } from "@mui/joy";
import {
  Box,
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Modal,
  Select,
} from "@mui/material";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";


const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ModalComplain = ({ setter }) => {
  const handleClose = () => {
    setter(false);
  };
  const complainList = [
    "Scammer",
    "The ad is not current",
    "Unable to contact",
    "The pictures are incorrect",
    "Repeat ad",
    "Invalid country/city",
    "Incorrect indicators",
    "Wrong price",
  ];
  return (
    <Modal open={true} onClose={handleClose}>
      <Box sx={style}>
        <div className="complain-title">Complain</div>
        <form>
          <div className="modal-close-btn" onClick={handleClose}>
            <CloseIcon />
          </div>
          <FormControl fullWidth>
            <InputLabel id="brand-label">Reason</InputLabel>
            <Select
              fullWidth
              id="brand-select"
              labelId="brand-label"
              variant="outlined"
              label="Reason"
              name="ComplainCategory"
            >
              {complainList.map((val) => (
                <MenuItem value={val} key={val}>
                  {val}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth className="mt-15">
            <FormLabel>Additional Information:</FormLabel>
            <Textarea
              minRows={5}
              placeholder="Type in here..."
              name="AdDetails"
            />
          </FormControl>
          <input type="submit" value={"Send"} className="mt-15" />
        </form>
      </Box>
    </Modal>
  );
};

export default ModalComplain;
