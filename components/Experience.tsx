"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const experiences = [
	{
		company: "Intars",
		role: "Business Digitalization & Web Development Lead",
		duration: "Sep 2024 - Present",
		location: "Monterrey, NL",
		description: "Led corporate website development and digital transformation initiatives, implementing automation solutions that boosted operational efficiency.",
		technologies: ["HTML/CSS", "JavaScript", "PHP", "Google Workspace", "Web Automation"],
	},
	{
		company: "Freelance Projects",
		role: "Fortnite Creative Developer",
		duration: "Dec 2023 - Jun 2024",
		location: "Monterrey, NL",
		description: "Designed and monetized popular interactive game experiences reaching 1,500+ concurrent users through strategic creative development.",
		technologies: ["Unreal Engine", "Game Design"],
	},
	{
		company: "Private Tutor",
		role: "Academic Tutor - STEM Subjects",
		duration: "Aug 2023 - Dec 2023",
		location: "Monterrey, NL",
		description: "Delivered personalized STEM education improving academic performance for 90%+ of students through tailored learning strategies.",
		technologies: ["Mathematics", "Physics", "Chemistry"],
	},
];

const ExperienceCard = ({ experience, index }: { experience: (typeof experiences)[0]; index: number }) => (
	<motion.div
		className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border-2 border-gray-100 dark:border-gray-700"
		initial={{ opacity: 0, y: 50 }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.5, delay: index * 0.1 }}
		viewport={{ once: true, margin: "-100px" }}>
		<div className="flex justify-between items-start mb-4">
			<div>
				<h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{experience.role}</h3>
				<p className="text-blue-500 font-medium">{experience.company}</p>
			</div>
			<div className="text-right">
				<p className="text-sm text-gray-600 dark:text-gray-400">{experience.duration}</p>
				<p className="text-sm text-gray-500 dark:text-gray-300">{experience.location}</p>
			</div>
		</div>

		<p className="text-gray-600 dark:text-gray-300 mb-4">{experience.description}</p>

		<div className="flex flex-wrap gap-2">
			{experience.technologies.map((tech) => (
				<span key={tech} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium hover:bg-blue-500/20">
					{tech}
				</span>
			))}
		</div>
	</motion.div>
);

export default function Experience() {
	return (
		<Section id="experience">
			<div className="space-y-12">
				<h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
					Professional <span className="text-blue-500">Experience</span>
				</h2>

				<div className="space-y-8 max-w-4xl mx-auto">
					{experiences.map((experience, index) => (
						<ExperienceCard key={experience.company} experience={experience} index={index} />
					))}
				</div>
			</div>
		</Section>
	);
}
