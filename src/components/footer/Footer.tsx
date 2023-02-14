import { BackTop } from "../";
import "./Footer.sass";

export const Footer = () => {
	return (
		<div className="main-container footer-main-container">
			<BackTop />
			<section className="footer center">
				<p className="text">
					COPYRIGHT &copy; 2017 FUTURE. ALL RIGHTS RESERVED
				</p>
				<p className="text">FACEBOOK | TWITTER | GOOGLE+ | LINKEDIN</p>
			</section>
		</div>
	);
};
