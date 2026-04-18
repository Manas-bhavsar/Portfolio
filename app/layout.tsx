import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { CustomCursor } from "@/components/layout/CustomCursor";

export const metadata: Metadata = {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
    title: "Manas Bhavsar — Frontend Developer",
    description: "Portfolio of Manas Bhavsar — A frontend developer passionate about crafting pixel-perfect, accessible, and performant user interfaces.",
    keywords: ["frontend developer", "react", "next.js", "portfolio", "web developer"],
    authors: [{ name: "Manas Bhavsar" }],
    openGraph: {
        title: "Manas Bhavsar — Frontend Developer",
        description: "Portfolio of Manas Bhavsar — A frontend developer passionate about crafting pixel-perfect, accessible, and performant user interfaces.",
        url: "https://manasbhavsar.com",
        siteName: "Manas Bhavsar Portfolio",
        images: [
            {
                url: "/images/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Manas Bhavsar Portfolio",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Manas Bhavsar — Frontend Developer",
        description: "Portfolio of Manas Bhavsar — A frontend developer passionate about crafting pixel-perfect, accessible, and performant user interfaces.",
        images: ["/images/og-image.jpg"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <CustomCursor />
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
