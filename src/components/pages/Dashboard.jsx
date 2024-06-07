import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layouts from "../ui/layouts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard,faArrowRight,faBuilding } from "@fortawesome/free-solid-svg-icons";
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
  const { parkId } = auth.getCurrentUser();

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
          setexpectedVisitors(data?.data?.expectedVisitors || 0)
          setCheckedIn(data?.data?.checkedIn || 0)
          setCheckedOut(data?.data?.checkedOut || 0)
          setRemainingInPremise(data?.data?.remainingInPremise || 0)
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  return (
    <Layouts>
      <div className="flex flex-col items-center justify-center md:w-[80%] md:mx-auto">
        <div className="flex items-center justify-between bg-white w-full m-2">
          <p className="p-4 text-lg font-semibold">{currentDate()}</p>
          <button className="text-blue-500 hover:text-blue-700 p-2 text-lg font-semibold">
            Refresh
          </button>
        </div>
      </div>
      <div className="min-h-80 flex flex-col md:w-[30%] sm:w-[70%] md:mx-auto sm:mx-auto bg-gray-100 rounded-md">
          <div className="flex justify-between p-4 m-2">
            <p className="text-xl font-semibold text-zinc-600">Expected visitors</p>
            <span className="text-3xl font-semibold">{expectedVisitors}</span>
          </div>
          <div className="min-h-80 grid bg-white m-2 rounded-lg shadow">
            <div className="flex justify-between shadow">
              <p className="text-xl font-semibold p-4 text-zinc-600">Checked in</p>
              <span className="p-4 text-3xl font-semibold">{checkedIn}</span>
            </div>
            <div className="w-full flex justify-around mt-10">
              <div className="flex flex-col items-start gap-4 text-5xl">
              <FontAwesomeIcon icon={faAddressCard} className="text-4xl" />
                <p className="text-lg font-semibold text-2xl">Checked Out</p>
                <div className="w-full flex items-center justify-between">
                  <span className="font-semibold text-5xl">{checkedOut}</span>
                  <a href="" className="font-semibold text-xl"><FontAwesomeIcon icon={faArrowRight} className="text-blue-700" /></a>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4">
              <FontAwesomeIcon icon={faBuilding} className="text-4xl" />
                <p className="text-lg font-semibold text-2xl">Visitors in the primises</p>
                <div className="w-full flex items-center justify-between">
                  <span className="font-semibold text-5xl">{remainingInPremise}</span>
                  <a href="" className="font-semibold text-xl"><FontAwesomeIcon icon={faArrowRight} className="text-blue-700" /></a>
                </div>
              </div>
            </div>
          </div>
      </div>
    </Layouts>
  );
}
