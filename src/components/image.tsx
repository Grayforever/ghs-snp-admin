import { Box, BoxProps } from "@mui/material";

type ImageProps = {
  noFlex?: boolean;
} & BoxProps<"img">;

const Image = ({ noFlex, ...rest }: ImageProps) => (
  <Box component="img" flex={noFlex ? 0 : 1} {...rest} />
);

export default Image;
