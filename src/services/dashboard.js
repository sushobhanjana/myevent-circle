// import jwt_decode from "jwt-decode";
import http from "./httpServices";
import {
  setSessionStorage,
  removeSessionStorage,
  getSessionStorage,
} from "../helpers/sessionStorage";
import auth from "./authServices";

const _token = auth.getToken()

async function getVisitorsDetails(parkId) {
  const data = await http.get(
    `/SecurityGuard/SecurityGuard/GetVisitorsCountDetails?parkid=${parkId}`,{
        headers: {
          Authorization: `Bearer ${_token}`
        }
      }
  );
  return data;
}

export default {
  getVisitorsDetails,
};
