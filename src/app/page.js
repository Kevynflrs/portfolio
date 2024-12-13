import "./globals.css";
import Header from "./Template/Header";
import Footer from "./Template/Footer";
import Main from "./Template/Main";

export default function Home() {
  return (
    <body>
      <header className="fixed top-0">
        <Header />
      </header>
      <main>
        <Main />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
  );
}
