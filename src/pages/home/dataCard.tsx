import { Card, CardContent, Stack, Typography, Box } from "@mui/material";
import {
  ArrowUpwardOutlined,
  ArrowDownwardOutlined,
} from "@mui/icons-material";

type ChartCardTypes = {
  flex?: number;
  error?: boolean;
  title?: string;
  subTitle?: string;
};

const DataCard = (props: ChartCardTypes) => {
  return (
    <Card
      component={Stack}
      sx={{
        background:
          "transparent linear-gradient(252deg, #FFFFFF 0%, #EDFCF5 78%, #FFFFFF 100%)",
        boxShadow: "0px 3px 6px #00000008",
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
          <Box color={"text.secondary"}>
            <Typography
              fontWeight={"bold"}
              sx={{ fontSize: { xs: 12, md: 16 } }}
            >
              {props.title}
            </Typography>
            <Typography variant="caption">{props.subTitle}</Typography>
          </Box>
        </Stack>

        <Stack direction={"row"} spacing={2}>
          <Typography fontWeight={"bold"} variant="h3" color={"primary"}>
            132
          </Typography>
          <Box color={"text.secondary"}>
            <Typography
              fontWeight={"bold"}
              color={props.error ? "error" : "text.secondary"}
              component={Stack}
              direction={"row"}
            >
              -23%
              {props.error ? (
                <ArrowDownwardOutlined fontSize="small" />
              ) : (
                <ArrowUpwardOutlined fontSize="small" />
              )}
            </Typography>
            <Typography variant="caption">
              Based on previous month's performance
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default DataCard;
