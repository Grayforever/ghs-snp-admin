import { Typography, Stack, Card, CardContent, Grid, Box } from "@mui/material";
import BubbleChart from "../../components/bubbleChart";
import ChartCard from "../../components/chartCard";
import DataCard from "./dataCard";

const Home = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={4}>
          <DataCard error title={"Number of Pregnant Adolescents Registered"} />
        </Grid>

        <Grid item md={4}>
          <DataCard title={"Number of Pregnant Adolescents Registered"} />
        </Grid>

        <Grid item md={4}>
          <DataCard error title={"Number of Pregnant Adolescents Registered"} />
        </Grid>
      </Grid>

      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={3}
        sx={{ minHeight: 400 }}
        my={5}
      >
        <Card
          component={Stack}
          flex={0.3}
          sx={{ borderRadius: 5, display: { xs: "none", md: "inherit" } }}
        >
          <CardContent>
            <Stack sx={{ alignItems: "flex-start" }}>
              <Typography fontWeight={"bold"}>
                Top Performing District
              </Typography>
              <Typography variant="caption">
                Results based on indicator
              </Typography>
            </Stack>
            <BubbleChart />
          </CardContent>
        </Card>
        <ChartCard
          hideBorder
          hideRecommendation
          title={"Number Of Pregnant Adolescents Registered"}
          subTitle={"Results based on Ages (10-19) Form A per region"}
        />
      </Stack>
    </Box>
  );
};

export default Home;
