import { Client, Body } from "./client";

const client = new Client();

let main = async () => {
  console.log(JSON.stringify(await client.ping()));

  console.log(
    await client.someRoute(
      new Body({
        hello: "WOOOO",
      })
    )
  );
};

main();
