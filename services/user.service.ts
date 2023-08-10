import { fakeDb } from "../db/db";
import { User } from "../types/user.types";

// Get all users from DB
const getAllUsers = () => {
  const keys = Object.keys(fakeDb);
  const users: User[] = keys.map((e) => fakeDb[e]);
  return users;
};

// Find one user from DB
export const findOneUser = (userId: string) => {
  const user: User = fakeDb[userId];
  return user;
};
