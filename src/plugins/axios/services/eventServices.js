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
}

export default EventServices;