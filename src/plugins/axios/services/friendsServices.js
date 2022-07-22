import Base from "@axios/axiosPlugin";

class FriendsServices {
  static async create(data) {
    let body = data
    return Base.post(`/space/create`, body)
    .then((response) => {
      console.log("space friends create", response);
      return response.data;
    })
    .catch((e) => {
      console.log("error ", e);
      return e;
    })
  }
  static async allRooms(data) {
    let body = data
    return Base.post(`/space/allRooms`, body)
    .then((response) => {
      console.log("space friends allRooms", response);
      return response.data;
    })
    .catch((e) => {
      console.log("error ", e);
      return e;
    })
  }
}

export default FriendsServices;