import Image from "next/image";
import { FaGithub, FaArrowDown } from "react-icons/fa";
import Section from "./Section";

const projects = [
	{
		title: "Corporate Website",
		description: "Led end-to-end development of Intars' corporate website, enhancing brand visibility and integrated Google Workspace email systems for 30+ users.",
		image: "/img/project1.png",
		link: "https://intars.com.mx",
		github: "",
		technologies: ["HTML", "CSS", "JavaScript", "PHP"],
	},
	{
		title: "Tutoring Website",
		description: "A personal tutoring website to automate scheduling for my freelance sessions, integrating Google Calendar for seamless booking management.",
		image: "/img/project2.png",
		link: "https://edu-asesorias.web.app",
		github: "https://github.com/eduardogarzab/academic-tutoring-website",
		technologies: ["HTML", "CSS", "JavaScript"],
	},
];

const TechnologyTag = ({ technology }: { technology: string }) => {
	return <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-500/10 text-blue-600 dark:text-blue-400">{technology}</span>;
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
						<div
							key={project.title}
							className="group relative rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl dark:bg-gray-800 hover:scale-[1.02] border-2 border-transparent hover:border-blue-500/20">
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
									<div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-blue-500/20" />
								</div>

								{/* Content Container */}
								<div className="p-6 space-y-4">
									<div className="space-y-3">
										<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{project.title}</h3>
										<div className="flex flex-wrap gap-2">
											{project.technologies.map((tech) => (
												<TechnologyTag key={tech} technology={tech} />
											))}
										</div>
									</div>

									<p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>

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
