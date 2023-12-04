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
  static async getSpace() {
    return Base.post(`/space/allSpaces`)
      .then((response) => {
        console.log("auth : allSpaces", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }
  // TODO Add a space
  static async createSpace(data) {
    return Base.post("/space/create", data)
      .then((response) => {
        console.log("createSpace: ", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }

  static async getSpaces() {
    Base.get("/space/allSpaces")
      .then((response) => {
        console.log("allSpaces: ", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }
}

export default SpaceServices;
