const get = require("fetch").fetchUrl;
const url = "https://swapi.dev/api/planets";

const send = (url) =>
  new Promise((resolve, reject) => {
    get(url, (error, meta, body) => {
      if (meta.status == 200) {
        const { results } = JSON.parse(body);
        resolve(results);
      }
      reject(`We have error, status code: ${meta.status}`);
    });
  });

send(url)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
