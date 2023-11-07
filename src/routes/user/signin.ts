import { RouteOptions } from "fastify";
import { signin } from "../../servicios";
import { User } from "../../entidades";

export const signinRoute: RouteOptions = {
  method: "POST",
  url: "/signin",
  handler: async (request, reply) => {
    const { body } = request;
    const { email, password } = body as User;
    try {
      const user = await signin(email, password);
      reply.status(200).send(user);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
        reply.status(500).send(err);
      }
    }
  },
};
