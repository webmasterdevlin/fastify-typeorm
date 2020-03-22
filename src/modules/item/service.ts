import boom from "boom";
import { Item } from "./entity";
import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";

export const itemFind = async (
  server,
  req: FastifyRequest,
  res: FastifyReply<ServerResponse>
): Promise<void> => {
  try {
    const items = await server.db.item.find();
    res.send(items);
  } catch (e) {
    throw boom.boomify(e);
  }
};

export const itemDelete = async (
  server,
  req: FastifyRequest,
  res: FastifyReply<ServerResponse>
): Promise<void> => {
  try {
    const item = await server.db.item.delete({
      id: req.params.id,
    });
    req.log.info(`delete customer: ${item.itemId}`);
    res.code(200).send(item);
  } catch (e) {
    throw boom.boomify(e);
  }
};

export const itemSave = async (
  server,
  req: FastifyRequest,
  res: FastifyReply<ServerResponse>
): Promise<void> => {
  {
    try {
      const item = await server.db.item.save(req.body);
      res.code(201).send(item);
    } catch (e) {
      throw boom.boomify(e);
    }
  }
};

export const itemUpdate = async (
  server,
  req: FastifyRequest,
  res: FastifyReply<ServerResponse>
): Promise<void> => {
  {
    try {
      const item = await server.db.item.save(req.body);
      res.code(201).send(item);
    } catch (e) {
      throw boom.boomify(e);
    }
  }
};

export const itemFindOne = async (
  server,
  req: FastifyRequest,
  res: FastifyReply<ServerResponse>
): Promise<void> => {
  try {
    const itemToUpdate: Item = await server.db.item.findOne({
      id: req.params.id,
    });
    res.send(itemToUpdate);
  } catch (e) {
    throw boom.boomify(e);
  }
};
