import { apiSchema } from "./api.schema";
import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";
import {
  itemDelete,
  itemFind,
  itemFindOne,
  itemSave,
  itemUpdate,
} from "./service";

export default function itemHandler(server, options, next) {
  server.get(
    "/api/items",
    {
      preValidation: [],
    },
    async (
      req: FastifyRequest,
      res: FastifyReply<ServerResponse>
    ): Promise<void> => await itemFind(server, req, res)
  );

  server.delete(
    "/api/items/:id",
    {
      preValidation: [],
    },
    async (
      req: FastifyRequest,
      res: FastifyReply<ServerResponse>
    ): Promise<void> => await itemDelete(server, req, res)
  );

  server.post(
    "/api/items",
    {
      schema: apiSchema,
      preValidation: [],
    },
    async (
      req: FastifyRequest,
      res: FastifyReply<ServerResponse>
    ): Promise<void> => await itemSave(server, req, res)
  );

  server.put(
    "/api/items/:id",
    {
      preValidation: [],
    },
    async (
      req: FastifyRequest,
      res: FastifyReply<ServerResponse>
    ): Promise<void> => await itemUpdate(server, req, res)
  );

  server.get(
    "/api/items/:id",
    {
      preValidation: [],
    },
    async (
      req: FastifyRequest,
      res: FastifyReply<ServerResponse>
    ): Promise<void> => await itemFindOne(server, req, res)
  );

  next();
}
