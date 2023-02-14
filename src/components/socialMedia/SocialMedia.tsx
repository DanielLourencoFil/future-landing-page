import React from "react";
import "./SocialMedia.sass";
import {
	FaFacebookF,
	FaTwitter,
	FaGooglePlusG,
	FaLinkedinIn,
} from "react-icons/fa";

import { SocialMediaIcons } from "../../interfaces/general";

const socialMediaIcons: SocialMediaIcons[] = [
	{
		name: "Facebook",
		icon: <FaFacebookF className="social-icon" />,
		href: "https://www.facebook.com",
	},
	{
		name: "Twitter",
		icon: <FaTwitter className="social-icon" />,
		href: "https://www.twitter.com",
	},
	{
		name: "Google Plus",
		icon: <FaGooglePlusG className="social-icon" />,
		href: "https://www.google.com",
	},
	{
		name: "Linkedin",
		icon: <FaLinkedinIn className="social-icon" />,
		href: "https://www.linkdedin.com",
	},
];

export const SocialMedia = () => {
	return (
		<div className="social-media">
			{socialMediaIcons.map((media) => {
				return (
					<a
						href={media.href}
						target="_blank"
						rel="noreferrer"
						key={media.name}
					>
						{media.icon}
					</a>
				);
			})}
		</div>
	);
};
