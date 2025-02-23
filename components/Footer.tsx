import { Github, Linkedin } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-white/80 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 backdrop-blur-md mx-auto">
			<div className="container mx-auto px-4 md:px-6 py-4">
				<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
					<p className="text-gray-600 dark:text-gray-400 font-medium">© {new Date().getFullYear()} Eduardo Garza. All rights reserved.</p>

					<div className="flex space-x-5">
						<a
							href="https://github.com/eduardogarzab"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 p-2 rounded-xl"
							aria-label="GitHub">
							<Github size={22} className="hover:scale-110 transition-transform" />
						</a>
						<a
							href="https://linkedin.com/in/eduardogarzab"
							target="_blank"
							rel="noopener noreferrer"
							className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors duration-300 p-2 rounded-xl"
							aria-label="LinkedIn">
							<Linkedin size={22} className="hover:scale-110 transition-transform" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
