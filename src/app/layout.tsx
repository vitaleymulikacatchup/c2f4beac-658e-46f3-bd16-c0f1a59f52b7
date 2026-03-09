import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Nunito } from "next/font/google";
import { Libre_Baskerville } from "next/font/google";
import { Dancing_Script } from "next/font/google";



export const metadata: Metadata = {
  title: 'BrewHaven | Premium Specialty Coffee & Roasted Blends',
  description: 'Experience artisan specialty coffee at BrewHaven. Ethically sourced, freshly roasted blends. Visit our café or subscribe for home delivery.',
};



const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${dancingScript.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
          }}
        />
        </body>
      </ServiceWrapper>
    </html>
  );
}
