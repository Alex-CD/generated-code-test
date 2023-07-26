import * as Generated from "./gen/api";

console.log("openapi-generator starting...");

let main = async () => {
  var api = new Generated.UserApi("http://localhost:8080");
  const responseBody = (await api.pingGet()).body;

  console.log("ping response: " + responseBody);
};

main();
