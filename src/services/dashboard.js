// import jwt_decode from "jwt-decode";
import http from "./httpServices";
import auth from "./authServices";


async function getVisitorsDetails(parkId) {
  const _token = auth.getToken()
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
