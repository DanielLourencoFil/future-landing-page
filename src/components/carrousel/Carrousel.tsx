import { useState } from "react";
import "./Carrousel.sass";

import { FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LatestWorksProps } from "../../interfaces/general";
import { ItemProps } from "../home/latestWorks/LatestWorks";
interface CarrouselProps {
	info: LatestWorksProps[];
	item: ItemProps;
	cb: React.Dispatch<React.SetStateAction<ItemProps>>;
}
export const Carrousel = ({ info, item, cb }: CarrouselProps) => {
	const [move, setMove] = useState<number>(0);

	const handleMove = (direction: string) => {
		if (direction === "left" && move + item.index > 0) setMove(move - 1);
		if (direction === "right" && move + item.index < info.length - 1)
			setMove(move + 1);
	};

	return (
		<div
			className={`main-container carrousel-main-container ${
				item.show && "show-carrousel"
			}`}
		>
			<section className="carrousel">
				<button
					className="close-btn"
					onClick={() => {
						cb({ index: 0, show: false });
						setMove(0);
						document.body.style.overflow = "scroll";
					}}
				>
					<FaTimes />
				</button>
				<button className="slide-btn left" onClick={() => handleMove("left")}>
					<FaChevronLeft />
				</button>
				<button className="slide-btn right" onClick={() => handleMove("right")}>
					<FaChevronRight />
				</button>
				<img
					src={info[item.index + move].img}
					alt={info[item.index + move].type}
					className="carrousel-img"
				/>
				<div className="desc-carrousel">
					<h1 className="title ">{info[item.index + move].type}</h1>
				</div>
			</section>
		</div>
	);
};
