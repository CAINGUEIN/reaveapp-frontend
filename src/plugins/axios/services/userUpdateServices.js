import Base from "@axios/axiosPlugin";

class UserUpdateServices {
  static async imgAvatar(formdata) {
    return Base.post("/user/update/img/avatar", formdata)
      .then((response) => {
        console.log("version", response);
        return response;
      })
      .catch((e) => {
        console.log("error version", e);
        return e;
      });
  }
}

export default UserUpdateServices;
