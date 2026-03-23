import { Inter } from "next/font/google"
import "./globals.css"
import TopBar from "@/components/layout/TopBar"
import BottomNav from "@/components/layout/BottomNav"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata = {
  title: "merci. — Civic Karma for Your District",
  description: "Track your civic actions, earn karma, and improve your district's SDG scores.",
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F9FAFB]">
        <TopBar />
        <div className="flex-1">
          {children}
        </div>
        <BottomNav />
      </body>
    </html>
  )
}
