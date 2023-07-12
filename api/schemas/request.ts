export const testSchema = {
  description: "post some data",
  tags: ["user", "code"],
  summary: "qwerty",
  body: {
    type: "object",
    properties: {
      hello: { type: "string" },
      obj: { $ref: "some#" },
    },
  },
  response: {
    201: {
      description: "Succesful response",
      type: "object",
      properties: {
        hello: { type: "string" },
      },
    },
    default: {
      description: "Default response",
      type: "object",
      properties: {
        foo: { type: "string" },
      },
    },
  },
};

export const pingSchema = {
  description: "responds pong",
  summary: "pong!",
  response: {
    200: {
      description: "Succesful png",
      type: "string",
    },
    default: {
      description: "Succesful png",
      type: "string",
    },
  },
};
