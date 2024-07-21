import React from "react";

export const GetFeatures = (category) => {
  const truck = [
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

  const bus = [
    "New",
    "Metallic",
    "Retarder",
    "Intarder",
    "ABS",
    "ESP",
    "Auxiliary Heating",
    "Cruise Control",
    "Adaptive Cruise Control",
    "Trailer Hitch Fixed",
    "Particle Filter",
    "Navigation System",
    "TV",
    "Toilet",
    "Driver Sleeping Compartment",
    "Kitchen",
    "Cold Storage",
    "Sleeping Chairs",
    "Damaged Vehicles",
  ];
  const av = [
    "New",
    "Front Hydraulics",
    "Front Jack",
    "Cabin",
    "ABS",
    "Auxiliary Heating",
    "Four Wheel Drive",
    "Hydrolic Wheel",
    "Damaged Vehicles",
  ];

  const coma = [
    "ABS",
    "Four Whee Drive",
    "Particle Filter",
    "Quick Change Part",
    "BSS",
    "New",
    "Central lubricant application",
    "Damaged Vehicles",
  ];
  const trailer = [
    "Disc Brake",
    "Air Suspension",
    "ABS",
    "New",
    "EBS",
    "Crashed vehicle",
  ];

  const trailerRefrigator = [
    "Multi-temp zones",
    "Electro engine",
    "Ventilation flaps",
    "Double deck system",
    "Circulation wall",
    "Load security rail",
    "Additional evaporator on the roof at rear",
    "Air chute",
    "Temperature recorder",
    "Remote thermometer",
    "Separation wall",
  ];

  const sparepart = ["New"];

  if (category === "av") return av;

  if (category === "sparepart") return sparepart;

  if (category === "bus") return bus;

  if (category === "co-ma") return coma;

  if (category === "forklift") return forklift;

  if (
    category === "semi-truck" ||
    category === "truck" ||
    category === "truck-under"
  ) {
    return truck;
  }

  if (category === "trailer") return trailer;

  if (category === "trailer-refrigator") return trailerRefrigator;
};
