"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
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

		// Simulate form submission (you should replace this with an actual API request)
		await new Promise((resolve) => setTimeout(resolve, 1500));

		setIsSubmitting(false);
		setSubmitMessage("Thank you for your message! I'll get back to you soon.");
		setFormData({ name: "", email: "", subject: "", message: "" });
	};

	return (
		<section id="contact" className="py-24 duration-300 overflow-hidden relative">
			<div className="container mx-auto px-6">
				<motion.h2
					className="text-3xl font-bold mb-12 text-center text-gray-800 dark:text-white"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}>
					Contact <span className="text-blue-500">Me</span>
				</motion.h2>

				{/* Contact Info and Form */}
				<div className="flex flex-col lg:flex-row gap-12">
					{/* Contact Information */}
					<motion.div className="lg:w-1/3" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
						<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6">
							<h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Contact Information</h3>
							<div className="space-y-4">
								<a
									href="mailto:musmanzafar53@gmail.com"
									className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
									<Mail className="w-6 h-6 mr-3 text-blue-500" />
									eduardo.garzab@udem.edu
								</a>
								<a href="tel:+923055356766" className="flex items-center text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
									<Phone className="w-6 h-6 mr-3 text-blue-500" />
									+52-811-6880791
								</a>
								<div className="flex items-center text-gray-600 dark:text-gray-300">
									<MapPin className="w-6 h-6 mr-3 text-blue-500" />
									Monterrey, Mexico
								</div>
							</div>
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.div className="lg:w-2/3" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
						<form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg space-y-6">
							{/* Name and Email */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div>
									<label htmlFor="name" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white"
									/>
								</div>
								<div>
									<label htmlFor="email" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white"
									/>
								</div>
							</div>

							{/* Subject field */}
							<div>
								<label htmlFor="subject" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
									Subject
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formData.subject}
									onChange={handleChange}
									required
									className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white"
								/>
							</div>

							{/* Message field */}
							<div>
								<label htmlFor="message" className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formData.message}
									onChange={handleChange}
									required
									rows={4}
									className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 text-gray-900 dark:text-white"></textarea>
							</div>
							<button
								type="submit"
								disabled={isSubmitting}
								className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
								{isSubmitting ? "Sending..." : "Send Message"}
							</button>
						</form>
						{submitMessage && <div className="mt-6 p-4 bg-green-100 dark:bg-green-800 text-green-700 dark:text-green-300 rounded-md">{submitMessage}</div>}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
