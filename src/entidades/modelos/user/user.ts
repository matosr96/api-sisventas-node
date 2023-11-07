import { Roltype } from "../../commons/Roltype";
export interface User {
  uuid: string;
  name: string;
  email: string;
  password: string;
  photo: string;
  phone: string;
  rol: Roltype;
  status: string;
}

export type CreateUserDTO = Omit<User, "uuid">;
export type PartialUser = Partial<User>;
