import React, { useEffect, useState } from "react";
import Layouts from "../ui/layouts";
import Scanner from "../ui/Scanner";

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
