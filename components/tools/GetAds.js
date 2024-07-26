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

  if (path === "av") fetchData("/AgriculturalVehicle/GetAllAgriculturalAds");
  if (path === "bus") fetchData("/Bus/GetAllBusAds");
  if (path === "co-ma")
    fetchData("/ConstructonMachinery/GetAllConstructonMachineryAds");
  if (path === "forklift") fetchData("/Forklift/GetAllForkliftAds");
  if (path === "semi-truck")
    fetchData("/SemiTrailerTruck/GetAllSemiTrailerTruckAds");
  if (path === "trailer") fetchData("/Forklift/GetAllForkliftAds");
  if (path === "truck") fetchData("/Truck/GetAllTruckAds");
  if (path === "truck-under") fetchData("/Forklift/GetAllForkliftAds");
  fetchData("/Ad/GetAllAds");

  return values;
};
