import Base from "../axiosPlugin";

class FindOneMatch {
  static async lolMatchSummary(idriot) {
    let body = { _id_match: idriot };
    return Base.post("/lol/matchSummary", body)
      .then((response) => {
        console.log("matchSummary", response);
        return response;
      })
      .catch((e) => {
        console.log("error version", e);
        return e;
      });
  }
}

export default FindOneMatch;
