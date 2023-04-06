import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { GetStaticPropsContext } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", ["common", "home"])),
		},
	};
}

export default function Home() {
	const { t } = useTranslation();

	const [img, setImg] = useState("/images/mac_run.gif");

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			console.log(event.key)
			if (event.key === " ") {
				setImg(
					"/images/mac_run.gif" !== img ? "/images/mac_run.gif" : "/images/mac_dead.png",
				);
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [img]);

	return (
		<>
			<Head>
				<title>{t("title")}</title>
				<meta name="description" content={t("description")!} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" type="image/png" href="/images/favicon.png" />
			</Head>
			<main className="flex h-full flex-col items-center justify-center gap-8 p-4 text-center">
				<Image src="/images/logo.png" alt="Logo" height={200} width={200} />
				<h1 className="text-8xl font-bold text-dark">{t("title")}</h1>
				<h2 className="text-2xl font-bold text-almost-dark">{t("subtitle")}</h2>
				<nav className="flex items-center justify-center gap-8" aria-label="Socials">
					<a
						href="https://www.instagram.com/uogamedev/"
						target="_blank"
						rel="noreferrer"
						className="w-8 text-3xl text-dark-red transition-colors duration-500 hover:text-light-red"
					>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a
						href="https://discord.gg/sMf6UJdnyw"
						target="_blank"
						rel="noreferrer"
						className="w-8 text-3xl text-dark-red transition-colors duration-500 hover:text-light-red"
					>
						<FontAwesomeIcon icon={faDiscord} />
					</a>
					<a
						href="mailto:info@uogdc.com"
						target="_blank"
						rel="noreferrer"
						className="w-8 text-3xl text-dark-red transition-colors duration-500 hover:text-light-red"
					>
						<FontAwesomeIcon icon={faEnvelope} />
					</a>
				</nav>
			</main>
			<Image
				src={img}
				alt="Mac running"
				width={500}
				height={500}
				className="absolute bottom-0 w-20 animate-move-horizontal"
				style={{
					animationPlayState: img !== "/images/mac_run.gif" ? "paused" : "running",
				}}
				onClick={() => {
					setImg(
						"/images/mac_run.gif" !== img
							? "/images/mac_run.gif"
							: "/images/mac_dead.png",
					);
				}}
			/>
		</>
	);
}
