import './global.scss';
import Image from 'next/image';
import Link from 'next/link';
import star from '../public/star.png';
import styles from './layout.module.scss';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />

      <body>
        <header className={styles.header}>
          <nav>
            <a>
              <Image src={star} alt="star" width="36" height="36" />
            </a>
            <a href="/" className={styles.logo}>
              KA-LINAW Pilates
            </a>

            <div>
              <Link href="/">Home</Link>
              <Link href="/products">Products</Link>
              <Link href="/cart">Cart (0)</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className={styles.footer}>
          <div>
            <ul>
              <li href="/">Home</li>
              <li href="/products">Products</li>
              <li href="/">About Kalinaw</li>
            </ul>
          </div>
          <div>
            <ul>
              <li href="/">Privacy Policy</li>
              <li href="/">Cookies</li>
              <li href="/">Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <ul>
              <li href="/">Contact</li>
              <li href="/">+43 677 637 3648</li>
              <li href="/">pilates@kalinaw.com</li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
