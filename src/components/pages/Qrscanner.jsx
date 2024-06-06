import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
  const [sdata, setSdata] = useState();
  const [sdataList, setSdatalist] = useState([]);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (sdata) {
      const modifiedData = { ...sdata, id: sdataList.length + 1 };
      // const updateList = [...sdataList,modifiedData]
      setSdatalist((prev) => [...prev, modifiedData]);
    }
  }, [sdata]);

  return (
    <Layouts>
      <Scanner handleClose={handleClose} setSdata={setSdata} />
    </Layouts>
  );
}

export default Qrscanner;
