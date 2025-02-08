"use client";
import { use } from "react";
import { IUser } from "../users-server/page";
import User from "@/components/Users/User";

const GetUsersFromClient = () => {
  const users: IUser[] = use(
    fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
      res.json()
    )
  );
  return (
    <div>
      <h1>Getting Users from Client</h1>
      <p>This page demonstrates how to fetch data from a client-side API.</p>

      {users.map((user: IUser) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default GetUsersFromClient;
