"use client"
import SaloonCard from "@/components/elements/SaloonCard";
import Layout from "@/components/layout/Layout";
import axios from "axios";
import React, { useEffect, useState } from "react";

const page = () => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `${process.env.NEXT_PUBLIC_API_LINK}/Salon/GetAllSalons`
        );

        setValues(data?.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);
  return (
    <Layout>
      <div className="themesflat-container">
        <div className="salon-card-title">Resmi Salonlar:</div>
        <div className="salon-card-container">
          {values.length > 0 &&
            values.map((val) => {
              return <SaloonCard data={val} />;
            })}
        </div>
      </div>
    </Layout>
  );
};

export default page;
