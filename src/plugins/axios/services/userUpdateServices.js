import Base from "@axios/axiosPlugin";

class UserUpdateServices {
  static async imgAvatar(formdata) {
    return Base.post("/user/update/img/avatar", formdata)
      .then((response) => {
        console.log("avatar img", response);
        return response;
      })
      .catch((e) => {
        console.log("error version", e);
        return e;
      });
  }
  static async imgBanner(formdata) {
    return Base.post("/user/update/img/banner", formdata)
      .then((response) => {
        console.log("banner img", response);
        return response;
      })
      .catch((e) => {
        console.log("error version", e);
        return e;
      });
  }
  static async identity(data) {
    let body = data
    return Base.post(`/user/update/identity`, body)
    .then((response) => {
      console.log("user update identity", response);
      return response;
    })
    .catch((e) => {
      console.log("error ", e);
      return e;
    })
  }

  static async description(data) {
    let body = data
    return Base.post(`/user/update/description`, body)
    .then((response) => {
      console.log("user update description", response);
      return response;
    })
    .catch((e) => {
      console.log("error ", e);
      return e;
    })
  }
}

export default UserUpdateServices;
