import { useSession, signIn } from "next-auth/react";
import HomeAppBar from "../components/homeAppBar";

const Page = () => {
  const { data, status } = useSession();
  if (status === "loading") return <h1> loading... please wait</h1>;
  if (status === "authenticated") {
    return <HomeAppBar />;
  }
  return (
    <div>
      <button onClick={() => signIn("google")}>sign in with gooogle</button>
    </div>
  );
};

export default Page;
