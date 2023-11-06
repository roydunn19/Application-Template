import { getServerSession } from "next-auth";
import SessionProvider from "./components/sessionProvider";
import NavMenu from "./components/homeAppBar";
import ThemeClient from "./components/themeClient";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession();
  return (
    <html>
      <body style={{ margin: "0px" }}>
        <SessionProvider session={session}>
          <ThemeClient>
            <NavMenu />
            {children}
          </ThemeClient>
        </SessionProvider>
      </body>
    </html>
  );
};

export default Layout;
