import {
  Box,
  IconButton,
  InputBase,
  Stack,
  Toolbar,
  AppBar as MuiAppBar,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import NotificationsIcon from "@mui/icons-material/NotificationsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Logo from "../assets/ghs_logo.png";
import { useNavigate } from "react-router-dom";
import Hamburger from "../assets/icons/hamburger";
import Image from "./image";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.primary.main,
  border: `1px solid ${theme.palette.primary.main}`,
  marginRight: theme.spacing(2),
  marginLeft: 0,
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "50ch",
  },
}));

const AppBar = ({
  toggle,
  handleNotificationOpen,
}: {
  toggle: () => void;
  handleNotificationOpen: () => void;
}) => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar
        position="fixed"
        sx={{ backgroundColor: "white" }}
        elevation={0}
      >
        <Toolbar
          component={Stack}
          direction={"row"}
          justifyContent={"space-between"}
        >
          <Box
            display={"flex"}
            flexDirection={"row"}
            alignItems={"center"}
            gap={2}
          >
            <Image src={Logo} height={32} />
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggle}
            >
              <Hamburger />
            </IconButton>
          </Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search here"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          <Box>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleNotificationOpen}
            >
              <Badge color="error" variant="dot">
                <NotificationsIcon color="primary" />
              </Badge>
            </IconButton>

            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
              onClick={handleProfileClick}
            >
              <Badge color="error">
                <PersonOutlinedIcon color="primary" />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};

export default AppBar;
