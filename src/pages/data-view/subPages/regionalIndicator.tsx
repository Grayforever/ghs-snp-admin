import { Typography, Grid, Box, Button, TextField, Stack } from "@mui/material";
import ChartCard from "../../../components/chartCard";
import ControlBar from "../../../components/controlBar";
import AppDialog from "../../../components/appDialog";
import { useCallback, useState } from "react";
import { regions } from "../../../constants";

const RegionalIndicator = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    setOpenDialog(false);
  }, []);
  return (
    <Box flex={1}>
      <AppDialog
        open={openDialog}
        title="Add Indicator"
        handleClose={handleClose}
      >
        <Stack component={"form"} spacing={3}>
          <TextField
            label={"Indicator Name"}
            fullWidth
            sx={{ width: "70ch" }}
          />
          <Box>
            <Button variant="contained" type="submit">
              Save
            </Button>
          </Box>
        </Stack>
      </AppDialog>

      <ControlBar
        buttonLabel="Add Indicator"
        buttonClick={() => setOpenDialog(true)}
        selectorLabel="Select Region"
        selectorData={regions}
        secondarySelectorLabel="Year"
      />
      <Box display={"flex"} flexDirection={"column"} gap={3} overflow={"auto"}>
        <Typography fontWeight={"bold"} variant="h5">
          Greater Accra Region
        </Typography>

        <Grid container spacing={4}>
          <Grid item md={6}>
            <ChartCard
              error
              title={"Number of Pregnant Adolescents Enrolled To Safety Net"}
            />
          </Grid>
          <Grid item md={6}>
            <ChartCard title={"Number of Home Visits Done"} />
          </Grid>
          <Grid item md={6}>
            <ChartCard
              error
              title={"Number of Support Group Meetings Carried Out"}
            />
          </Grid>
          <Grid item md={6}>
            <ChartCard
              error
              title={"Number of Girls Attending Support Group Meetings"}
            />
          </Grid>
          <Grid item md={6}>
            <ChartCard error title={"Number Referred to GES"} />
          </Grid>
          <Grid item md={6}>
            <ChartCard title={"Number Educated on MCH Services"} />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default RegionalIndicator;
