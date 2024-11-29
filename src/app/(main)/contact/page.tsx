'use client'
import MessageForm from "@/src/components/MessageForm";
import ContactLink from "@/src/components/ContactButtons";
import { FiMail, FiGithub, FiTwitter, FiYoutube } from "react-icons/fi";
import { SiDiscord } from "react-icons/si";
import { motion } from "framer-motion";
import TimeStatus from "@/src/components/TimeStatus";
import { Code } from "@nextui-org/react";

export default function Contact() {
	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.95 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.95 }}
			transition={{ ease: "easeOut", duration: 0.15 }}
			className="w-full"
		>
			<div className="flex flex-col items-center justify-center gap-1 mb-2">
				<span className="text-5xl font-extrabold text-center items-center justify-center text-primary-300">Contact</span>
				<span className="text-center p-4">
					Contact me about any inquiries you may have, I aim to response within <Code color="primary" size="sm">7 Days</Code>
				</span>
				<TimeStatus className="p-2" />
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 md:gap-3 mb-18">
				<MessageForm />
				<div className="row-start-1 md:row-auto">
					<ContactLink
						name="jokerxtd"
						icon={<SiDiscord className="w-5 h-5 text-[#5865F2]" />}
						link="https://discord.gg/HgasfQEJUr"
						borderColor="hover:border-[#5865F2]/50"
					/>
					<ContactLink
						name="@JoKeRxHD"
						icon={<FiTwitter className="w-5 h-5 text-[#1DA1F2]" />}
						link="https://twitter.com/JoKeRxHD"
						borderColor="hover:border-[#1DA1F2]/50"
					/>
					<ContactLink
						name="Github"
						icon={<FiGithub className="w-5 h-5 text-gray-400" />}
						link="https://github.com/jokerxtd"
						borderColor="hover:border-gray-400/50"
					/>
					<ContactLink
						name="Youtube"
						icon={<FiYoutube className="w-5 h-5 text-red-800" />}
						link="#"
						borderColor="hover:border-red-800/50"
					/>
					<ContactLink
						name="contact@tomdev.xyz"
						icon={<FiMail className="w-5 h-5 text-white-400" />}
						link="mailto:contact@tomdev.xyz"
						borderColor="hover:border-white/50"
					/>
				</div>
			</div>
		</motion.div>
	);
};
