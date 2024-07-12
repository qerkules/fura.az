import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import CheckIcon from "@mui/icons-material/Check";
const SaloonCard = () => {
  return (
    <div className="salon-card">
      <div className="salon-image">
        <img src="/assets/images/logo/scania.jpg" />
      </div>
      <div className="salon-details">
        <div className="salon-title">
          Scania{" "}
          <span className="salon-official">
            <CheckIcon />
          </span>
        </div>
        <div className="salon-description">
          Scania yukmasinlarinin Azərbaycandakı rəsmi distribütoru ve Scania
          yukmasinlarinin Azərbaycandakı rəsmi distribütoru ve Scania
          yukmasinlarinin Azərbaycandakı rəsmi distribütoru ve şirkətidir.
        </div>
        <div className="salon-contact-numbers">
          <PhoneIcon /> (050) 540-40-40
        </div>
        <a href="/saloon-details" className="salon-ad-count">
          10 Elan
        </a>
      </div>
    </div>
  );
};

export default SaloonCard;
