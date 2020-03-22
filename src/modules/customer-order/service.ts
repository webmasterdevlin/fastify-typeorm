import boom from "boom";
import { CustomerOrder } from "./entity";
import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";

export const customerOrderFind = async (
  server,
  req: FastifyRequest,
  res: FastifyReply<ServerResponse>
): Promise<void> => {
  try {
    const customerOrders = await server.db.customerOrder.find();
    res.send(customerOrders);
  } catch (e) {
    throw boom.boomify(e);
  }
};

export const customerOrderDelete = async (
  server,
  req: FastifyRequest,
  res: FastifyReply<ServerResponse>
): Promise<void> => {
  try {
    const customerOrder = await server.db.customerOrder.delete({
      id: req.params.id,
    });
    req.log.info(`delete customer: ${customerOrder.customerOrderId}`);
    res.code(200).send(customerOrder);
  } catch (e) {
    throw boom.boomify(e);
  }
};

export const customerOrderSave = async (
  server,
  req: FastifyRequest,
  res: FastifyReply<ServerResponse>
): Promise<void> => {
  {
    try {
      const customerOrder = await server.db.customerOrder.save(req.body);
      res.code(201).send(customerOrder);
    } catch (e) {
      throw boom.boomify(e);
    }
  }
};

export const customerOrderUpdate = async (
  server,
  req: FastifyRequest,
  res: FastifyReply<ServerResponse>
): Promise<void> => {
  {
    try {
      const customerOrder = await server.db.customerOrder.save(req.body);
      res.code(201).send(customerOrder);
    } catch (e) {
      throw boom.boomify(e);
    }
  }
};

export const customerOrderFindOne = async (
  server,
  req: FastifyRequest,
  res: FastifyReply<ServerResponse>
): Promise<void> => {
  try {
    const customerOrderToUpdate: CustomerOrder = await server.db.customerOrder.findOne(
      {
        id: req.params.id,
      }
    );
    res.send(customerOrderToUpdate);
  } catch (e) {
    throw boom.boomify(e);
  }
};
