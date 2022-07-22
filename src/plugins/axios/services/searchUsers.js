// ici la gestion des services pour join l'api pour les search bar
import Base from "@axios/axiosPlugin";

class SearchUsersServices {
  static async usersList(data) {
    let body = data;
    return Base.post(`/search/users`, body)
      .then((response) => {
        console.log("search users ", response);
        return response;
      })
      .catch((e) => {
        console.log("error ", e);
        return e;
      });
  }
}

export default SearchUsersServices;
