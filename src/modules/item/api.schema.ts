export const apiSchema = {
  description: "Create a new item",
  tags: ["items"],
  summary: "Creates new item with given values",
  body: {
    type: "object",
    properties: {
      description: { type: "string" },
      price: { type: "number" }
    }
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        itemId: { type: "number" },
        description: { type: "string" },
        price: { type: "number" }
      }
    }
  }
};
