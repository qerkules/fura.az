import React from "react";
import axios from "axios";
import { useGetPath } from "./GetPath";

export const getAllAds = async (currentPage, pageSize, path) => {
  let apiPath = "/Ad/GetAllAds";

  if (path === "av") apiPath = "/AgriculturalVehicle/GetAllAgriculturalAds";
  if (path === "bus") apiPath = "/Bus/GetAllBusAds";
  if (path === "co-ma")
    apiPath = "/ConstructonMachinery/GetAllConstructonMachineryAds";
  if (path === "forklift") apiPath = "/Forklift/GetAllForkliftAds";
  if (path === "semi-truck")
    apiPath = "/SemiTrailerTruck/GetAllSemiTrailerTruckAds";
  if (path === "trailer") apiPath = "/Forklift/GetAllForkliftAds";
  if (path === "truck") apiPath = "/Truck/GetAllTruckAds";
  if (path === "truck-under") apiPath = "/Forklift/GetAllForkliftAds";
  apiPath = "/Ad/GetAllAds";

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_LINK}${apiPath}?CurrentPage=${currentPage}&PageSize=${pageSize}`
  );
  return response.data;
};
