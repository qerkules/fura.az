"use client";
import axios from "axios";
import { useEffect, useState } from "react";

export const GetTypes = (categoryId) => {
  const [gearboxes, setGearboxes] = useState([]);
  const [aircotypes, setAircotypes] = useState([]);
  const [currTypes, setCurrTypes] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);
  const [wheelTypes, setWheelTypes] = useState([]);
  const [distanceunittypes, setDistanceunittypes] = useState([]);
  const [emissionclasses, setEmissionClasses] = useState([]);
  const [emissionstickers, setEmissionStickers] = useState([]);
  const [paints, setPaints] = useState([]);
  const [categories, setCategories] = useState([]);
  const [brands, setBrands] = useState([]);

  const fetchData = async (path, setter) => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_LINK}/GetOptions/${path}`
    );
    setter(response.data.$values);
  };

  const fetchCategories = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_LINK}/Category/GetCategoriesByProductTypeId?ProductTypeId=${categoryId}`
    );
    setCategories(response.data.categories.$values);
  };
  const fetchBrands = async () => {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_LINK}/Brand/GetBrandsByProductTypeId?ProductTypeId=${categoryId}`
    );
    setBrands(response.data.brands.$values);
  };

  useEffect(() => {
    fetchBrands();

    fetchCategories();

    fetchData("gearboxtypes", setGearboxes);
    fetchData("airconditioningtypes", setAircotypes);
    fetchData("currencytypes", setCurrTypes);
    fetchData("fueltypes", setFuelTypes);
    fetchData("wheelformulatypes", setWheelTypes);
    fetchData("distanceunittypes", setDistanceunittypes);
    fetchData("emissionclasstypes", setEmissionClasses);
    fetchData("emissionstickertypes", setEmissionStickers);
    fetchData("painttypes", setPaints);
  }, []);

  return {
    gearboxes,
    aircotypes,
    currTypes,
    fuelTypes,
    wheelTypes,
    distanceunittypes,
    emissionclasses,
    emissionstickers,
    paints,
    categories,
    brands,
  };
};
