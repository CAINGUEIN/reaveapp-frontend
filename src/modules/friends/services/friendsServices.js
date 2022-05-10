import Base from "../../../plugins/axios/axiosPlugin";

class FriendsServices {
  static async create(data) {
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
}

export default FriendsServices;