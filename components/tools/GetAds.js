"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { GetPath } from "./GetPath";

export const getAllAds = (currentPage, pageSize) => {
  const [values, setValues] = useState([]);

  const path = GetPath().last;

  const fetchData = async (path) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_LINK}${path}?CurrentPage=${currentPage}&PageSize=${pageSize}`
    );
    setValues(response.data);
  };
  
  useEffect(() => {

    if (path === "av")
      return fetchData("/AgriculturalVehicle/GetAllAgriculturalAds");
    if (path === "bus") return fetchData("/Bus/GetAllBusAds");
    if (path === "co-ma")
      return fetchData("/ConstructonMachinery/GetAllConstructonMachineryAds");
    if (path === "forklift") return fetchData("/Forklift/GetAllForkliftAds");
    if (path === "semi-truck")
      return fetchData("/SemiTrailerTruck/GetAllSemiTrailerTruckAds");
    if (path === "trailer") return fetchData("/Forklift/GetAllForkliftAds");
    if (path === "truck") return fetchData("/Truck/GetAllTruckAds");
    if (path === "truck-under") return fetchData("/Forklift/GetAllForkliftAds");
    return fetchData("/Ad/GetAllAds");
  }, []);

  return values;
};
