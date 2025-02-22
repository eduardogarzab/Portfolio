import { Github, Linkedin } from "lucide-react";

const Footer = () => {
	return (
		<footer className="bg-white dark:bg-gray-900 shadow-md mt-12">
			<div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
				<p className="text-sm text-gray-600 dark:text-gray-400">© {new Date().getFullYear()} Eduardo Garza. All rights reserved.</p>
				<div className="flex space-x-4 mt-4 md:mt-0">
					<a
						href="https://github.com/eduardogarzab"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
						aria-label="GitHub">
						<Github size={20} />
					</a>
					<a
						href="https://linkedin.com/in/eduardogarzab"
						target="_blank"
						rel="noopener noreferrer"
						className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
						aria-label="LinkedIn">
						<Linkedin size={20} />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
