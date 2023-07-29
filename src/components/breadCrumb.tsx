import { Link, LinkProps } from "@mui/material";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link as RouterLink } from "react-router-dom";
import { breadcrumbNameMap } from "../constants";
import RoofingRoundedIcon from "@mui/icons-material/RoofingRounded";

interface LinkRouterProps extends LinkProps {
  to: string;
  replace?: boolean;
}

function LinkRouter(props: LinkRouterProps) {
  return (
    <Link
      {...props}
      component={RouterLink}
      sx={{ fontSize: 13, display: "flex", alignItems: "center" }}
    />
  );
}

function Breadcrumb({ pathnames }: { pathnames: string[] }) {
  return (
    <Breadcrumbs aria-label="breadcrumb" separator="›">
      <LinkRouter underline="hover" color="inherit" to="/">
        <RoofingRoundedIcon fontSize="small" />
        Dashboard
      </LinkRouter>
      {pathnames.map((_, index) => {
        const last = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join("/")}`;

        return last ? (
          <Typography color="primary" key={to} fontSize={13}>
            {breadcrumbNameMap[to]}
          </Typography>
        ) : (
          <LinkRouter underline="hover" color="inherit" to={to} key={to}>
            {breadcrumbNameMap[to]}
          </LinkRouter>
        );
      })}
    </Breadcrumbs>
  );
}

export default Breadcrumb;
