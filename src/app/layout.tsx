import type { Metadata } from "next";
import { Outfit, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

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
  openGraph: {
    title: "MAC Partners | Grow Your Insurance Business With Proven Producers",
    description:
      "Work directly with Tyler and Jessica — top producers who built their agency from the ground up. Get the same tools, strategies, and mentorship they use every day.",
    url: "https://joinmacpartners.com",
    siteName: "MAC Partners",
    type: "website",
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
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-3RSQ8D6BG4"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('consent', 'default', {
              analytics_storage: 'granted'
            });
            gtag('config', 'G-3RSQ8D6BG4');
          `}
        </Script>
      </head>
      <body className={`${outfit.variable} ${dmSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
