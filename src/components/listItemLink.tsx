import { NavLink } from "react-router-dom";
import { breadcrumbNameMap } from "../constants";
import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemProps,
} from "@mui/material";
import React, { JSX } from "react";

interface ListItemLinkProps extends ListItemProps {
  to: string;
  startIcon?: JSX.Element;
  replace?: boolean;
  open?: boolean;
  mb?: number;
  mt?: number;
}

const ListItemLink = (props: ListItemLinkProps) => {
  const { to, open, startIcon, mb, mt, ...other } = props;
  const primary = breadcrumbNameMap[to];

  let icon = null;
  if (open != null) {
    icon = open ? <ExpandMore /> : <KeyboardArrowRightOutlined />;
  }
  return (
    <li>
      <ListItem
        button
        component={NavLink}
        to={to}
        color="primary"
        end
        sx={{
          color: "primary.main",
          borderRadius: 2,
          marginBottom: mb,
          marginTop: mt,
          "&.active": {
            fontWeight: "bold",
            bgcolor: "primary.light",
          },
        }}
        {...other}
      >
        <ListItemIcon
          sx={{
            display: startIcon ? "initial" : "none",
            minWidth: (theme) => theme.spacing(5),
          }}
        >
          {startIcon}
        </ListItemIcon>
        <ListItemText primary={primary} disableTypography />
        {icon}
      </ListItem>
    </li>
  );
};

export default ListItemLink;
