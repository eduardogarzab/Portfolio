import Image from "next/image";
import { FaGithub, FaHtml5, FaCss3Alt, FaJs, FaPhp } from "react-icons/fa"; // Importa los iconos adecuados

const projects = [
	{
		title: "Corporate Website",
		description: "A corporate website built for a real company. It includes about, services, and contact sections.",
		image: "/img/project1.png",
		link: "https://intars.com.mx",
		github: "",
		technologies: ["Html", "Css", "JS", "PHP"], // Aquí van las tecnologías
	},
];

export default function Projects() {
	return (
		<section id="projects" className="py-24 px-6 scroll-mt-[52px]">
			<h2 className="text-3xl font-bold text-center mb-8">
				My <span className="text-blue-500">Projects</span>
			</h2>
			<div className="flex flex-wrap justify-center gap-8">
				{projects.map(({ title, description, image, link, github, technologies }) => (
					<div key={title} className="group relative border-gray-500 dark:border-gray-400 rounded-xl overflow-hidden shadow-lg transition-transform transform hover:scale-105">
						{/* Toda la card se vuelve un enlace */}
						<a href={link} target="_blank" rel="noopener noreferrer" className="w-full h-full block">
							{/* Imagen con nuevas propiedades de Next.js 13 */}
							<div className="relative w-full h-48">
								{image ? (
									<Image
										src={image}
										alt={title}
										fill
										style={{ objectFit: "cover", objectPosition: "top" }}
										className="group-hover:opacity-80 transition duration-300"
										loading="lazy"
									/>
								) : (
									<div className="w-full h-full bg-gray-300 flex items-center justify-center">
										<p className="text-white">No Image Available</p>
									</div>
								)}
							</div>
							<div className="p-4 bg-white dark:bg-gray-800 flex flex-col flex-grow">
								{/* Título */}
								<div className="flex justify-between items-start">
									<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
								</div>

								{/* Iconos de tecnologías debajo del título */}
								<div className="flex space-x-2 mt-2">
									{technologies.includes("Html") && <FaHtml5 className="text-orange-500 text-xl hover:text-orange-700 transition duration-300" />}
									{technologies.includes("Css") && <FaCss3Alt className="text-blue-500 text-xl hover:text-blue-700 transition duration-300" />}
									{technologies.includes("JS") && <FaJs className="text-yellow-500 text-xl hover:text-yellow-700 transition duration-300" />}
									{technologies.includes("PHP") && <FaPhp className="text-blue-500 text-xl hover:text-blue-700 transition duration-300" />}
								</div>

								{/* Descripción */}
								<p className="text-gray-600 dark:text-gray-400 mt-2 flex-grow">{description}</p>
								<div className="mt-4 flex justify-between items-center">
									{github && (
										<a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 flex items-center">
											<FaGithub className="mr-2" /> GitHub
										</a>
									)}
								</div>
							</div>
						</a>
					</div>
				))}
			</div>
		</section>
	);
}
