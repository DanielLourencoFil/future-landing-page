import HeroImg from "../../../assets/images/slide1.jpg";

import { BsArrowDownCircle } from "react-icons/bs";
import "./Hero.sass";

import { Logo, Countdown, SocialMedia } from "../..";

export const Hero = () => (
	<section className="hero">
		<img className="heroImg" src={HeroImg} alt="montain landscape" />
		<div className="hero-content">
			<div className="navbar">
				<Logo />
				<SocialMedia />
			</div>
			<div className="hero-main-info">
				<h1 className="title">GET READY TO LAUNCH</h1>
				<h4 className="subtitle">
					We're coming soon! We're working hard to give you the best experience!
				</h4>
				<Countdown />
			</div>
			<a href="#what-section">
				<BsArrowDownCircle className="arrow-down" />
			</a>
		</div>
	</section>
);
