import {
  Slide,
  DialogContent,
  Typography,
  IconButton,
  Toolbar,
  AppBar,
  Dialog,
  SlideProps,
} from "@mui/material";
import React, { useCallback, forwardRef } from "react";
import { Close } from "@mui/icons-material";

const Transition = forwardRef<unknown, SlideProps>(function Transition(
  props,
  ref
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface AppDialogProps {
  open: boolean;
  handleClose: () => void;
  children: React.ReactNode;
  title: string;
}

const AppDialog: React.FC<AppDialogProps> = ({
  open,
  handleClose,
  children,
  title,
}) => {
  const handleCloseClick = useCallback(() => {
    handleClose();
  }, [handleClose]);

  return (
    <Dialog
      open={open}
      onClose={handleCloseClick}
      TransitionComponent={Transition}
      maxWidth={"lg"}
    >
      <AppBar
        sx={{ position: "relative", bgcolor: "white", color: "black" }}
        elevation={0}
      >
        <Toolbar>
          <Typography
            sx={{ ml: 2, flex: 1 }}
            variant="h6"
            component="div"
            fontWeight={"bold"}
          >
            {title}
          </Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleCloseClick}
            aria-label="close"
          >
            <Close />
          </IconButton>
        </Toolbar>
      </AppBar>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default AppDialog;
