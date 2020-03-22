import fp from "fastify-plugin";
import boom from "boom";

export default fp((server, opts, next) => {
  server.register(require("fastify-jwt"), {
    secret: "supersecret",
  });

  server.decorate("auth", async (request, reply) => {
    try {
      await request.jwtVerify();
    } catch (e) {
      // throw boom.boomify(e);
      reply.send(e);
    }
  });

  next();
});
