import Base from "@axios/axiosPlugin";

class SpaceServices {
  static async checkSpace() {
    return Base.post(`/space/checkSpace`)
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
