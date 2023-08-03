import { NavLink } from "react-router-dom";
import { breadcrumbNameMap } from "../constants";
import { ExpandMore, KeyboardArrowRightOutlined } from "@mui/icons-material";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemProps,
  ListItemButton,
} from "@mui/material";
import { JSX } from "react";

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
    <ListItem color="primary" {...other}>
      <ListItemButton
        component={NavLink}
        to={to}
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
      </ListItemButton>
    </ListItem>
  );
};

export default ListItemLink;
