import { apiSchema } from "./api.schema";
import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";
import {
  customerDelete,
  customerFind,
  customerFindOne,
  customerSave,
  customerUpdate,
} from "./service";

export default function customerHandler(server, options, next) {
  server.get(
    "/api/customers",
    {
      preValidation: [server.auth],
    },
    async (
      req: FastifyRequest,
      rep: FastifyReply<ServerResponse>
    ): Promise<void> => await customerFind(server, req, rep)
  );

  server.delete(
    "/api/customers/:id",
    {
      preValidation: [server.auth],
    },
    async (
      req: FastifyRequest,
      rep: FastifyReply<ServerResponse>
    ): Promise<void> => await customerDelete(server, req, rep)
  );

  server.post(
    "/api/customers",
    {
      schema: apiSchema,
      preValidation: [server.auth],
    },
    async (
      req: FastifyRequest,
      rep: FastifyReply<ServerResponse>
    ): Promise<void> => await customerSave(server, req, rep)
  );

  server.put(
    "/api/customers/:id",
    {
      preValidation: [server.auth],
    },
    async (
      req: FastifyRequest,
      rep: FastifyReply<ServerResponse>
    ): Promise<void> => await customerUpdate(server, req, rep)
  );

  server.get(
    "/api/customers/:id",
    {
      preValidation: [server.auth],
    },
    async (
      req: FastifyRequest,
      rep: FastifyReply<ServerResponse>
    ): Promise<void> => await customerFindOne(server, req, rep)
  );

  next();
}
