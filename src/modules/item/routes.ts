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
      preValidation: [server.auth],
    },
    async (
      req: FastifyRequest,
      rep: FastifyReply<ServerResponse>
    ): Promise<void> => await itemFind(server, req, rep)
  );

  server.delete(
    "/api/items/:id",
    {
      preValidation: [server.auth],
    },
    async (
      req: FastifyRequest,
      rep: FastifyReply<ServerResponse>
    ): Promise<void> => await itemDelete(server, req, rep)
  );

  server.post(
    "/api/items",
    {
      schema: apiSchema,
      preValidation: [server.auth],
    },
    async (
      req: FastifyRequest,
      rep: FastifyReply<ServerResponse>
    ): Promise<void> => await itemSave(server, req, rep)
  );

  server.put(
    "/api/items/:id",
    {
      preValidation: [server.auth],
    },
    async (
      req: FastifyRequest,
      rep: FastifyReply<ServerResponse>
    ): Promise<void> => await itemUpdate(server, req, rep)
  );

  server.get(
    "/api/items/:id",
    {
      preValidation: [server.auth],
    },
    async (
      req: FastifyRequest,
      rep: FastifyReply<ServerResponse>
    ): Promise<void> => await itemFindOne(server, req, rep)
  );

  next();
}
