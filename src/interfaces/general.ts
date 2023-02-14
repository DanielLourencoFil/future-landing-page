import { ReactNode } from "react";

export interface WhatProps {
	icon: ReactNode;
	title: string;
	desc: string;
	href: string;
}

export interface SocialMediaIcons {
	name: string;
	icon: React.ReactNode;
	href: string;
}

export interface LatestWorksProps extends LikesProps {
	id: string;
	work: string;
	type: string;
	img: string;
}

export interface TitleProps {
	text: string;
	children?: ReactNode;
}

export interface LikesProps {
	likes: string;
	views: string;
}
