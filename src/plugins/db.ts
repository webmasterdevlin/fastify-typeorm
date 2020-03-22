import "reflect-metadata";
import fp from "fastify-plugin";
import { createConnection, getConnectionOptions } from "typeorm";
import { Item } from "../modules/item/entity";
import { CustomerOrder } from "../modules/customer-order/entity";
import { Customer } from "../modules/customer/entity";

export default fp(async (server) => {
  try {
    const connectionOptions = await getConnectionOptions();
    Object.assign(connectionOptions, {
      options: { encrypt: true },
      entities: [Customer, CustomerOrder, Item],
    });

    console.log(`connecting to database: ${connectionOptions.type}...`);

    const connection = await createConnection(connectionOptions);

    console.log("database connected");

    server.decorate("db", {
      customer: connection.getRepository(Customer),
      customerOrder: connection.getRepository(CustomerOrder),
      item: connection.getRepository(Item),
    });
  } catch (e) {
    console.log("make sure you have set .env variables - see .env.sample", e);
  }
});
