import Base from "/src/plugins/axios/axiosPlugin";

class ChatServices {
  static async addCategory(data) {
    let body = data;
    return Base.put(`/space/addCategory`, body)
      .then((response) => {
        console.log("space addCategory", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }
  static async deleteCategory(data) {
    let body = data;
    return Base.post(`/space/deleteCategory`, body)
      .then((response) => {
        console.log("space deleteCategory", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }
  static async addRoom(data) {
    let body = data;
    return Base.put(`/space/addRoom`, body)
      .then((response) => {
        console.log("space addRoom", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }
  static async deleteRoom(data) {
    let body = data;
    return Base.post(`/space/deleteRoom`, body)
      .then((response) => {
        console.log("space deleteRoom", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }
}

export default ChatServices;
