export const apiSchema = {
  description: "Create a new customer",
  tags: ["customers"],
  summary: "Creates new customer with given values",
  body: {
    type: "object",
    properties: {
      firstName: { type: "string" },
      middleName: { type: "string" },
      lastName: { type: "string" },
      age: { type: "number" }
    }
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        customerId: { type: "number" },
        firstName: { type: "string" },
        middleName: { type: "string" },
        lastName: { type: "string" },
        age: { type: "number" }
      }
    }
  }
};
