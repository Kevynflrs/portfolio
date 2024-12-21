import "./globals.css";
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
        <header>
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
