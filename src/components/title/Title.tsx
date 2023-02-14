import { TitleProps } from "../../interfaces/general";

import "./Title.sass";

export const Title = ({ text, children }: TitleProps) => {
	return (
		<div className="title-container">
			{children}
			<h1 className="title">{text}</h1>
			<span className="underline"></span>
		</div>
	);
};
