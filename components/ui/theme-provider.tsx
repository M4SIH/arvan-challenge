"use client";

import {
  ThemeProvider as NextThemesProvider,
  type Attribute,
} from "next-themes";

interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;
  storageKey?: string;
  attribute?: Attribute;
}

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "arvan-theme",
  attribute = "class",
  ...props
}: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute={attribute}
      defaultTheme={defaultTheme}
      storageKey={storageKey}
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}
