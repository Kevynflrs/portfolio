import "./globals.css";
import Header from "./Header";
import Footer from "./Footer";

export const metadata = {
  title: "Kevyn Flores - Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header>
          <Header />
        </Header>
        
        
        <main>
            {children}
        </main>
    
        <Footer>
          <Footer />
        </Footer>
      </body>
    </html>
  );
}