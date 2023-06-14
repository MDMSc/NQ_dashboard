import React from "react";
import "../components_sass/advHeader.scss";
import { NativeSelect, Typography } from "@mui/material";


export default function AdvertisingHeader() {
  return (
    <div className="adv_header">
      <Typography>Advertising</Typography>
      <div className="adv_dropdown_div">
        <div className="adv_dropdown_types">
          <div className="adv_marketplace">
            <Typography className="adv_select_title">Marketplace</Typography>
            <NativeSelect className="adv_select_contents">
              <option value="Amazon 977462">Amazon 977462</option>
            </NativeSelect>
          </div>
          <div className="adv_adtype">
            <Typography className="adv_select_title">Ad type</Typography>
            <NativeSelect className="adv_select_contents">
              <option value="All">All</option>
            </NativeSelect>
          </div>
        </div>

        <div className="adv_datepicker">
          <Typography className="adv_select_title">Marketplace</Typography>
          
        </div>
      </div>
    </div>
  );
}
