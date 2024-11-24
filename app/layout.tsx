import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import GlobalNavBar from "@/components/common/GlobalNavBar"
import ReactQueryConfigContext from "@/context/ReactQueryConfigContext"

const pretendard = localFont({
  src: "./fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
})
export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body
        className={`${pretendard.variable} antialiased mx-auto w-[400px] min-h-screen overflow-y-auto `}
      >
        <ReactQueryConfigContext>{children}</ReactQueryConfigContext>
        <GlobalNavBar />
      </body>
    </html>
  )
}
