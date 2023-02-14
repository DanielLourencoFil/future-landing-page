import HeroImg from "../../../assets/images/slide1.jpg";

import { BsArrowDownCircle } from "react-icons/bs";
import "./Hero.sass";

import { Logo, Countdown, SocialMedia } from "../..";

export const Hero = () => (
	<section className="hero">
		<Logo />
		<SocialMedia />
		<img className="heroImg" src={HeroImg} alt="montain landscape" />
		<div className="hero-content">
			<h1 className="title">GET READY TO LAUNCH</h1>
			<h4 className="subtitle">
				We're coming soon! We're working hard to give you the best experience!
			</h4>
			<Countdown />
			<a href="#what-section">
				<BsArrowDownCircle className="arrow-down" />
			</a>
		</div>
	</section>
);
