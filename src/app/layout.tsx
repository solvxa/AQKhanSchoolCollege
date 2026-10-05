import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", weight: ["600", "700"] });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta", weight: ["400", "500", "600", "700", "800"] });

export const metadata: Metadata = {
  title: "Dr. A.Q. Khan School & College | Safari-1 Campus, Bahria Town Islamabad",
  description: "Official Portal & Landing Page of Dr. A.Q. Khan School & College Safari-1, Bahria Town Islamabad. Affiliated with FBISE Islamabad (Code: 0741/2012). Offering Pre-School, Primary, Girls Wing, Boys Wing, FSc Pre-Medical & Pre-Engineering, ICS, I.Com, and Inter-Tech under the Federal Board.",
  icons: {
    icon: "/Logo/logo.png",
    shortcut: "/Logo/logo.png",
    apple: "/Logo/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${playfair.variable} ${jakarta.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
      </head>
      <body
        suppressHydrationWarning
        className="bg-background font-body-md text-on-surface antialiased selection:bg-secondary-container selection:text-on-secondary-container"
      >
        {children}
      </body>
    </html>
  );
}
