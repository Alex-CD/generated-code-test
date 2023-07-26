import fastify from "fastify";
import { pingSchema } from "./schemas/request";
import { petStoreEndpoints } from "./pet-store/endpoints";

const server = fastify();

(async () => {
  // set up swagger
  await server.register(require("@fastify/swagger"), {
    swagger: {
      info: {
        title: "Test swagger",
        description: "testing the fastify swagger api",
        version: "0.1.0",
      },
      securityDefinitions: {
        apiKey: {
          type: "apiKey",
          name: "apiKey",
          in: "header",
        },
      },
      host: "127.0.0.1:8080",
      schemes: ["http"],
      consumes: ["application/json"],
      produces: ["application/json"],
    },
    hideUntagged: true,
    exposeRoute: true,
  });

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
      host: "127.0.0.1:8080",
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

  // define all your routes

  //endpoints
  server.get("/ping", { schema: pingSchema }, async (request, reply) => {
    return "pong\n";
  });

  server.put(
    "/some-route/:id",
    {
      schema: {
        description: "post some data",
        tags: ["user", "code"],
        summary: "qwerty",
        security: [{ apiKey: [] }],
        body: {
          type: "object",
          properties: {
            hello: { type: "string" },
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
      },
    },
    (req: any, reply) => {
      reply.code(201).send({ hello: `Hello ${req.body.hello}` });
    }
  );

  server.register(petStoreEndpoints);

  // then call these
  await server.ready();
  (server as any).swagger();

  server.listen({ port: 8080 }, (err, address) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
})();
