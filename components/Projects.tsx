// components/Projects.tsx
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
	{
		title: "Portfolio Website",
		description: "A modern, responsive portfolio built with Next.js and TailwindCSS.",
		image: "",
		link: "https://your-live-demo-link.com",
		github: "https://github.com/yourusername/portfolio",
	},
	{
		title: "E-Commerce Platform",
		description: "Full-stack e-commerce application with payment integration.",
		image: "",
		link: "https://your-live-demo-link.com",
		github: "https://github.com/yourusername/ecommerce",
	},
	{
		title: "Task Manager",
		description: "A simple and intuitive task manager to boost productivity.",
		image: "",
		link: "https://your-live-demo-link.com",
		github: "https://github.com/yourusername/taskmanager",
	},
];

export default function Projects() {
	return (
		<section id="projects" className="py-12 px-6 scroll-mt-[76px]">
			<h2 className="text-3xl font-bold text-center mb-8">
				My <span className="text-blue-500">Projects</span>
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map(({ title, description, image, link, github }) => (
					<div key={title} className="border border-gray-500 dark:border-gray-400 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105 flex flex-col">
						<div className="relative w-full h-48 layout-image object-cover">
							<Image src={image} alt={title} className="group-hover:opacity-80 transition duration-300" loading="lazy" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
						</div>
						<div className="p-4 bg-white dark:bg-gray-800 flex flex-col flex-grow">
							<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
							<p className="text-gray-600 dark:text-gray-400 mt-2 flex-grow">{description}</p>
							<div className="mt-4 flex justify-between items-center">
								<a href={link} target="_blank" rel="noopener noreferrer" className="text-green-500 hover:text-green-700 flex items-center">
									<FaExternalLinkAlt className="mr-2" /> Live Demo
								</a>
								<a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-gray-700 flex items-center">
									<FaGithub className="mr-2" /> GitHub
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
