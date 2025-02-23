"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
import Section from "./Section";

export default function Hero() {
	return (
		<Section id="hero" className="flex flex-col items-center justify-center text-center min-h-screen relative overflow-hidden">
			{/* Fondo animado mejorado */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-400/30 via-blue-500/20 to-transparent dark:from-blue-900/30 dark:via-blue-800/20 animate-pulse-glow" />
				<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white/40 dark:via-gray-900/80 dark:to-gray-900" />
			</div>

			<div className="flex flex-col items-center relative">
				<motion.h1
					className="text-5xl sm:text-6xl font-extrabold text-gray-800 dark:text-white drop-shadow-lg"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2 }}>
					<span className="block sm:inline">Hi, I'm</span>{" "}
					<span className="whitespace-nowrap bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 bg-clip-text text-transparent">Eduardo Garza</span>
				</motion.h1>

				<motion.p
					className="mt-4 text-xl sm:text-xl font-medium text-gray-600 dark:text-gray-300 drop-shadow-lg"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2, delay: 0.1 }}>
					<span>Building the </span>
					<span className="bg-gradient-to-r from-green-600 to-cyan-700 bg-clip-text text-transparent">future</span>, <span>one line of </span>
					<span className="bg-gradient-to-r from-purple-600 to-pink-700 bg-clip-text text-transparent">code</span> at a time.
				</motion.p>

				<motion.div className="mt-6 flex space-x-4 justify-center" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 0.2 }}>
					<a
						href="https://github.com/eduardogarzab"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-2xl sm:text-3xl transition-all transform hover:scale-110 p-2 rounded-xl">
						<FaGithub />
					</a>
					<a
						href="https://linkedin.com/in/eduardogarzab"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white text-2xl sm:text-3xl transition-all transform hover:scale-110 p-2 rounded-xl">
						<FaLinkedin />
					</a>
				</motion.div>

				<motion.a
					href="#contact"
					className="mt-6 inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all transform hover:scale-105 mx-auto"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.2, delay: 0.3 }}>
					Contact Me
				</motion.a>
			</div>

			<motion.div className="w-full absolute bottom-8 left-0 flex justify-center" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
				<button
					onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
					className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer p-2 rounded-xl"
					aria-label="Scroll to next section">
					<FaArrowDown className="text-3xl animate-bounce" />
				</button>
			</motion.div>
		</Section>
	);
}
