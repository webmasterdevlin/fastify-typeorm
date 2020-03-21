import { apiSchema } from "./api.schema";

export default function customerHandler(server, options, next) {
  server.get(
    "/api/customers",
    {
      preValidation: []
    },
    async (req, res) => {
      const customers = await server.db.customers.find();

      res.send(customers);
    }
  );
  next();
}
