import { MdKeyboardArrowUp } from "react-icons/md";
import "./BackTop.sass";

export const BackTop = () => {
	return (
		<a href="#logo">
			<button className="backTop-btn">
				<MdKeyboardArrowUp className="arrow-up-icon" />
			</button>
		</a>
	);
};
