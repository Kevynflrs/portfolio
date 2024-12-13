import "./globals.css";

export const metadata = {
  title: "Flores Kevyn - Portfolio",
  description: "Portfolio de Flores Kevyn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
      </body>
    </html>
  );
}
