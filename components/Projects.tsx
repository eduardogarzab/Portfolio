import Image from "next/image";
import { FaGithub, FaArrowDown } from "react-icons/fa";
import Section from "./Section";

const projects = [
	{
		title: "Corporate Website",
		description: "A corporate website built for a real company. It includes about, services, and contact sections.",
		image: "/img/project1.png",
		link: "https://intars.com.mx",
		github: "",
		technologies: ["HTML", "CSS", "JavaScript", "PHP"],
	},
];

const TechnologyTag = ({ technology }: { technology: string }) => {
	const colors = {
		HTML: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
		CSS: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
		JavaScript: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
		PHP: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
	};

	return <span className={`px-3 py-1 rounded-full text-sm font-medium ${colors[technology as keyof typeof colors]}`}>{technology}</span>;
};

export default function Projects() {
	return (
		<Section id="projects">
			<div className="space-y-12">
				<h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
					My <span className="text-blue-500">Projects</span>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{projects.map((project) => (
						<div key={project.title} className="group relative rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl dark:bg-gray-800">
							<a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
								{/* Image Container */}
								<div className="relative h-52 w-full">
									{project.image ? (
										<Image
											src={project.image}
											alt={project.title}
											fill
											className="object-cover object-top transition-opacity group-hover:opacity-90"
											sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
											loading="lazy"
										/>
									) : (
										<div className="h-full w-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
											<p className="text-gray-500 dark:text-gray-400">No Image Available</p>
										</div>
									)}
								</div>

								{/* Content Container */}
								<div className="p-6 space-y-4">
									{/* Title and Technologies */}
									<div className="space-y-3">
										<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{project.title}</h3>

										<div className="flex flex-wrap gap-2">
											{project.technologies.map((tech) => (
												<TechnologyTag key={tech} technology={tech} />
											))}
										</div>
									</div>

									{/* Description */}
									<p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>

									{/* GitHub Link */}
									{project.github && (
										<div className="pt-2">
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
												<FaGithub className="text-lg" />
												<span className="font-medium">View Code</span>
											</a>
										</div>
									)}
								</div>
							</a>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
}
