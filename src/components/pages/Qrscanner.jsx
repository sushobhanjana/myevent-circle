import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";
import Layouts from "../ui/layouts";
import Scanner from "../ui/Scanner";
import { getSessionStorage, setSessionStorage } from "../../helpers/sessionStorage";

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
  const [sdataList,setSdatalist] = useState( (getSessionStorage("scannedData") && JSON.parse(getSessionStorage("scannedData"))) || []);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const columns = [
    { field: 'id', headerName: 'ID', width: 80 },
    { field: 'data', headerName: 'Item', width: 300 },
  ];
  
  const rows = sdataList

  // console.log("scannedData",getSessionStorage("scannedData"));
  console.log("sdataList",sdataList);

  useEffect(()=>{
    if(sdata){
      const modifiedData = {...sdata,id:sdataList.length + 1}
      // const updateList = [...sdataList,modifiedData]
      setSdatalist(prev => [...prev,modifiedData])
      setSessionStorage("scannedData",JSON.stringify(sdataList))
    }
  },[sdata])

  return (
    <Layouts>
      <Container maxWidth="lg" sx={{ mt: 10, mb: 8 }}>
        <Grid container spacing={2}>
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Button onClick={handleOpen}>Open Scanner</Button>
            <Modal
              open={open}
              // onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Button onClick={handleClose}>Close</Button>
                <Scanner handleClose={handleClose} setSdata={setSdata} />
              </Box>
            </Modal>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              {/* Show Data Result if scan is success */}
              {/* {sdata} */}
              {/* {
              sdataList.length > 0 && (<ul>
                    {sdataList.map((item,index)=><li key={index}>{item?.data}</li> )}
                </ul> )
              } */}
              <div style={{ height: 400, width: "100%" }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 5 },
                    },
                  }}
                  pageSizeOptions={[5, 10]}
                  checkboxSelection
                />
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Layouts>
  );
}

export default Qrscanner;
