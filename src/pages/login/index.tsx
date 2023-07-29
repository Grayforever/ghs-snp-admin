import {
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Box,
} from "@mui/material";
import React from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Login = () => {
  const [login, setLogin] = React.useState("0");

  function handleSubmit() {
    setLogin("1");
  }

  React.useEffect(() => {
    localStorage.setItem("isLoggedIn", login);
  }, [login]);
  return (
    <Box
      bgcolor={"primary.light"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      minHeight={window.innerHeight}
    >
      <Card sx={{ maxWidth: 500 }}>
        <CardContent>
          <Stack
            component={"form"}
            spacing={4}
            px={5}
            py={8}
            onSubmit={handleSubmit}
          >
            <Typography variant="h5" fontWeight={"bold"}>
              Login
            </Typography>
            <Typography color={"text.secondary"}>
              Login with the credentials sent to your email by the
              administrator.
            </Typography>
            <TextField
              variant="standard"
              fullWidth
              InputProps={{
                startAdornment: <PersonOutlinedIcon color="disabled" />,
              }}
              placeholder={"Email"}
              type="email"
            />
            <TextField
              variant="standard"
              fullWidth
              InputProps={{
                startAdornment: <LockOutlinedIcon color="disabled" />,
              }}
              placeholder={"Password"}
              type="password"
            />
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Remember me"
                color="primary"
              />
              <Button color="secondary">Forgot Password</Button>
            </Stack>
            <Button variant="contained" type="submit">
              Login
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default Login;
