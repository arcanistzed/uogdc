import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
	const { t } = useTranslation("index");
	const { locale, locales } = useRouter();

	return (
		<nav className="flex w-full items-center justify-between p-4">
			<h1 className="m-4 text-2xl font-bold">{t("title")}</h1>

			<div className="m-4 flex items-center gap-2">
				{locales?.map(l => (
					// underline active locale
					<Link
						href="/"
						locale={l}
						key={l}
						className={`relative text-xl font-bold transition-colors duration-500 after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-full after:bg-red after:opacity-0 after:transition-all after:duration-500 after:content-[''] ${
							locale === l
								? "after:translate-y-[-2px] after:opacity-100 "
								: "text-gray"
						}`}
					>
						{l.toUpperCase()}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
