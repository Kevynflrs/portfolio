import "./globals.css";
import Image from 'next/image';
import Head from "./Header.js";
import Footer from "./Footer.js";
import Main from "./Main.js";

export const metadata = {
  title: "Flores Kevyn - Portfolio",
  description: "Portfolio de Flores Kevyn",
};

export default function RootLayout() {
  return (
    <html lang="fr">
      <body>
        <header className="fixed top-0 left-0 right-0">
          <Head />
        </header>
        <main>
          <Main />
        </main> 
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
