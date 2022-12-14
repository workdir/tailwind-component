import "./globals.css";
import { DM_Sans } from "@next/font/google";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["500", "700"],
    style: ["normal"],
    variable: "--font-dm-sans",
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head />
            <body className={`${dmSans.variable} font-sans`}>{children}</body>
        </html>
    );
}
