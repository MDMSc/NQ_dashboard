import React from "react";
import AdvertisingHeader from "../components/AdvertisingHeader";
import AdvertisingGraph from "../components/AdvertisingGraph";
import AdvertisingTable from "../components/AdvertisingTable";

export default function Advertising() {
  return (
    <div className="adv">
      <AdvertisingHeader />
      <div id="adv_data_box">
        <AdvertisingGraph />
        <AdvertisingTable />
      </div>
    </div>
  );
}
