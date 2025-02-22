import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPostgresql } from "react-icons/si";
import Section from "./Section";

const skills = [
	{ name: "React", icon: FaReact, color: "#61DAFB", level: 90 },
	{ name: "Node.js", icon: FaNodeJs, color: "#68A063", level: 85 },
	{ name: "Python", icon: FaPython, color: "#3776AB", level: 80 },
	{ name: "HTML5", icon: FaHtml5, color: "#E34F26", level: 95 },
	{ name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: 90 },
	{ name: "JavaScript", icon: FaJs, color: "#F7DF1E", level: 85 },
	{ name: "TailwindCSS", icon: SiTailwindcss, color: "#38B2AC", level: 85 },
	{ name: "MongoDB", icon: SiMongodb, color: "#47A248", level: 80 },
	{ name: "PostgreSQL", icon: SiPostgresql, color: "#336791", level: 75 },
	{ name: "Git", icon: FaGitAlt, color: "#F05032", level: 90 },
];

export default function Skills() {
	return (
		<Section id="skills" className="scroll-mt-[52px]">
			<div className="space-y-12">
				<h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
					Technical <span className="text-blue-500">Skills</span>
				</h2>

				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
					{skills.map(({ name, icon: Icon, color, level }) => (
						<div key={name} className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6">
							{/* Contenido principal */}
							<div className="flex flex-col items-center space-y-4">
								<Icon className="text-5xl transition-transform duration-300 group-hover:scale-110" style={{ color }} />

								<div className="text-center space-y-2">
									<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{name}</h3>

									<div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
										<div
											className="h-full rounded-full transition-all duration-500"
											style={{
												width: `${level}%`,
												backgroundColor: color,
											}}
										/>
									</div>
								</div>
							</div>

							<div className="absolute inset-0 flex items-center justify-center rounded-xl bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
								<span className="text-2xl font-bold text-white" style={{ textShadow: `0 0 10px ${color}` }}>
									{level}%
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
}
