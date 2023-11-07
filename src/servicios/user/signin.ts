import { Collection, getModel } from "../../constants-definitions";
import { PartialUser, UserSchemaMongo } from "../../entidades";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

interface UserSignin extends PartialUser {
  token: string;
}

export const signin = async (email: string,password: string): Promise<UserSignin | Error> => {
  
  const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY || "";
  const model = await getModel(Collection.USERS, UserSchemaMongo);
  const user = await model.findOne({email});
  if (!user) return new Error("No se encuentra el user");
  if (password == null) return new Error("102");
  const match = await bcrypt.compare(password, user.password);

  if (!match) return new Error("103");
  const token = await jwt.sign({ uuid: user.uuid }, JWT_SECRET_KEY, {
    expiresIn: "12h",
  });
  return { token, ...user._doc };
};
