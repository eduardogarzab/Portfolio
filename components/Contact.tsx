"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import Section from "./Section";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus(null);

		try {
			await emailjs.send(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
				{
					from_name: formData.name,
					from_email: formData.email,
					subject: formData.subject,
					message: formData.message,
				},
				process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
			);

			setSubmitStatus("success");
			setFormData({ name: "", email: "", subject: "", message: "" });
		} catch (error) {
			console.error("Error sending email:", error);
			setSubmitStatus("error");
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Section id="contact" className="scroll-mt-[52px]">
			<div className="space-y-12">
				<motion.h2
					className="text-4xl font-bold text-center text-gray-800 dark:text-white"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}>
					Get in <span className="text-blue-500">Touch</span>
				</motion.h2>

				<div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-8">
					{/* Contact Information */}
					<motion.div className="space-y-6" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
						<div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
							<h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Contact Information</h3>
							<div className="space-y-4">
								{[
									{
										icon: Mail,
										content: "eduardo.garzab@udem.edu",
										href: "mailto:eduardo.garzab@udem.edu",
									},
									{
										icon: Phone,
										content: "+52-811-6880791",
										href: "tel:+528116880791",
									},
									{
										icon: MapPin,
										content: "Monterrey, Mexico",
									},
								].map((item, index) => (
									<motion.div
										key={index}
										className="flex items-center text-gray-600 dark:text-gray-300"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ delay: index * 0.1 }}>
										<item.icon className="w-6 h-6 mr-3 text-blue-500 flex-shrink-0" />
										{item.href ? (
											<a href={item.href} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
												{item.content}
											</a>
										) : (
											<span>{item.content}</span>
										)}
									</motion.div>
								))}
							</div>
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.div className="space-y-6" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
						<form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
							<div className="space-y-6">
								<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
									<div className="space-y-2">
										<label htmlFor="name" className="block font-medium text-gray-700 dark:text-gray-300">
											Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											value={formData.name}
											onChange={handleChange}
											required
											className="w-full px-4 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-all"
										/>
									</div>
									<div className="space-y-2">
										<label htmlFor="email" className="block font-medium text-gray-700 dark:text-gray-300">
											Email
										</label>
										<input
											type="email"
											id="email"
											name="email"
											value={formData.email}
											onChange={handleChange}
											required
											className="w-full px-4 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-all"
										/>
									</div>
								</div>

								<div className="space-y-2">
									<label htmlFor="subject" className="block font-medium text-gray-700 dark:text-gray-300">
										Subject
									</label>
									<input
										type="text"
										id="subject"
										name="subject"
										value={formData.subject}
										onChange={handleChange}
										required
										className="w-full px-4 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-all"
									/>
								</div>

								<div className="space-y-2">
									<label htmlFor="message" className="block font-medium text-gray-700 dark:text-gray-300">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={4}
										className="w-full px-4 py-2 border-2 border-gray-200 dark:border-gray-700 rounded-xl bg-transparent focus:ring-2 focus:ring-blue-500 outline-none transition-all"
									/>
								</div>

								<button
									type="submit"
									disabled={isSubmitting}
									className="w-full inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-all disabled:opacity-50">
									{isSubmitting ? (
										<>
											<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
												<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
											</svg>
											Sending...
										</>
									) : (
										"Send Message"
									)}
								</button>
							</div>
						</form>

						{submitStatus === "success" && (
							<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-green-500/10 text-green-600 dark:text-green-400 rounded-xl text-center">
								¡Message sent successfully! I'll respond within 24 hours.
							</motion.div>
						)}

						{submitStatus === "error" && (
							<motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-500/10 text-red-600 dark:text-red-400 rounded-xl text-center">
								Error sending message. Please try again or contact me directly via email.
							</motion.div>
						)}
					</motion.div>
				</div>
			</div>
		</Section>
	);
};

export default Contact;
