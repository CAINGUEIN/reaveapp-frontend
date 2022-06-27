import Base from "/src/plugins/axios/axiosPlugin";

class UsersServices {
  static async usersList(filter) {
    let params = ""
    if (filter !== undefined) {
      params = filter
    }
    console.log("users service called");
    // req
    return Base.get(`/user`,{params})
    .then((response) => {
      console.log("service : usersList : res ", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }

  static async deleteUser() {
    console.log("delete users service called");
    // req
    return Base.delete(`/user/delete`)
    .then((response) => {
      console.log("service : deleteUser : res ", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }

  static async checkToken() {
    return Base.get(`/user/checkToken`)
    .then((response) => {
      console.log("auth : checkToken", response);
      return response;
    })
    .catch((e) => {
      console.log("error ", e);
      return e;
    })
  }

  static async addFriend(data) {
    let body = data
    return Base.post(`/user/friend/add`, body)
    .then((response) => {
      console.log("user friend add", response);
      return response;
    })
    .catch((e) => {
      console.log("error ", e);
      return e;
    })
  }

  static async validateFriend(data) {
    let body = data
    return Base.post(`/user/friend/validate`, body)
    .then((response) => {
      console.log("user friend add", response);
      return response;
    })
    .catch((e) => {
      console.log("error ", e);
      return e;
    })
  }

  static async declineFriend(data) {
    let body = data
    return Base.post(`/user/friend/decline`, body)
    .then((response) => {
      console.log("user friend add", response);
      return response;
    })
    .catch((e) => {
      console.log("error ", e);
      return e;
    })
  }

  static async banUser(data) {
    let body = data
    return Base.post(`/user/ban`, body)
    .then((response) => {
      console.log("user friend add", response);
      return response;
    })
    .catch((e) => {
      console.log("error ", e);
      return e;
    })
  }
}

export default UsersServices;