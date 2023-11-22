import Base from "@axios/axiosPlugin";

class VenueServices {

static async createVenue(data) {
    let body = data;
    return Base.post(`/venue/createVenue`, body)
      .then((response) => {
        console.log("venue create", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }

  static async searchPersonalVenueOperator(spaceAssociated) {
    const sendSpaceAssociated = { sendSpaceAssociated: spaceAssociated}
    return Base.post(`/venue/personalOperatorVenue`, sendSpaceAssociated)
      .then((response) => {
        console.log("venue personalOperator", response);
        return response;
      })
      .catch((e) => {
        console.log("error personalOperator", e);
        return e;
      });
  }

  static async findPublishedVenues() {
    return Base.post(`/venue/findPublishedVenue`)
      .then((response) => {
        console.log("findPublishedVenue", response);
        return response;
      })
      .catch((e) => {
        console.log("Error | Finding published venue", e);
        return e;
      });
  }

  static async dataVenue(body) {
    return Base.post(`/venue/dataVenue`, body)
      .then((response) => {
        console.log("venue data", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
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
    return Base.post(`/venue/sendData`, data)
      .then((response) => {
        console.log("We are in the route /sendData and the response is :", response);
        return response;
      })
      .catch((e) => {
        console.log("error venue /sendData route", e);
        return e;
      });
  }

  static async publishVenue(body) {
    return Base.post('/venue/publishVenue', body)
      .then((response) => {
        console.log("venue data", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }
}

export default VenueServices;