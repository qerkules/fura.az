import AdCard from "@/components/layout/AdCard";
import Layout from "@/components/layout/Layout";
import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const page = () => {
  return (
    <Layout>
      <div className="themesflat-container">
        <div className="salon-page-container">
          <div className="salon-header">
          </div>
          <div className="salon-header-description">
            <div className="salon-header-bottom">
              <div className="salon-logo">
                <img src="/assets/images/logo/scania.jpg" />
              </div>
              <div className="salon-info">
                <div className="salon-page-title">Scani Resmi Distrubutor</div>
                <div className="salon-page-description">
                  Scania yukmasinlarinin Azərbaycandakı rəsmi distribütoru ve
                  Scania yukmasinlarinin Azərbaycandakı rəsmi distribütoru ve
                  Scania yukmasinlarinin Azərbaycandakı rəsmi distribütoru ve
                  şirkətidir.
                </div>
                <div className="salon-address  mobile-hider">
                  <LocationOnIcon /> Baku, Nerimanov Rayonu Elovset
                  abdrurrehimov kucesi 120
                </div>
              </div>
              <div className="salon-contact mobile-hider">
                <div className="flex">
                  <div  className="phone-icon">
                    <PhoneIcon />
                  </div>
                  <div className="phone-numbers">
                    <div>(050) 251-41-54</div>
                    <div>(050) 251-41-54</div>
                    <div>(050) 251-41-54</div>
                  </div>
                </div>
                <div className="flex">
                  <div className="phone-icon">
                    <AccessTimeIcon />
                  </div>
                  <div className="working-hours">
                    <div>Bazar ertəsi – Şənbə: 09:00 – 19:00;</div>
                    <div>Bazar: 10:00 – 18:00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-content" id="nav-listing-car">
          <div className="car-list-item ">
            {/* <AdCard data={data} />
            <AdCard data={data} />
            <AdCard data={data} />
            <AdCard data={data} /> */}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default page;
