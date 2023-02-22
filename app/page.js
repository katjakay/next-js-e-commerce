import Image from 'next/image';
import background from '../public/background.jpeg';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Ka–linaw Pilates',
  description:
    'Discover the unique blend of Pilates and island culture with our online store. Our certified instructors bring the energy and spirit of the Philippines to each session. Shop now for personalized classes and equipment to help you reach your fitness goals.',
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
