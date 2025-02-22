"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		setMounted(true);
		if (!localStorage.getItem("theme")) {
			setTheme("dark");
		}
	}, [setTheme]);

	if (!mounted) return null;

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	const menuVariants = {
		closed: { opacity: 0, y: -20 },
		open: { opacity: 1, y: 0 },
	};

	return (
		<nav className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50">
			<div className="container mx-auto px-4 py-4 flex justify-between items-center">
				<div className="flex items-center space-x-6">
					<Link
						href="#"
						className="text-2xl font-bold cursor-pointer"
						onClick={(e) => {
							e.preventDefault();
							window.history.replaceState(null, "", "/");
							document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
						}}>
						Eduardo<span className="text-blue-500">.</span>
					</Link>
					<div className="hidden md:flex space-x-6 items-center">
						<Link href="#about" className="hover:text-gray-600 dark:hover:text-gray-300">
							About
						</Link>
						<Link href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300">
							Projects
						</Link>
						<Link href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300">
							Contact
						</Link>
					</div>
				</div>

				<div className="hidden md:flex space-x-4 items-center ml-auto">
					<button
						onClick={toggleTheme}
						className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700"
						aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
						{theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
					</button>
					<button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-sm font-medium">ES</button>
					<a href="/ITC_6to_Eduardo Garza.pdf" download className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300">
						Resume
					</a>
				</div>

				<div className="md:hidden">
					<button onClick={toggleMenu} className="p-2 transition-transform duration-200 ease-in-out transform hover:scale-110">
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>
			</div>

			<AnimatePresence>
				{isMenuOpen && (
					<motion.div
						className="md:hidden bg-white dark:bg-gray-900 py-4 overflow-hidden will-change-transform"
						initial="closed"
						animate="open"
						exit="closed"
						variants={menuVariants}
						transition={{ duration: 0.2 }}>
						<div className="container mx-auto px-4 flex flex-col space-y-4">
							<Link href="#about" className="hover:text-gray-600 dark:hover:text-gray-300" onClick={toggleMenu}>
								About
							</Link>
							<Link href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300" onClick={toggleMenu}>
								Projects
							</Link>
							<Link href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300" onClick={toggleMenu}>
								Contact
							</Link>
							<div className="flex justify-between space-x-4">
								<a href="/ITC_6to_Eduardo Garza.pdf" download className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300 text-center flex-1">
									Resume
								</a>
								<div className="flex space-x-4 items-center">
									<button
										onClick={toggleTheme}
										className="p-2 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700"
										aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
										{theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
									</button>
									<button className="p-2 w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-sm font-medium">ES</button>
								</div>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
