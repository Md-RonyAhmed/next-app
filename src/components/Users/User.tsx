import { IUser } from "@/app/(root)/users-server/page";

const User = ({ user }: { user: IUser }) => {
  const { id, name, username } = user;
  return (
    <div>
      <h2>
        {id}.{name}
      </h2>
      <p>Username: {username}</p>
    </div>
  );
};

export default User;
