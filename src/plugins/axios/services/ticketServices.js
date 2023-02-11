import Base from "@axios/axiosPlugin";

class TicketServices {
  static async info(body) {
    return Base.post("ticket/info", body)
      .then((response) => {
        console.log("ticket info", response);
        return response;
      })
      .catch((e) => {
        console.log("error ticket info", e);
        return e;
      });
  }
  static async buy(body) {
    return Base.post("ticket/buy", body)
      .then((response) => {
        console.log("ticket buy", response);
        return response;
      })
      .catch((e) => {
        console.log("error ticket buy", e);
        return e;
      });
  }
}

export default TicketServices;
