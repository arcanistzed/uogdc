import { faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useState } from "react";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export async function getStaticProps({ locale }: GetStaticPropsContext) {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "en", ["common", "index"])),
		},
	};
}

export default function Home() {
	const { t } = useTranslation("index");

	return (
		<>
			<Head>
				<title>{t("title")}</title>
				<meta name="description" content={t("description")!} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" type="image/png" href="/images/favicon.png" />
			</Head>
			<div className="flex h-full flex-col gap-8">
				<Navbar />
				<main className="flex h-full flex-col items-center justify-center gap-8 p-4 text-center">
					<Image src="/images/logo.png" alt="Logo" height={200} width={200} />
					<h2 className="text-2xl font-bold text-almost-dark">{t("subtitle")}</h2>
					<nav
						className="mb-auto flex items-center justify-center gap-8"
						aria-label="Socials"
					>
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
			</div>
			<Mac />
		</>
	);
}

function Navbar() {
	const { t } = useTranslation("index");
	const { locale, locales } = useRouter();

	return (
		<nav className="flex w-full items-center justify-between p-4">
			<div className="flex items-center gap-2">
				<Image src="/images/logo.png" alt="Logo" height={50} width={50} />
				<h1 className="text-2xl font-bold text-dark-red">{t("title")}</h1>
			</div>

			<div className="m-4 flex items-center gap-2">
				{locales?.map(l => (
					<Link
						href="/"
						locale={l}
						key={l}
						className={`text-xl font-bold transition-colors duration-500 ${
							l === locale ? "text-dark-red" : "text-almost-dark"
						}`}
					>
						{l.toUpperCase()}
					</Link>
				))}
			</div>
		</nav>
	);
}

function Mac() {
	const { t } = useTranslation();

	const [img, setImg] = useState("/images/mac_run.gif");

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === " ") {
				setImg("/images/mac_dead.png");
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
			onClick={() => setImg("/images/mac_dead.png")}
		/>
	);
}
