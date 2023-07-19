import { Client, Body } from "./client";

import fetch from "cross-fetch";

let main = async () => {
  const client = new Client("http://127.0.0.1:8080", {
    fetch: fetch,
  });

  console.log(await client.ping());

  console.log(
    await client.someRoute(
      new Body({
        hello: "WOOOO",
      })
    )
  );
};

main();
