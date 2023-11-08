import Base from "@axios/axiosPlugin";

class uploadServices {
  static async picSpace(formdata) {
    return Base.post("/user/update/pic/space", formdata)
      .then((response) => {
        console.log(
          "We are in the route /pic/venue and the response is :",
          response
        );
        return response;
      })
      .catch((e) => {
        console.log("error event img", e);
        return e;
      });
  }
}

export default uploadServices;
