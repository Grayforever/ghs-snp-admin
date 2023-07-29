import ArrowBack from "@mui/icons-material/ArrowBack";
import { Button, Stack, Typography } from "@mui/material";
import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

const DetailsPageHoc = ({
  primaryText,
  secondaryText,
  children,
  applyDefaultSpacing,
}: {
  primaryText?: string;
  secondaryText?: string;
  children: ReactNode;
  applyDefaultSpacing?: boolean;
}) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(-1);
  }
  return (
    <Stack py={24} px={{ xs: 2, md: 4 }} spacing={applyDefaultSpacing ? 1 : 0}>
      <Stack
        direction={{ xs: secondaryText ? "column" : "row", md: "row" }}
        justifyContent={"space-between"}
        alignItems={{
          xs: secondaryText ? "flex-start" : "center",
          md: "center",
        }}
        mb={3}
      >
        <Button
          color="secondary"
          onClick={handleClick}
          startIcon={<ArrowBack />}
          sx={{ fontSize: 12 }}
        >
          Back
        </Button>
        <Stack
          direction={{ xs: secondaryText ? "column" : "row", md: "row" }}
          spacing={2}
          alignItems={{
            xs: secondaryText ? "flex-start" : "center",
            md: "center",
          }}
        >
          <Typography variant="caption" color={"primary"}>
            {primaryText ?? primaryText}
          </Typography>
          <Typography variant="caption" color={"text.secondary"}>
            {secondaryText ?? secondaryText}
          </Typography>
        </Stack>
      </Stack>
      {children}
    </Stack>
  );
};
export default DetailsPageHoc;
