import React from "react";

const GetProductTypes = (category) => {
  if (category === "Agricultural Vehicle") return "";
  if (category === "Sparepart" || category === "sparepart") return "Sparepart";
  if (category === "Bus" || category === "bus") return "Bus";
  if (category === "Construction Machinery" || category === "co-ma")
    return "ConstructionMachinery";
  if (category === "Forklift" || category === "forklift") return "Forklift";
  if (category === "Semi-Trailer Truck") return "SemiTrailerTruck";
  if (category === "Truck Over 7.5t" || category === "truck")
    return "TruckOver";
  if (category === "Truck Up 7.5t" || category === "transporter-truck")
    return "TruckUnder";
  if (category === "Semi-Trailer" || category === "trailer")
    return "SemiTrailer";
};

export default GetProductTypes;
