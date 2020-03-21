import fastify from "fastify";
import cors from "cors";
import fastifySwagger from "fastify-swagger";
import { Options } from "./config/swagger";
import db from "./plugins/db";
import healthHandler from "./modules/health/routes";
import customerHandler from "./modules/customer/routes";

function createServer() {
  const server = fastify({ logger: true });
  server.use(cors());
  server.register(fastifySwagger, Options);
  server.register(db);
  server.register(healthHandler);
  server.register(customerHandler);

  server.setErrorHandler((error, req, res) => {
    req.log.error(error.toString());
    res.send({ error });
  });

  return server;
}

export default createServer;
