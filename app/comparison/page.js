import Layout from "@/components/layout/Layout";
import React from "react";
const sizes = [
  "Wheel Formula",
  "Driving Cabin",
  "Permissible Gross Vehicle Weight (GVW)",
  "Axles",
  "Paint",
  "Vehicle Width (mm)",
  "Vehicle width",
  "Vehicle Height (mm)",
  "Vehicle height",
  "Loading Area Volume (m³)",
  "Loading Space Length (mm)",
  "Loading Area Width (mm)",
  "Loading Area Height (mm)",
];

const engineDetails = [
  "Engine Power (HP)",
  "Cylinder Volume (ccm)",
  "Steering",
  "Gearbox",
  "Fuel Tank (l)",
  "Fuel tank capacity",
  "Fuel Type",
  "Emission Class",
  "Emissions Sticker",
];
const mainDetails = [
  "Category",
  "Brand",
  "Model",
  "Price",
  "Year",
  "Distance",
  "VIN",
];

const featureDetails = [
  "Metallic",
  "New",
  "Alloy wheels",
  "Tailgate Load Platform",
  "Crane",
  "Retarder",
  "Intarder",
  "Air Conditioning",
  "Hydraulic Equipment",
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
];

const page = () => {
  return (
    <Layout headerStyle={1} footerStyle={1}>
      <div className="themesflat-container comparison-container">
        <div className="comparison-parameters">
          <ul>
            <li className="comparison-li">
              <div className="comparison-image"></div>
            </li>
            {mainDetails.map((value, index) => (
              <li key={value}  className={`comparison-li title ${
                (index + 1) % 2 !== 0 ? "back-gr" : ""
              }"`}>
                {value}
              </li>
            ))}

            <li className="comparison-li title divider">Engine Details</li>
            {engineDetails.map((value) => (
              <li key={value} className="comparison-li title">
                {value}
              </li>
            ))}
            <li className="comparison-li title divider">Body details</li>
            {sizes.map((value, index) => (
              <li
                key={value}
                className={`comparison-li title ${
                  (index + 1) % 2 !== 0 ? "back-gr" : ""
                }"`}
              >
                {value}
              </li>
            ))}
            <li className="comparison-li title divider">Main details</li>
            {featureDetails.map((value) => (
              <li key={value} className="comparison-li title">
                {value}
              </li>
            ))}
          </ul>
        </div>
        <div className="ad-parameters">
          <ul>
            <li className="comparison-li flex align-center justify-center">
              <img
                className="comparison-image"
                src="/assets/images/slide/bg-sign.png"
              />
            </li>
            <li className="comparison-li">Standart Tractor</li>
            <li className="comparison-li">Scania</li>
            <li className="comparison-li">R 500</li>
          </ul>
        </div>
        <div className="ad-parameters">
          <ul>
            <li className="comparison-li align-center justify-center">
              <img
                className="comparison-image"
                src="/assets/images/slide/bg-sign.png"
              />
            </li>
            <li className="comparison-li">Hazardous Load</li>
            <li className="comparison-li">Daf</li>
            <li className="comparison-li">XF 470</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default page;
