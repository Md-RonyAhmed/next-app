import User from "@/components/Users/User";

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
}

export default async function getUsersFromServer() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "force-cache",
  });
  const users: IUser[] = await response.json();
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });

  return (
    <>
      {users.map((user: IUser) => (
        <User user={user} key={user.id} />
      ))}
    </>
  );
}
