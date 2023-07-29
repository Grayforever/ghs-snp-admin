import { Box, Paper, Stack, Typography } from "@mui/material";

const Notifications = () => {
  return (
    <Box component={Paper} px={3} py={4}>
      <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"}mb={2}>
        <Typography fontWeight={"bold"}>Notification Title</Typography>
        <Typography variant="caption" color={"text.secondary"}>
          22-01-2023 : 12:00 PM
        </Typography>
      </Stack>
      <Typography variant="body2">
        The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax
        quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick quartz,
        vex nymphs. Waltz, bad nymph, for quick jigs vex! Fox nymphs grab
        quick-jived waltz.
      </Typography>
    </Box>
  );
};

export default Notifications;
