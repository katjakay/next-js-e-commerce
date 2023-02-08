import Image from 'next/image';
import Link from 'next/link';
import { getProducts } from '../../database/products';
import styles from './page.modules.scss';

export const metadata = {
  title: 'Products',
  description: 'This is my Products page',
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <>
      <h1>ALL PRODUCTS</h1>
      <span className={styles.wrapper}>
        {products.map((product) => {
          return (
            <div key={product.id}>
              <Link href={`/products/${product.id}`}>
                <Image
                  src={`/images/${product.firstName}-${product.id}.png`}
                  alt={product.type}
                  width="368"
                  height="528"
                />
                <h3> {product.firstName.toUpperCase()}</h3>
                <p>{product.price}</p>
              </Link>
            </div>
          );
        })}
      </span>
    </>
  );
}
