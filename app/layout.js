import { Newsreader, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import "./premium-minimal.css";

const display = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap"
});

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap"
});

export const metadata = {
  title: "Poplar Landscapes N.W. Ltd | Landscaping in Warrington",
  description: "Family-run landscapers since 1988. Patios, driveways, fencing, turfing and garden transformations across Warrington and the North West. Marshalls and Tobermore approved."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${display.variable} ${sans.variable}`}>{children}</body>
    </html>
  );
}
