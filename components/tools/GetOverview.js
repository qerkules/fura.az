import React from "react";

const GetOverview = (category) => {
  const truck = [
    { text: "Year", obj: "year" },
    { text: "Distance", obj: "distance" },
    { text: "Km/Miles", obj: "kmMiles" },
    { text: "Gearbox", obj: "gearBox" },
    { text: "Permissible Gross Vehicle Weight (GVW)", obj: "licencedWeight" },
    { text: "Axles", obj: "axles" },
    { text: "Paint", obj: "paint" },
    { text: "Fuel Tank (l)", obj: "fuelTank" },
    { text: "Fuel Type", obj: "fuelType" },
    { text: "Emission Class", obj: "emissionClass" },
    { text: "Emissions Sticker", obj: "emissionSticker" },
    { text: "Vehicle Width (mm)", obj: "vehicleWidth" },
    { text: "Vehicle Height (mm)", obj: "vehicleHeight" },
    { text: "Cylinder Volume (ccm)", obj: "cylinderVolume" },
    { text: "Steering", obj: "steering" },
    { text: "Wheel Formula", obj: "year" },
    { text: "Driving Cabin", obj: "drivingCabin" },
    { text: "Air Conditioning", obj: "airConditioning" },
  ];
  const coMa = [
    { text: "Year", obj: "year" },
    { text: "Hours of Operation", obj: "hoursOfOperation" },
    { text: "Emissions Sticker", obj: "emissionSticker" },
  ];
  const av = [
    { text: "Year", obj: "year" },
    { text: "Hours of Operation", obj: "hoursOfOperation" },
    { text: "Emissions Sticker", obj: "emissionSticker" },
    { text: "Air Conditioning", obj: "airConditioning" },
    { text: "Engine Power", obj: "enginePowerHP" },
  ];

//   if (category === "av") return av;

//   if (category === "sparepart") return sparepart;

//   if (category === "bus") return bus;

//   if (category === "co-ma") return coma;

//   if (category === "forklift") return forklift;

  if (category === "semi-truck" || category === "truck") {
    return truck;
  }

//   if (category === "transporter-truck") return transporterTruck;
//   if (category === "trailer") return trailer;

//   if (category === "trailer-refrigator") return trailerRefrigator;
};

export default GetOverview;
