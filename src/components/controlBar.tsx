import { Paper, Stack, Button, Box } from "@mui/material";
import CustomSelect from "./customSelect";

interface ControlBarProps {
  buttonLabel?: string;
  buttonClick: () => void;
  secondaryButtonLabel?: string;
  secButtonClick?: () => void;
  selectorLabel?: string;
  selectorData: string[] | string;
  secondarySelectorLabel?: string;
  tertiarySelectorLabel?: string;
}

const ControlBar = (props: ControlBarProps) => {
  const {
    buttonLabel,
    secondaryButtonLabel,
    selectorLabel,
    selectorData,
    secondarySelectorLabel,
    tertiarySelectorLabel,
    secButtonClick,
    buttonClick,
  } = props;

  const handleSelect = (item: string) => {
    console.log(`Selected item: ${item}`);
  };
  return (
    <Stack
      component={Paper}
      direction={"row"}
      justifyContent={"space-between"}
      minWidth={"100%"}
      px={4}
      py={2}
      mb={6}
      spacing={2}
      sx={{
        backgroundColor: "#F5FEFA",
      }}
    >
      {buttonLabel && secondaryButtonLabel ? (
        <Box display={"flex"} gap={2}>
          <Button onClick={buttonClick}>{buttonLabel}</Button>
          <Button onClick={secButtonClick}>{secondaryButtonLabel}</Button>
        </Box>
      ) : (
        <>
          {buttonLabel ? (
            <Button onClick={buttonClick}>{buttonLabel}</Button>
          ) : null}
        </>
      )}

      {selectorLabel && secondarySelectorLabel && tertiarySelectorLabel ? (
        <Box display={"flex"} gap={2}>
          <CustomSelect
            items={
              typeof selectorData === "string"
                ? selectorData
                : [selectorLabel, ...selectorData]
            }
            defaultValue={selectorLabel}
            onSelect={handleSelect}
          />
          <CustomSelect
            items={[secondarySelectorLabel, "2022"]}
            defaultValue={secondarySelectorLabel}
            onSelect={handleSelect}
          />
          <CustomSelect
            items={[tertiarySelectorLabel, "1-6", "12-18"]}
            defaultValue={tertiarySelectorLabel}
            onSelect={handleSelect}
          />
        </Box>
      ) : (
        <>
          {selectorLabel ? (
            <CustomSelect
              items={
                typeof selectorData === "string"
                  ? selectorData
                  : [selectorLabel, ...selectorData]
              }
              defaultValue={selectorLabel}
              onSelect={handleSelect}
            />
          ) : null}
        </>
      )}
    </Stack>
  );
};

export default ControlBar;
