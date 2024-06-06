import React from "react";
import Layouts from "../ui/layouts";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <Layouts>
      <h2>Profile</h2>
      <Link to="/logout" className="text-gray-700 hover:text-red-500" >Logout</Link>
    </Layouts>
  );
}

export default Profile;
