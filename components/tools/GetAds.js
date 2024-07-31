import React from "react";
import axios from "axios";
import { useGetPath } from "./GetPath";

export const getAllAds = async (currentPage, pageSize, path) => {
  let apiPath = "/Ad/GetAllAds";

  if (path === "av") apiPath = "/AgriculturalVehicle/GetAllAgriculturalAds";
  if (path === "services") apiPath = "/Service/GetAllServices";
  if (path === "bus") apiPath = "/Bus/GetAllBus";
  if (path === "co-ma")
    apiPath = "/ConstructonMachinery/GetAllConstructionMachineryAd";
  if (path === "forklift") apiPath = "/Forklift/GetAllForkliftAds";
  if (path === "semi-truck")
    apiPath = "/SemiTrailerTruck/GetAllSemiTrailerTruckAds";
  if (path === "trailer") apiPath = "/SemiTrailer/GetAllSemiTrailer";
  if (path === "truck") apiPath = "/TruckOver/GetAllTruckOverAds";
  if (path === "truck-under") apiPath = "/TrucUnder/GetAllTruckUnderAds";
  if (path === "sparepart") apiPath = "/SparePart";

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_LINK}${apiPath}?CurrentPage=${currentPage}&PageSize=${pageSize}`
  );
  return response.data;
};
