import AppDialog from "../../components/appDialog";
import ControlBar from "../../components/controlBar";
import EnhancedTable from "../../components/enhancedTable";
import { Box, Grid, Button, TextField } from "@mui/material";
import { useCallback, useState, useRef } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  input: {
    display: "none",
  },
}));

const data = [
  {
    onOff: true,
    title: "sed diam nonumy eirmo…",
    category: "Nutrition",
    dateUploaded: "12/06/2023",
    dateModified: "13/06/2023",
  },
  {
    onOff: true,
    title: "sed diam nonumy eirmo…2",
    category: "Nutrition",
    dateUploaded: "12/06/2023",
    dateModified: "13/06/2023",
  },
  {
    onOff: false,
    title: "sed diam nonumy eirmo…3",
    category: "Nutrition",
    dateUploaded: "12/06/2023",
    dateModified: "13/06/2023",
  },
  {
    onOff: false,
    title: "sed diam nonumy eirmo…4",
    category: "Nutrition",
    dateUploaded: "12/06/2023",
    dateModified: "13/06/2023",
  },
  {
    onOff: true,
    title: "sed diam nonumy eirmo…5",
    category: "Nutrition",
    dateUploaded: "12/06/2023",
    dateModified: "13/06/2023",
  },
];

const Blog = () => {
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
        buttonLabel="Add Blog"
        buttonClick={() => setOpenDialog(true)}
        selectorLabel="Date"
        selectorData={"date"}
      />
      <EnhancedTable data={data} />

      <AppDialog open={openDialog} title="Add Blog" handleClose={handleClose}>
        <Grid container spacing={3} mb={3}>
          <Grid item md={2} mb={3}>
            <TextField label={"Blog Category"} fullWidth />
          </Grid>

          <Grid item md={3}>
            <TextField label={"Blog Title"} fullWidth />
          </Grid>

          <Grid item md={3}>
            <TextField label={"Blog Author"} fullWidth />
          </Grid>

          <Grid item md={2}>
            <TextField
              label={"Cover Image"}
              fullWidth
              value={selectedMedia}
              onClick={handleMediaPickerClick}
              helperText="Click to upload image"
              InputProps={{
                readOnly: true,
              }}
            />
            <input
              type="file"
              aria-label="file input"
              className={classes.input}
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
        <Button variant="contained">Save</Button>
      </AppDialog>
    </Box>
  );
};

export default Blog;
