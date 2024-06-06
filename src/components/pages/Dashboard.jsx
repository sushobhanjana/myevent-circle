import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layouts from "../ui/layouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import auth from "../../services/authServices";
import dashboard from "../../services/dashboard";
import moment from "moment";

export default function Dashboard() {
  const navigate = useNavigate();
  const currentDate = () => {
    const today = moment();
    const formattedDate = today.format("DD MMM YYYY");
    return `Today, ${formattedDate}`;
  };
  const { parkName, cityName, parkId } = auth.getCurrentUser();
  // const [expected]

  const [expectedVisitors, setexpectedVisitors] = useState(0);
  const [checkedIn, setCheckedIn] = useState(0);
  const [checkedOut, setCheckedOut] = useState(0);
  const [remainingInPremise, setRemainingInPremise] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await dashboard.getVisitorsDetails(parkId);
        if (data.isValid) {
          console.log(data);
          setexpectedVisitors(data?.data?.expectedVisitors)
          setCheckedIn(data?.data?.checkedIn)
          setCheckedOut(data?.data?.checkedOut)
          setRemainingInPremise(data?.data?.remainingInPremise)
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <Layouts>
      <div className="w-full bg-white py-6 px-4 absolute top-20 ">
        <h1 className="text-lg font-semibold">
          <FontAwesomeIcon icon={faLocationDot} /> {parkName},{cityName}
        </h1>
      </div>
      <div className="flex items-center justify-between bg-white w-full absolute top-40">
        <p className="p-4">{currentDate()}</p>
        <button className="text-blue-500 hover:text-blue-700 p-2">
          Refresh
        </button>
      </div>
      <main className="w-full max-w-md grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center justify-center bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Expected Visitors</p>
          <p className="text-2xl font-semibold">{expectedVisitors}</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Checked In</p>
          <p className="text-2xl font-semibold">{checkedIn}</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Visitors in the premises</p>
          <p className="text-2xl font-semibold">{remainingInPremise}</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-white p-4 rounded shadow">
          <p className="text-sm text-gray-500">Checked Out</p>
          <p className="text-2xl font-semibold">{checkedOut}</p>
        </div>
      </main>
    </Layouts>
  );
}
