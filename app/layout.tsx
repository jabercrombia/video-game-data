import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "./components/app-sidebar"
import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from "@vercel/analytics/react"

import "./globals.css";

export const metadata = {
  title: `jabercrombia`,
  description: `Next.js dashboard powered by FastAPI for sales data visualization. Fetch, analyze, and display real-time sales insights with a modern full-stack setup!`,
  keywords: [
    "Next.js FastAPI dashboard",
    "FastAPI sales data API",
    "Sales data visualization Next.js",
    "Next.js analytics dashboard",
    "FastAPI backend for data visualization",
    "Full-stack sales analytics",
    "Next.js fetch API from FastAPI",
    "FastAPI sales insights",
    "Interactive sales charts Next.js",
    "Build a sales dashboard with Next.js"
  ]
  ,
  authors: [{ name: 'Justin Abercrombia', url: 'http://www.github.com/jabercrombia' }],
  creator: 'Justin Abercrombia',
  openGraph: {
    images: '/thumbnail.png',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <GoogleAnalytics gaId={process.env.GOOGLE_TRACKIND_ID || ''} />
      <body>
        <SidebarProvider>
          <AppSidebar />
          <main>
            <SidebarTrigger />
            {children}
          </main>
        </SidebarProvider>
        <Analytics />
      </body>
    </html>
  );
}
