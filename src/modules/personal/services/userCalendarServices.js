import Base from "/src/plugins/axios/axiosPlugin";

class UserCalendarServices {
  static async createEvent(data) {
    let body = data;
    return Base.post(`/calendar/personal/create`, body)
      .then((response) => {
        console.log("calendar personal create", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }
  static async readAllEvent() {
    return Base.get(`/calendar/personal/read`)
      .then((response) => {
        console.log("calendar personal read", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }
  static async updateEvent(data) {
    return Base.put(`/calendar/personal/update`)
      .then((response) => {
        console.log("calendar personal update", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }
  static async deleteEvent(data) {
    return Base.delete(`/calendar/personal/delete`)
      .then((response) => {
        console.log("calendar personal delete", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }
}

export default UserCalendarServices;
