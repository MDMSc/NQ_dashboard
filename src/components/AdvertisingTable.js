import React from "react";
import "../components_sass/advTable.scss";
import { Button, IconButton, Switch, Typography } from "@mui/material";
import FilterListIcon from "@mui/icons-material/FilterList";
import ViewColumnOutlinedIcon from "@mui/icons-material/ViewColumnOutlined";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { DataGrid } from "@mui/x-data-grid";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import PauseCircleOutlineOutlinedIcon from "@mui/icons-material/PauseCircleOutlineOutlined";
import WorkHistoryOutlinedIcon from "@mui/icons-material/WorkHistoryOutlined";
import EditIcon from "@mui/icons-material/Edit";

const columns = [
  {
    field: "status",
    headerName: "Status",
    sortable: false,
    width: 90,
    renderCell: (params) => {
      switch (params.value) {
        case "running":
          return (
            <SlowMotionVideoIcon fontSize="small" sx={{ color: "#009688" }} />
          );
        case "pause":
          return (
            <PauseCircleOutlineOutlinedIcon
              fontSize="small"
              sx={{ color: "#FF9800" }}
            />
          );
        case "waiting":
          return (
            <WorkHistoryOutlinedIcon
              fontSize="small"
              sx={{ color: "#C0C0C0" }}
            />
          );
        default:
          break;
      }
    },
  },
  {
    field: "campaignName",
    headerName: "Campaign Name",
    sortable: false,
    width: 200,
    editable: true,
    renderCell: (params) => {
      return (
        <span>
          {params.value}
          <IconButton sx={{ ml: 2 }}>
            <EditIcon fontSize="small" />
          </IconButton>
        </span>
      );
    },
  },
  {
    field: "info",
    headerName: "Info",
    sortable: false,
    width: 100,
    renderCell: (params) => {
      return (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "4px",
            background: params.row.info.length ? "none" : "#919ACD",
          }}
        >
          {params.row.info.length ? (
            params.row.info.map((val, i) => (
              <span
                key={i}
                style={{
                  padding: "2px",
                  width: "16px",
                  height: "16px",
                  background:
                    val === "M"
                      ? "#919ACD"
                      : val === "SP"
                      ? "#BA91CD"
                      : "#646DA2",
                  color: "white",
                  textAlign: "center",
                }}
              >
                {val}
              </span>
            ))
          ) : (
            <span>Auto</span>
          )}
        </div>
      );
    },
  },
  {
    field: "automation",
    headerName: "Automation",
    type: "boolean",
    sortable: false,
    width: 120,
    renderCell: (params) =>
      params.value ? <Switch defaultChecked /> : <Switch />,
  },
  {
    field: "dayParting",
    headerName: "Dayparting",
    sortable: false,
    type: "boolean",
    width: 120,
    renderCell: (params) =>
      params.value ? <Switch defaultChecked /> : <Switch />,
  },
  {
    field: "budget",
    headerName: "Budget",
    sortable: false,
    width: 90,
    valueGetter: (params) => `$${params.value}`,
  },
  {
    field: "strategy",
    headerName: "Bidding Strategy",
    sortable: false,
    width: 130,
    renderCell: (params) => {
      return <span className="strategy">{params.value}</span>;
    },
  },
  {
    field: "spend",
    headerName: "Spend",
    sortable: false,
    width: 90,
    valueGetter: (params) => `$${params.value}`,
  },
  {
    field: "revenue",
    headerName: "Revenue",
    sortable: false,
    width: 90,
    valueGetter: (params) => `$${params.value}`,
  },
  {
    field: "bid",
    headerName: "Current Bid",
    sortable: false,
    width: 120,
    valueGetter: (params) => `$${params.value}`,
  },
  {
    field: "acos",
    headerName: "ACOS",
    sortable: false,
    width: 90,
    valueGetter: (params) => `${params.value}%`,
  },
  {
    field: "orders",
    headerName: "Orders",
    sortable: false,
    width: 90,
  },
  {
    field: "impression",
    headerName: "Impression",
    sortable: false,
    width: 120,
  },
  {
    field: "ctr",
    headerName: "CTR",
    sortable: false,
    width: 90,
  },
  {
    field: "convRate",
    headerName: "Conv Rate",
    sortable: false,
    width: 90,
    valueGetter: (params) => `${params.value}%`,
  },
  {
    field: "actions",
    headerName: "",
    sortable: false,
    width: 90,
    renderCell: (params) => {
      return <span className="actions">{params.value}</span>;
    },
  },
];

