export const GetCategory = (category) => {
  const trailerId = "e1e5807e-0081-4bf9-a96b-5152e3dcd3d0";
  const sttId = "bbb92f73-12d2-4230-aa6b-e35416bd88e3";
  const comaId = "55e97a79-0f08-4f20-90e7-5c9c4ccf9fca";
  const truckId = "3ae42571-81f5-47da-9c6c-587f567a665e";
  const transportTruckId = "582f0bff-02eb-400c-a463-53559e595551";
  const avId = "4d13f211-5bd4-4c70-a49e-7fbb3e4c8c31";
  const spId = "607d688d-e632-4888-b9f1-639d52d7e6b4";
  const forkliftId = "b2d4d70c-ee3c-4730-ac15-6bbe2a9e9cf6";
  const busId = "4d13f211-5bd4-4c70-a49e-7fbb3e4c8c31";
  const serivceId = "ecc6e50b-ea35-4ede-a750-fa32be2d3840";

  if (category === "av") return avId;
  if (category === "sparepart") return spId;
  if (category === "bus") return busId;
  if (category === "co-ma") return comaId;
  if (category === "forklift") return forkliftId;
  if (category === "truck") return truckId;
  if (category === "semi-truck") return sttId;
  if (category === "transporter-truck") return transportTruckId;
  if (category === "trailer") return trailerId;
  if (category === "services") return serivceId;
};
