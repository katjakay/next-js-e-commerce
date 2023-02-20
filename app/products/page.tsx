import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './page.module.scss';

export const dynamic = 'force-dynamic';

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
      <h1 className={styles.allProducts_h1}>ALL PRODUCTS</h1>
      <span className={styles.allProducts_layout}>
        {products.map((product) => {
          return (
            <div
              className={styles.allProducts_contentLayout}
              key={`product-${product.id}`}
            >
              <Link
                data-test-id={`product-${product.id}`}
                href={`/products/${product.id}`}
              >
                <Image
                  src={`/images/${product.id}.png`}
                  alt={product.type}
                  width="397"
                  height="529"
                />
                <h3 className={styles.allProducts_h3}>
                  {' '}
                  {product.firstName.toUpperCase()}
                </h3>
                <p className={styles.allProducts_price}>
                  {product.price} € [↗]
                </p>
              </Link>
            </div>
          );
        })}
      </span>
    </div>
  );
}
