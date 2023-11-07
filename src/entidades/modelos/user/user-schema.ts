import { Schema } from "mongoose";
import { User } from "./user";
import crypto from "crypto";
import { Roltype } from "../../commons/Roltype";

export const UserSchemaMongo = new Schema<User>(
  {
    uuid: {
      type: String,
      required: true,
      unique: true,
      default: () => crypto.randomUUID(),
    },
    name: { type: String },
    rol: { type: String, default: Roltype.USER },
    email: { type: String },
    password: { type: String },
    photo: { type: String },
    phone: { type: String },
    status: { type: String, default: "active" },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
