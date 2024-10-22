import React, {ReactElement} from "react";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Define the metadata type
export const metadata: { title: string, description: string } = {
  title: "User Signup Form",
  description: "Example of form data validation",
};

// Define props for the RootLayout component
interface RootLayoutProps {
  children: React.ReactNode; // Use React.ReactNode for children
}

export default function RootLayout({ children }: RootLayoutProps): ReactElement {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
