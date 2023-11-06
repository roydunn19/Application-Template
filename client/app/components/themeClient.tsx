"use client";

import { ThemeProvider } from "@mui/material";
import theme from "../styles/pallette";

export default function ThemeClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
