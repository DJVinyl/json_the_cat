const request = require("request");
const args = process.argv.splice(2);

const caturday = "https://api.thecatapi.com/v1/breeds/search?q=" + args[0];

request(caturday, (error, response, body) => {
  console.log("error:", error); // Print the error if one occurred

  if (error) {
    return;
  }
  if (response.statusCode !== 200) {
    Error(`Status Code ${response.statusCode} when fetching IP: ${body}`);
    return;
  }
  try {
    const data = JSON.parse(body);
    console.log(data[0].description);
  } catch (err) {
    throw `Description for ${args[0]} not found`;
  }
});
