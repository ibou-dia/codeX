import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Déterminer le préfixe de chemin en fonction de l'environnement
const basePath = process.env.NODE_ENV === 'production' ? '/CodeX' : '';

export const metadata: Metadata = {
  title: "Equipe CodeX",
  description: "Présentation de notre équipe et de notre projet Senelec Voice & Feedback Insight, une solution intelligente d'analyse et gestion des retours clients pour améliorer la qualité de service de Senelec.",
  icons: {
    icon: `${basePath}/logo-codex.jpg`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Ajout de liens favicon alternatifs pour assurer la compatibilité */}
        <link rel="icon" href={`${basePath}/logo-codex.jpg`} />
        <link rel="apple-touch-icon" href={`${basePath}/logo-codex.jpg`} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
