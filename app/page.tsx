import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import dynamic from "next/dynamic";

const Hero = dynamic(() => import("@/components/Hero"));

export default function Page() {
	return (
		<>
			<Hero />
			<About />
			<Projects />
			<Skills />
			<Contact />
		</>
	);
}
