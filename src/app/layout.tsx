import "./globals.css";

export const metadata = {
  title: "Mallorca Yacht Charters",
  description: "Mallorca Yacht Charters website"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
