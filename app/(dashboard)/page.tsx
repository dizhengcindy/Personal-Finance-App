import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  await auth.protect();

  return (
   <p>This is an authenticated route</p>
  );
}
