import { Box, Paper, Theme } from "@mui/material";
import BannerBg from "../assets/images/banner_img.png";
import { ReactElement } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  headerStyle: {
    display: "flex",
    backgroundColor: "white",
    position: "absolute",
    [theme.breakpoints.up("md")]: {
      left: 32,
      right: 32,
      bottom: -50,
      padding: "0% 24%",
    },
    [theme.breakpoints.down("sm")]: {
      left: 20,
      right: 20,
      bottom: -50,
      padding: "0% 10px",
    },
    height: 100,
    alignItems: "center",
  },
  bannerStyle: {
    backgroundImage: `url(${BannerBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "contain",
    minHeight: 120,
    position: "relative",
  },
}));

export const Banner = ({
  children,
}: {
  children: ReactElement | undefined;
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.bannerStyle}>
      <Box component={Paper} className={classes.headerStyle}>
        {children}
      </Box>
    </Box>
  );
};

export default Banner;
