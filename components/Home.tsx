"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload, FaArrowDown } from "react-icons/fa";

export default function Hero() {
	return (
		<section id="hero" className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-52px)] px-6 relative scroll-mt-[76px]">
			<motion.h1
				className="text-4xl sm:text-6xl font-extrabold text-gray-800 dark:text-white will-change-transform"
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.2 }}>
				Hola, soy Eduardo Garza
			</motion.h1>
			<motion.p
				className="mt-4 text-lg sm:text-xl font-medium text-gray-600 dark:text-gray-400 will-change-transform"
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.2, delay: 0.1 }}>
				Building digital experiences with <span className="text-green-500">code</span> and <span className="text-green-500">creativity</span>.
			</motion.p>
			<motion.div className="mt-6 flex space-x-4" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 0.2 }}>
				<a
					href="https://github.com/yourusername"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-2xl sm:text-3xl transition transform hover:scale-110"
					aria-label="GitHub">
					<FaGithub />
				</a>
				<a
					href="https://linkedin.com/in/yourusername"
					target="_blank"
					rel="noopener noreferrer"
					className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-2xl sm:text-3xl transition transform hover:scale-110"
					aria-label="LinkedIn">
					<FaLinkedin />
				</a>
			</motion.div>
			<motion.a
				href="/resume.pdf"
				download
				className="mt-6 flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-3 rounded shadow-md transition transform hover:scale-105 will-change-transform"
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.2, delay: 0.3 }}>
				<FaDownload className="mr-2" /> Download CV
			</motion.a>
			<motion.div
				className="absolute bottom-4 flex items-center justify-center text-gray-600 dark:text-gray-400 cursor-pointer"
				animate={{ y: [0, 10, 0] }}
				transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
				onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>
				<FaArrowDown className="text-3xl" />
			</motion.div>
		</section>
	);
}
