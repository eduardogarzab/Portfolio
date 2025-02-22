import Image from "next/image";

export default function About() {
	return (
		<section id="about" className="pt-28 pb-24 px-6 flex flex-col md:flex-row items-center gap-8 scroll-mt-[52px]">
			<div className="w-full md:w-1/3 flex justify-center overflow-hidden">
				{/* Contenedor con overflow-hidden para asegurar la forma circular */}
				<div className="w-48 h-48 rounded-full overflow-hidden relative">
					<Image src="/img/eduardo.jpeg" width={200} height={200} alt="Profile Picture" className="object-cover object-bottom absolute top-0 left-0 w-full h-full" />
				</div>
			</div>
			<div className="w-full md:w-2/3 text-center md:text-left">
				<h2 className="text-3xl font-bold mb-4">
					About <span className="text-blue-500">Me</span>
				</h2>
				<p className="text-lg text-gray-700 dark:text-gray-300">
					I'm a <span className="font-semibold text-blue-500">passionate developer</span> focused on creating modern and efficient web applications. My expertise spans across{" "}
					<span className="font-semibold text-green-500">React, Node.js, and TailwindCSS</span>, always aiming to deliver <span className="underline">clean</span> and{" "}
					<span className="underline">optimized</span> code.
				</p>
				<div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
					<div className="border border-gray-500 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 dark:border-gray-400">Frontend</div>
					<div className="border border-gray-500 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 dark:border-gray-400">Backend</div>
					<div className="border border-gray-500 px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 dark:border-gray-400">UI/UX</div>
				</div>
			</div>
		</section>
	);
}
