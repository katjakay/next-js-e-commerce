import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './page.modules.scss';

export const metadata = {
  title: 'Products',
  description:
    'Shop our online store for a comprehensive Pilates experience. Our certified instructors provide personalized classes and equipment to help you reach your fitness goals. Start your journey to a stronger, healthier you today.',
  icons: {
    shortcut: '/icon.svg',
  },
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>ALL PRODUCTS</h1>
      <span>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link href={`/products/${product.id}`}>
                <Image
                  className={styles.imageLayout}
                  src={`/images/${product.id}.png`}
                  alt={product.type}
                  width="397"
                  height="529"
                />
                <h3> {product.firstName.toUpperCase()}</h3>
                <p>{product.price} [↗]</p>
              </Link>
            </div>
          );
        })}
      </span>
    </div>
  );
}
