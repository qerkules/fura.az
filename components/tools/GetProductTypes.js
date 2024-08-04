import React from "react";

const GetProductTypes = (category) => {
  if (category === "Agricultural Vehicle") return "AgriculturalVehicle";
  if (category === "Sparepart") return "Sparepart";
  if (category === "Bus") return "Bus";
  if (category === "Construction Machinery") return "ConstructionMachinery";
  if (category === "Forklift") return "Forklift";
  if (category === "Semi-Trailer Truck") return "SemiTrailerTruck";
  if (category === "Truck Over 7.5t") return "TruckOver";
  if (category === "Truck Up 7.5t") return "TruckUnder";
  if (category === "Semi-Trailer") return "SemiTrailer";
};

export default GetProductTypes;
