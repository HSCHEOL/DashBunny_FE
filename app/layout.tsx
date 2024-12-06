import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navigation from "@/components/navigation";
import TanStackProvider from "./providers/TanStackProvider";
import TokenCheck from "@/components/tokenCheck";

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
});
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${pretendard.variable} antialiased flex`}>
        <TanStackProvider>
          <TokenCheck />
          <Navigation />
          {children}
        </TanStackProvider>
      </body>
    </html>
  );
}
