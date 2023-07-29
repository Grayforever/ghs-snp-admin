import { Card, CardContent, Stack, Typography, Box, Chip } from "@mui/material";
import {
  InfoOutlined,
  ArrowUpwardOutlined,
  ArrowDownwardOutlined,
} from "@mui/icons-material";
import Chart from "./chart";

type ChartCardTypes = {
  hideBorder?: boolean;
  flex?: number;
  hideRecommendation?: boolean;
  error?: boolean;
  title?: string;
  subTitle?: string;
};

const ChartCard = (props: ChartCardTypes) => {
  return (
    <Card
      component={Stack}
      elevation={props.hideBorder ? 1 : 0}
      flex={props.flex ?? 0.7}
      sx={{
        backgroundColor: props.hideBorder ? "white" : "transparent",
        borderRadius: 5,
        border: props.hideBorder ? "none" : "1px solid #707070",
      }}
    >
      <CardContent
        sx={{ textAlign: "start" }}
        component={Stack}
        spacing={{ xs: 2, md: 4 }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          spacing={{ xs: 1, md: 2 }}
        >
          <Box color={props.hideBorder ? "text.secondary" : undefined}>
            <Typography
              fontWeight={"bold"}
              sx={{ fontSize: { xs: 12, md: 16 } }}
            >
              {props.title}
            </Typography>
            <Typography variant="caption">{props.subTitle}</Typography>
          </Box>

          {props.hideRecommendation ? null : (
            <Chip
              color={props.error ? "error" : "primary"}
              label={"Recommendations"}
              sx={{ borderRadius: 2 }}
              icon={<InfoOutlined />}
              size={"small"}
            />
          )}
        </Stack>

        <Stack
          direction={"row"}
          spacing={2}
          sx={{ display: props.hideBorder ? "none" : "flex" }}
        >
          <Typography fontWeight={"bold"} variant="h3">
            100
          </Typography>
          <Box color={"text.secondary"}>
            <Typography
              fontWeight={"bold"}
              color={props.error ? "error" : "primary"}
              component={Stack}
              direction={"row"}
            >
              -23%
              {props.error ? (
                <ArrowDownwardOutlined />
              ) : (
                <ArrowUpwardOutlined />
              )}
            </Typography>
            <Typography variant="caption">
              Based on previous month's performance
            </Typography>
          </Box>
        </Stack>

        <Chart />
      </CardContent>
    </Card>
  );
};

export default ChartCard;
