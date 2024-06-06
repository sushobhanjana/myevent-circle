// import jwt_decode from "jwt-decode";
import http from "./httpServices";
import {
  setSessionStorage,
  removeSessionStorage,
  getSessionStorage
} from "../helpers/sessionStorage";

const _token = "token";

// http.setjwt(getjwt()) //Bi-directional dependency

async function login(user) {
  const data = await http.post("/SecurityGuard/SecurityGuardLogin", user);
  // localStorage.setItem(_token,jwt)
  setSessionStorage("user", data?.data?.list[0]);
  return data;
}

function logout() {
  //   localStorage.removeItem(_token);
  removeSessionStorage("user");
}

function getCurrentUser(){
    // try {
    //     const jwt = localStorage.getItem(_token);
    //     return jwt_decode(jwt)
    // }catch(ex){
    //     return null
    // }
    try {
        return getSessionStorage("user")
    }catch(ex){
        return null
    }
}

function loginWithJWT(jwt) {
  localStorage.setItem(_token, jwt);
}

function getToken() {
  const data = getSessionStorage("user")
  if(data?.tokenString){
    return data?.tokenString
  }
  return null
}

export default {
  login,
  logout,
  getCurrentUser,
  loginWithJWT,
  getToken
};
