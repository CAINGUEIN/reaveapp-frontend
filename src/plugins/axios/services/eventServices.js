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

  static async createVenue(data) {
    let body = data;
    return Base.post(`/event/createVenue`, body)
      .then((response) => {
        console.log("venue create", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }

  static async picVenue(formdata) {
    return Base.post("/user/update/pic/venue", formdata)
      .then((response) => {
        console.log("We are in the route /pic/venue and the response is :", response);
        return response;
      })
      .catch((e) => {
        console.log("error event img", e);
        return e;
      });
  }
  
  static async sendAddressData(venueId, venueName, street, city, pCode, country) {
    const data = {
      venueId: venueId,
      venueName: venueName,
      street: street,
      city: city,
      pCode: pCode,
      country: country
    };
    return Base.post(`/event/sendData`, data)
      .then((response) => {
        console.log("We are in the route /sendData and the response is :", response);
        return response;
      })
      .catch((e) => {
        console.log("error venue /sendData route", e);
        return e;
      });
  }


  static async getImageFromBackend(imageURL) {
    try {
      const response = await Base.get(`/uploads/${imageURL}`, { responseType: 'arraybuffer' });
      const imageBlob = new Blob([response.data], { type: response.headers['content-type'] });
      
      return URL.createObjectURL(imageBlob);
      
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'image :', error);
      throw error; 
    }
  }

  static async createTicketForEvent(data) {
    let body = data;
    return Base.post(`/event/createTicketForEvent`, body)
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

  static async searchPersonalVenueOperator() {
    return Base.get(`/event/personalOperatorVenue`)
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
    return Base.post(`/event/data`, body)
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
    return Base.post(`/event/dataVenue`, body)
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
    return Base.post(`/event/update`, body)
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
    return Base.post(`/event/addStaff`, body)
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
    return Base.post(`/event/addStaffAndSwitchOwner`, body)
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
    return Base.post(`/event/modifyStaff`, body)
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
    return Base.post(`/event/modifyStaffAndSwitchOwner`, body)
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
    return Base.post(`/event/removeStaff`, body)
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
    return Base.post(`/event/addItem`, body)
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
    return Base.post(`/event/modifyItem`, body)
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
    return Base.post(`/event/removeItem`, body)
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