import Image from "next/image";
import Section from "./Section";

export default function About() {
	return (
		<Section id="about">
			<div className="flex flex-col md:flex-row items-stretch gap-8 mx-auto">
				{/* Image Container */}
				<div className="w-full md:w-1/3 flex justify-center items-center">
					<div className="relative w-full max-w-[300px] h-[300px] max-h-[300px] rounded-full overflow-hidden border-4 border-blue-500/20 aspect-square flex items-center justify-center">
						<Image src="/img/eduardo.jpeg" alt="Profile Picture" width={300} height={300} className="object-cover object-center w-full h-full" priority />
					</div>
				</div>

				{/* Text Container */}
				<div className="w-full md:w-2/3 space-y-6 text-center md:text-left flex flex-col justify-center">
					<h2 className="text-4xl font-bold text-gray-800 dark:text-white">
						About <span className="text-blue-500">Me</span>
					</h2>

					<p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mx-auto md:mx-0">
						A <span className="font-semibold text-blue-500">full-stack developer</span> focused on crafting modern web and mobile solutions. I build robust applications using technologies
						like <span className="font-semibold text-green-500">React</span>, <span className="font-semibold text-purple-500">Node.js</span>, and cross-platform frameworks, always
						prioritizing scalability and user-centric design.
					</p>

					<p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mx-auto md:mx-0">
						Beyond coding, I’m deeply passionate about exploring cutting-edge innovations. From the decentralized potential of{" "}
						<span className="font-semibold text-cyan-500">blockchain</span> and <span className="font-semibold text-pink-500">Web3</span> to the transformative power of{" "}
						<span className="font-semibold text-orange-500">AI/ML</span>, I stay energized by technology’s evolution. Constantly learning, I aim to bridge today’s solutions with tomorrow’s
						possibilities.
					</p>

					<div className="flex flex-wrap gap-3 justify-center md:justify-start">
						{["Software Developer", "Web & Mobile", "Blockchain", "AI & ML", "Web3"].map((tag) => (
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
