let envURL = 'http://starlord.hackerearth.com/'
const urlMapping = {
  getData: function () {
    return {
      url: envURL + `recipe`,
      // headers: { Authorization: `bearer ${localStorage.getItem("token")}` },
      method: "GET",
      dataType: "json",
      cache: false,
      contentType: "application/json; charset=UTF-8",
      timeout: 40000,
    };
  }
};
/**
 * default variables are exported
 * so they can be accessed through out the
 * application wherever imported
 */
export default urlMapping;
export { envURL };
