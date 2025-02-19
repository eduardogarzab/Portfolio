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
				<Link
					href="/"
					className="text-2xl font-bold cursor-pointer"
					onClick={(e) => {
						e.preventDefault(); // Evita la navegación completa
						document.documentElement.scrollIntoView({ behavior: "smooth" });
					}}>
					Eduardo<span className="text-blue-500">.</span>
				</Link>
				<div className="hidden md:flex space-x-4 items-center">
					<Link href="#about" className="hover:text-gray-600 dark:hover:text-gray-300">
						About
					</Link>
					<Link href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300">
						Projects
					</Link>
					<Link href="#skills" className="hover:text-gray-600 dark:hover:text-gray-300">
						Skills
					</Link>
					<Link href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300">
						Contact
					</Link>
					<a href="/path-to-your-cv.pdf" download className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300">
						Download CV
					</a>
					<button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
						{theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
					</button>
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
							<Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300" onClick={toggleMenu}>
								Home
							</Link>
							<Link href="#about" className="hover:text-gray-600 dark:hover:text-gray-300" onClick={toggleMenu}>
								About
							</Link>
							<Link href="#projects" className="hover:text-gray-600 dark:hover:text-gray-300" onClick={toggleMenu}>
								Projects
							</Link>
							<Link href="#skills" className="hover:text-gray-600 dark:hover:text-gray-300" onClick={toggleMenu}>
								Skills
							</Link>
							<Link href="#contact" className="hover:text-gray-600 dark:hover:text-gray-300" onClick={toggleMenu}>
								Contact
							</Link>
							<a href="/path-to-your-cv.pdf" download className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition duration-300 text-center">
								Download CV
							</a>
							<button onClick={toggleTheme} className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 w-10 h-10 flex items-center justify-center">
								{theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
							</button>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;
