"use client";

import { Cloud } from "lucide-react";
import Section from "./Section";
import { motion } from "framer-motion";

const groupedSkills = {
	"Frontend Development": ["HTML5", "CSS3", "JavaScript", "PHP", "React", "Next.js", "TailwindCSS"],
	"Backend Development": ["Python", "Node.js", "Flask"],
	Databases: ["MySQL", "Firebase"],
	Cloud: ["Google Cloud", "AWS"],
	DevOps: ["Docker", "Git", "Linux"],
	Tools: ["VS Code", "Figma", "Github", "Trello"],
};

const TechnologyTag = ({ technology }: { technology: string }) => (
	<span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium transition hover:bg-blue-500/20">{technology}</span>
);

export default function Skills() {
	return (
		<Section id="skills" className="scroll-mt-[52px]">
			<div className="space-y-12">
				<h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
					Tech <span className="text-blue-500">Stack</span>
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{Object.entries(groupedSkills).map(([category, skills], index) => (
						<motion.div
							key={category}
							className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}>
							<h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">{category}</h3>

							<div className="flex flex-wrap gap-2">
								{skills.map((tech) => (
									<TechnologyTag key={tech} technology={tech} />
								))}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</Section>
	);
}
