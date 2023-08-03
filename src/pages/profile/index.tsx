import { Stack, Box, Paper, Avatar, Typography, Grid } from "@mui/material";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";

interface ProfileType {
  name: string;
  jobTitle: string;
  email: string;
  station: string;
  role: string;
  region: string;
  department: string;
}

const profile: ProfileType = {
  name: "Example Name",
  jobTitle: "Principal Nurse",
  email: "examplename@x.com",
  station: "Korle-Bu",
  role: "Admin",
  region: "Ashanti Region",
  department: "Biomedics",
};

const Profile = () => {
  return (
    <Stack direction={"row"} spacing={2}>
      <Box
        flex={0.3}
        sx={{
          background:
            "transparent linear-gradient(232deg, #FFFFFF 0%, #EDFCF5 78%, #EDFCF5 100%)",
        }}
        gap={2}
        display={"flex"}
        flexDirection={"column"}
        component={Paper}
        alignItems={"center"}
        px={2}
        py={6}
      >
        <Avatar sx={{ bgcolor: "white", width: 100, height: 100 }}>
          <PersonOutlinedIcon color="primary" fontSize="large" />
        </Avatar>
        <Typography>{profile.name}</Typography>
        <Typography variant="caption">{profile.jobTitle}</Typography>
      </Box>
      <Box
        flex={0.7}
        sx={{
          background:
            "transparent linear-gradient(232deg, #FFFFFF 0%, #EDFCF5 78%, #EDFCF5 100%)",
        }}
        gap={2}
        display={"flex"}
        flexDirection={"column"}
        component={Paper}
        alignItems={"center"}
        px={4}
        py={6}
      >
        <Grid container spacing={2}>
          {Object.keys(profile).map((label) => {
            return label === "name" || label === "jobTitle" ? null : (
              <Grid item md={6} key={label}>
                <Typography
                  variant="caption"
                  textTransform={"capitalize"}
                  color={"GrayText"}
                >
                  {label}
                </Typography>
                <Typography>{profile[label as keyof ProfileType]}</Typography>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Stack>
  );
};

export default Profile;
