import { Client, Body, Pet, PetStatus } from "./client";

import fetch from "cross-fetch";

let main = async () => {
  const client = new Client("http://127.0.0.1:8080", {
    fetch: fetch,
  });

  const allPets = await client.petsAll();

  const newPet = new Pet({
    id: 0,
    name: '',
    categoryId: 1,
    status: PetStatus.Available
  });

  // TODO: Post new pet


  // // TODO: Look into why response type is called Anonymous: Issue with nswag generator or with openapi doc
  // console.log(
  //   await client.someRoute(
  //     new Body({
  //       hello: "WOOOO",
  //     })
  //   )
  // );
};

main();
