import { BackTop } from "../";
import "./Footer.sass";

export const Footer = () => {
	const currentYear: number = new Date().getFullYear();
	return (
		<div className="main-container footer-main-container">
			<BackTop />
			<section className="footer center">
				<p className="text">
					COPYRIGHT &copy; {currentYear} FUTURE. ALL RIGHTS RESERVED
				</p>
				<p className="text">FACEBOOK | TWITTER | GOOGLE+ | LINKEDIN</p>
			</section>
		</div>
	);
};
