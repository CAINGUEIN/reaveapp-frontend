import useStoreAuth from "../../plugins/stores/auth";

const store = useStoreAuth();

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
      store.loading = false;
      return value;
    }
  },
  resetError() {
    store.loading = false;
    return "";
  },
  /**format errors message from Vuelidate
   * (this.v$.$silentErrors) for
   * errors gestion in front
   * @param {OBJ} errors
   * errors = {
   *  $property: "name",
   *  $message: "message"
   * }
   * @returns for errors =>
   * valueArray = {errors[error].$property : {message: errors[error].$message}}
   */
  vuelidateError(errors) {
    if (errors !== undefined) {
      let value;
      for (const error in errors) {
        value = {
          ...value,
          [errors[error].$property]: { message: errors[error].$message },
        };
      }
      store.loading = false;
      return value;
    } else {
      store.loading = false;
      return "";
    }
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
