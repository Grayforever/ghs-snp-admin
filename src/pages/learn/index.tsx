import { makeStyles } from "@mui/styles";
import AppDialog from "../../components/appDialog";
import ControlBar from "../../components/controlBar";
import EnhancedTable from "../../components/enhancedTable";
import { Box, Grid, Button, TextField } from "@mui/material";
import { useCallback, useState, useRef } from "react";

const useStyles = makeStyles(() => ({
  input: {
    display: "none",
  },
}));

const data = [
  {
    onOff: true,
    image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "sed diam nonumy eirmo…",
    topic: "Nutrition",
    dateUploaded: "12/06/2023",
    dateModified: "13/06/2023",
  },
  {
    onOff: true,
    image: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "sed diam nonumy eirmo…2",
    topic: "Nutrition",
    dateUploaded: "12/06/2023",
    dateModified: "13/06/2023",
  },
  {
    onOff: false,
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "sed diam nonumy eirmo…3",
    topic: "Nutrition",
    dateUploaded: "12/06/2023",
    dateModified: "13/06/2023",
  },
  {
    onOff: false,
    image: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "sed diam nonumy eirmo…4",
    topic: "Nutrition",
    dateUploaded: "12/06/2023",
    dateModified: "13/06/2023",
  },
  {
    onOff: true,
    image: "",
    title: "sed diam nonumy eirmo…5",
    topic: "Nutrition",
    dateUploaded: "12/06/2023",
    dateModified: "13/06/2023",
  },
];

const Learn = () => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedMedia, setSelectedMedia] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleMediaPickerClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedMedia(file.name);
    }
  };

  const handleClose = useCallback(() => {
    setOpenDialog(false);
  }, []);
  return (
    <Box>
      <ControlBar
        buttonLabel="Add Material"
        buttonClick={() => setOpenDialog(true)}
        selectorLabel="Date"
      />
      <EnhancedTable data={data} />

      <AppDialog
        open={openDialog}
        title="Add Material"
        handleClose={handleClose}
      >
        <Grid container>
          <Grid container spacing={3} mb={3}>
            <Grid item md={2} mb={3}>
              <TextField label={"Lern Topic"} fullWidth />
            </Grid>

            <Grid item md={3}>
              <TextField label={"Material Title"} fullWidth />
            </Grid>

            <Grid item md={3}>
              <TextField label={"Material Author"} fullWidth />
            </Grid>

            <Grid item md={2}>
              <TextField
                label={"Cover Image"}
                fullWidth
                value={selectedMedia}
                helperText="Click to upload image"
                onClick={handleMediaPickerClick}
                InputProps={{
                  readOnly: true,
                }}
              />
              <input
                aria-label="file input"
                className={classes.input}
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleFileChange}
              />
            </Grid>
            <Grid item md={2}>
              <TextField
                label={"Date"}
                fullWidth
                type="date"
                InputLabelProps={{ shrink: true }}
              />
            </Grid>
            <Grid item md={12}>
              <TextField
                label={"Content"}
                placeholder={"Content goes here"}
                fullWidth
                multiline
                rows={8}
              />
            </Grid>
          </Grid>
        </Grid>
        <Button variant="contained">Save</Button>
      </AppDialog>
    </Box>
  );
};

export default Learn;
