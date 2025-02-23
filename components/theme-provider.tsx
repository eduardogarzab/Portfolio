"use client";

import dynamic from "next/dynamic";

const NextThemesProvider = dynamic(() => import("next-themes").then((mod) => mod.ThemeProvider), { ssr: false });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
	return <NextThemesProvider>{children}</NextThemesProvider>;
}
