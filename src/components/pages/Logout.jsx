import auth from "../../services/authServices";
function Logout({ setIsAuthenticated }) {
  auth.logout();
  setIsAuthenticated(false);
  return null;
}

export default Logout;
