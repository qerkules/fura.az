import React from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import CheckIcon from "@mui/icons-material/Check";
const SaloonCard = ({ data }) => {
  return (
    <div className="salon-card">
      <div className="salon-image">
        <img src={`${process.env.NEXT_PUBLIC_API_LINK}/${data.logo}`} />
      </div>
      <div className="salon-details">
        <div className="salon-title">
          {data.salonName}
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
        <span className="salon-location">
          {data.country},{data.city}
        </span>
      </div>
    </div>
  );
};

export default SaloonCard;
