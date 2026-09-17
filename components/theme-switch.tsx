"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "@/components/icons";

export const ThemeSwitch = () => {
  const [mounted, setMounted] = React.useState(false);
  const { theme, setTheme } = useTheme();

  React.useEffect(() => {
    // Theme is unknown on the server, so this defers the icon to the client
    // to avoid a hydration mismatch — no non-effect equivalent exists.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9" />;
  }

  const isDark = theme === "dark";

  return (
    <button
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="flex h-9 w-9 items-center justify-center rounded-md border border-divider text-foreground transition-colors hover:border-primary hover:text-primary"
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
    >
      {isDark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
    </button>
  );
};
