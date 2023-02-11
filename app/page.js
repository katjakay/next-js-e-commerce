import Image from 'next/image';
import background from '../public/background.jpeg';
import styles from './page.module.scss';

export const metadata = {
  title: 'Home',
  description: 'Ka-linaw inspired by the island of the Philippines.',
  icons: {
    shortcut: '/icon.svg',
  },
};

export default function HomePage() {
  return (
    <main>
      <div>
        <div className={styles.background_image}>
          <Image src={background} alt="background" />
        </div>
        <div className={styles.banner_box}>
          <h1>NEW: KA-LINAW PILATES</h1>
          <h2 className={styles.banner_heading}>
            <div>
              Set the mood and get ready for an unique experience of
              peacefulness and self-care with our special Pilates classes. Feel
              the island spirit within your practise.
            </div>
          </h2>
          <a href="/products" className={styles.banner_button}>
            discover all products{' '}
          </a>
        </div>
      </div>
    </main>
  );
}
