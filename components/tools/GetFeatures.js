import React from "react";

export const GetFeatures = (category) => {
  const abs = { id: "ABS", value: "ABS" };
  const ebs = { id: "EBS", value: "EBS" };
  const crane = { id: "Crane", value: "Crane" };
  const newy = { id: "New", value: "New" };
  const dmgV = { id: "DamagedVehicles", value: "Damaged Vehicles" };
  const crshV = { id: "Crashed vehicle", value: "Crashed vehicle" };
  const mttlc = { id: "Metallic", value: "Metallic" };

  const truck = [
    abs,
    { id: "FourWheelDrive", value: "Four Wheel Drive" },
    { id: "AdaptiveCruiseControl", value: "Adaptive Cruise Control" },
    { id: "CruiseControl", value: "Cruise Control" },
    { id: "Compressor", value: "Compressor" },
    { id: "AuxiliaryHeating", value: "Auxiliary Heating" },
    ebs,
    { id: "ESP", value: "ESP" },
    { id: "Intarder", value: "Intarder" },
    { id: "Retarder", value: "Retarder" },
    crane,
    { id: "TailgateLoadPlatform", value: "Tailgate Load Platform" },
    { id: "AlloyWheels", value: "Alloy wheels" },
    newy,
    mttlc,
    dmgV,
    { id: "TrailerHitchFixed", value: "Trailer Hitch Fixed" },
    { id: "ParkingHeater", value: "Parking heater" },
    { id: "ParticleFilter", value: "Particle Filter" },
    { id: "NavigationSystem", value: "Navigation System" },
  ];

  const forklift = [
    { id: "TrailerHitchFixed", value: "Trailer Hitch Fixed" },
    { id: "Cabin", value: "Cabin" },
    { id: "HydrolicWheel", value: "Hydrolic Wheel" },
    { id: "ProtectionCeiling", value: "Protection Ceiling" },
    dmgV,
    newy,
  ];

  const bus = [
    dmgV,
    newy,
    mttlc,
    { id: "Intarder", value: "Intarder" },
    { id: "Retarder", value: "Retarder" },
    abs,
    { id: "ESP", value: "ESP" },
    { id: "AuxiliaryHeating", value: "Auxiliary Heating" },
    { id: "CruiseControl", value: "Cruise Control" },
    { id: "AdaptiveCruiseControl", value: "Adaptive Cruise Control" },
    { id: "TrailerHitchFixed", value: "Trailer Hitch Fixed" },
    { id: "ParticleFilter", value: "Particle Filter" },
    { id: "NavigationSystem", value: "Navigation System" },
    { id: "TV", value: "TV" },
    { id: "Toilet", value: "Toilet" },
    { id: "DriverSleepingCompartment", value: "Driver Sleeping Compartment" },
    { id: "Kitchen", value: "Kitchen" },
    { id: "ColdStorage", value: "Cold Storage" },
    { id: "Sleeping Chairs", value: "Sleeping Chairs" },
  ];
  const av = [
    newy,
    { id: "FrontHydraulics", value: "Front Hydraulics" },
    { id: "FrontJack", value: "Front Jack" },
    { id: "Cabin", value: "Cabin" },
    abs,
    { id: "AuxiliaryHeating", value: "Auxiliary Heating" },
    { id: "FourWheelDrive", value: "Four Wheel Drive" },
    { id: "HydrolicWheel", value: "Hydrolic Wheel" },
    dmgV,
  ];

  const coma = [
    abs,
    { id: "HydrolicWheel", value: "Hydrolic Wheel" },
    { id: "FourWheelDrive", value: "Four Wheel Drive" },
    { id: "ParticleFilter", value: "Particle Filter" },
    { id: "QuickChangePart", value: "Quick Change Part" },
    { id: "BSS", value: "BSS" },
    {
      id: "CentralLubricantApplication",
      value: "Central lubricant application",
    },
    newy,
    dmgV,
  ];
  const trailer = [
    { id: "DiscBrake", value: "Disc Brake" },
    { id: "AirSuspension", value: "Air Suspension" },
    abs,
    newy,
    ebs,
    crshV,
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

  const sparepart = [newy];

  if (category === "av") return av;

  if (category === "sparepart") return sparepart;

  if (category === "bus") return bus;

  if (category === "co-ma") return coma;

  if (category === "forklift") return forklift;

  if (category === "semi-truck" || category === "truck") {
    return truck;
  }

  if (category === "transporter-truck") return truck;
  if (category === "trailer") return trailer;

  if (category === "trailer-refrigator") return trailerRefrigator;
};
