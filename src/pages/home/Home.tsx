import React from "react";
import { Contact, Hero, LatestWorks, WhatWeDo, Footer } from "../../components";

export const Home = () => {
	return (
		<div className="home">
			<Hero />
			<WhatWeDo />
			<LatestWorks />
			<Contact />
			<Footer />
		</div>
	);
};
