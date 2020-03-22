import { apiSchema } from "./api.schema";
import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";
import {
  customerOrderDelete,
  customerOrderFind,
  customerOrderFindOne,
  customerOrderSave,
  customerOrderUpdate,
} from "./service";

export default function customerOrderHandler(server, options, next) {
  server.get(
    "/api/customer-orders",
    {
      preValidation: [],
    },
    async (
      req: FastifyRequest,
      rep: FastifyReply<ServerResponse>
    ): Promise<void> => await customerOrderFind(server, req, rep)
  );

  server.delete(
    "/api/customer-orders/:id",
    {
      preValidation: [server.auth],
    },
    async (
      req: FastifyRequest,
      rep: FastifyReply<ServerResponse>
    ): Promise<void> => await customerOrderDelete(server, req, rep)
  );

  server.post(
    "/api/customer-orders",
    {
      schema: apiSchema,
      preValidation: [server.auth],
    },
    async (
      req: FastifyRequest,
      rep: FastifyReply<ServerResponse>
    ): Promise<void> => await customerOrderSave(server, req, rep)
  );

  server.put(
    "/api/customer-orders/:id",
    {
      preValidation: [server.auth],
    },
    async (
      req: FastifyRequest,
      rep: FastifyReply<ServerResponse>
    ): Promise<void> => await customerOrderUpdate(server, req, rep)
  );

  server.get(
    "/api/customer-orders/:id",
    {
      preValidation: [server.auth],
    },
    async (
      req: FastifyRequest,
      rep: FastifyReply<ServerResponse>
    ): Promise<void> => await customerOrderFindOne(server, req, rep)
  );
  next();
}
