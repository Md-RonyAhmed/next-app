"use client";
import { fetchData } from "@/app/(root)/lib/fetchData";
import { IUser } from "@/app/(root)/users-server/page";
import { use } from "react";
import User from "./User";

const GetUsersFromClient = () => {
  const users: IUser[] = use(fetchData());
  return (
    <>
      {users.map((user: IUser) => (
        <User user={user} key={user.id} />
      ))}
    </>
  );
};

export default GetUsersFromClient;
