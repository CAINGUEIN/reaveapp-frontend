import Base from "@axios/axiosPlugin";

class VenueServices {
  static async createVenue(data) {
    let body = data;
    console.log('voici le body ',body);
    return Base.post(`/venue/createV`, body)
      .then((response) => {
        console.log("venue create lool", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }

  static async listVenue(body) {
    return Base.post(`/venue/list`, body)
      .then((response) => {
        console.log("venue list", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }

  static async buyVenue(body) {
    return Base.post(`/venue/buy`, body)
      .then((response) => {
        console.log("venue buy", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }

  static async searchPersonalVenueOperator() {
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

  static async dataVenue(body) {
    return Base.post(`/venue/data`, body)
      .then((response) => {
        console.log("venue data", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }

  static async updateVenue(body) {
    return Base.post(`/venue/update`, body)
      .then((response) => {
        console.log("venue update", response);
        return response;
      })
      .catch((e) => {
        console.log("error update venue", e);
        return e;
      });
  }
  
  static async addStaff(body) {
    return Base.post(`/venue/addStaff`, body)
      .then((response) => {
        console.log("venue addStaff", response);
        return response;
      })
      .catch((e) => {
        console.log("error addStaff venue", e);
        return e;
      });
  }

  static async addStaffAndSwitchOwner(body) {
    return Base.post(`/venue/addStaffAndSwitchOwner`, body)
      .then((response) => {
        console.log("venue addStaffAndSwitchOwner", response);
        return response;
      })
      .catch((e) => {
        console.log("error addStaffAndSwitchOwner venue", e);
        return e;
      });
  }

  static async modifyStaff(body) {
    return Base.post(`/venue/modifyStaff`, body)
      .then((response) => {
        console.log("venue modifyStaff", response);
        return response;
      })
      .catch((e) => {
        console.log("error modifyStaff venue", e);
        return e;
      });
  }

  static async modifyStaffAndSwitchOwner(body) {
    return Base.post(`/venue/modifyStaffAndSwitchOwner`, body)
      .then((response) => {
        console.log("venue modifyStaffAndSwitchOwner", response);
        return response;
      })
      .catch((e) => {
        console.log("error modifyStaffAndSwitchOwner venue", e);
        return e;
      });
  }

  static async removeStaff(body) {
    return Base.post(`/venue/removeStaff`, body)
      .then((response) => {
        console.log("venue removeStaff", response);
        return response;
      })
      .catch((e) => {
        console.log("error removeStaff venue", e);
        return e;
      });
  }

  static async addItem(body) {
    return Base.post(`/venue/addItem`, body)
      .then((response) => {
        console.log("venue addItem", response);
        return response;
      })
      .catch((e) => {
        console.log("error addItem venue", e);
        return e;
      });
  }

  static async modifyItem(body) {
    return Base.post(`/venue/modifyItem`, body)
      .then((response) => {
        console.log("venue modifyItem", response);
        return response;
      })
      .catch((e) => {
        console.log("error modifyItem venue", e);
        return e;
      });
  }

  static async removeItem(body) {
    return Base.post(`/venue/removeItem`, body)
      .then((response) => {
        console.log("venue removeItem", response);
        return response;
      })
      .catch((e) => {
        console.log("error removeItem venue", e);
        return e;
      });
  }
  
}

export default VenueServices;
