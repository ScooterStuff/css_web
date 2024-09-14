// app/layout.tsx
import '../src/styles/globals.css';
import NavBar from '../src/components/NavBar';
import Footer from '../src/components/Footer';  // Importing Footer component
import '../src/styles/fonts.css';
import styles from '../src/styles/Layout.module.css';
import MouseTrail from '../src/components/MouseTrail';  // Importing MouseTrail

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MouseTrail />  {/* Adding the MouseTrail component */}
        <NavBar />
        <main>{children}</main>  {/* The main content will expand and push the footer down */}
        <Footer />
      </body>
    </html>
  );
}
