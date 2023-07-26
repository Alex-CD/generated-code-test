import * as Generated from "./gen/api";

console.log("openapi-generator starting...");

let main = async () => {
  var api = new Generated.UserApi("http://localhost:8080");
  console.log("PING RES: " + (await api.pingGet()).body);
};

main();
