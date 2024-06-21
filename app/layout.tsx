import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import {Toaster} from "@/components/ui/toaster";
import {ThemeProvider} from "@/components/providers/theme-provider";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "Admin Dashboard",
    description: "Admin Dashboard demo ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={true} storageKey="dashboard-theme">
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
