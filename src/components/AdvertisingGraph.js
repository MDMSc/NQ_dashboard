import React from "react";
import "../components_sass/advGraph.scss";
import { Divider, IconButton, NativeSelect, Typography } from "@mui/material";
import ZoomInMapIcon from "@mui/icons-material/ZoomInMap";
import { BsArrowDownRightSquareFill } from "react-icons/bs";
import { BsArrowUpRightSquareFill } from "react-icons/bs";

export default function AdvertisingGraph() {
  return (
    <div className="adv_graph">
      <div className="adv_graph_content">
        <div className="adv_graph_header">
          <Typography>Ads Spends & Returns</Typography>
          <div>
            <NativeSelect className="adv_graph_select" variant="none">
              <option value="Last 7 days">Last 7 days</option>
            </NativeSelect>
            <IconButton>
              <ZoomInMapIcon fontSize="small" />
            </IconButton>
          </div>
        </div>

        <Divider />

        <div className="adv_graph_data" id="data_1">
          <div>
            <Typography className="adv_data_subheader">Ads Spend</Typography>
            <Typography className="adv_data_header">
              $14,5K&nbsp;
              <BsArrowDownRightSquareFill style={{ color: "red", width: "0.5rem", height: "0.5rem" }} />
              &nbsp;<span>19.9%</span>
            </Typography>
          </div>
          <div>
            <Typography className="adv_data_subheader">Revenue</Typography>
            <Typography className="adv_data_header">
              $1.8M&nbsp;
              <BsArrowUpRightSquareFill style={{ color: "green", width: "0.5rem", height: "0.5rem" }} />
              &nbsp;<span>9.9%</span>
            </Typography>
          </div>
          <div>
            <Typography className="adv_data_subheader">CPC</Typography>
            <Typography className="adv_data_header">
              $0.95&nbsp;
              <BsArrowDownRightSquareFill style={{ color: "red", width: "0.5rem", height: "0.5rem" }} />
              &nbsp;<span>19.9%</span>
            </Typography>
          </div>
          <div>
            <Typography className="adv_data_subheader">ACOS</Typography>
            <Typography className="adv_data_header">
              51.8%&nbsp;
              <BsArrowUpRightSquareFill style={{ color: "green", width: "0.5rem", height: "0.5rem" }} />
              &nbsp;<span>6.8%</span>
            </Typography>
          </div>
        </div>

        <Divider />

      </div>

      <div className="adv_graph_content">
      <div className="adv_graph_header">
          <Typography>Click Through Rate & Clicks</Typography>
          <div>
            <NativeSelect className="adv_graph_select" variant="none">
              <option value="Last 7 days">Last 7 days</option>
            </NativeSelect>
            <IconButton>
              <ZoomInMapIcon fontSize="small" />
            </IconButton>
          </div>
        </div>

        <Divider />

        <div className="adv_graph_data" id="data_2">
          <div>
            <Typography className="adv_data_subheader">Impression</Typography>
            <Typography className="adv_data_header">
              10.5M&nbsp;
              <BsArrowDownRightSquareFill style={{ color: "red", width: "0.5rem", height: "0.5rem" }} />
              &nbsp;<span>19.9%</span>
            </Typography>
          </div>
          <div>
            <Typography className="adv_data_subheader">Clicks</Typography>
            <Typography className="adv_data_header">
              10.5K&nbsp;
              <BsArrowUpRightSquareFill style={{ color: "green", width: "0.5rem", height: "0.5rem" }} />
              &nbsp;<span>9.9%</span>
            </Typography>
          </div>
          <div>
            <Typography className="adv_data_subheader">CTR</Typography>
            <Typography className="adv_data_header">
              0.16%&nbsp;
              <BsArrowUpRightSquareFill style={{ color: "green", width: "0.5rem", height: "0.5rem" }} />
              &nbsp;<span>9.9%</span>
            </Typography>
          </div>
        </div>

        <Divider />
      </div>

      <div className="adv_graph_content">
      <div className="adv_graph_header">
          <Typography>Conversion Rate & Order</Typography>
          <div>
            <NativeSelect className="adv_graph_select" variant="none">
              <option value="Last 7 days">Last 7 days</option>
            </NativeSelect>
            <IconButton>
              <ZoomInMapIcon fontSize="small" />
            </IconButton>
          </div>
        </div>

        <Divider />

        <div className="adv_graph_data" id="data_3">
          <div>
            <Typography className="adv_data_subheader">CVR</Typography>
            <Typography className="adv_data_header">
              5.3%&nbsp;
              <BsArrowDownRightSquareFill style={{ color: "red", width: "0.5rem", height: "0.5rem" }} />
              &nbsp;<span>19.9%</span>
            </Typography>
          </div>
          <div>
            <Typography className="adv_data_subheader">Orders</Typography>
            <Typography className="adv_data_header">
              10K&nbsp;
              <BsArrowUpRightSquareFill style={{ color: "green", width: "0.5rem", height: "0.5rem" }} />
              &nbsp;<span>9.9%</span>
            </Typography>
          </div>
        </div>

        <Divider />
      </div>
    </div>
  );
}
