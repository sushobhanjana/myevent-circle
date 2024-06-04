import React from "react";
import { removeSessionStorage } from "../../helpers/sessionStorage";

function Logout({ setIsAuthenticated }) {
  removeSessionStorage('user')
  setIsAuthenticated(false);
  return null;
}

export default Logout;
