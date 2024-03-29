import type { Metadata } from 'next';
import { IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import { Header } from '@/layout/Header';
import { Footer } from '@/layout/Footer';

const IbmPlexMono = IBM_Plex_Mono({
	subsets: ['cyrillic'],
	weight: ['100', '200', '300', '400', '500', '600', '700']
});

export const metadata: Metadata = {
	title: 'Mikael Bernardes',
	description: 'Mikael`s Blog and Portfolio'
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body 
				className={`
					${IbmPlexMono.className}
					bg-B100 sm:px-16 md:px-28 lg:px-52 xl:px-60 2xl:px-72
				`}
			>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
