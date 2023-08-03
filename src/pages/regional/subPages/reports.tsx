import AppDialog from "../../../components/appDialog";
import ControlBar from "../../../components/controlBar";
import EnhancedTable from "../../../components/enhancedTable";
import { Box, Grid, Button, TextField, MenuItem } from "@mui/material";
import { useCallback, useState, useRef } from "react";
import { fileSelect } from "../../../constants";
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
    dateUploaded: "12/06/2023",
    dateModified: "13/06/2023",
  },
  {
    onOff: true,
    title: "sed diam nonumy eirmo…2",
    dateUploaded: "12/06/2023",
    dateModified: "13/06/2023",
  },
  {
    onOff: false,
    title: "sed diam nonumy eirmo…3",
    dateUploaded: "12/06/2023",
    dateModified: "13/06/2023",
  },
  {
    onOff: false,
    title: "sed diam nonumy eirmo…4",
    dateUploaded: "12/06/2023",
    dateModified: "13/06/2023",
  },
  {
    onOff: true,
    title: "sed diam nonumy eirmo…5",
    dateUploaded: "12/06/2023",
    dateModified: "13/06/2023",
  },
];

const Reports = () => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [selectedMedia, setSelectedMedia] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("application/pdf");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleMediaPickerClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file && isAcceptedFileType(file)) {
      setSelectedMedia(file.name);
    }
  };

  const isAcceptedFileType = (file: File): boolean => {
    return selectedType.includes(file.type);
  };

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.value);
    setSelectedMedia("");
  };

  const handleClose = useCallback(() => {
    setOpenDialog(false);
  }, []);
  return (
    <Box>
      <ControlBar
        buttonLabel="Add Report"
        buttonClick={() => setOpenDialog(true)}
        selectorLabel="Date"
        selectorData={"date"}
      />
      <EnhancedTable data={data} />

      <AppDialog open={openDialog} title="Add Report" handleClose={handleClose}>
        <Grid container spacing={3} mb={3}>
          <Grid item md={8} mb={3}>
            <TextField label={"Report Title"} fullWidth />
          </Grid>

          <Grid item md={4}>
            <TextField
              label={"File Type"}
              fullWidth
              select
              onChange={handleOnChange}
              defaultValue={selectedType}
            >
              {fileSelect.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          <Grid item md={4}>
            <TextField
              label={"Upload Document"}
              fullWidth
              value={selectedMedia}
              onClick={handleMediaPickerClick}
              helperText="Click to upload document"
              InputProps={{
                readOnly: true,
              }}
            />
            <input
              aria-label="file input"
              className={classes.input}
              type="file"
              ref={fileInputRef}
              accept={selectedType}
              onChange={handleFileChange}
            />
          </Grid>

          <Grid item md={4}>
            <TextField
              label={"Date"}
              fullWidth
              type="date"
              InputLabelProps={{ shrink: true }}
            />
          </Grid>
        </Grid>
        <Button variant="contained">Save</Button>
      </AppDialog>
    </Box>
  );
};

export default Reports;
