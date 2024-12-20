import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const poppins = Poppins({
	weight: ["300", "500", "700"],
	variable: "--poppins",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Mikael's Portfolio",
	description:
		"A portfolio created with Next.js, showcasing my projects and skills.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${poppins.className} antialiased`}
				cz-shortcut-listen="true">
				<Header />
				{children}
				<footer className="border-t">
					<div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
						© 2023 Mikael Bernardes. All rights reserved.
					</div>
				</footer>
			</body>
		</html>
	);
}
