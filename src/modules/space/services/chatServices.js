import Base from "/src/plugins/axios/axiosPlugin";

class ChatServices {
  static async addCategory(data) {
    let body = data;
    return Base.post(`/space/addCategory`, body)
      .then((response) => {
        console.log("space addCategory", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }
  static async addRoom(data) {
    let body = data;
    return Base.post(`/space/addRoom`, body)
      .then((response) => {
        console.log("space addRoom", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }
}

export default ChatServices;
