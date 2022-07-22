import store from "../../../plugins/stores/auth";

export default {
  /**format errors message from Api for
   * errors gestion in front
   * @param {OBJ} errors
   * errors = {
   *  typeError: "message",
   *  typeError2: "message2"
   * }
   * @returns for errors =>
   * valueArray = {typeError : {message: messageError}}
   */
  handleError(errors) {
    if (errors !== undefined) {
      let value;
      for (const error in errors) {
        value = { ...value, [error]: { message: errors[error] } };
      }
      return value;
    }
  },
  /** Permet de reset les errors
   * et arret le loading
   * @returns string vide
   */
   resetError() {
    return "";
  },
  /**
   * fonction d'affichage du message d'erreur
   * @param {string || array} value
   * @return string || array[0]
   */
  affichageError(value) {
    if (Array.isArray(value)) {
      return value[0];
    } else {
      return value;
    }
  },
};
