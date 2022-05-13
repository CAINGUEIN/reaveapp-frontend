export default {
  setParamURL(data) {
    let value = "";
    for (const key in data.group) {
      if (data.group[key].value !== data.group[key].default) {
        if (value === "") {
          value = {
            [data.group[key].name]: data.group[key].value,
          };
        } else {
          value = {
            ...value,
            [data.group[key].name]: data.group[key].value,
          };
        }
      }
    }
    return value;
  },

  paramInUrl(route, data) {
    for (const key in data.group) {
      if (
        route[data.group[key].name] !== "" &&
        route[data.group[key].name] !== undefined
      ) {
        data.group[key].value = route[data.group[key].name];
      }
    }
  },
};
