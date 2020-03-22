import boom from "boom";
import { Customer } from "./entity";
import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";

export const customerFind = async (server, req, res): Promise<void> => {
  try {
    const customers = await server.db.customer.find();
    res.send(customers);
  } catch (e) {
    throw boom.boomify(e);
  }
};

export const customerDelete = async (server, req, res): Promise<void> => {
  try {
    const customer = await server.db.customer.delete({
      id: req.params.id,
    });
    req.log.info(`delete customer: ${customer.customerId}`);
    res.code(200).send(customer);
  } catch (e) {
    throw boom.boomify(e);
  }
};

export const customerSave = async (server, req, res): Promise<void> => {
  {
    try {
      const customer = await server.db.customer.save(req.body);
      res.code(201).send(customer);
    } catch (e) {
      throw boom.boomify(e);
    }
  }
};

export const customerUpdate = async (server, req, res): Promise<void> => {
  {
    try {
      const customer = await server.db.customer.save(req.body);
      res.code(201).send(customer);
    } catch (e) {
      throw boom.boomify(e);
    }
  }
};

export const customerFindOne = async (
  server,
  req: FastifyRequest,
  res: FastifyReply<ServerResponse>
): Promise<void> => {
  try {
    const customerToUpdate: Customer = await server.db.customer.findOne({
      id: req.params.id,
    });
    res.send(customerToUpdate);
  } catch (e) {
    throw boom.boomify(e);
  }
};
