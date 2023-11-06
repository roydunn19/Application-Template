"use client";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";
import { AppBar, Button, Typography } from "@mui/material";

function AuthButton() {
  const { data: session } = useSession();

  if (session) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
        {session?.user?.name} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
      </div>
    );
  }
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
    </>
  );
}

export default function NavMenu() {
  return (
    <AppBar
      position="static"
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h3">App Name</Typography>
      <AuthButton />
    </AppBar>
  );
}
