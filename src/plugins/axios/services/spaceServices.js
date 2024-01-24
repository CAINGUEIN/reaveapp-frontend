import Base from "@axios/axiosPlugin";
const route = "/space";
class SpaceServices {
  static async checkSpace() {
    return Base.post(`${route}/checkSpace`)
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
    return Base.post(`${route}/allSpaces`)
      .then((response) => {
        console.log("auth : allSpaces", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }
  static async getSpaceById(id) {
    return Base.post(`${route}/spaceById`, { id: id })
      .then((response) => {
        console.log("auth : spaceById", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }
  static async createSpace(data) {
    return Base.post(`${route}/create`, data)
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
    Base.get(`${route}/allSpaces`)
      .then((response) => {
        console.log("allSpaces: ", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }

  static async deleteSpace(id) {
    return Base.post(`${route}/delete`, { id: id })
      .then((response) => {
        return response;
      })
      .catch((e) => {
        console.log("error ", e.data);
        return e.data;
      });
  }
}

export default SpaceServices;
