const request = require("request");

const fetchBreedDescription = (catBreed, callback) => {
  const caturday = "https://api.thecatapi.com/v1/breeds/search?q=" + catBreed;
  request(caturday, (error, response, body) => {
    if (error) {
      return callback(null);
    }
    if (response.statusCode !== 200) {
      return callback(null);
      //Error(`Status Code ${response.statusCode} when fetching IP: ${body}`));
    }
    try {
      const data = JSON.parse(body);
      return callback(false, data[0].description);
    } catch (err) {
      return callback(null);
    }
  });
};

module.exports = { fetchBreedDescription };
