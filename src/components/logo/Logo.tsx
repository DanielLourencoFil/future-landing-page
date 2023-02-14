import React from "react";
import Img from "../../assets/images/logo.png";

import "./Logo.sass";
import { Link } from "react-router-dom";

export const Logo = () => {
	return (
		<div className="logo" id="logo">
			<Link to="/">
				<img src={Img} alt="logo" />
			</Link>
		</div>
	);
};
