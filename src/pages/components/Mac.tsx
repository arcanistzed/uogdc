import { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";

import Image from "next/image";

const Mac = () => {
	const { t } = useTranslation();

	const [img, setImg] = useState("/images/mac_run.gif");

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === " ") {
				setImg("/images/mac_dead.webp");
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [img]);

	return (
		<Image
			src={img}
			alt={img === "/images/mac_run.gif" ? t("mac_run") : t("mac_dead")!}
			width={500}
			height={500}
			className="absolute bottom-0 w-20 animate-move-horizontal transition-all duration-1000 ease-[cubic-bezier(0.3,-1,0.45,0.4)]"
			style={{
				animationPlayState: "/images/mac_run.gif" === img ? "running" : "paused",
				translate: "/images/mac_run.gif" === img ? "0" : "0 100%",
			}}
			onClick={() => setImg("/images/mac_dead.webp")}
		/>
	);
};

export default Mac;
