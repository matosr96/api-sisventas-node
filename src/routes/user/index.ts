import { RouteOptions } from "fastify";
import { signinRoute } from "./signin";
import { signupRoute } from "./signup";

export const userRoutes: RouteOptions[] = [signinRoute, signupRoute];
