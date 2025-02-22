import Image from "next/image";
import Section from "./Section";

export default function About() {
	return (
		<Section id="about">
			<div className="flex flex-col md:flex-row items-center gap-8 mx-auto">
				<div className="w-full md:w-1/3 flex justify-center">
					<div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-blue-500/20">
						<Image src="/img/eduardo.jpeg" width={200} height={200} alt="Profile Picture" className="object-cover object-bottom w-full h-full" priority />
					</div>
				</div>

				<div className="w-full md:w-2/3 space-y-6">
					<h2 className="text-4xl font-bold text-gray-800 dark:text-white">
						About <span className="text-blue-500">Me</span>
					</h2>

					<p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
						I'm a <span className="font-semibold text-blue-500">full-stack developer</span> with expertise in building modern web applications. My core stack includes{" "}
						<span className="font-semibold text-green-500">React/Next.js</span>, <span className="font-semibold text-purple-500">Node.js</span>, and{" "}
						<span className="font-semibold text-cyan-500">TailwindCSS</span>. I specialize in creating performant, accessible, and SEO-friendly solutions with clean code architecture.
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident quisquam deserunt consectetur vero suscipit repellendus sit amet possimus veritatis. Dolor saepe nobis in
						porro possimus corrupti sed dignissimos illo totam!
					</p>

					<div className="flex flex-wrap gap-3 justify-center md:justify-start">
						{["Frontend Architecture", "Backend Development", "UI/UX Design"].map((tag) => (
							<div key={tag} className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium transition hover:bg-blue-500/20">
								{tag}
							</div>
						))}
					</div>
				</div>
			</div>
		</Section>
	);
}
