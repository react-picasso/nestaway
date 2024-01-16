import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import ClientOnly from "./components/ClientOnly";
import RegisterModal from "./components/RegisterModal";
import ToasterProvider from "./providers/ToastProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Nestaway",
	description: "App similar to Airbnb",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
            <head>
                <title>
                    Nestaway - Your Home Away From Home
                </title>
                <link rel="icon" href="/favicon.svg" />
            </head>
			<body className={inter.className}>
                <ClientOnly>
                    <ToasterProvider />
                    <RegisterModal />
                    <Navbar />
                </ClientOnly>
				{children}
			</body>
		</html>
	);
}
