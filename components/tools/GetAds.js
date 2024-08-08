import axios from "axios";

export const getAllAds = async (currentPage, pageSize, path) => {
  let apiPath = "/Ad/GetAllAds";
  const languageKey = "en";

  if (path === "av") apiPath = "/AgriculturalVehicle/GetAllAgriculturalAds";
  if (path === "services") apiPath = "/Service/GetAllServices";
  if (path === "bus") apiPath = "/Bus/GetAllBus";
  if (path === "co-ma")
    apiPath = "/ConstructionMachinery/GetAllConstructionMachineryAd";
  if (path === "forklift") apiPath = "/Forklift/GetAllForkliftAds";
  if (path === "semi-truck")
    apiPath = "/SemiTrailerTruck/GetAllSemiTrailerTruckAds";
  if (path === "trailer") apiPath = "/SemiTrailer/GetAllSemiTrailer";
  if (path === "truck") apiPath = "/TruckOver/GetAllTruckOverAds";
  if (path === "truck-under") apiPath = "/TruckUnder/GetAllTruckUnderAds";
  if (path === "sparepart") apiPath = "/SparePart";

  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_LINK}${apiPath}?CurrentPage=${currentPage}&PageSize=${pageSize}&LanguageKey=${languageKey}`
  );
  return response.data;
};
