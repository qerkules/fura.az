"use client";
import {
  FormControl,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Textarea } from "@mui/joy";
import ImageUpload from "./ImageUpload";
import axios from "axios";
import { objectToFormData } from "../tools/ObjectToForm";
import { GetTypes } from "../tools/GetTypes";
import { GetFeatures } from "../tools/GetFeatures";

const DefaultSTTruckCreate = () => {
  const features = GetFeatures("truck");
  const [category, setCategory] = useState("");
  const [price, setMinPrice] = useState();
  const [rentType, setRentType] = useState("");
  const [adType, setAdtype] = useState("");
  const [dist, setDist] = useState("");
  const [year, setYear] = useState("");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [currency, setCurrency] = useState("");
  const [distanceType, setDistanceType] = useState("");
  const [emissionClass, setEmissionClass] = useState("");
  const [emissionSticker, setEmissionSticker] = useState("");
  const [fuelType, setFuelType] = useState("");
  const [paint, setPaint] = useState("");
  const [gearbox, setGearbox] = useState("");
  const [wheelFormula, setWheelFormula] = useState("");
  const [drivingCabin, setDrivingCabin] = useState("");
  const [enginePowerType, setEnginePowerType] = useState("hp");
  const [minEnginePower, setMinEnginePower] = useState("");
  const [vehicleWeight, setVehicleWeight] = useState("");
  const [axles, setAxles] = useState("");
  const [airCond, setAirCond] = useState("");
  const [hydrEqui, setHydrEqui] = useState("");
  const [selectedArray, setSelectedArray] = useState([]);
  const [images, setImages] = useState([]);
  const [description, setDescription] = useState("");
  const [vin, setVin] = useState("");
  const [cyVolume, setCyVolume] = useState("");
  const [steering, setSteering] = useState("");

  const [newModel, setNewModel] = useState("");
  const [notModel, setNotModel] = useState("");

  const {
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
  } = GetTypes();
  const maxNumber = 20;
  let formImage;

  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelected = (value) => {
    setSelectedArray((prevSelectedArray) =>
      prevSelectedArray.includes(value)
        ? prevSelectedArray.filter((item) => item !== value)
        : [...prevSelectedArray, value]
    );
  };
  const isSelected = (value) => selectedArray.includes(value);

  const handleSubmit = async () => {
    try {
      // const response = await axios.post(
      //   "https://furaapi.aifdigital.com.tr/api/SemiTrailerTruck/CreateSemiTrailerTruckAd",
      //   JSON.stringify({
      //     Steering: "value1",
      //     EnginePowerKW: 200,
      //     EnginePowerHP: 120,
      //     CylinderVolume: 10000,
      //     VehicleWidth: 1000,
      //     VehicleHeight: 1000,
      //     FuelTank: "70",
      //     LicencedWeight: "200",
      //     Paint: 2,
      //     Axles: 4,
      //     Retarder: true,
      //     Intarder: true,
      //     ParkingHeater: true,
      //     AirConditioning: 2,
      //     EmissionClass: 2,
      //     EmissionsSticker: 1,
      //     AlloyWheels: false,
      //     WholeBody: true,
      //     Metallic: true,
      //     DrivingCabin: "Long Road",
      //     ABS: true,
      //     ESP: true,
      //     EBS: true,
      //     AuxiliaryHeating: true,
      //     Compressor: true,
      //     CruiseControl: true,
      //     AdaptiveCruiseControl: true,
      //     FourWheelDrive: true,
      //     ParticleFilter: true,
      //     NavigationSystem: true,
      //     CrashStatus: false,
      //     CategoryId: "B7F35174-3124-4082-85C8-01B2E8E8FC00",
      //     ModelId: "8CFCD50B-9155-4694-B73F-997D2A941A0C",
      //     GearBox: 3,
      //     FuelType: 2,
      //     Year: 2020,
      //     VinCode: "AES142341SFAS",
      //     SaleOrRent: "Sale",
      //     Distance: 200000,
      //     Price: 65000,
      //     Currency: 2,
      //     IsNew: false,
      //     AdDetails: "The car is beatufil i love it",
      //     RentType: 2,
      //     // AdImage: images,
      //   })
      // );

      const listImages = images.map((el) => {
        return el.file;
      });

      const formData = objectToFormData({
        FrontHydraulics: "true",
        FrontJack: "true",
        Cabin: "true",
        HoursOfOperation: "100",
        AirConditioning: "1",
        EmissionSticker: "1",
        Abs: "true",
        AuxiliaryHeating: "true",
        FourWheelDrive: "true",
        HydrolicWheel: "true",
        EnginePowerHP: "12344",
        EnginePowerKW: "1412",
        CategoryId: "B7F35174-3124-4082-85C8-01B2E8E8FC00",
        ModelId: "8CFCD50B-9155-4694-B73F-997D2A941A0C",
        GearBox: "1",
        FuelType: "2",
        CrashStatus: "true",
        Year: "2000",
        VinCode: "adfasdfasdf123123",
        SaleOrRent: "sale",
        Distance: "123123",
        DistanceMeasurementUnit: "1",
        Price: "1000",
        Currency: "1",
        IsNew: "true",
        AdDetails: "Very good",
        RentType: "2",
        AdImage: listImages,
        Description: "TEst",
      });

      // const response = await axios.post(
      //   "https://furaapi.aifdigital.com.tr/api/Forklift/CreateForkliftAd",
      //   formData,
      //   { headers: { "Content-Type": "multipart/form-data" } }
      // );
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          "Access-Control-Allow-Credentials": "true",
        },
      };

      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjYzNWQ4ZjBhLTFkYjYtNDEwMi04NGY4LWJiMWIyZDVhZmQyZCIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL2VtYWlsYWRkcmVzcyI6Im1haGFtbWFkQGdtYWlsLmNvbSIsIm5iZiI6MTcyMTcyNjEwOCwiZXhwIjoxNzIxODEyNTA4LCJpc3MiOiJ3d3cubXlhcGkuY29tIiwiYXVkIjoid3d3LmZ1cmFhei5jb20ifQ.9I7Obafc4t_ysZvJqV_xjzsB-yxHLbqInnYNnc2u4zE";

      // await fetch(
      //   "https://furaapi.aifdigital.com.tr/api/AgriculturalVehicle/CreateAgriculturalVehicleAd",
      //   {
      //     method: "POST",
      //     body: formImage,
      //     headers: {
      //       "Content-Type": "multipart/form-data",
      //       Authorization: `Bearer ${token}`,
      //     },
      //   }
      // )
      //   .then((res) => {
      //     if (res.ok) {
      //       res.json().then((data) => console.log(data));
      //     } else {
      //       console.log(res);
      //       alert("Error processing image.");
      //     }
      //   })
      //   .catch((error) => {
      //     console.error("Error:", error);
      //     alert("An error ocurred while processing the image");
      //   });

      const response = await axios
        .post(
          "https://furaapi.aifdigital.com.tr/api/AgriculturalVehicle/CreateAgriculturalVehicleAd",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error:", error));

      const userData = JSON.stringify({
        NameSurname: "Maqa Serk",
        UserName: "0232323",
        Email: "assdadff@gmail.com",
        Password: "maqamedov",
        PasswordConfirm: "maqamedov",
      });

      // await axios
      //   .post(
      //     `${process.env.NEXT_PUBLIC_API_LINK}/User/RegisterMember`,
      //     userData,
      //     {
      //       headers: {
      //         "Content-Type": "application/json",
      //         Authorization: `Bearer ${token}`,
      //       },
      //     }
      //   )
      //   .then((response) => {
      //     console.log(response.data);
      //   })
      //   .catch((error) => {
      //     console.error("Error:", error);
      //   });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <FormControl
        id="filter-list-car-side-bar"
        className="create-ad-template list-filter"
      >
        <div className="form-group">
          <div className="input-search-list">
            <FormControl fullWidth>
              <InputLabel id="adtype-label">Ad Type</InputLabel>
              <Select
                fullWidth
                id="adtype-select"
                labelId="adtype-label"
                label="Ad Type"
                variant="outlined"
                value={adType}
                onChange={(e) => setAdtype(e.target.value)}
              >
                <MenuItem value={"sale"}>sale</MenuItem>
                <MenuItem value={"Rent"}>rent</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="input-search-list">
            <FormControl fullWidth>
              <InputLabel id="category-label">Category</InputLabel>
              <Select
                fullWidth
                id="category-select"
                labelId="category-label"
                label="Category"
                variant="outlined"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categories.map((val) => (
                  <MenuItem value={val.id} key={val.id}>
                    {val.categoryName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="brand-label">Brand</InputLabel>
              <Select
                fullWidth
                id="brand-select"
                labelId="brand-label"
                variant="outlined"
                label="Brand"
                value={brand}
                onChange={(e) => setBrand(e.target.value)}
              >
                {brands.map((val) => (
                  <MenuItem value={val.id} key={val.id}>
                    {val.brandName}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>

        {notModel ? (
          <div className="form-group">
            <div className="group-select">
              <FormControl fullWidth>
                <InputLabel id="model-label">Model</InputLabel>
                <Select
                  fullWidth
                  id="model-select"
                  labelId="model-label"
                  variant="outlined"
                  label="Model"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                >
                  <MenuItem value={"R500"}>R 500</MenuItem>
                  <MenuItem value={"DX470"}>DX 470</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        ) : (
          <div className="form-group">
            <div className="group-select">
              <FormControl fullWidth>
                <TextField
                  fullWidth
                  id="model-input"
                  variant="outlined"
                  label="Model"
                  value={newModel}
                  onChange={(e) => setNewModel(e.target.value)}
                />
              </FormControl>
            </div>
          </div>
        )}
        <ImageUpload
          maxNumber={maxNumber}
          images={images}
          setImages={setImages}
        />

        <div className="form-group prefix-select">
          <FormControl fullWidth>
            <InputLabel id="currency-label">Currency</InputLabel>
            <Select
              variant="outlined"
              id="currency-select"
              labelId="currency-label"
              label="Currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              {currTypes.map((val, index) => (
                <MenuItem key={index} value={val.index}>
                  {val.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>

        <div className="form-group prefix-input">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Price"
                id="price-min"
                type="number"
                placeholder="0"
                value={price}
                onChange={(e) => setMinPrice(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {currency[0]}
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </div>
        </div>

        <div className="form-group prefix-select">
          <FormControl fullWidth>
            <InputLabel id="distance-type-label">Km/Miles</InputLabel>
            <Select
              variant="outlined"
              id="distance-type-select"
              labelId="distance-type-label"
              label="Km/Miles"
              value={distanceType}
              onChange={(e) => setDistanceType(e.target.value)}
            >
              {distanceunittypes.map((val, index) => (
                <MenuItem key={index} value={val.index}>
                  {val.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="form-group prefix-input">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Distance"
                id="distance"
                value={dist}
                type="number"
                onChange={(e) => setDist(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">{"km"}</InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </div>
        </div>
        <div className="prefix-select">
          <FormControl fullWidth>
            <InputLabel id="hp/kw">Hp/Kw</InputLabel>
            <Select
              id="hp/kw-select"
              labelId="hp/kw-label"
              label="hp/kw"
              value={enginePowerType}
              onChange={(e) => setEnginePowerType(e.target.value)}
            >
              <MenuItem value={"hp"}>HP</MenuItem>
              <MenuItem value={"kw"}>KW</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="form-group prefix-input">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Engine Power"
                id="engine-power-min"
                type="number"
                placeholder="0"
                value={minEnginePower}
                onChange={(e) => setMinEnginePower(e.target.value)}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {enginePowerType}
                    </InputAdornment>
                  ),
                }}
              />
            </FormControl>
          </div>
        </div>

        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="year-min-label">Year</InputLabel>
              <Select
                fullWidth
                id="year-min-select"
                labelId="year-min-label"
                variant="outlined"
                label="Min"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              >
                <MenuItem value={"1999"}>1999</MenuItem>
                <MenuItem value={"2000"}>2000</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="emission-class-label">Emission Class</InputLabel>
              <Select
                fullWidth
                id="emission-class-select"
                labelId="emission-class-label"
                variant="outlined"
                label="Emission Class"
                value={emissionClass}
                onChange={(e) => setEmissionClass(e.target.value)}
              >
                {emissionclasses.map((val, index) => (
                  <MenuItem key={index} value={val.index}>
                    {val.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="emission-sticker-label">
                Emission Sticker
              </InputLabel>
              <Select
                fullWidth
                id="emission-sticker-select"
                labelId="emission-sticker-label"
                variant="outlined"
                label="Emission Sticker"
                value={emissionSticker}
                onChange={(e) => setEmissionSticker(e.target.value)}
              >
                {emissionstickers.map((val, index) => (
                  <MenuItem key={index} value={val.index}>
                    {val.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="fuel-type-label">Fuel Type</InputLabel>
              <Select
                fullWidth
                id="fuel-type-select"
                labelId="fuel-type-label"
                variant="outlined"
                label="Fuel Type"
                value={fuelType}
                onChange={(e) => setFuelType(e.target.value)}
              >
                {fuelTypes.map((val, index) => (
                  <MenuItem key={index} value={val.index}>
                    {val.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="gearbox-label">Gearbox</InputLabel>
              <Select
                fullWidth
                id="gearbox-select"
                labelId="gearbox-label"
                variant="outlined"
                label="Gearbox"
                value={gearbox}
                onChange={(e) => setGearbox(e.target.value)}
              >
                {gearboxes.map((val, index) => (
                  <MenuItem key={index} value={val.index}>
                    {val.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="paint-label">Paint</InputLabel>
              <Select
                fullWidth
                id="paint-select"
                labelId="paint-label"
                variant="outlined"
                label="Paint"
                value={paint}
                onChange={(e) => setPaint(e.target.value)}
              >
                {paints.map((val, index) => (
                  <MenuItem key={index} value={val.index}>
                    {val.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="wheel-formula-label">Wheel Formula</InputLabel>
              <Select
                fullWidth
                id="wheel-formula-select"
                labelId="wheel-formula-label"
                variant="outlined"
                label="Wheel Formula"
                value={wheelFormula}
                onChange={(e) => setWheelFormula(e.target.value)}
              >
                {wheelTypes.map((val, index) => (
                  <MenuItem key={index} value={val.index}>
                    {val.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="driving-cabin-label">Driving Cabin</InputLabel>
              <Select
                fullWidth
                id="driving-cabin-select"
                labelId="driving-cabin-label"
                variant="outlined"
                label="Driving Cabin"
                value={drivingCabin}
                onChange={(e) => setDrivingCabin(e.target.value)}
              >
                <MenuItem value={"Long road"}>Long Road</MenuItem>
                <MenuItem value={"Local"}>Local</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="vehicle-weight-label">Vehicle Weight</InputLabel>
              <Select
                fullWidth
                id="vehicle-weight-select"
                labelId="vehicle-weight-label"
                variant="outlined"
                label="Vehicle Weight"
                value={vehicleWeight}
                onChange={(e) => setVehicleWeight(e.target.value)}
              >
                <MenuItem value={"0-7.5"}>0t - 7.5t</MenuItem>
                <MenuItem value={"7.5-15"}>7.5t - 15t</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="axles-label">Axles</InputLabel>
              <Select
                fullWidth
                id="axles-select"
                labelId="axles-label"
                variant="outlined"
                label="Axles"
                value={axles}
                onChange={(e) => setAxles(e.target.value)}
              >
                <MenuItem value={"0-5"}>0 - 5</MenuItem>
                <MenuItem value={"5-10"}>5 - 10</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="air-cond-label">Air Condition</InputLabel>
              <Select
                fullWidth
                id="air-cond-select"
                labelId="air-cond-label"
                variant="outlined"
                label="Air Condition"
                value={airCond}
                onChange={(e) => setAirCond(e.target.value)}
              >
                {aircotypes.map((val, index) => (
                  <MenuItem key={index} value={val.index}>
                    {val.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <InputLabel id="hydr-equi-label">Hydraulic Equipment</InputLabel>
              <Select
                fullWidth
                id="hydr-equi-select"
                labelId="hydr-equi-label"
                variant="outlined"
                label="Hydraulic Equipment"
                value={hydrEqui}
                onChange={(e) => setHydrEqui(e.target.value)}
              >
                <MenuItem value={"Tipper-hydr"}>Tipper Hydraulic</MenuItem>
                <MenuItem value={"push-floor-hydr"}>
                  Push Floor Hydraulic
                </MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Vin"
                id="vin"
                value={vin}
                onChange={(e) => setVin(e.target.value)}
              />
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Cylinder Volume"
                id="cyVolume"
                type="number"
                placeholder="0"
                value={cyVolume}
                onChange={(e) => setCyVolume(e.target.value)}
              />
            </FormControl>
          </div>
        </div>
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <TextField
                label="Steering"
                id="steering"
                placeholder="0"
                value={steering}
                onChange={(e) => setSteering(e.target.value)}
              />
            </FormControl>
          </div>
        </div>
      </FormControl>

      <div className="create-description">
        <div className="form-group">
          <div className="group-select">
            <FormControl fullWidth>
              <FormLabel>Description:</FormLabel>
              <Textarea
                minRows={5}
                placeholder="Type in here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </FormControl>
          </div>
        </div>
      </div>
      <div className="filter-button-container-title mt-15">Features:</div>
      <div className="filter-button-container">
        {features.map((value) => (
          <div
            key={value}
            className={`filter-button-select ${
              isSelected(value) ? "selected" : ""
            }`}
            onClick={() => handleSelected(value)}
          >
            {value}
          </div>
        ))}
      </div>

      <div onClick={() => handleSubmit()}>Submit STT</div>
    </div>
  );
};

export default DefaultSTTruckCreate;
