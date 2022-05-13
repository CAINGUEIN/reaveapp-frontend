import Base from "/src/plugins/axios/axiosPlugin";

class SpaceServices {
  static async checkSpace(id) {
    let body = { _id: id.id };
    return Base.post(`/space/checkSpace`, body)
      .then((response) => {
        console.log("auth : checkSpace", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }
}

export default SpaceServices;
