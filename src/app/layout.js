import { Noto_Sans } from "next/font/google";
import "./globals.css";

import Head from "next/head";

const notoSans = Noto_Sans({
  subsets: ["latin", "cyrillic"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata = {
  title: "Игорь Слабых — Юрист в США",
  description: "Комплексная юридическая помощь и консультации в США",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${notoSans.variable} font-sans antialiased`}>
        <Head>
          {/* SEO: базовые мета-теги */}
          <meta name="keywords" content="..." />
          <meta name="author" content="Игорь Слабых" />
          <meta name="robots" content="index, follow" />
          <link rel="canonical" href="https://lawyerwebsite-psi.vercel.app/" />

          {/* Open Graph */}
          <meta property="og:site_name" content="Игорь Слабых — Юрист в США" />
          <meta property="og:title" content="Игорь Слабых — Юрист в США" />
          <meta
            property="og:description"
            content="Комплексная юридическая помощь, консультации и сопровождение в США."
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://lawyerwebsite-psi.vercel.app/"
          />
          <meta
            property="og:image"
            content="https://lawyerwebsite-psi.vercel.app/og-image.jpg"
          />
          <meta
            property="og:image:alt"
            content="Игорь Слабых — Юридическая помощь в США"
          />
          <meta property="og:locale" content="ru_RU" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Игорь Слабых — Юрист в США" />
          <meta
            name="twitter:description"
            content="Комплексная юридическая помощь и консультации в США."
          />
          <meta
            name="twitter:image"
            content="https://lawyerwebsite-psi.vercel.app/og-image.jpg"
          />

          {/* Mobile/Browser UI */}
          <meta name="theme-color" content="#040e17" />
        </Head>

        {children}
      </body>
    </html>
  );
}
