import { useState } from "react";
import { Likes } from "../../";

import { FaSearch } from "react-icons/fa";

import { LatestWorksProps } from "../../../interfaces/general";

import "./LatestWorkCard.sass";

import { ItemProps } from "../../";

export interface LatestWorksCardProps extends LatestWorksProps {
	cb: React.Dispatch<React.SetStateAction<ItemProps>>;
	index: number;
}
export const LatestWorkCard = ({
	id,
	work,
	type,
	img,
	likes,
	views,
	index,
	cb,
}: LatestWorksCardProps) => {
	const [isShow, setIsShow] = useState<boolean>(false);

	return (
		<div
			className="work-card"
			id={id}
			onMouseEnter={() => setIsShow(true)}
			onMouseLeave={() => setIsShow(false)}
		>
			<img src={img} alt={type} />
			<div className="info-container">
				<div
					className="search"
					onClick={() => {
						cb({
							index: index,
							show: true,
						});
						document.body.style.overflow = "hidden";
					}}
				>
					<FaSearch className="search-icon" />
				</div>
				<h1 className="title">{work}</h1>
				<p className="desc">{type}</p>
				<Likes likes={likes} views={views} show={isShow} />
			</div>
		</div>
	);
};
