// app/layout.tsx
import '../src/styles/globals.css';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';  // Importing Footer component
import '../src/styles/fonts.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>  {/* The main content will expand and push the footer down */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
