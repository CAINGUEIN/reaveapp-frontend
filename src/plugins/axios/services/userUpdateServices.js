import Base from "@axios/axiosPlugin";

class UserUpdateServices {
  static async imgAvatar(formdata) {
    return Base.post("/user/update/img/avatar", formdata)
      .then((response) => {
        console.log("avatar img", response);
        return response;
      })
      .catch((e) => {
        console.log("error avatar img", e);
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
        console.log("error banner img", e);
        return e;
      });
  }
  static async imgEvent(formdata) {
    return Base.post("/user/update/img/event", formdata)
      .then((response) => {
        console.log("We are in the route /img/event and the response is :", response);
        return response;
      })
      .catch((e) => {
        console.log("error event img", e);
        return e;
      });
  }

  static async imgItem(formdata) {
    return Base.post("/user/update/img/item", formdata)
      .then((response) => {
        console.log("item img", response);
        return response;
      })
      .catch((e) => {
        console.log("error item img", e);
        return e;
      });
  }
  static async imgProfileFriend(formdata) {
    return Base.post("/user/update/img/ProfileFriend", formdata)
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

  static async coinBalance(data) {
    let body = data
    return Base.post(`/user/update/coinBalance`, body)
    .then((response) => {
      console.log("user update Coin Balance", response);
      return response;
    })
    .catch((e) => {
      console.log("error ", e);
      return e;
    })
  }

  static async sendCoin(data) {
    let body = data
    return Base.post(`/user/update/sendCoin`, body)
    .then((response) => {
      console.log("user update send Coin", response);
      return response;
    })
    .catch((e) => {
      console.log("error ", e);
      return e;
    })
  }

  static async contactPro(data) {
    let body = data
    return Base.post(`/user/update/contactPro`, body)
    .then((response) => {
      console.log("user update contactPro", response);
      return response;
    })
    .catch((e) => {
      console.log("error ", e);
      return e;
    })
  }
}

export default UserUpdateServices;
