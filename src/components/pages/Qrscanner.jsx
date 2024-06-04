import React, { useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import Layouts from "../ui/layouts";
import Scanner from "../ui/Scanner";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
function Qrscanner() {
  const [open, setOpen] = useState(false);
  const [sdata, setSdata] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Layouts>
      <Container maxWidth="lg" sx={{ mt: 10, mb: 8 }}>
        <Grid container spacing={2}>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Button onClick={handleOpen}>Open Scanner</Button>
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Scanner handleClose={handleClose} setSdata={setSdata} />
              </Box>
            </Modal>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <p>Scanned Result: </p>
              {/* Show Data Result if scan is success */}
              {sdata}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layouts>
  );
}

export default Qrscanner;
