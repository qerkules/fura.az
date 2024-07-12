import SaloonCard from "@/components/elements/SaloonCard";
import Layout from "@/components/layout/Layout";
import React from "react";

const page = () => {
  return (
    <Layout>
      <div className="themesflat-container">
        <div className="salon-card-title">
          Resmi Salonlar:
        </div>
        <div className="salon-card-container">
        <SaloonCard />
        <SaloonCard />
        <SaloonCard />
        <SaloonCard />
        </div>
      </div>
    </Layout>
  );
};

export default page;
