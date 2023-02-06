import Image from 'next/image';
import background from '../public/background.png';
import styles from './page.module.scss';

export default function HomePage() {
  return (
    <main>
      <div>
        <div className={styles.background_image}>
          <Image src={background} alt="background" fill />
        </div>
        <div className={styles.banner_box}>
          <h2 className={styles.banner_heading}>
            <div>
              Set the mood and get ready for an unique experience of
              peacefulness and self-care with our special Pilates classes. Feel
              the island spirit within your practise.
            </div>
          </h2>
          <button href="/products" className={styles.banner_button}>
            Discover products
          </button>
        </div>
      </div>
    </main>
  );
}
