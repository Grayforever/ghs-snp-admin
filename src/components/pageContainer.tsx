import {
  Box,
  Stack,
  Typography,
  Toolbar,
  SwipeableDrawer,
  List,
  ListItemButton,
  ListItem,
  ListItemText,
  ListSubheader,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { ReactNode, useState, useEffect, useRef } from "react";
import Breadcrumb from "./breadCrumb";
import { useLocation, useNavigate } from "react-router-dom";
import { breadcrumbNameMap } from "../constants";
import SidePanel from "./sidePanel";
import AppBar from "./appBar";
import { motion } from "framer-motion";

const sidePanelVariants = {
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  visible: {
    width: 270,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const stackVariants = {
  hidden: {
    width: "calc(100% - 0px)",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  visible: {
    width: "calc(100% - 270px)",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const StyledPageContainer = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  display: "flex",
  flexGrow: 1,
  padding: `0px ${theme.spacing(2)}`,
}));

const PageContainer = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const componentRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number>(0);
  const pathnames = pathname.split("/").filter((x) => x);
  const name = breadcrumbNameMap[pathname];
  const isHome = pathname === "/";
  const [slide, setSlide] = useState<boolean>(false);
  const [sidePanelSlide, setSidePanelSlide] = useState<boolean>(true);

  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setSlide(open);
    };

  useEffect(() => {
    if (componentRef.current) {
      setHeight(componentRef.current.clientHeight);
    }
  }, []);

  const handleToggle = () => {
    setSidePanelSlide((prev) => !prev);
  };

  const handleNotificationClick = () => {
    navigate("/notifications");
  };

  return (
    <Box>
      <AppBar
        toggle={handleToggle}
        handleNotificationOpen={() => setSlide((prev) => !prev)}
      />
      <Toolbar ref={componentRef} />
      <StyledPageContainer>
        <motion.div
          initial="visible"
          animate={sidePanelSlide ? "visible" : "hidden"}
          variants={sidePanelVariants}
        >
          <SidePanel heighty={height} />
        </motion.div>
        <motion.div
          initial="hidden"
          animate={sidePanelSlide ? "visible" : "hidden"}
          variants={stackVariants}
        >
          <Stack
            flex={1}
            p={2}
            spacing={2}
            overflow={"hidden"}
            height={`calc(100vh - ${height}px)`}
          >
            {isHome ? null : (
              <>
                <Typography
                  fontWeight={"bold"}
                  variant={"h6"}
                  color={"primary"}
                  textTransform={"capitalize"}
                >
                  {name || "Dashboard"}
                </Typography>
                <Breadcrumb pathnames={pathnames} />
              </>
            )}
            <Box overflow={"auto"}>{children}</Box>
          </Stack>
        </motion.div>

        <SwipeableDrawer
          anchor={"right"}
          BackdropProps={{ invisible: true }}
          open={slide}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
          disableBackdropTransition={!iOS}
          disableDiscovery={iOS}
          elevation={0}
          sx={{
            "& .MuiDrawer-paper": {
              boxShadow: "0px 3px 6px #00000029",
              position: "absolute",
              top: height,
              width: 256,
            },
          }}
        >
          <List
            subheader={
              <ListSubheader component="div">
                <Typography color={"primary"}>Notifications</Typography>
              </ListSubheader>
            }
          >
            <ListItem disablePadding>
              <ListItemButton onClick={handleNotificationClick}>
                <ListItemText
                  primary="Notification Tittle"
                  secondary={"22-01-2023 : 12:00 PM"}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton onClick={handleNotificationClick}>
                <ListItemText
                  primary="Notification Tittle"
                  secondary={"22-01-2023 : 12:00 PM"}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton onClick={handleNotificationClick}>
                <ListItemText
                  primary="Notification Tittle"
                  secondary={"22-01-2023 : 12:00 PM"}
                />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton onClick={handleNotificationClick}>
                <ListItemText secondary={"View all notifications"} />
              </ListItemButton>
            </ListItem>
          </List>
        </SwipeableDrawer>
      </StyledPageContainer>
    </Box>
  );
};

export default PageContainer;
