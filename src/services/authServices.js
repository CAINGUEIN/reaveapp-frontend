import Base from "../plugins/axios/axiosPlugin.js";

class AuthServices {
  static async login(data) {
    let body = data
    return Base.post(`/auth/login`, body)
    .then((response) => {
      console.log("auth : login", response);
      return response;
    })
    .catch((e) => {
      console.log("error ", e);
      return e;
    })
  }

  static async register(data) {
    let body = data
    return Base.post(`/auth/register`, body)
    .then((response) => {
      console.log("auth : register", response);
      return response;
    })
    .catch((e) => {
      console.log("error ", e);
      return e;
    })
  }
    
  static async logout() {
    return Base.post(`/auth/logout`)
    .then((response) => {
      console.log("auth : logout", response);
      return response;
    })
    .catch((e) => {
      console.log("error ", e);
      return e;
    })
  }
}

export default AuthServices;