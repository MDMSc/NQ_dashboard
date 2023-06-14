import React from "react";
import { IconButton, ListItemText, MenuItem, MenuList } from "@mui/material";
import { Menu } from "@mui/icons-material";
import advIcon from "./assets/Advertising.png";

export default function SideBar() {
  return (
    <div className="sidebar">
      <IconButton>
        <Menu />
      </IconButton>
      <MenuList className="sidebar_menulist">
        <MenuItem>
          <div className="item_iconframe">
            <div></div>
          </div>
          <ListItemText>Dashboard</ListItemText>
        </MenuItem>

        <MenuItem>
          <div className="item_iconframe">
            <div></div>
          </div>
          <ListItemText>Catalog</ListItemText>
        </MenuItem>

        <MenuItem>
          <div className="item_iconframe">
            <div></div>
          </div>
          <ListItemText>Inventory</ListItemText>
        </MenuItem>

        <MenuItem>
          <div className="item_iconframe">
            <div>
                <img src={advIcon} alt="Advertising Icon" />
            </div>
          </div>
          <ListItemText>Advertising</ListItemText>
        </MenuItem>

        <MenuItem>
          <div className="item_iconframe">
            <div></div>
          </div>
          <ListItemText>Product Intelligence</ListItemText>
        </MenuItem>

        <MenuItem>
          <div className="item_iconframe">
            <div></div>
          </div>
          <ListItemText>Forecasting</ListItemText>
        </MenuItem>

        <MenuItem>
          <div className="item_iconframe">
            <div></div>
          </div>
          <ListItemText>Report Central</ListItemText>
        </MenuItem>

        <MenuItem>
          <div className="item_iconframe">
            <div></div>
          </div>
          <ListItemText>Reports</ListItemText>
        </MenuItem>

        <MenuItem>
          <div className="item_iconframe">
            <div></div>
          </div>
          <ListItemText>Link Accounts</ListItemText>
        </MenuItem>

        <MenuItem>
          <div className="item_iconframe">
            <div></div>
          </div>
          <ListItemText>Settings</ListItemText>
        </MenuItem>

        <MenuItem>
          <div className="item_iconframe">
            <div></div>
          </div>
          <ListItemText>Help</ListItemText>
        </MenuItem>
      </MenuList>
    </div>
  );
}
