import React from "react";
import CountdownFunc from "react-countdown";

import "./Countdown.sass";

interface TimeProps {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

const countdownTime = Date.now() + 1000 * 60 * 30;

export const Countdown = () => {
	const renderer = ({ days, hours, minutes, seconds }: TimeProps) => {
		// Render a countdown
		return (
			<>
				<div className="counter">
					<span className="number">{days < 10 ? "0" + days : days}</span>
					<span className="text">days</span>
				</div>
				<div className="counter">
					<span className="number">{hours < 10 ? "0" + hours : hours}</span>
					<span className="text">hours</span>
				</div>
				<div className="counter">
					<span className="number">
						{minutes < 10 ? "0" + minutes : minutes}
					</span>
					<span className="text">minutes</span>
				</div>
				<div className="counter">
					<span className="number">
						{seconds < 10 ? "0" + seconds : seconds}
					</span>
					<span className="text">seconds</span>
				</div>
			</>
		);
	};

	return (
		<div className="countdown">
			<CountdownFunc date={countdownTime} renderer={renderer} />
		</div>
	);
};
