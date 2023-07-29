import {
  Divider,
  Collapse,
  List,
  Box,
  Stack,
  Button,
  Typography,
  Paper,
} from "@mui/material";
import {
  AutoGraphRounded,
  RadioRounded,
  LocalLibraryRounded,
  PublicRounded,
  HomeRounded,
} from "@mui/icons-material";
import React, { useState, useEffect } from "react";
import ListItemLink from "./listItemLink";
import { useLocation } from "react-router-dom";

const SidePanel = ({ heighty }: { heighty: number }) => {
  const [listOpen, setListOpen] = useState(false);
  const [login, setLogin] = React.useState("1");
  const [regionalOpenOpen, setregionalOpenOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => {
    if (!pathname.includes("data-view")) {
      setListOpen(false);
    }
    if (!pathname.includes("regional")) {
      setregionalOpenOpen(false);
    }
  }, [pathname]);

  const handleClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setListOpen(!listOpen);
    setregionalOpenOpen(false);
  };

  const handleRegionalClick = (event: React.MouseEvent) => {
    event.preventDefault();
    setregionalOpenOpen(!regionalOpenOpen);
    setListOpen(false);
  };

  function handleLogout() {
    setLogin("0");
  }

  React.useEffect(() => {
    localStorage.setItem("isLoggedIn", login);
  }, [login]);

  return (
    <Stack
      flex={1}
      component={Paper}
      justifyContent={"space-between"}
      sx={{
        background:
          "transparent linear-gradient(203deg, #FFF 0%, #EDFCF5 78%, #FFF 100%)",
        maxWidth: 270,
        minWidth: 270,
        height: `calc(100vh - ${heighty + 40}px)`,
      }}
      p={2}
      my={2}
    >
      <List>
        <ListItemLink
          to="/"
          mb={2}
          startIcon={<HomeRounded color="primary" />}
        />
        <Divider />
      </List>
      <List sx={{ flex: 1 }}>
        <Box
          bgcolor={pathname.includes("data") ? "primary.light" : undefined}
          borderRadius={2}
          mt={2}
        >
          <ListItemLink
            to="/data-view"
            startIcon={<AutoGraphRounded color="primary" />}
            open={listOpen}
            onClick={handleClick}
          />
          <Collapse component="li" in={listOpen} timeout="auto" unmountOnExit>
            <List sx={{ paddingLeft: 2 }}>
              <ListItemLink to="/data-view/regional-indicator" />
              <ListItemLink to="/data-view/district-performance" />
            </List>
          </Collapse>
        </Box>

        <ListItemLink to="/blog" startIcon={<RadioRounded color="primary" />} />

        <ListItemLink
          to="/learn"
          startIcon={<LocalLibraryRounded color="primary" />}
        />
        <Box
          bgcolor={
            pathname.includes("regional") &&
            pathname !== "/data-view/regional-indicator"
              ? "primary.light"
              : undefined
          }
          borderRadius={2}
        >
          <ListItemLink
            to="/regional"
            startIcon={<PublicRounded color="primary" />}
            open={regionalOpenOpen}
            onClick={handleRegionalClick}
          />
          <Collapse
            component="li"
            in={regionalOpenOpen}
            timeout="auto"
            unmountOnExit
          >
            <List sx={{ paddingLeft: 2 }}>
              <ListItemLink to="/regional/reports" />
              <ListItemLink to="/regional/innovation-docs" />
            </List>
          </Collapse>
        </Box>
      </List>
      <Stack spacing={2}>
        <Divider />
        <Button variant="contained" onClick={handleLogout}>
          Log Out
        </Button>
        <Typography variant="caption" color={"primary"} textAlign={"center"}>
          © GHS - ADHD 2023
        </Typography>
      </Stack>
    </Stack>
  );
};
export default SidePanel;
