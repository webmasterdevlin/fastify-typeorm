import boom from "boom";
import { Customer } from "./entity";
import { FastifyReply, FastifyRequest } from "fastify";
import { ServerResponse } from "http";

export const customerFind = async (server, req, rep): Promise<void> => {
  try {
    const customers = await server.db.customer.find();
    rep.send(customers);
  } catch (e) {
    throw boom.boomify(e);
  }
};

export const customerDelete = async (server, req, rep): Promise<void> => {
  try {
    const customer = await server.db.customer.delete({
      id: req.params.id,
    });
    req.log.info(`delete customer: ${customer.customerId}`);
    rep.code(200).send(customer);
  } catch (e) {
    throw boom.boomify(e);
  }
};

export const customerSave = async (server, req, rep): Promise<void> => {
  {
    try {
      const customer = await server.db.customer.save(req.body);
      rep.code(201).send(customer);
    } catch (e) {
      throw boom.boomify(e);
    }
  }
};

export const customerUpdate = async (server, req, rep): Promise<void> => {
  {
    try {
      const customer = await server.db.customer.save(req.body);
      rep.code(201).send(customer);
    } catch (e) {
      throw boom.boomify(e);
    }
  }
};

export const customerFindOne = async (
  server,
  req: FastifyRequest,
  rep: FastifyReply<ServerResponse>
): Promise<void> => {
  try {
    const customerToUpdate: Customer = await server.db.customer.findOne({
      id: req.params.id,
    });
    rep.send(customerToUpdate);
  } catch (e) {
    throw boom.boomify(e);
  }
};
