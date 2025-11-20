import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const acidGrotesk = localFont({
  src: [
    {
      path: '../public/fonts/FFF-AcidGrotesk-UltraLight-TRIAL.otf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/FFF-AcidGrotesk-UltraLight-Italic-TRIAL.otf',
      weight: '100',
      style: 'italic',
    },
    {
      path: '../public/fonts/FFF-AcidGrotesk-ExtraLight-TRIAL.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/FFF-AcidGrotesk-ExtraLight-Italic-TRIAL.otf',
      weight: '200',
      style: 'italic',
    },
    {
      path: '../public/fonts/FFF-AcidGrotesk-Light-TRIAL.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/FFF-AcidGrotesk-Light-Italic-TRIAL.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../public/fonts/FFF-AcidGrotesk-Normal-TRIAL.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/FFF-AcidGrotesk-Norma-Italic-TRIAL.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/FFF-AcidGrotesk-Regular-TRIAL.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/FFF-AcidGrotesk-Regular-Italic-TRIAL.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/FFF-AcidGrotesk-Medium-TRIAL.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/FFF-AcidGrotesk-Medium-Italic-TRIAL.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/FFF-AcidGrotesk-Bold-TRIAL.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/FFF-AcidGrotesk-Bold-Italic-TRIAL.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/fonts/FFF-AcidGrotesk-ExtraBold-TRIAL.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/FFF-AcidGrotesk-ExtraBold-Italic-TRIAL.otf',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../public/fonts/FFF-AcidGrotesk-Black-TRIAL.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/FFF-AcidGrotesk-Black-Italic-TRIAL.otf',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-acid-grotesk',
  display: 'swap',
});

const geistMono = localFont({
  src: [
    {
      path: '../public/fonts/GeistMono-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeistMono-UltraLight.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeistMono-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeistMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeistMono-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeistMono-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeistMono-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeistMono-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/fonts/GeistMono-UltraBlack.ttf',
      weight: '950',
      style: 'normal',
    },
  ],
  variable: '--font-geist-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Maya Lekhi",
  description: "Personal portfolio of Maya Lekhi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${acidGrotesk.variable} ${geistMono.variable} dark`}>
      <body className={`${acidGrotesk.className} bg-black text-white`}>{children}</body>
    </html>
  );
}
