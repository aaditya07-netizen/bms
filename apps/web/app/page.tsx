import { prisma } from "@repo/db/client";

export default async function Home() {

  // Create a new user
  await prisma.user.create({
    data: {
      username: "aditya",
      password: "123456"
    }
  });

  // Fetch all users
  const users = await prisma.user.findMany();

  return (
    <div>
      <h1>Hello from BMS Web App 🚀</h1>

      <h2>Users in Database</h2>

      {users.map((user) => (
        <div key={user.id}>
          <p>Username: {user.username}</p>
          <p>Password: {user.password}</p>
        </div>
      ))}
    </div>
  );
}