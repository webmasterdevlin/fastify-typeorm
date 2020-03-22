import fastify from "fastify";
import cors from "cors";
import fastifySwagger from "fastify-swagger";
import { Options } from "./config/swagger";
import db from "./plugins/db";
import healthHandler from "./modules/health/routes";
import customerHandler from "./modules/customer/routes";
import customerOrderHandler from "./modules/customer-order/routes";
import itemHandler from "./modules/item/routes";
import auth from "./plugins/auth";

function createServer() {
  const server = fastify({ logger: true });
  server.use(cors());
  server.register(auth);
  server.register(fastifySwagger, Options);
  server.register(db);
  server.register(healthHandler);
  server.register(customerHandler);
  server.register(customerOrderHandler);
  server.register(itemHandler);

  server.setErrorHandler((error, req, res) => {
    req.log.error(error.toString());
    res.send({ error });
  });

  // generate temporary token to be used in app
  server.ready(() => {
    const payload = { email: "webmasterdevlin@gmail.com" };
    // @ts-ignore
    const token = server.jwt.sign(payload);
    console.log("COPY TOKEN::", `Bearer ${token}`);
  });

  return server;
}

export default createServer;
