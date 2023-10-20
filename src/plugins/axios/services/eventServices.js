import Base from "@axios/axiosPlugin";

class EventServices {
  static async createEvent(data) {
    let body = data;
    return Base.post(`/events/create`, body)
      .then((response) => {
        console.log("event create", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }

  static async createVenue(data) {
    let body = data;
    return Base.post(`/events/createVenue`, body)
      .then((response) => {
        console.log("venue create", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }

  static async createTicketForEvent(data) {
    let body = data;
    return Base.post(`/events/createTicketForEvent`, body)
      .then((response) => {
        console.log("event create TicketForEvent", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }

  static async listEvent(body) {
    return Base.post(`/events/list`, body)
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
    return Base.post(`/events/buy`, body)
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
    return Base.get(`/events/personalOperator`)
      .then((response) => {
        console.log("event personalOperator", response);
        return response;
      })
      .catch((e) => {
        console.log("error personalOperator", e);
        return e;
      });
  }

  static async searchPersonalVenueOperator() {
    return Base.get(`/events/personalOperatorVenue`)
      .then((response) => {
        console.log("venue personalOperator", response);
        return response;
      })
      .catch((e) => {
        console.log("error personalOperator", e);
        return e;
      });
  }

  static async dataEvent(body) {
    return Base.post(`/events/data`, body)
      .then((response) => {
        console.log("event data", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }

  static async dataVenue(body) {
    return Base.post(`/events/dataVenue`, body)
      .then((response) => {
        console.log("venue data", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }

  static async updateEvent(body) {
    return Base.post(`/events/update`, body)
      .then((response) => {
        console.log("event update", response);
        return response;
      })
      .catch((e) => {
        console.log("error update event", e);
        return e;
      });
  }

  static async addStaff(body) {
    return Base.post(`/events/addStaff`, body)
      .then((response) => {
        console.log("event addStaff", response);
        return response;
      })
      .catch((e) => {
        console.log("error addStaff event", e);
        return e;
      });
  }

  static async addStaffAndSwitchOwner(body) {
    return Base.post(`/events/addStaffAndSwitchOwner`, body)
      .then((response) => {
        console.log("event addStaffAndSwitchOwner", response);
        return response;
      })
      .catch((e) => {
        console.log("error addStaffAndSwitchOwner event", e);
        return e;
      });
  }

  static async modifyStaff(body) {
    return Base.post(`/events/modifyStaff`, body)
      .then((response) => {
        console.log("event modifyStaff", response);
        return response;
      })
      .catch((e) => {
        console.log("error modifyStaff event", e);
        return e;
      });
  }

  static async modifyStaffAndSwitchOwner(body) {
    return Base.post(`/events/modifyStaffAndSwitchOwner`, body)
      .then((response) => {
        console.log("event modifyStaffAndSwitchOwner", response);
        return response;
      })
      .catch((e) => {
        console.log("error modifyStaffAndSwitchOwner event", e);
        return e;
      });
  }

  static async removeStaff(body) {
    return Base.post(`/events/removeStaff`, body)
      .then((response) => {
        console.log("event removeStaff", response);
        return response;
      })
      .catch((e) => {
        console.log("error removeStaff event", e);
        return e;
      });
  }

  static async addItem(body) {
    return Base.post(`/events/addItem`, body)
      .then((response) => {
        console.log("event addItem", response);
        return response;
      })
      .catch((e) => {
        console.log("error addItem event", e);
        return e;
      });
  }

  static async modifyItem(body) {
    return Base.post(`/events/modifyItem`, body)
      .then((response) => {
        console.log("event modifyItem", response);
        return response;
      })
      .catch((e) => {
        console.log("error modifyItem event", e);
        return e;
      });
  }

  static async removeItem(body) {
    return Base.post(`/events/removeItem`, body)
      .then((response) => {
        console.log("event removeItem", response);
        return response;
      })
      .catch((e) => {
        console.log("error removeItem event", e);
        return e;
      });
  }

}

export default EventServices;