import { apiSchema } from "./api.schema";

export default function healthHandler(server, options, next) {
  server.get("/health", { schema: apiSchema }, (req, res) => {
    res.send({ status: "ok" });
  });

  next();
}
