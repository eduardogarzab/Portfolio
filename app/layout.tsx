import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import type React from "react";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
	title: "Eduardo Garza - Portfolio",
	description: "Personal portfolio showcasing my projects and skills as a developer.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} bg-light dark:bg-dark text-gray-900 dark:text-gray-100 transition-colors duration-300 min-h-screen`}>
				{/* Apply global background styles here */}
				{/* If you want a background image or gradient */}
				<div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20 z-0"></div>
				<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 opacity-50 z-0"></div> {/* Gradient */}
				{/* Page Content */}
				<Providers>
					<Navbar />
					<main className="container mx-auto px-4 py-8">{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
