"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import Section from "./Section";

export default function Hero() {
	return (
		<Section id="hero" className="flex flex-col items-center justify-center text-center min-h-screen relative">
			<div className="flex flex-col items-center">
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

				<motion.div className="mt-6 flex space-x-4 justify-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 0.2 }}>
					<a
						href="https://github.com/eduardogarzab"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-2xl sm:text-3xl transition transform hover:scale-110"
						aria-label="GitHub">
						<FaGithub />
					</a>
					<a
						href="https://linkedin.com/in/eduardogarzab"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white text-2xl sm:text-3xl transition transform hover:scale-110"
						aria-label="LinkedIn">
						<FaLinkedin />
					</a>
				</motion.div>

				<motion.a
					href="#contact"
					className="mt-6 inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-lg shadow-md transition transform hover:scale-105 will-change-transform mx-auto"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2, delay: 0.3 }}>
					Contact Me
				</motion.a>
			</div>

			<motion.div className="w-full absolute bottom-8 left-0 flex justify-center" animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
				<button
					onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
					className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer"
					aria-label="Scroll to next section">
					<FaArrowDown className="text-3xl" />
				</button>
			</motion.div>
		</Section>
	);
}
