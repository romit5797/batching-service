import DataLoader from "dataloader";
import { findOneUser } from "./services/user.service";

// Batching function for find user by id
const batchGetUserById: any = async (ids: string[]) => {
  console.log("called once per tick:", ids);
  const users = ids.map((userId: string) => findOneUser(userId) || userId);
  return users;
};

// User batch scheduler which collects all requests over a 100ms window
export const userLoader = new DataLoader(batchGetUserById, {
  batchScheduleFn: (callback) => setTimeout(callback, 100),
});
