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
      res: FastifyReply<ServerResponse>
    ): Promise<void> => await customerOrderFind(server, req, res)
  );

  server.delete(
    "/api/customer-orders/:id",
    {
      preValidation: [],
    },
    async (
      req: FastifyRequest,
      res: FastifyReply<ServerResponse>
    ): Promise<void> => await customerOrderDelete(server, req, res)
  );

  server.post(
    "/api/customer-orders",
    {
      schema: apiSchema,
      preValidation: [],
    },
    async (
      req: FastifyRequest,
      res: FastifyReply<ServerResponse>
    ): Promise<void> => await customerOrderSave(server, req, res)
  );

  server.put(
    "/api/customer-orders/:id",
    {
      preValidation: [],
    },
    async (
      req: FastifyRequest,
      res: FastifyReply<ServerResponse>
    ): Promise<void> => await customerOrderUpdate(server, req, res)
  );

  server.get(
    "/api/customer-orders/:id",
    {
      preValidation: [],
    },
    async (
      req: FastifyRequest,
      res: FastifyReply<ServerResponse>
    ): Promise<void> => await customerOrderFindOne(server, req, res)
  );
  next();
}
