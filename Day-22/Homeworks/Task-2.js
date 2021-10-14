"use strict";
const get = require("fetch").fetchUrl;
const url = "https://swapi.dev/api/planets";

class Countries {
  constructor(url) {
    if (typeof url !== "string")
      throw new Error("Parameter of countries should be a string");
    this.url = url;
  }
  send(number) {
    if (typeof number !== "number")
      throw new Error("Parameter of send should be a number");
    this.url = this.url + `?size=${number}`;
    get(this.url, (_error, meta, body) => {
      if (meta.status == 200) {
        const { results } = JSON.parse(body);
        resolve(results);
      }
      reject(`We have error, status code ${meta.status}`);
    });
  }
}

const countries = new Countries(url)(async () => {
  try {
    const data = await countries.send(2);
    console.log(data); //Countries arr
  } catch (error) {
    console.log(error);
  }
})();
