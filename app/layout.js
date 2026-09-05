import "./globals.css";

export const metadata = {
  title: "Poplar Landscapes | Warrington & North West",
  description: "Landscaping, patios, driveways, fencing and groundworks across Warrington and the North West."
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
