import * as React from "react";
import { useNavigate } from "react-router-dom";
import Layouts from "../ui/layouts";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function Dashboard() {
  const navigate = useNavigate();
  return (
    <Layouts>
      <div className="w-full bg-white py-6 px-4 absolute top-20 ">
          <h1 className="text-lg font-semibold"><FontAwesomeIcon icon={faLocationDot} /> ITPB(Bengaluru),Bengalore</h1>
      </div>
      <div className="flex items-center justify-between bg-white w-full absolute top-40">
        <p className="p-4">Today, 05 Jun 2024</p>
        <button className="text-blue-500 hover:text-blue-700 p-2">Refresh</button>
      </div>
        <main className="w-full max-w-md grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center justify-center bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">Expected Visitors</p>
            <p className="text-2xl font-semibold">0</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">Checked In</p>
            <p className="text-2xl font-semibold">0</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">Visitors in the premises</p>
            <p className="text-2xl font-semibold">0</p>
          </div>
          <div className="flex flex-col items-center justify-center bg-white p-4 rounded shadow">
            <p className="text-sm text-gray-500">Checked Out</p>
            <p className="text-2xl font-semibold">0</p>
          </div>
        </main>
    </Layouts>
  );
  // return (
  //   <Layouts>
  //     <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
  //       <Grid container spacing={3}>
  //         {/* Chart */}
  //         <Grid item xs={12} md={8} lg={9}>
  //           <Paper
  //             sx={{
  //               p: 2,
  //               display: "flex",
  //               flexDirection: "column",
  //               height: 240,
  //             }}
  //           >
  //             {/* <Chart /> */}
  //           </Paper>
  //         </Grid>
  //         {/* Recent Deposits */}
  //         <Grid item xs={12} md={4} lg={3}>
  //           <Paper
  //             sx={{
  //               p: 2,
  //               display: "flex",
  //               flexDirection: "column",
  //               height: 240,
  //             }}
  //           >
  //             {/* <Deposits /> */}
  //           </Paper>
  //         </Grid>
  //         {/* Recent Orders */}
  //         <Grid item xs={12}>
  //           <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
  //             {/* <Orders /> */}
  //           </Paper>
  //         </Grid>
  //       </Grid>
  //       {/* <Copyright sx={{ pt: 4 }} /> */}
  //     </Container>
  //   </Layouts>
  // );
}
