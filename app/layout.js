import './global.scss';
import Link from 'next/link';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />

      <body>
        <header className={styles.header}>
          <nav>
            <div>
              <Link href="/">Home</Link>
              <Link href="/singleproduct">Single Products</Link>
              <Link href="/cart">Cart</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>ADD FOOTER HERE LATER</footer>
      </body>
    </html>
  );
}
