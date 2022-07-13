import Base from "../axiosPlugin";

class StoreDataServices {
  static async version() {
    return Base.get("version/last")
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

export default StoreDataServices;
