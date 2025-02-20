"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitMessage, setSubmitMessage] = useState("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Here you would typically send the form data to your backend or a service like Formspree
		// For this example, we'll just simulate a submission
		await new Promise((resolve) => setTimeout(resolve, 1500));

		setIsSubmitting(false);
		setSubmitMessage("Thank you for your message! I'll get back to you soon.");
		setFormData({ name: "", email: "", message: "" });
	};

	return (
		<section id="contact" className="py-24 scroll-mt-[76px]">
			<h2 className="text-3xl font-bold mb-8 text-center">
				Contact <span className="text-blue-500">Me</span>
			</h2>
			<motion.div className="max-w-md mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }}>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label htmlFor="name" className="block mb-2 font-medium">
							Name
						</label>
						<input
							type="text"
							id="name"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
							className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
						/>
					</div>
					<div>
						<label htmlFor="email" className="block mb-2 font-medium">
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
							className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"
						/>
					</div>
					<div>
						<label htmlFor="message" className="block mb-2 font-medium">
							Message
						</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
							rows={4}
							className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700"></textarea>
					</div>
					<button type="submit" disabled={isSubmitting} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
						{isSubmitting ? "Sending..." : "Send Message"}
					</button>
				</form>
				{submitMessage && <p className="mt-4 text-green-500 text-center">{submitMessage}</p>}
			</motion.div>
		</section>
	);
};

export default Contact;
