import Header from "./template/Header";
import Footer from "./template/Footer";
import Main from "./template/Main";

export default function Home() {
  return (
    <body>
      <header>
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
