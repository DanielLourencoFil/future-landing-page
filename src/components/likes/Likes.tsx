import React from "react";

import { FaHeart, FaEye } from "react-icons/fa";

import { LikesProps } from "../../interfaces/general";

import "./Likes.sass";

interface LikesPropsExtended extends LikesProps {
	show: boolean;
}
export const Likes = ({ likes, views, show }: LikesPropsExtended) => {
	return (
		<div className={`likes ${show && "show-likes"}`}>
			<div className="likes-and-views-number">
				<FaHeart />
				<span className="text"></span>
				{`${likes} Likes`}
			</div>
			<div className="likes-and-views-number">
				<FaEye />
				<span className="text"></span>
				{`${views} Views`}
			</div>
		</div>
	);
};
