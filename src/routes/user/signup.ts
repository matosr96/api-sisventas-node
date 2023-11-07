import { RouteOptions } from "fastify";
import { signup } from "../../servicios";
import { User } from "../../entidades";

export const signupRoute: RouteOptions = {
  method: "POST",
  url: "/signup",
  handler: async (request, reply) => {
    const { body } = request;
    const data = body as User;
    try {
      const user = await signup(data);
      reply.status(200).send(user);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
