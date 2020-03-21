export const apiSchema = {
  summary: "health check",
  description: "health check",
  response: {
    200: {
      type: "object",
      properties: {
        status: {
          type: "string"
        }
      }
    }
  }
};
