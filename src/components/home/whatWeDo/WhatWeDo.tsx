import React from "react";

import { WhatWeDoCard, Title } from "../..";

import { WhatProps } from "../../../interfaces/general";

import "./WhatWeDo.sass";

// REACT ICONS
import {
	FaOpencart,
	FaHtml5,
	FaCss3,
	FaJoomla,
	FaWordpress,
	FaDrupal,
} from "react-icons/fa";
import { DiAndroid } from "react-icons/di";
import { HiSupport } from "react-icons/hi";

const whatWeDoInfo: WhatProps[] = [
	{
		icon: <FaHtml5 />,
		title: "HTML5 SERVICE",
		desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings.",
		href: "/",
	},
	{
		icon: <FaCss3 />,
		title: "CSS3 SERVICE",
		desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings.",
		href: "/",
	},
	{
		icon: <FaOpencart />,
		title: "OPENCART SERVICE",
		desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings.",
		href: "/",
	},
	{
		icon: <FaJoomla />,
		title: "JOOMLA SERVICE",
		desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings.",
		href: "/",
	},
	{
		icon: <FaWordpress />,
		title: "PLUGINS DEVELOP",
		desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings.",
		href: "/",
	},
	{
		icon: <DiAndroid />,
		title: "APP SERVICE",
		desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings.",
		href: "/",
	},
	{
		icon: <FaDrupal />,
		title: "DRUPAL SERVICE",
		desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings.",
		href: "/",
	},
	{
		icon: <HiSupport />,
		title: "24/7 SUPPORTED",
		desc: "A wonderful serenity has taken possession of my entire soul, like these sweet mornings.",
		href: "/",
	},
];

export const WhatWeDo = () => {
	return (
		<div className="main-container" id="what-section">
			<section className="whatWeDo center">
				<Title text={"What We Do"} />
				<p className="desc-section">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod tempor incididunt ut labore et sint.
				</p>
				<div className="cards-container">
					{whatWeDoInfo.map((card) => {
						return (
							<WhatWeDoCard
								key={card.title}
								icon={card.icon}
								title={card.title}
								desc={card.desc}
								href={card.href}
							/>
						);
					})}
				</div>
			</section>
		</div>
	);
};
