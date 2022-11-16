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
}

export default TicketServices;
