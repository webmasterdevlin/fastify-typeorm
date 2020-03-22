export const Options = {
  routePrefix: "/documentation",
  exposeRoute: true,
  swagger: {
    info: {
      title: "Customer Order Viewer  API",
      description:
        "Building a blazing fast REST API with Node.js, TypeORM, Fastify and Swagger",
      version: "1.0.0",
    },
    externalDocs: {
      url: "https://swagger.io",
      description: "Find more info here",
    },
    host: "localhost",
    schemes: ["http"],
    consumes: ["application/json"],
    produces: ["application/json"],
  },
};
