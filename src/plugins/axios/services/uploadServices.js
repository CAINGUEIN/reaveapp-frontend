import Base from "@axios/axiosPlugin";

class UploadServices {

  static async picSpace(formdata) {
    return Base.post("/user/update/pic/space", formdata)
      .then((response) => {
        console.log(
          "We are in the route /pic/venue and the response is :",
          response
        );
        return response;
      })
      .catch((e) => {
        console.log("error event img", e);
        return e;
      });
  }

static async uploadPicture(routePath, formdata) {
        return Base.post(`/uploadImage/${routePath}`, formdata)
          .then((response) => {
            console.log("Success | Route /uploadImage is working", response);
            return response;
          })
          .catch((e) => {
            console.log("Error | Route /uploadImage is not working", e);
            return e;
          });
      }

static async getImageFromBackend(imageURL, subFolder) {
        return await Base.get(`/uploads/${imageURL}`, { responseType: 'arraybuffer' })
          .then((response) => {
            const imageBlob = new Blob([response.data], { type: response.headers['content-type'] });
            return URL.createObjectURL(imageBlob);
          })
          .catch((error) => {
            console.error('Error fetching image:', error);
            throw error;
          });
      }
      
}