const rows = [
  {
    id: 1,
    status: "running",
    campaignName: "Maxima Twin",
    info: ["M", "SP", "KT"],
    automation: true,
    dayParting: false,
    budget: 7099,
    strategy: "Up & Down",
    spend: 7099,
    revenue: 7099,
    bid: 9,
    acos: 298,
    orders: 34,
    impression: "4.5K",
    ctr: "4.5K",
    convRate: 1.5,
    actions: "Report",
  },
  {
    id: 2,
    status: "running",
    campaignName: "Alpha Bed Frames",
    info: ["M", "SP", "KT"],
    automation: false,
    dayParting: true,
    budget: 12805,
    strategy: "Up & Down",
    spend: 12805,
    revenue: 12805,
    bid: 9,
    acos: 145,
    orders: 453,
    impression: "12K",
    ctr: "12K",
    convRate: 4.5,
    actions: "Report",
  },
  {
    id: 3,
    status: "pause",
    campaignName: "Mattress",
    info: ["M", "SP", "PD"],
    automation: true,
    dayParting: false,
    budget: 57804,
    strategy: "Up",
    spend: 57804,
    revenue: 57804,
    bid: 9,
    acos: 569.45,
    orders: 35,
    impression: "4.6K",
    ctr: "4.6K",
    convRate: 5.5,
    actions: "Report",
  },
  {
    id: 4,
    status: "waiting",
    campaignName: "Bamboo Toppers",
    info: [],
    automation: false,
    dayParting: true,
    budget: 7209,
    strategy: "Down",
    spend: 7209,
    revenue: 7209,
    bid: 9,
    acos: 225,
    orders: 35,
    impression: "3.64K",
    ctr: "3.64K",
    convRate: 9.5,
    actions: "Report",
  },
  {
    id: 5,
    status: "running",
    campaignName: "Maxima Twin",
    info: ["M", "SP", "KT"],
    automation: true,
    dayParting: false,
    budget: 7099,
    strategy: "Up & Down",
    spend: 7099,
    revenue: 7099,
    bid: 9,
    acos: 298,
    orders: 34,
    impression: "4.5K",
    ctr: "4.5K",
    convRate: 1.5,
    actions: "Report",
  },
  {
    id: 6,
    status: "running",
    campaignName: "Maxima Twin",
    info: ["M", "SP", "KT"],
    automation: true,
    dayParting: false,
    budget: 7099,
    strategy: "Up & Down",
    spend: 7099,
    revenue: 7099,
    bid: 9,
    acos: 298,
    orders: 34,
    impression: "4.5K",
    ctr: "4.5K",
    convRate: 1.5,
    actions: "Report",
  },
  {
    id: 7,
    status: "running",
    campaignName: "Maxima Twin",
    info: ["M", "SP", "KT"],
    automation: true,
    dayParting: false,
    budget: 7099,
    strategy: "Up & Down",
    spend: 7099,
    revenue: 7099,
    bid: 9,
    acos: 298,
    orders: 34,
    impression: "4.5K",
    ctr: "4.5K",
    convRate: 1.5,
    actions: "Report",
  },
  {
    id: 8,
    status: "running",
    campaignName: "Maxima Twin",
    info: ["M", "SP", "KT"],
    automation: true,
    dayParting: false,
    budget: 7099,
    strategy: "Up & Down",
    spend: 7099,
    revenue: 7099,
    bid: 9,
    acos: 298,
    orders: 34,
    impression: "4.5K",
    ctr: "4.5K",
    convRate: 1.5,
    actions: "Report",
  },
  {
    id: 9,
    status: "running",
    campaignName: "Maxima Twin",
    info: ["M", "SP", "KT"],
    automation: true,
    dayParting: false,
    budget: 7099,
    strategy: "Up & Down",
    spend: 7099,
    revenue: 7099,
    bid: 9,
    acos: 298,
    orders: 34,
    impression: "4.5K",
    ctr: "4.5K",
    convRate: 1.5,
    actions: "Report",
  },
  {
    id: 10,
    status: "running",
    campaignName: "Maxima Twin",
    info: ["M", "SP", "KT"],
    automation: true,
    dayParting: false,
    budget: 7099,
    strategy: "Up & Down",
    spend: 7099,
    revenue: 7099,
    bid: 9,
    acos: 298,
    orders: 34,
    impression: "4.5K",
    ctr: "4.5K",
    convRate: 1.5,
    actions: "Report",
  },
  {
    id: 11,
    status: "running",
    campaignName: "Maxima Twin",
    info: ["M", "SP", "KT"],
    automation: true,
    dayParting: false,
    budget: 7099,
    strategy: "Up & Down",
    spend: 7099,
    revenue: 7099,
    bid: 9,
    acos: 298,
    orders: 34,
    impression: "4.5K",
    ctr: "4.5K",
    convRate: 1.5,
    actions: "Report",
  },
  {
    id: 12,
    status: "running",
    campaignName: "Maxima Twin",
    info: ["M", "SP", "KT"],
    automation: true,
    dayParting: false,
    budget: 7099,
    strategy: "Up & Down",
    spend: 7099,
    revenue: 7099,
    bid: 9,
    acos: 298,
    orders: 34,
    impression: "4.5K",
    ctr: "4.5K",
    convRate: 1.5,
    actions: "Report",
  },
  {
    id: 13,
    status: "running",
    campaignName: "Maxima Twin",
    info: ["M", "SP", "KT"],
    automation: true,
    dayParting: false,
    budget: 7099,
    strategy: "Up & Down",
    spend: 7099,
    revenue: 7099,
    bid: 9,
    acos: 298,
    orders: 34,
    impression: "4.5K",
    ctr: "4.5K",
    convRate: 1.5,
    actions: "Report",
  },
];

export default function AdvertisingTable() {
  return (
    <div className="adv_table">
      <div className="adv_table_header">
        <Typography>All Campaign</Typography>
        <div>
          <Button
            variant="outlined"
            startIcon={<FilterListIcon fontSize="small" />}
          >
            <span>Filter</span>
          </Button>
          <Button
            variant="outlined"
            startIcon={<ViewColumnOutlinedIcon fontSize="small" />}
          >
            <span>Columns</span>
          </Button>
          <IconButton id="icon_button">
            <FileDownloadOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
      </div>

      <DataGrid
        className="adv_table_content"
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableColumnFilter
        disableColumnMenu
        disableColumnSelector
      />
    </div>
  );
}
