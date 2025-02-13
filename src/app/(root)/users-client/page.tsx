import GetUsersFromClient from "@/components/Users/GetUsersFromClient";
const GetUsersFromClientPage = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return (
    <div>
      <h1>Getting Users from Client</h1>
      <p>This page demonstrates how to fetch data from a client-side API.</p>
      <GetUsersFromClient />
    </div>
  );
};

export default GetUsersFromClientPage;
