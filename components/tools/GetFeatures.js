import React from "react";

export const GetFeatures = (categoryName) => {
  const stt = [
    "ABS",
    "ESP",
    "EBS",
    "Auxiliary Heating",
    "Compressor",
    "Cruise Control",
    "Adaptive Cruise Control",
    "Four Wheel Drive",
    "Particle Filter",
    "Navigation System",
    "Parking heater",
    "Trailer Hitch Fixed",
    "Damaged Vehicles",
    "Metallic",
    "New",
    "Alloy wheels",
    "Tailgate Load Platform",
    "Crane",
    "Retarder",
    "Intarder",
  ];

  const forklift = [
    "Trailer Hitch Fixed",
    "Cabin",
    "Hydrolic Wheel",
    "Protection Ceiling",
    "Damaged Vehicles",
    "New",
  ];
  if (categoryName === "stt") {
    return stt;
  } else if (categoryName === "forklift") {
    return forklift;
  }
};
