import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar";
import TopLoader from "@/components/ui/TopLoader";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "created by DeviceIR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[var(--color-background)] text-[var(--color-forground)] font-sans relative overflow-y-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* fake loader for reloading the page */}
          <TopLoader />

          <>
            {/* nav fixed top */}
            <Navbar />

            {/* Page content starts below Navbar */}
            <main className="pt-16">{children}</main>
          </>
        </ThemeProvider>
      </body>
    </html>
  );
}
