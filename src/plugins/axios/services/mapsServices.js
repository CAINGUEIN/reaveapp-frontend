import Base from "@axios/axiosPlugin";

class MapsServices {
  static async updatePosition(latlng) {
    const body = {
      lat: latlng[0], // Pass the latitude
      lon: latlng[1], // Pass the longitude
    };

    return Base.post('/maps/updatePosition', body)
      .then((response) => {
        console.log("Position updated:", response);
        return response.data; // Return the data if needed
      })
      .catch((error) => {
        console.error('Error updating position:', error);
        throw error; // Throw the error for handling in the calling code
      });
  }
}

export default MapsServices;