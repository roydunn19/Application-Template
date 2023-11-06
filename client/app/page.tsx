import { getServerSession } from "next-auth";
import Layout from "./layout";

export default async function Home() {
  const session = await getServerSession();

  return <></>;
}
