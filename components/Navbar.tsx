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
	const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

	const menuVariants = {
		closed: { opacity: 0, y: -20 },
		open: { opacity: 1, y: 0 },
	};

	const navLinks = [
		{ href: "#about", label: "About" },
		{ href: "#projects", label: "Projects" },
		{ href: "#contact", label: "Contact" },
	];

	return (
		<nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 fixed top-0 w-full z-50 shadow-sm">
			<div className="container mx-auto px-4 md:px-6 py-3">
				<div className="flex justify-between items-center">
					{/* Logo and links */}
					<div className="flex items-center space-x-8">
						<Link
							href="#"
							className="text-2xl font-bold hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
							onClick={(e) => {
								e.preventDefault();
								window.scrollTo({ top: 0, behavior: "smooth" });
							}}>
							Eduardo<span className="text-blue-500">.</span>
						</Link>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-8">
							{navLinks.map((link) => (
								<Link key={link.href} href={link.href} className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium">
									{link.label}
								</Link>
							))}
						</div>
					</div>

					{/* Desktop Actions */}
					<div className="hidden md:flex items-center space-x-4">
						<button
							onClick={toggleTheme}
							className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors hover:scale-[1.02]"
							aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}>
							{theme === "light" ? <Moon size={20} className="text-gray-700 dark:text-gray-300" /> : <Sun size={20} className="text-gray-700 dark:text-gray-300" />}
						</button>
						<a
							href="/ITC_6to_Eduardo Garza.pdf"
							download
							className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-5 py-2.5 rounded-xl transition-all font-medium hover:scale-[1.02] h-11">
							Resume
						</a>
					</div>

					{/* Mobile Menu Button */}
					<button onClick={toggleMenu} className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
						{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
					</button>
				</div>

				{/* Mobile Menu */}
				<AnimatePresence>
					{isMenuOpen && (
						<motion.div
							className="md:hidden mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
							initial="closed"
							animate="open"
							exit="closed"
							variants={menuVariants}
							transition={{ duration: 0.2 }}>
							<div className="flex flex-col space-y-4">
								{navLinks.map((link) => (
									<Link
										key={link.href}
										href={link.href}
										className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
										onClick={toggleMenu}>
										{link.label}
									</Link>
								))}
								<div className="flex items-center justify-between pt-4 space-x-4">
									<button
										onClick={toggleTheme}
										className="w-11 h-11 flex items-center justify-center rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors hover:scale-[1.02]">
										{theme === "light" ? <Moon size={20} className="text-gray-700 dark:text-gray-300" /> : <Sun size={20} className="text-gray-700 dark:text-gray-300" />}
									</button>
									<a
										href="/ITC_6to_Eduardo Garza.pdf"
										download
										className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-5 py-2.5 rounded-xl transition-all font-medium hover:scale-[1.02] h-11 flex items-center justify-center flex-1">
										Resume
									</a>
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</nav>
	);
};

export default Navbar;
