import { useForm, ValidationError } from "@formspree/react";

import { useState, useEffect } from "react";
import { Title } from "../../";
import "./Contact.sass";

interface FormInfoProps {
	name: string;
	email: string;
	subject: string;
	message: string;
}

export const Contact = () => {
	const [formInfo, setFormInfo] = useState<FormInfoProps>({
		name: "",
		email: "",
		subject: "",
		message: "",
	});
	const [show, setShow] = useState<boolean>(false);
	const [state, handleSubmit] = useForm("xzboorzb");

	const handleFormInfo = (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>
	) => {
		setFormInfo({ ...formInfo, [e.target.id]: e.target.value });
	};
	const handleSubmitBtn = () => {
		setTimeout(() => {
			if (state.succeeded) {
				setFormInfo({ name: "", email: "", subject: "", message: "" });
				setShow(true);
			}
		}, 1000);
		setTimeout(() => {
			setShow(false);
		}, 10000);
	};
	return (
		<div className="main-container">
			<section className="contact center">
				<Title text={"Contact Us Now"} />
				<p className="desc-section">
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
					eiusmod tempor incididunt ut labore et sint.
				</p>
				<form className="contact-form" onSubmit={handleSubmit}>
					<input
						name="name"
						className="form-input"
						type="text"
						id="name"
						onChange={(e) => handleFormInfo(e)}
						placeholder="Name"
						value={formInfo.name}
					/>
					<input
						name="email"
						className="form-input"
						type="email"
						id="email"
						onChange={(e) => handleFormInfo(e)}
						placeholder="Email"
						value={formInfo.email}
					/>
					<input
						name="subject"
						className="form-input"
						type="text"
						id="subject"
						onChange={(e) => handleFormInfo(e)}
						placeholder="Subject"
						value={formInfo.subject}
					/>
					<textarea
						name="message"
						className="textArea-input"
						id="message"
						onChange={(e) => handleFormInfo(e)}
						placeholder="Your Message"
						value={formInfo.message}
						rows={6}
					/>
					{show && (
						<span className="contact-message">
							Your email was sent. We are going to answer it soon!
						</span>
					)}
					<button
						className="contact-btn"
						onClick={() => handleSubmitBtn()}
						disabled={
							state.submitting ||
							formInfo.name.length < 1 ||
							formInfo.email.length < 1 ||
							formInfo.subject.length < 1 ||
							formInfo.message.length < 1
						}
					>
						Contact Now
					</button>
				</form>
			</section>
		</div>
	);
};
