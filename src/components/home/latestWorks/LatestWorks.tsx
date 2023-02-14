import { useState } from "react";
import "./LatestWorks.sass";
import { Carrousel, LatestWorkCard, Title } from "../..";

import { LatestWorksProps } from "../../../interfaces/general";
import { latestWorksImgs } from "../../../assets/images";
export interface ItemProps {
	index: number;
	show: boolean;
}
const latestWorks: LatestWorksProps[] = [
	{
		id: "1",
		work: "MOBILE MOCKUP DESIGN",
		type: "Design",
		img: latestWorksImgs[0],
		likes: "17",
		views: "30",
	},
	{
		id: "2",
		work: "BEST LOGO DESIGN",
		type: "Ilustration",
		img: latestWorksImgs[1],
		likes: "31",
		views: "40",
	},
	{
		id: "3",
		work: "WEB DEVELOPMENT",
		type: "Web Design",
		img: latestWorksImgs[2],
		likes: "19",
		views: "35",
	},
	{
		id: "4",
		work: "AWESOME CAKE SKETCH",
		type: "Sketch",
		img: latestWorksImgs[3],
		likes: "37",
		views: "50",
	},
	{
		id: "5",
		work: "WEB DEVELOPMENT",
		type: "Web, Print",
		img: latestWorksImgs[4],
		likes: "51",
		views: "60",
	},
	{
		id: "6",
		work: "SKETH MODERN BRAND",
		type: "Branding, Print",
		img: latestWorksImgs[5],
		likes: "76",
		views: "80",
	},
];
export const LatestWorks = () => {
	const [item, setItem] = useState<ItemProps>({
		index: 0,
		show: false,
	});

	return (
		<div className="main-container latest-works-main-container">
			<section className="latest-works center">
				<Title text={"Latest Work"}>
					<h2 className="secondary-title">Visit Our</h2>
				</Title>
				<div className="cards-container">
					{latestWorks.map((item, index) => {
						return (
							<LatestWorkCard
								key={item.id}
								id={item.id}
								img={item.img}
								type={item.type}
								work={item.work}
								likes={item.likes}
								views={item.views}
								index={index}
								cb={setItem}
							/>
						);
					})}
					<Carrousel info={latestWorks} item={item} cb={setItem} />
				</div>
			</section>
		</div>
	);
};
