import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MAC Partners | Grow Your Insurance Business With Proven Producers",
  description:
    "Work directly with Tyler and Jessica — top producers who built their agency from the ground up. Get the same tools, strategies, and mentorship they use every day. All free.",
  keywords: [
    "insurance agent",
    "Medicare agent",
    "insurance team",
    "insurance mentorship",
    "MAC Partners",
    "insurance leads",
    "insurance CRM",
    "senior insurance",
    "Integrity Marketing",
  ],
  openGraph: {
    title: "MAC Partners | Grow Your Insurance Business With Proven Producers",
    description:
      "Work directly with Tyler and Jessica — top producers who built their agency from the ground up. Get the same tools, strategies, and mentorship they use every day.",
    url: "https://joinmacpartners.com",
    siteName: "MAC Partners",
    type: "website",
    images: [
      {
        url: "/tyler-jessica.jpg",
        width: 1200,
        height: 630,
        alt: "Tyler and Jessica — MAC Partners",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MAC Partners | Grow Your Insurance Business With Proven Producers",
    description:
      "Work directly with Tyler and Jessica — top producers who built their agency from the ground up.",
    images: ["/tyler-jessica.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  metadataBase: new URL("https://joinmacpartners.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        {GA_ID && (
          <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        )}
      </head>
      <body className={`${outfit.variable} ${dmSans.variable} antialiased`}>
        {children}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('consent','default',{analytics_storage:'granted'});gtag('config','${GA_ID}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
