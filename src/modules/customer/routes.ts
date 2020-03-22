import { apiSchema } from "./api.schema";
import { FastifyReply, FastifyRequest } from "fastify";
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
      preValidation: [],
    },
    async (
      req: FastifyRequest,
      res: FastifyReply<ServerResponse>
    ): Promise<void> => await customerFind(server, req, res)
  );

  server.delete(
    "/api/customers/:id",
    {
      preValidation: [],
    },
    async (
      req: FastifyRequest,
      res: FastifyReply<ServerResponse>
    ): Promise<void> => await customerDelete(server, req, res)
  );

  server.post(
    "/api/customers",
    {
      schema: apiSchema,
      preValidation: [],
    },
    async (
      req: FastifyRequest,
      res: FastifyReply<ServerResponse>
    ): Promise<void> => await customerSave(server, req, res)
  );

  server.put(
    "/api/customers/:id",
    {
      preValidation: [],
    },
    async (
      req: FastifyRequest,
      res: FastifyReply<ServerResponse>
    ): Promise<void> => await customerUpdate(server, req, res)
  );

  server.get(
    "/api/customers/:id",
    {
      preValidation: [],
    },
    async (
      req: FastifyRequest,
      res: FastifyReply<ServerResponse>
    ): Promise<void> => await customerFindOne(server, req, res)
  );

  next();
}
