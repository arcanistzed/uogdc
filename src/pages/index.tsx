import { faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GetStaticPropsContext } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Head from "next/head";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Mac from "./components/Mac";
import Background from "./components/Background";

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
				<link rel="icon" type="image/webp" href="/images/favicon.webp" />
			</Head>
			<div className="flex h-full flex-col gap-20">
				<Navbar />
				<main className="flex h-full flex-col items-center justify-center gap-8 p-4 text-center">
					<Image src="/images/logo.webp" alt="Logo" height={200} width={200} />
					<nav
						className="mb-auto flex items-center justify-center gap-8 rounded-full bg-black px-8 py-4 opacity-80 shadow-lg transition-opacity duration-500 hover:opacity-100"
						aria-label="Socials"
					>
						<a
							href="https://www.instagram.com/uogamedev/"
							target="_blank"
							rel="noreferrer"
							className="text-w-8 w-8 text-3xl text-gray transition-colors duration-500 hover:text-white"
						>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a
							href="https://discord.gg/sMf6UJdnyw"
							target="_blank"
							rel="noreferrer"
							className="w-8 text-3xl text-gray transition-colors duration-500 hover:text-white"
						>
							<FontAwesomeIcon icon={faDiscord} />
						</a>
						<a
							href="mailto:info@uogdc.com"
							target="_blank"
							rel="noreferrer"
							className="w-8 text-3xl text-gray transition-colors duration-500 hover:text-white"
						>
							<FontAwesomeIcon icon={faEnvelope} />
						</a>
					</nav>
				</main>
			</div>
			<Mac />
			<Background />
		</>
	);
}
