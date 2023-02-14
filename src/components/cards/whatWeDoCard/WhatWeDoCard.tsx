import { Link } from "react-router-dom";
import { WhatProps } from "../../../interfaces/general";

import "./WhatWeDoCard.sass";

export const WhatWeDoCard = ({ icon, title, desc, href }: WhatProps) => {
	return (
		<div className="card">
			<div className="icon-container">{icon}</div>
			<h1 className="title">{title}</h1>
			<p className="desc">{desc}</p>
			<Link to={href}>
				<button className="btn">Learn more</button>
			</Link>
		</div>
	);
};
