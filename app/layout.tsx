import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/layout/SmoothScroll";

export const metadata: Metadata = {
    title: "Manas Bhavsar — Frontend Developer",
    description: "Portfolio of Manas Bhavsar — A frontend developer passionate about crafting pixel-perfect, accessible, and performant user interfaces.",
    keywords: ["frontend developer", "react", "next.js", "portfolio", "web developer"],
    authors: [{ name: "Manas Bhavsar" }],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <SmoothScroll>
                    {children}
                </SmoothScroll>
            </body>
        </html>
    );
}
