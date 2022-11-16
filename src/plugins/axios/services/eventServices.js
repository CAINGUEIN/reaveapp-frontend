import Base from "@axios/axiosPlugin";

class EventServices {
  static async createEvent(data) {
    let body = data;
    return Base.post(`/event/create`, body)
      .then((response) => {
        console.log("event create", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }

  static async listEvent(body) {
    return Base.post(`/event/list`, body)
      .then((response) => {
        console.log("event list", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }

  static async buyEvent(body) {
    return Base.post(`/event/buy`, body)
      .then((response) => {
        console.log("event buy", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }

  static async searchPersonalEventOperator() {
    return Base.get(`/event/personalOperator`)
      .then((response) => {
        console.log("event personalOperator", response);
        return response;
      })
      .catch((e) => {
        console.log("error personalOperator", e);
        return e;
      });
  }
}

export default EventServices;
