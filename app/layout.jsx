import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Feria Doctor Mora 2025",
  keywords: ["Feria Doctor Mora", "Eventos 2025", "Música en vivo", "Cultura"],
  description: "Descubre los eventos de la Feria Doctor Mora 2025, con una variedad de artistas y actividades culturales del 20 al 29 de junio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${inter.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
