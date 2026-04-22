import "./globals.css";

export const metadata = {
  title: "M-Architect Pvt. Ltd — Solution Providers",
  description:
    "Pakistan-based Design & Build consultancy delivering integrated architectural, interior, and construction solutions. Established 2019.",
  keywords: "architecture, interior design, design build, Pakistan, Saudi Arabia, construction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-cream text-wood-950 font-body antialiased">{children}</body>
    </html>
  );
}
