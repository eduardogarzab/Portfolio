import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type React from "react";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Eduardo Garza | Portfolio",
	description: "Personal portfolio showcasing my projects and skills as a developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" suppressHydrationWarning className="dark">
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta name="description" content={metadata.description} />
			<body className={`${inter.className} bg-light dark:bg-dark text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
				<Providers>
					<Navbar />
					<main>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
