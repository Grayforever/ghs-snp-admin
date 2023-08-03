import { Typography, Stack, Grid, Box, Button, TextField } from "@mui/material";
import ChartCard from "../../../components/chartCard";
import ControlBar from "../../../components/controlBar";
import AppDialog from "../../../components/appDialog";
import { useCallback, useState } from "react";
import { regions } from "../../../constants";

const DistrictPerformance = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openSecDialog, setOpenSecDialog] = useState<boolean>(false);

  const handleClose = useCallback(() => {
    setOpenDialog(false);
    setOpenSecDialog(false);
  }, []);
  return (
    <Box>
      <ControlBar
        buttonLabel="Add Performance"
        buttonClick={() => setOpenDialog(true)}
        secButtonClick={() => setOpenSecDialog(true)}
        secondaryButtonLabel="Add District"
        selectorLabel="Select District"
        selectorData={regions}
        secondarySelectorLabel="Year"
        tertiarySelectorLabel="Select age range"
      />
      <Stack direction={"row"} alignItems={"center"} mb={3} spacing={3}>
        <Typography fontWeight={"bold"} variant="h5">
          Ketu South
        </Typography>
        <Typography color={"text.secondary"} alignSelf={"end"}>
          Volta Region
        </Typography>
      </Stack>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <ChartCard
            error
            title={"Number of Pregnant Adolescents Enrolled To Safety Net"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartCard title={"Number of Home Visits Done"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartCard
            error
            title={"Number of Support Group Meetings Carried Out"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartCard
            error
            title={"Number of Girls Attending Support Group Meetings"}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartCard error title={"Number Referred to GES"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ChartCard title={"Number Educated on MCH Services"} />
        </Grid>
      </Grid>

      {/* Dialogs */}
      <AppDialog
        open={openDialog}
        title="Add Performance"
        handleClose={handleClose}
      >
        <Grid container mb={3} spacing={2}>
          <Grid item md={4}>
            <TextField label={"Select Indicator"} fullWidth />
          </Grid>
          <Grid item md={4}>
            <TextField
              label={"Date"}
              fullWidth
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
          <Grid item md={4}>
            <TextField label={"Add Figure"} fullWidth type={"number"} />
          </Grid>
        </Grid>
        <Button variant="contained">Save</Button>
      </AppDialog>
      <AppDialog
        open={openSecDialog}
        title="Add District"
        handleClose={handleClose}
      >
        <Grid container spacing={3} mb={3}>
          <Grid item md={6}>
            <TextField label={"Region"} fullWidth />
          </Grid>
          <Grid item md={6}>
            <TextField label={"District"} fullWidth />
          </Grid>
        </Grid>
        <Button variant="contained">Save</Button>
      </AppDialog>
    </Box>
  );
};

export default DistrictPerformance;
