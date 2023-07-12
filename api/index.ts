import fastify from "fastify";

const server = fastify();

server.register(require("@fastify/swagger"), {});
server.register(require("@fastify/swagger-ui"), {
  routePrefix: "/docs",
  swagger: {
    info: {
      title: "My FirstAPP Documentation",
      description: "My FirstApp Backend Documentation description",
      version: "0.1.0",
      termsOfService: "https://mywebsite.io/tos",
      contact: {
        name: "John Doe",
        url: "https://www.johndoe.com",
        email: "john.doe@email.com",
      },
    },
    externalDocs: {
      url: "https://www.johndoe.com/api/",
      description: "Find more info here",
    },
    host: "127.0.0.1:3000",
    basePath: "",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
      {
        name: "User",
        description: "User's API",
      },
    ],
    definitions: {
      User: {
        type: "object",
        required: ["id", "email"],
        properties: {
          id: {
            type: "number",
            format: "uuid",
          },
          firstName: {
            type: "string",
          },
          lastName: {
            type: "string",
          },
          email: {
            type: "string",
            format: "email",
          },
        },
      },
    },
  },
  uiConfig: {
    docExpansion: "none", // expand/not all the documentations none|list|full
    deepLinking: true,
  },
  staticCSP: false,
  exposeRoute: true,
});

server.get("/ping", async (request, reply) => {
  return "pong\n";
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
