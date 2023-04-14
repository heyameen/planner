import "@/styles/global.css";

export default function DashboardRootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="w-screen h-screen">{children}</body>
    </html>
  );
}
