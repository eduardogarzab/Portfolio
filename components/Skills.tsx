import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiPostgresql } from "react-icons/si";

const skills = [
	{ name: "React", icon: FaReact, color: "#61DBFB", level: 90 },
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
		<section id="skills" className="py-24 px-6 scroll-mt-[52px]">
			<h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center">
				{skills.map(({ name, icon: Icon, color, level }) => (
					<div key={name} className="group relative bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg transition duration-300 w-full flex flex-col justify-between overflow-hidden">
						{/* Parte superior con ícono y nombre */}
						<div className="p-6 flex flex-col items-center">
							<Icon className="text-6xl transition duration-300 group-hover:scale-110" style={{ color }} />
							<p className="text-center mt-4 font-semibold text-lg">{name}</p>
						</div>

						{/* Barra de progreso, alineada al fondo */}
						<div className="w-full h-2 bg-gray-300 dark:bg-gray-600 rounded-b-xl mt-2">
							{/* Barra interna que tiene el color y el ancho según el nivel */}
							<div
								className="h-full rounded-b-xl"
								style={{
									width: `${level}%`,
									backgroundColor: color,
								}}></div>
						</div>

						{/* Hover para mostrar el nivel */}
						<div className="absolute inset-0 flex items-center justify-center rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-black bg-opacity-50">
							<p className="text-white text-xl font-bold">{level}%</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}
