import "./globals.css";

export const metadata = {
  title: "Kevyn Flores - Portfolio",
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